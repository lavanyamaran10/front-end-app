import React from "react";
import plant from "../assets/plant.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#1B2317] text-white py-10 px-10  flex flex-col gap-20 overflow-x-hidden max-w-full">

      {/* ================= LEFT BLOCK ================= */}
      <div className="w-full flex flex-col lg:flex-row  justify-between items-center gap-5 min-w-0">

        {/* ------------ BRAND + DESCRIPTION ------------ */}
        <div className="flex flex-col gap-10 max-w-[500px] ">
          <div className="flex items-center gap-4">
            <img
              src={plant}
              alt="FloraVision"
              className="w-[94px] h-[94px] object-contain"
            />

            <span className="font-inter font-black xl-text-[45px] lg:text-[38px] md:text-[38px] text-[25px] leading-[100%] tracking-[0%]">
              FloraVision.
            </span>
          </div>

          <p className="font-inter font-medium xl:text-[28px] lg:text-[20px] leading-[100%]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          <ul className="flex gap-10 font-inter font-extrabold xl:text-[28px] lg:text-[16px] text-[16px] leading-[100%]">
            <li>FB</li>
            <li>TW</li>
            <li>LI</li>
          </ul>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="flex flex-col gap-10">
          <p className="font-inter font-extrabold xl:text-[28px] lg:text-[20px] md:text-[20px] text-[16px] leading-[100%]">
            Quick Link’s
          </p>

          <ul className="flex flex-col gap-3 xl:text-[24px] lg:text-[20px]md:text-[20px] text-[15px] font-inter font-medium  underline">
            <li className="">Home</li>
            <li className="">
              Type’s Of plant’s
            </li>
            <li className="">
              Contact
            </li>
            <li className="">
              Privacy
            </li>
          </ul>
        </div>

        {/* ================= RIGHT BLOCK ================= */}
        <div className="flex flex-col gap-10 max-w-[500px]">
          <p className="font-inter font-extrabold xl:text-[28px] lg:text-[24px] md:text[24px] text-[20px] leading-[100%]">
            For Every Update.
          </p>

          <div className="flex border border-white rounded-md overflow-hidden h-[70px] items-center">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full bg-transparent px-5 xl:text-[24px] lg:text-[18px] md:text-[18px] text-[18px] font-inter font-medium outline-none placeholder-white"
            />

            <button className="bg-white text-black  px-8 h-full font-inter font-bold xl:text-[22px] lg:text-[19px] md:text-[19px] text-[16px] uppercase">
              Subscribe
            </button>
          </div>

          <p className="font-inter font-medium xl:text-[24px] lg:text-[18px] md:text-[18px] text-[16px] leading-[100%] mt-10">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
