import { BrowserRouter, Route, Routes } from "react-router-dom";

import BrowserExtension from "./Pages/BrowserExtension/BrowserExtension";
// import Example from "./Pages/Temp2/Temp2";
import { FeatureActions } from "./entities/NavbarEnums";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Pricing from "./Pages/Pricing/Pricing";
import React, { useEffect } from "react";
import Registration from "./Pages/Registration/Registration";
import SignupBanner from "./Components/SignupBanner/SignupBanner";
import { SolutionsActions } from "./entities/NavbarEnums";
import StartSellingOnAmazon from "./Pages/StartSellingOnAmazon/StartSellingOnAmazon";
// import Temp from "./Pages/Temp/Temp";
// import Temp3 from "./Pages/tEMP3/Temp3";
// import TempAnime from "./Pages/TempAnime/TempAnime";
import axios from "axios";
import PaymentForm from "./Pages/Registration/PaymentForm/PaymentForm";
import EmailForm from "./Pages/Registration/EmailForm/EmailForm";
import Temp from "./Temp";
import Login from "./Pages/Login/Login";
import { WebRoutes } from "./entities/Routes";
function App() {
  // useEffect(() => {
  //   console.log("hello");

  //   axios
  //     .post("/check-token", {
  //       token: localStorage.getItem("token"),
  //       //  s:localStorage.removeItem("token"),
  //     })
  //     .then((res: any) => {
  //       debugger;
  //     });
  // }, []);
  return (
    <BrowserRouter>
      <Header />
      <div className="relative min-h-screen	">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path={WebRoutes.LOGIN} element={<Login />} />
          <Route path={WebRoutes.PRICING} element={<Pricing />} />
          {/* <Route path="/t" element={<Temp />} />
          <Route path="/tAn" element={<TempAnime />} /> */}
          {/* <Route path="/t3" element={<Temp3 />} />
          <Route path="/s" element={<Example />} /> */}
          {/* <Route path="/features/:pID" element={<Features />} /> */}

          <Route
            path={`/features/${FeatureActions.BROWSER_EXTENSION}`}
            element={<BrowserExtension />}
          />
          <Route path="/registration" element={<Registration />}>
            <Route path="*" element={<EmailForm />} />
            <Route path="accountDetails" element={<PaymentForm />} />
            <Route path="email" element={<EmailForm />} />
          </Route>
          <Route
            path={`/solutions/${SolutionsActions.START_SELLING_ON_AMAZON}`}
            element={<StartSellingOnAmazon />}
          />
          <Route path="/t2" element={<Temp />} />
          <Route path="/signup" element={<SignupBanner />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
