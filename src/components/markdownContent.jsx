// src/components/MarkdownContent.jsx
import React, { useState, useEffect } from "react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

function MarkdownContent({ markdownPath }) {
  const [contentHtml, setContentHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAndProcessMarkdown() {
      try {
        setLoading(true);
        const response = await fetch(markdownPath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdownText = await response.text();

        console.log("Fetched raw markdownText:", markdownText);

        const processedContent = await remark()
          .use(remarkParse)
          .use(remarkGfm) // Apply GFM features *before* converting to HTML AST
          .use(remarkRehype, {
            allowDangerousHtml: true, // Allow raw HTML tags to pass through
            // Custom handler for image nodes if remark-rehype needs more explicit instruction
            // This part ensures images are correctly translated to HAST <img> elements
            // before rehypeRaw processes the surrounding HTML.
            handlers: {
              image: (h, node) => {
                // This is a default handler for images, ensuring they are rendered as <img>
                // We also ensure any existing data.hProperties (like className from custom plugins) are passed
                const props =
                  node.data && node.data.hProperties
                    ? { ...node.data.hProperties }
                    : {};
                return h(node, "img", {
                  ...props,
                  src: node.url,
                  alt: node.alt || "",
                });
              },
            },
          })
          .use(rehypeRaw) // Processes the raw HTML *after* remark-rehype converts Markdown
          // to HTML nodes, allowing for parsing of embedded HTML elements.
          .use(rehypeStringify)
          .process(markdownText);

        const generatedHtml = processedContent.toString();
        console.log("Generated HTML from remark/rehype:", generatedHtml);

        setContentHtml(generatedHtml);
      } catch (err) {
        console.error("Error processing Markdown:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAndProcessMarkdown();
  }, [markdownPath]);

  if (loading) return <h1>We're buffering 🤪...</h1>;
  if (error) return <p>Error loading content: {error.message}</p>;

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}

export default MarkdownContent;
