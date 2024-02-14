import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhoWeAre from "./components/WhoWeAre";
import BannerSolving from "./components/BannerSolving";
import Values from "./components/Values";
import StartupC from "./components/StartupC";
import Work from "./components/Work";
import Hiring from "./components/Hiring";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-white w-full overflow-hidden ">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="w-full max-w-[1280px] ">
          <NavBar />
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div >
          <Hero />
          <WhoWeAre />
          <BannerSolving />
          <Values />
          <Work />
          <StartupC />
          <Hiring />
          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
