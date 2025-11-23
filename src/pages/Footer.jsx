import React from "react";
import plant from "../assets/plant.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#1A231B] text-white py-20 px-10 lg:px-24 flex flex-col gap-20 overflow-x-hidden max-w-full">

      {/* ================= LEFT BLOCK ================= */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-20 min-w-0">

        {/* ------------ BRAND + DESCRIPTION ------------ */}
        <div className="flex flex-col gap-10 max-w-[500px]">
          <div className="flex items-center gap-4">
            <img
              src={plant}
              alt="FloraVision"
              className="w-[94px] h-[94px] object-contain"
            />

            <span className="font-inter font-black text-[45px] leading-[100%] tracking-[0%]">
              FloraVision.
            </span>
          </div>

          <p className="font-inter font-medium text-[28px] leading-[100%]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          <ul className="flex gap-10 font-inter font-extrabold text-[28px] leading-[100%]">
            <li>FB</li>
            <li>TW</li>
            <li>LI</li>
          </ul>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="flex flex-col gap-10">
          <p className="font-inter font-extrabold text-[28px] leading-[100%]">
            Quick Link’s
          </p>

          <ul className="flex flex-col gap-3">
            <li className="font-inter font-medium text-[24px] underline">Home</li>
            <li className="font-inter font-medium text-[24px] underline">
              Type’s Of plant’s
            </li>
            <li className="font-inter font-medium text-[24px] underline">
              Contact
            </li>
            <li className="font-inter font-medium text-[24px] underline">
              Privacy
            </li>
          </ul>
        </div>

        {/* ================= RIGHT BLOCK ================= */}
        <div className="flex flex-col gap-10 max-w-[500px]">
          <p className="font-inter font-extrabold text-[28px] leading-[100%]">
            For Every Update.
          </p>

          <div className="flex border border-white rounded-md overflow-hidden h-[70px] items-center">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full bg-transparent px-5 text-[24px] font-inter font-medium outline-none placeholder-white"
            />

            <button className="bg-white text-black px-8 h-full font-inter font-bold text-[22px] uppercase">
              Subscribe
            </button>
          </div>

          <p className="font-inter font-medium text-[24px] leading-[100%] mt-10">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
