import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TrendingSection from "./component/TrendingSection";
import FaqSection from "./component/FaqSection";
import Footer from "./component/Footer"; 

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Hero />
      <TrendingSection />
      <FaqSection />
      <Footer/>

    </div>
  );
}

export default App;
