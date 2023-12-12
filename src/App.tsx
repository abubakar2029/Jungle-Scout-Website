import { BrowserRouter, Route, Routes } from "react-router-dom";

import BrowserExtension from "./Pages/BrowserExtension/BrowserExtension";
import Example from "./Pages/Temp2/Temp2";
import Features from "./Pages/Features/Features";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import PaymentOptions from "./Components/PaymentOptions/PaymentOptions";
import Pricing from "./Pages/Pricing/Pricing";
import React from "react";
import Registration from "./Pages/Registration/Registration";
import Signup from "./Pages/Signup/Signup";
import SignupBanner from "./Components/SignupBanner/SignupBanner";
import SignupBannerFeaturesPage from "./Components/SignupBannerFeaturesPage/SignupBannerFeaturesPage";
import { SolutionsActions } from "./ActionTypes";
import StartSellingOnAmazon from "./Pages/StartSellingOnAmazon/StartSellingOnAmazon";
import Temp from "./Pages/Temp/Temp";
import Temp3 from "./Pages/tEMP3/Temp3";
import TempAnime from "./Pages/TempAnime/TempAnime";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="relative">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/t" element={<Temp />} />
          <Route path="/tAn" element={<TempAnime />} />
          <Route path="/t3" element={<Temp3 />} />
          <Route path="/s" element={<Example />} />
          <Route path="/features/:pID" element={<Features />} />
          <Route path="/registration/:pID" element={<Registration />} />
          <Route
            path={`/solutions/${SolutionsActions.START_SELLING_ON_AMAZON}`}
            element={<StartSellingOnAmazon />}
          />
          <Route path="/t2" element={<BrowserExtension />} />
          <Route path="/signup" element={<SignupBanner/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
