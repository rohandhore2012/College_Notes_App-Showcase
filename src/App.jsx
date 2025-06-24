import React from 'react';
import FloatingElements from "./components/FloatingElements";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ScreenshotsSection from "./components/ScreenshotsSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsSection from "./components/StatsSection.jsx";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#130f40] via-[#0f0c29] to-[#000000] overflow-x-hidden font-sans relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <FloatingElements />
      <Navigation />
      <HeroSection />
      <ScreenshotsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <StatsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default App;
