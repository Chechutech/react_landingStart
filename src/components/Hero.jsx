import React from "react";
import heroImage from "../assets2/heroImage.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-white flex flex-col md:flex-row justify-between sm:py-10 py-6 pl-16 "
    >
      {/* Contenedor del texto */}
      <div className="flex justify-center items-start flex-col px-6 h-screen order-last  md:order-first ">
        <div className="flex flex-col mt-10 mb-10 w-full gap-5 text-center md:text-start max-w-[1280px]  ">
          <h1 className="font-circular font-semibold text-primaryText md:text-[85px] text-6xl w-full leading-none">
            We Create <br className="sm:block hidden" />
            Startups.
          </h1>
          <p className="text-primaryOrange font-circular text-[24px] max-w-[750px] leading-[30.8px] mt-5">
            We are a startup studio that develops and launches new companies.
          </p>
          <a href="#">
            <button
              type="button"
              className="bg-actionColor text-white text-lg rounded-full px-8 py-2 cursor-pointer"
            >
              See our work
            </button>
          </a>
        </div>
      </div>

      {/* Contenedor de la imagen */}
      <div className="order-first md:order-last flex justify-center items-base ">
        <img
          src={heroImage}
          className="w-[500px] md:w-[700px] object-contain"
          alt="startupzimage"
        />
      </div>
    </section>
  );
}

export default Hero;
