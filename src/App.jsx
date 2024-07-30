import React from "react";
// import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
import ScrollToAnchor from "./components/util/scroll";
import { Calendly } from "./components/calendly";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ScrollToAnchor />
        {/* <Navigation /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/contact" element={}></Route> */}
          <Route
            exact
            path="/book"
            element={
              <Calendly
                url={
                  "https://calendly.com/nathanblee/rei?background_color=1a1a1a&text_color=ffffff&primary_color=f48948"
                }
                minWidth={"400px"}
                height={"100vh"}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
