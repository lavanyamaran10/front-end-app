import React from "react";
import SectionTitle from "../components/SectionTitle";
import PlantCard from "../components/PlantCard";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import BagButton from "../components/BagButton";
import Button from "../components/Button";

const TrendingPlant = () => {
  return (
    <div className="w-full flex flex-col gap-36 py-20">
      <div className="w-full flex justify-center items-center">
        <SectionTitle text="Our Trendy plants" />
      </div>

      <PlantCard image={plant1} contentPosition="right">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-white font-inter font-semibold text-[28px] lg:text-[38px] leading-[110%]">
            For Your Desks Decorations
          </h2>

          <p className="text-white font-inter text-[16px] lg:text-[20px] leading-[140%] max-w-xl">
            I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
          </p>

          <p className="text-white font-inter font-semibold text-[28px] lg:text-[38px]">
            Rs. 599/-
          </p>

          <div className="flex gap-4 items-center mt-4">
            <Button label="Explore" />
            <BagButton />
          </div>
        </div>
      </PlantCard>

      <PlantCard image={plant2} contentPosition="left">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-white font-inter font-semibold text-[28px] lg:text-[38px] leading-[110%]">
            For Your Desks Decorations
          </h2>

          <p className="text-white font-inter text-[16px] lg:text-[20px] leading-[140%] max-w-xl">
            The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
          </p>

          <p className="text-white font-inter font-semibold text-[28px] lg:text-[38px]">
            Rs. 399/-
          </p>

          <div className="flex gap-4 items-center mt-4">
            <Button label="Explore" />
            <BagButton />
          </div>
        </div>
      </PlantCard>
    </div>
  );
};

export default TrendingPlant;
