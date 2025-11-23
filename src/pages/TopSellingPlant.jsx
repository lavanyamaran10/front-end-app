import React from "react";
import SectionTitle from "../components/SectionTitle";
import HeroBanner from "../components/HeroBanner";
import BagButton from "../components/BagButton";
import { mapPlants } from "../utils/mapSellingPlants"; // adjust path if needed

const TopSellingPlant = () => {
  const plants = mapPlants(); // ← GET ALL PLANTS

  return (
    <div className="w-full flex flex-col gap-32 pb-20 overflow-x-hidden justify-center items-center">
      {/* Section Title */}
      <div className="w-full flex justify-center p-20">
        <SectionTitle text="Our Top Selling Plants" />
      </div>

      {/* GRID */}
      <div className="w-full max-w-full grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-1 justify-center items-center pl-10" 
           style={{
             gridAutoRows: "auto",
           }}>
        {plants.map((plant, index) => (
          <HeroBanner key={index} imageUrl={plant.image} imageAlt={plant.header}>
            <div className="space-y-5 pb-12">
              <div className="w-full flex flex-col justify-start gap-3">
                <p className="text-white font-inter font-normal text-[38px] leading-[100%]">
                  {plant.header}
                </p>

                <p className="text-[20px] font-inter">
                  {plant.content}
                </p>

                <div className="w-full flex justify-between items-center">
                  <p className="text-[38px]">Rs. {plant.price}/-</p>
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
          div.w-full.grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: auto;
          }
        }

        @media (min-width: 1496px) {
          div.w-full.grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-auto-rows: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default TopSellingPlant;
