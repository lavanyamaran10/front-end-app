import React from "react";
import Button from "../components/Button";
import HeroBanner from "../components/HeroBanner";
import rosegold from "../assets/rosegold.png";
import HalfStar from "../components/HalfStar";
import StarIcon from "@mui/icons-material/Star";
import rightArrow from "../assets/rightarrow.png";
import girlImg from "../assets/girlimg.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-[clamp(16px,calc((100vw/1728)*40),40px)] p-[clamp(16px,calc((100vw/1728)*32),32px)] bg-gradient-to-br max-w-full overflow-x-hidden justify-center items-center pt-20">

      {/* LEFT SIDE */}
      <div className="flex flex-col flex-1 gap-[clamp(40px,calc((100vw/1728)*144),144px)] justify-between py-[clamp(16px,calc((100vw/1728)*48),48px)] min-w-0 items-center md:items-start text-center md:text-left">

        {/* Main Text */}
        <div className="space-y-[clamp(12px,calc((100vw/1728)*24),24px)]">
{/* text-[clamp(48px,calc((100vw/1728)*118),118px)] */}
          {/* Headline */}
          <p className="
            text-white font-inter font-semibold leading-[100%] break-words
             xl:text[118px] lg:text-[85px] md:text-[65px] text-[30px]
          ">
            Earth's Exhale
          </p>

          {/* Subtext */}
          <p className="
            text-gray-300 max-w-xl font-inter font-medium leading-[130%]
            text-[clamp(14px,calc((100vw/1728)*23),23px)]
          ">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>

          {/* Buttons */}
          <div className="flex flex-row md:flex-col items-center justify-center lg:flex-row gap-[clamp(8px,calc((100vw/1728)*16),16px)]  pt-[clamp(8px,calc((100vw/1728)*16),16px)] lg:justify-start md:items-center">
            <Button label="Buy Now" />

            <button className="flex items-center gap-[clamp(4px,calc((100vw/1728)*8),8px)] text-white hover:text-gray-300 transition-colors">
              <div className="
                rounded-full border-2 border-white flex items-center justify-center relative group
                w-[clamp(40px,calc((100vw/1728)*56),56px)]
                h-[clamp(40px,calc((100vw/1728)*56),56px)]
              ">

                {/* Play Icon */}
                <div className="
                  w-0 h-0 
                  border-t-[clamp(5px,calc((100vw/1728)*7),7px)] border-t-transparent
                  border-b-[clamp(5px,calc((100vw/1728)*7),7px)] border-b-transparent
                  border-l-[clamp(8px,calc((100vw/1728)*12),12px)] border-l-white
                  group-hover:border-l-black transition-colors
                "></div>
              </div>

              <span className="
                font-indie-flower font-normal leading-[100%] text-white
                text-[clamp(16px,calc((100vw/1728)*25),25px)]
              ">
                Live Demo...
              </span>
            </button>
          </div>
        </div>

        {/* REVIEW CARD */}
        <div className="bg-white/10 backdrop-blur-md rounded-[clamp(20px,calc((100vw/1728)*45),45px)] p-[clamp(12px,calc((100vw/1728)*24),24px)] max-w-md border border-white/20 flex flex-col gap-[clamp(8px,calc((100vw/1728)*16),16px)] mx-auto md:mx-0">

          {/* Row 1 */}
          <div className="flex flex-row items-start gap-[clamp(8px,calc((100vw/1728)*16),16px)]">

            {/* Profile Image */}
            <div className="
              flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-red-500
              w-[clamp(40px,calc((100vw/1728)*56),56px)]
              h-[clamp(40px,calc((100vw/1728)*56),56px)]
            ">
              <img src={girlImg} alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Name + Stars */}
            <div className="flex flex-col flex-1 items-start">
              <h3 className="
                text-white font-inter font-normal leading-[100%]
                text-[clamp(14px,calc((100vw/1728)*22),22px)] pl-2
              ">
                Ronnie Hamill
              </h3>

              <div className="flex gap-[clamp(2px,calc((100vw/1728)*4),4px)] my-[clamp(2px,calc((100vw/1728)*8),8px)]">
                <StarIcon className="text-[#FFD700]" />
                <StarIcon className="text-[#FFD700]" />
                <StarIcon className="text-[#FFD700]" />
                <StarIcon className="text-[#FFD700]" />
                <HalfStar />
              </div>
            </div>
          </div>

          {/* Review text */}
          <p className="
            text-white font-inter leading-[130%]
            text-[clamp(12px,calc((100vw/1728)*17),17px)]
          ">
            I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE HERO BANNER */}
      <div className="flex justify-center md:justify-start">
        <HeroBanner imageUrl={rosegold} imageAlt={"plant"}>

          <div className="w-full flex justify-center items-center">

            <div className="space-y-[clamp(16px,calc((100vw/1728)*32),32px)] pb-[clamp(16px,calc((100vw/1728)*48),48px)]">

              <div className="space-y-[clamp(4px,calc((100vw/1728)*12),12px)]">
                {/* Indoor Plant */}
                <p className="
                  text-white opacity-90 font-inter font-normal leading-[100%]
                  text-[clamp(14px,calc((100vw/1728)*23),23px)]
                ">
                  Indoor Plant
                </p>

                {/* Aglaonema plant */}
                <div className="flex items-center justify-center gap-[clamp(4px,calc((100vw/1728)*8),8px)]">
                  <p className="
                    text-white font-inter leading-[100%] font-normal
                    text-[clamp(20px,calc((100vw/1728)*38),38px)]
                  ">
                    Aglaonema plant
                  </p>

                  {/* Right arrow */}
                  <img src={rightArrow}
                    className="
                      object-contain
                      w-[clamp(12px,calc((100vw/1728)*20),20px)]
                      h-[clamp(12px,calc((100vw/1728)*20),20px)]
                    "
                    alt="arrow"
                  />
                </div>
              </div>

              <Button label="Buy Now" />

              {/* Bottom selector dots */}
              <div className="flex justify-center gap-[clamp(4px,calc((100vw/1728)*8),8px)]">
                <div className="
                  bg-white rounded-full
                  w-[clamp(12px,calc((100vw/1728)*21),21px)]
                  h-[clamp(4px,calc((100vw/1728)*6),6px)]
                "></div>

                <div className="
                  bg-white rounded-full
                  w-[clamp(4px,calc((100vw/1728)*6),6px)]
                  h-[clamp(4px,calc((100vw/1728)*6),6px)]
                "></div>

                <div className="
                  bg-white rounded-full
                  w-[clamp(4px,calc((100vw/1728)*6),6px)]
                  h-[clamp(4px,calc((100vw/1728)*6),6px)]
                "></div>
              </div>
            </div>
          </div>

        </HeroBanner>
      </div>
    </div>
  );
};

export default Hero;
