import React from "react";
import SectionTitle from "../components/SectionTitle";
import plant1 from "../assets/rosegold.png";
import Button from "../components/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const O2Plants = () => {
  return (
<div className="w-full flex flex-col gap-32 md:gap-20 p-4 md:p-10 pb-20 md:pb-44 relative">
      {/* Section Title */}
      <div className="w-full flex justify-center">
  
        <SectionTitle text="Our Best O2" />
      </div>

      {/* Main Card Container */}
      <div className="relative mx-auto w-full max-w-[500px] md:max-w-[700px] lg:max-w-[1600px] gap-16 ">
        <div className="
          relative
          border border-white/15 
          rounded-[40px] md:rounded-[60px] lg:rounded-[90px]
          bg-white/5 backdrop-blur-[40px] 
          overflow-visible
          w-full h-[850px]  lg:h-[755px]
          flex flex-col lg:flex-row
          items-center lg:items-stretch
          px-6 md:px-10 lg:px-16
          py-8 md:py-12 lg:py-16
        ">
          {/* IMAGE - positioned to overlay 1/4 above rectangle */}
          <div className="
            absolute 
            top-[-65px] left-1/2 -translate-x-1/2
            md:top-[-106px]
            lg:top-[-140px] lg:left-[-80px] lg:translate-x-0
            w-[400px] h-[400px]
            md:w-[450px] md:h-[450px]
            lg:w-[620px] lg:h-[620px]
            xxl:w-[877px] xl:h-[877px]
            z-10
            flex items-center justify-center
          ">
            <img
              src={plant1}
              alt="O2 Plant"
              className="w-full h-full object-contain"
            />
          </div>
          {/* CONTENT - positioned differently for mobile vs desktop */}
          <div className="
            w-full
            flex flex-col justify-center
            text-white gap-4 md:gap-6
            mt-[350px] md:mt-[250px] lg:mt-0
            lg:ml-[450px]
            xxl:ml-[650px]
            p-4
            xl:p-16
            lg:p-16
            md:p-16
            z-20
          ">
            

            
            <h2 className="font-inter font-semibold text-[24px] lg:text-[30px] xxl:text-[38px] leading-[100%]">
              We Have Small And Best O2 Plants Collection's
            </h2>

            <p className="font-inter font-semibold text-[16px] lg:text-[22px] xxl:text-[28px] text-white/80 leading-[100%]">
              Oxygen-producing plants, often referred to as "O2 plants," are those
              that release oxygen into the atmosphere through the process of
              photosynthesis.
            </p>

            <p className="font-inter font-semibold text-[16px] lg:text-[22px] xxl:text-[28px] text-white/80 leading-[100%]">
              Many plants can help filter out pollutants and toxins from the air,
              such as formaldehyde, benzene, and trichloroethylene. This makes the
              air cleaner and healthier to breathe.
            </p>

            {/* Buttons + Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 mt-4">
              <Button label="Explore" />

              {/* Slider Navigation */}
              <div className="flex items-center gap-4">
                <ArrowBackIosNewIcon className="w-6 h-6 cursor-pointer text-white/60 hover:text-white transition-colors" />
                <span className="font-inter font-bold text-[18px] md:text-[20px] leading-[100%] text-white/80">
                  01/<span className="text-[14px] md:text-[15px] font-bold">04</span>
                </span>
                <ArrowForwardIosIcon className="w-6 h-6 cursor-pointer text-white/60 hover:text-white transition-colors" />
              </div>
            </div>
  
          </div>
        </div>
      </div>

      {/* Bottom Dots */}
      <div className="w-full flex justify-center mt-6 gap-2">
        <span className="w-4 h-[6px] bg-white/50 rounded-full"></span>
        <span className="w-2 h-2 bg-white/30 rounded-full"></span>
        <span className="w-2 h-2 bg-white/30 rounded-full"></span>
      </div>
    </div>
  );
};

export default O2Plants;
