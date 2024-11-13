import React from "react";
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
import { onboardingSteps } from "./components/onboarding/onboardingConfig";
import OnboardingStep from "./components/onboarding/onboardingPage";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const location = useLocation();

  // Check if the current path is part of the onboarding routes
  const isOnboardingPath = location.pathname.startsWith("/smm-onboarding");

  return (
    <div>
      <ScrollToAnchor />
      {!isOnboardingPath && <Navigation />}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route
          exact
          path="/book"
          element={
            // <Calendly
            //   url={
            //     "https://calendly.com/nathanblee/onboarding?background_color=1a1a1a&text_color=ffffff&primary_color=f48948"
            //   }
            //   minWidth={"400px"}
            //   height={"100vh"}
            //   margin-top={"7vh"}
            // />
            <Contact />
          }
        ></Route>
        <Route
          path="/smm-onboarding/*"
          element={<Navigate to="/smm-onboarding/step-1" replace />}
        />
        {onboardingSteps.map((step, index) => (
          <Route
            key={index}
            path={step.path}
            element={
              <OnboardingStep
                header={step.header}
                vimeoUrl={step.vimeoUrl}
                description={step.description}
                buttonText={step.buttonText}
                buttonLink={step.buttonLink}
                extraButtonText={step.extraButtonText}
                extraButtonLink={step.extraButtonLink}
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
