import React from "react";
import rocketicon from "../assets2/rocketicon.png";

function Contact() {
  return (
    <section className="bg-colorBgYellow w-full py-16 px-16 flex flex-col md:flex-row justify-between">
      <div className="px-2 sm:px-4 flex flex-col items-start gap-4   ">
        <h3 className="text-2xl sm:text-5xl font-bold text-white max-w-[600px]">
          Are you ready to board this rocket ship?
        </h3>
        <p className="text-lg sm:2xl font-semibold text-white mb-3 sm:mb-5">
          Share your excitement with us.
        </p>
        <div className="w-full">
          <form className=" bg-bgSecondary p-6 sm:p-8 rounded-md flex flex-col items-center ">
            <div className="w-full relative mb-4" bis_skin_checked="1">
              <label className="leading-7 text-sm text-gray-600">Name*</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-actionColor focus:ring-2 focus:ring-actionColor
                   text-base outline-none text-gray-700 py-1 px-3 leading-8"
              />
            </div>
            <div className="w-full relative mb-4" bis_skin_checked="1">
              <label className="leading-7 text-sm text-gray-600">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-actionColor focus:ring-2 focus:ring-actionColor text-base outline-none text-gray-700 py-1 px-3 leading-8 "
              />
            </div>
            <div className="w-full relative mb-4" bis_skin_checked="1">
              <label className="leading-7 text-sm text-gray-600">
                Message*
              </label>
              <textarea
                id="msg"
                className="w-full bg-white rounded border border-gray-300 focus:border-actionColor focus:ring-2 focus:ring-actionColor text-base outline-none text-gray-700 py-1 px-3 leading-8 "
                rows="5"
              ></textarea>
            </div>
            <div className="items-center">
              {" "}
              <button
                className="text-white bg-primaryText font-bold
               border-0 py-2 px-6 sm:px-8 focus:outline-none cursor-pointer rounded-full sm:text-lg"
              >
                Shoot us a message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center mt-14 md:items-end">
        <img
          src={rocketicon}
          alt="rocket-icon"
          className="object-contain w-[200px] md:w-[500px]"
        />
      </div>
    </section>
  );
}

export default Contact;
