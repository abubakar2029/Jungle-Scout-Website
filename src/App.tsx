import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Temp from "./Pages/Temp/Temp";
import RegionSelectCard from "./Components/RegionSelectCard/RegionSelectCard";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path="/h" element={<Header />} />
          <Route path="/t" element={<Signup />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
          <Route path="/" element={<Temp />} />
          {/* <Route path='/quiz-page' element={<QuizPage />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
