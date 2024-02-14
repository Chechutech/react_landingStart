import React from "react";
import { services } from '../textInfo/index.js'
import OurWorkCard from "./OurWorkCard.jsx";

function Work () {
   
  return (
    <section className="w-full sm:px-16 px-6 ">
      <div className="flex flex-col items-center gap-10 px-4">
        <h2 className="text-[50px] font-bold text-primaryText">Our Work</h2>
        <div className=" max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {services.map((card)=>(
                <OurWorkCard key={card.id}{...card} />

            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
