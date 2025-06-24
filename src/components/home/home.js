import React from "react";

import { Hero } from "../hero";
import MarketingHighlights from "../marketingHighlights";

const Home = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    <React.Fragment>
      <Hero />
      {/* <Features data={landingPageData.Features} /> */}
      <MarketingHighlights />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Team data={landingPageData.Team} /> */}
    </React.Fragment>
  );
};

export default Home;
