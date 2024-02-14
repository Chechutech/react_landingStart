import React from "react";
import lightB from "../assets2/lightB.png";

function Values() {
  return (
    <section className="bg-bgSecondary w-full py-20 flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6 sm:px-16 px-6 ">
      <div className="px-4 max-w-[1280px] w-full">
        <div className="flex flex-1 flex-row justify-between items-center m-3 w-full">
          <div className="">
            <h2 className="font-circular text-[50px] text-primaryText ">
              Our core Values
            </h2>
          </div>
          <div className="">
            <img
              src={lightB}
              className="w-[75px] h-[85px]"
              alt="question-icon"
            />
          </div>
        </div>
        <div className="py-7 flex flex-col sm:flex-row justify-between gap-4 sm:gap-12 item-start ">
          <div className="flex flex-col gap-4 w-full sm:w-1/2 sm:text-xl md:text-[30px] ">
            <p className="text-primaryOrange font-semibold ">01. Innovation</p>
            <hr className="hidden sm:block w-10 border-text-gray"></hr>
            <p className="text-primaryText ">
              Startupz operates where entrepreneurship and technology intersect.
              We design solutions and turn them into businesses models.
            </p>
          </div>
          <hr className="w-full border-text-gray sm:hidden"></hr>
          <div className="flex flex-col gap-4 w-full sm:w-1/2 sm:text-xl md:text-[30px] ">
            <p className="text-primaryOrange font-semibold ">02. People</p>
            <hr className="hidden sm:block w-10 border-text-gray"></hr>
            <p className="text-primaryText">
              Talent is what enable us to create great companies.
            </p>
          </div>
          <hr className="w-full border-text-gray sm:hidden"></hr>
        </div>
      </div>
    </section>
  );
}

export default Values;
