import React from "react";
import thumbLeftOk from "../assets2/thumbLeftOk.png";

export default function BannerSolving() {
  return (
    <section
      className="bg-white flex justify-center items-center flex-row flex-wrap sm:px-16 px-6 py-20 sm:mb-6
       w-full"
    >
      <div className="flex justify-center items-center gap-3">
        <img src={thumbLeftOk} className="sm:w-[59px] sm:h-[69px] w-10 " />
        <h3 className="text-primaryOrange font-circular md:text-[40px] text-2xl">
          We love solving problems!
        </h3>
        <img
          src={thumbLeftOk}
          className="sm:w-[59px] sm:h-[69px] w-10 transform scale-x-[-1]"
        />
      </div>
    </section>
  );
}
