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
// import { Calendly } from "./components/calendly";
import { Privacy } from "./components/privacy";
// import { Audit } from "./components/audit";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import { Terms } from "./components/terms";
import { smmOnboardingSteps } from "./components/onboarding/smmOnboardingConfig";
import OnboardingStep from "./components/onboarding/onboardingPage";
import { adOnboardingSteps } from "./components/onboarding/adOnboardingConfig";

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
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/book" element={<Contact />}></Route>
        <Route
          path="/smm-onboarding/*"
          element={<Navigate to="/smm-onboarding/step-1" replace />}
        />
        <Route
          path="/laf-onboarding/*"
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

        {adOnboardingSteps.map((step, index) => (
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
        {/* <Route exact path="/free-audit" element={<Audit />}></Route> */}
      </Routes>
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
