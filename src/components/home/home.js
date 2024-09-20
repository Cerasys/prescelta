import React, { useEffect, useState } from "react";
// import { Features } from "./components/features";
import { About } from "../about";
// import { Services } from "../services";
// import { Gallery } from "./components/gallery";
import { Testimonials } from "../testimonials/testimonials";
// import { Team } from "../Team/Team";
import JsonData from "../../data/data.json";
import { Hero } from "../hero";
import { Info } from "../info";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <React.Fragment>
      <Hero />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Info data={landingPageData.Contact} />
    </React.Fragment>
  );
};

export default Home;
