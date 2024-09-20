import React from "react";
// import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
import ScrollToAnchor from "./components/util/scroll";
import { Calendly } from "./components/calendly";
import { Privacy } from "./components/privacy";
// import { Audit } from "./components/audit";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import { Terms } from "./components/terms";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ScrollToAnchor />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/book"
            element={
              <Calendly
                url={
                  "https://calendly.com/nathanblee/onboarding?background_color=1a1a1a&text_color=ffffff&primary_color=f48948"
                }
                minWidth={"400px"}
                height={"100vh"}
                margin-top={"7vh"}
              />
            }
          ></Route>{" "}
          <Route exact path="/privacy" element={<Privacy />}></Route>
          <Route exact path="/terms" element={<Terms />}></Route>
          {/* <Route exact path="/free-audit" element={<Audit />}></Route> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
