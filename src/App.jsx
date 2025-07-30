import React, { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import Home from "./components/home/home";
import ScrollToAnchor from "./components/util/scroll";
import { Privacy } from "./components/privacy";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import { Terms } from "./components/terms";
import { smmOnboardingSteps } from "./components/onboarding/smmOnboardingConfig";
import OnboardingStep from "./components/onboarding/onboardingPage";
import { About } from "./components/about";
import { FAQ } from "./components/faq";
import { Resources } from "./components/resources";
import { Creators } from "./components/creators";
import { Brands } from "./components/brands";
import TestimonialsPage from "./components/testimonials/testimonialsPage";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the current site is prescelta.com
    if (window.location.hostname === "prescelta.com") {
      // Redirect to hoshinomedia.com
      window.location.href = "https://hoshinomedia.com";
    }
  }, []);

  // Check if the current path is part of the onboarding routes
  const isOnboardingPath =
    location.pathname.startsWith("/smm-onboarding") ||
    location.pathname.startsWith("/laf-onboarding");

  return (
    <div>
      <ScrollToAnchor />
      {!isOnboardingPath && <Navigation />}
      <div className="page-wrapper">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/creators" element={<Creators />}></Route>
          <Route exact path="/brands" element={<Brands />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/faq" element={<FAQ />}></Route>
          <Route
            exact
            path="/testimonials"
            element={<TestimonialsPage />}
          ></Route>
          <Route exact path="/services" element={<FAQ />}></Route>
          <Route exact path="/resources" element={<Resources />}></Route>
          <Route
            path="/onboarding/*"
            element={<Navigate to="/laf-onboarding/step-1" replace />}
          />
          {smmOnboardingSteps.map((step, index) => (
            <Route
              key={index}
              path={step.path}
              element={
                <OnboardingStep
                  header={step.header}
                  vimeoUrl={step.vimeoUrl}
                  description={step.description}
                  secondaryHeader={step.secondaryHeader}
                  headlineCalloutText={step.headlineCalloutText}
                  headlineLink={step.headlineLink}
                  buttonText={step.buttonText}
                  buttonLink={step.buttonLink}
                />
              }
            />
          ))}

          <Route exact path="/privacy" element={<Privacy />}></Route>
          <Route exact path="/terms" element={<Terms />}></Route>
        </Routes>
      </div>
      {!isOnboardingPath && <Footer />}
    </div>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
