import React from "react";

const Button = ({
  label = "Buy Now",
  width = "w-[217px]",
  height = "h-[64px]",
  fontFamily = "font-inter", // assuming you have Inter configured in Tailwind
}) => {
  return (
    <button
      className={`
        w-[150px]
        h-[50px]
        xl:w-[217px]
        xl:h-[64px]
        bg-transparent 
        border-2 border-white 
        rounded-[12px] 
        text-white 
        ${fontFamily} 
        font-normal 
        text-[15px] 
        leading-[100%] 
        cursor-pointer
        hover:bg-white transition-colors
         hover:text-[#1B2317]
      `}
    >
      {label}
    </button>
  );
};


export default Button;
