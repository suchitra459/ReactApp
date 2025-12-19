import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TrendingSection from "./component/TrendingSection";
import FaqSection from "./component/FaqSection";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <TrendingSection />
      <FaqSection />
      <Footer/>
    </div>
  );
}

export default App;
