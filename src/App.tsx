import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import OurPhotos from "./components/OurPhotos";
import WeddingPreparation from "./components/WeddingPreparation";
import TeamSection from "./components/TeamMembers";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import PrenupSlideshow from "./components/PrenupSlideshow";
import FamilySection from "./components/FamilySection";
import GroupPhotosSection from "./components/GroupPhotosSection";
import WeddingVows from "./components/WeddingVows";

const App: React.FC = () => {
  return (
    <Router>
      <div className='bg-pink-50 min-h-screen'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <LandingPage />
                <AboutUs />
                <OurPhotos />
                <VideoSection />
                <PrenupSlideshow />
                <FamilySection />
                <GroupPhotosSection />
                <WeddingPreparation />
                <TeamSection />
                <WeddingVows />
              </>
            }
          />
          {/* Dynamic Gallery Route */}
          <Route
            path='/gallery/:category'
            element={<Gallery />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
