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
import PricingPlansHeader from "./Components/PricingPlansHeader/PricingPlansHeader";
import PricingFAQ from "./Components/PricingFAQ/PricingFAQ";
import SellerPackages from "./Components/SellerPackages/SellerPackages";
import PaymentOptions from "./Components/PaymentOptions/PaymentOptions";
import FeaturespageHeader from "./Components/FeaturespageHeader/FeaturespageHeader";
import TextImageRight from "./Components/TextImageRight/TextImageRight";
import BrowserExtension from "./Pages/BrowserExtension/BrowserExtension";
import Features from "./Pages/Features/Features";
import Example from "./Pages/Temp2/Temp2";
import Temp3 from "./Pages/tEMP3/Temp3";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="relative">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pkg" element={<PaymentOptions />} />
          <Route path="/t" element={<Temp />} />
          <Route path="/t3" element={<Temp3 />} />
          <Route path="/s" element={<Example/>} />
          <Route path="/features/:pID" element={<Features />} />
          <Route path="/t2" element={<BrowserExtension />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
