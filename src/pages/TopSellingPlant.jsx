import React from "react";
import SectionTitle from "../components/SectionTitle";
import HeroBanner from "../components/HeroBanner";
import BagButton from "../components/BagButton";
import { mapPlants } from "../utils/mapSellingPlants"; // adjust path if needed

const TopSellingPlant = () => {
  const plants = mapPlants(); // ← GET ALL PLANTS

  return (
    <div className="w-full flex flex-col gap-32  overflow-x-hidden justify-center items-center">
      {/* Section Title */}
      <div className="w-full flex justify-center p-10">
        <SectionTitle text="Our Top Selling Plants" />
      </div>

      {/* GRID */}
      <div
        className="w-full max-w-full m-16 grid grid-cols-1 gap-16  lg:grid-cols-2 lg:grid-rows-3  xxl:grid-cols-3 xxl:grid-rows-2 justify-center items-center "
        style={{
          gridAutoRows: "auto",
        }}
      >
        {plants.map((plant, index) => (
          <HeroBanner
            key={index}
            imageUrl={plant.image}
            imageAlt={plant.header}
          >
            <div className="space-y-5 pb-12 pt-10 lg:pt-0 xl:pt-0 md:pt-0 ">
              <div className="w-full flex flex-col justify-start gap-3">
                <div className="block lg:hidden xl:hidden md:hidden ">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <p className="text-white font-inter font-normal lg:text-[28px] xl:text-[28px] 2xl-[38px] text-[17px] leading-[100%]">
                  {plant.header}
                </p>

                <p className="xl:text-[17px] 2xl:text-[20px] lg:[15px] text-[14px] font-inter">
                  {plant.content}
                </p>

                <div className="w-full flex justify-between items-center">
                  <p className="xl:text-[28px] 2xl:text-[38px] lg:text-[20px] text-[15px] ">
                    Rs. {plant.price}/-
                  </p>
                  <BagButton />
                </div>
              </div>
            </div>
          </HeroBanner>
        ))}
      </div>

      {/* Custom media queries for 1496px breakpoint */}
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1495px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: auto;
          }
        }

        @media (min-width: 1496px) {
          .grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-auto-rows: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default TopSellingPlant;
