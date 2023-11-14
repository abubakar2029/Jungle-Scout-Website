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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
