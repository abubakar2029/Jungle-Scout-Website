import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Temp from "./Pages/Temp/Temp";
import RegionSelectCard from "./Components/RegionSelectCard/RegionSelectCard";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Herosection from "./Components/Herosection/Herosection";
import Homepage from "./Pages/Homepage/Homepage";
import Testimonials from "./Components/Testimonials/Testimonials";
import Pricing from "./Pages/Pricing/Pricing";
import PricingTable from "./Components/PricingTable/PricingTable";
import SubscriptionOptionsPanel from "./Components/SubscriptionOptionsPanel/SubscriptionOptionsPanel";

function App() {
  return (
    // <div>
    <BrowserRouter>
      <Header />
      <div className="relative top-[60px]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/plan" element={<SubscriptionOptionsPanel />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    // </div>
  );
}

export default App;
