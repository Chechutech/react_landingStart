import React from "react";
import thumbLeftOk from "../assets2/thumbLeftOk.png";

export default function StartupC() {
  return (
    <section
      className="flex justify-center items-center flex-row flex-wrap mt-20 sm:mb-6 
     py-20 lg:py-40 gap-3 sm:px-16 px-6"
    >
      <div className=" max-w-[1280px] w-full flex justify-center items-center gap-3">
        <img
          src={thumbLeftOk}
          alt="thumbUp"
          className="sm:w-[59px] sm:h-[69px] w-10  "
        />
        <h3 className="text-primaryOrange font-circular md:text-4xl text-lg text-center">
          Startups create a world that actually is better. Any problem that can
          be solved, will be solved by a startup, and that is a huge
          opportunity.
        </h3>
        <img
          src={thumbLeftOk}
          alt="thumbUp"
          className="sm:w-[59px] sm:h-[69px] w-10 transform scale-x-[-1]"
        />
      </div>
    </section>
  );
}
