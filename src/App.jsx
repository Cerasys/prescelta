import React, { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import Home from "./components/home/home";
import ScrollToAnchor from "./components/util/scroll";
import { Privacy } from "./components/privacy";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Terms } from "./components/terms";
import { smmOnboardingSteps } from "./components/onboarding/smmOnboardingConfig";
import OnboardingStep from "./components/onboarding/onboardingPage";
import { About } from "./components/about";
import { FAQ } from "./components/faq";
import { Resources } from "./components/resources";
// import { Creators } from "./components/creators";
import { Brands } from "./components/brands";
import TestimonialsPage from "./components/testimonials/testimonialsPage";
import LeadMagnetHero from "./components/lead magnet/leadMagnetHero";
import { SuccessPage } from "./components/lead magnet/successPage";
import { NotFound } from "./components/404";
import { leadMagnetsData } from "./components/lead magnet/leadMagnets";
import { igFunnelData } from "./components/instagram funnel/instagramFunnelData";
import InstagramFunnel from "./components/instagram funnel/instagramFunnel";
import LinkedInLanding from "./components/linkedin lp/linkedInLanding";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  useEffect(() => {
    // Check if the current site is prescelta.com
    if (window.location.hostname === "prescelta.com") {
      // Redirect to hoshinomedia.com
      window.location.href = "https://hoshinomedia.com";
    }
  }, []);

  function MainLayout() {
    return (
      <div className="page-wrapper">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  function LandingPageLayout() {
    return (
      <>
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  return (
    <div>
      <ScrollToAnchor />
      <Routes>
        <Route element={<MainLayout />}>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/creators" element={<Creators />}></Route> */}
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

          {leadMagnetsData.map((magnet) => (
            <Route
              key={magnet.path}
              path={magnet.path}
              element={
                <LeadMagnetHero
                  title={magnet.title}
                  description={magnet.description}
                  creatorName={magnet.creatorName}
                  imageSrc={magnet.imageSrc}
                  magnetId={magnet.magnetId}
                  buttonText="GET IT FREE"
                />
              }
            />
          ))}
          {igFunnelData.map((magnet) => (
            <Route
              key={magnet.path}
              path={magnet.path}
              element={
                <InstagramFunnel
                  title={magnet.title}
                  description={magnet.description}
                  videoEmbedUrl={magnet.videoEmbedUrl}
                  downloadUrl={magnet.downloadUrl}
                  downloadButtonText={magnet.downloadButtonText}
                />
              }
            />
          ))}
          <Route path="success" element={<SuccessPage />} />
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
          <Route
            exact
            path="/ig-story"
            element={
              <div
                ref={() => {
                  window.location.href = "https://www.youtube.com/@nathanbelee";
                }}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route element={<LandingPageLayout />}>
          <Route
            exact
            path="/linkedin-lp"
            element={<LinkedInLanding />}
          ></Route>
          <Route
            path="/onboarding/*"
            element={<Navigate to="/laf-onboarding/step-1" replace />}
          />
        </Route>
      </Routes>
    </div>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
