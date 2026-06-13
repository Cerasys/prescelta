import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef("");
  const navbarHeight = 110;

  useEffect(() => {
    // Scenario A: There IS a hash in the URL (e.g., /#page-top)
    if (location.hash.length > 0) {
      lastHash.current = location.hash.slice(1);

      if (document.getElementById(lastHash.current) != null) {
        setTimeout(() => {
          const element = document.getElementById(lastHash.current);
          if (element != null) {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }
    // Scenario B: Standard route change with NO hash (e.g., /about)
    else {
      lastHash.current = ""; // Reset the ref tracking
      window.scrollTo(0, 0); // Instantly snap to the top of the new page
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
