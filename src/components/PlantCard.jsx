import React from "react";

const PlantCard = ({ image, contentPosition = "left", children }) => {
  const isLeft = contentPosition === "left";

  return (
    <div
      className={`
        relative 
        mx-auto 
        rounded-[60px] lg:rounded-[155px]
        border border-white/20
        backdrop-blur-[40px]
        flex 
        flex-col
        ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
        items-center 
        justify-center
        overflow-visible 
        bg-white/5

        /* Responsive dimensions */
        w-[500px] h-auto
        lg:w-[1619px] lg:h-[526px]
        max-w-[95%]
        
        px-6 py-8
        lg:px-0 lg:py-0
      `}
    >
      {/* IMAGE with 1/4 overlay */}
      <div
        className={`
          w-full lg:w-1/2 flex justify-center items-start
    order-1 lg:order-2 relative
    flex-none
    md:h-[250px] 
    max-sm:h-[250px]
    max-md:h-[250px]
        `}
      >
        <img
          src={image}
          alt="Plant"
          className={`
            object-contain
            relative lg:absolute
            top-[-108px] lg:top-[-347px]
            ${isLeft ? "lg:right-[-20px]" : "lg:left-[-20px]"}
            w-[400px] h-[400px]
            lg:w-[590px] lg:h-[732px]
          `}
        />
      </div>

      {/* TEXT CONTENT */}
      <div
        className={`
          w-full lg:w-1/2 z-10 lg:p-10
          order-2 lg:order-1
          flex flex-col justify-start
          flex-grow

          /* MD, SM, XS: content takes remaining space */
          max-md:flex-[1] max-md:mt-4
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default PlantCard;
