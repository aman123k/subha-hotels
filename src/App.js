import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newest from "./components/Newest";
import EventsSection from "./components/EventsSection";
import DiningSlider from "./components/DiningSlider";
import StatsAndOffers from "./components/StatsAndOffers";
import Explore from "./components/Explore";
import Brands from "./components/Brands";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`${isMenuOpen ? "h-screen overflow-hidden" : ""}`}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <StatsAndOffers />
      <Explore />
      <Brands />
      <DiningSlider />
      <EventsSection />
      <Newest />
      <Footer />
    </div>
  );
}

export default App;
