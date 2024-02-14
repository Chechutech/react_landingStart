import React from "react";
import questionStartup from "../assets2/questionStartup.png";

function WhoWeAre() {
  return (
    <section className="bg-bgSecondary  py-20 sm:px-16 px-6 flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6 ">
      <div className="w-full max-w-[1280px] ">
        <div className="flex flex-row justify-between items-center  w-full">
          <div className="flex flex-col gap-6 w-3/4">
            <h2 className="font-circular text-2xl md:text-[50px] text-primaryText ">
              Who we are
            </h2>
            <p className="text-primaryOrange font-circular text-lg  md:text-2xl">
              We create products that have innovation and technology at their
              core. We value working with talented people that understand the
              possibilities of today.
            </p>
          </div>
          <div className="flex justify-end w-1/4">
            <img
              src={questionStartup}
              className="w-[75px] h-[85px]"
              alt="question-icon"
            />
          </div>
        </div>
        <div className="py-7 flex flex-col sm:flex-row justify-between gap-4 items-start text-xl md:text-2xl">
          <div
            className="flex flex-row sm:flex-col justify-between  gap-4"
          >
            <p className="text-primaryOrange font-semibold ">01</p>
            <hr className="hidden sm:block w-10 border-1  border-text-gray"></hr>
            <p className=" text-primaryText">
              We develop innovative products, systems and services
            </p>
          </div>
          <hr className="w-full border-text-gray sm:hidden"></hr>
          <div className="flex flex-row sm:flex-col justify-between gap-4 ">
            <p className="text-primaryOrange font-semibold  ">02</p>
            <hr className="hidden sm:block w-10 border-1 border-text-gray"></hr>
            <p className=" text-primaryText  ">
              Next we build teams to scale them into companies
            </p>
          </div>
          <hr className="w-full border-text-gray sm:hidden"></hr>
          <div
            className="flex flex-row sm:flex-col justify-between gap-4
             "
          >
            <p className="text-primaryOrange font-semibold">03</p>
            <hr className="hidden sm:block w-10 border-1 border-text-gray"></hr>
            <p className=" text-primaryText ">
              Each startup solving one problem at a time
            </p>
          </div>
          <hr className="w-full border-text-gray sm:hidden"></hr>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
