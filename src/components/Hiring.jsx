import React from "react";
import hiringGirl from "../assets2/hiringGirl.png";
import hiringBoy from "../assets2/hiringBoy.png";

function Hiring() {
  return (
    <section id="hiringSection" className="bg-bgSecondary  py-20 lg:py-42 ">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div
          className="flex justify-between
      "
        >
          <img src={hiringGirl} className="w-1/4 sm:w-[318px] object-contain" />
          <img
            src={hiringBoy}
            className="w-1/4 sm:w-[318px] sm:hidden object-contain "
          />
        </div>
        <div
          className=" 
       text-white flex flex-col items-center py-2 px-3 gap-y-6 sm:px-1 leading-6 "
        >
          <h2 className="text-center text-primaryText font-bold text-2xl md:text-5xl">
            We are hiring!
          </h2>
          <p className="text-center text-primaryOrange text-lg sm:text-2xl max-w-[800px]">
            We're always looking for talented people to join and help build our
            startups. Check out our current openings
          </p>
          <button
            type="button"
            className="bg-actionColor text-lg rounded-full px-8
         py-2 cursor-pointer"
          >
            See current openings
          </button>
        </div>
        <div className="">
          <img
            src={hiringBoy}
            className="w-[318px] hidden sm:block object-contain "
          />
        </div>
      </div>
    </section>
  );
}

export default Hiring;
