import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import HalfStar from "../components/HalfStar";
import StarIcon from "@mui/icons-material/Star";
import SectionTitle from "../components/SectionTitle";
import { mapProfile } from "../utils/mapProfileReviews";

const CustomerReview = () => {
  const profiles = mapProfile();

  return (
    <div className="w-full flex flex-col gap-20 p-6 md:p-12 pb-32 overflow-x-hidden">
      {/* Title */}
      <div className="w-full flex justify-center">
        <SectionTitle text={"Customer Review"} />
      </div>

      {/* Dynamic Cards */}
      <div className="w-full flex flex-wrap justify-center gap-6">
        {profiles.map((item, index) => (
          <TestimonialCard key={index}>
            <div
              className="p-4 md:p-6 max-w-md flex flex-col gap-4"
              style={{ transition: "all 0.3s ease-in-out" }}
            >
              {/* Profile + info */}
              <div
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4"
              >
                {/* Profile Image */}
                <div
                  className="rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0 overflow-hidden"
                  style={{
                    width: "clamp(56px, 5vw, 88px)",
                    height: "clamp(56px, 5vw, 88px)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.customerName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name + Ratings */}
                <div className="flex flex-col flex-1 text-center lg:text-left">
                  <h3
                    className="text-white font-inter font-semibold leading-[100%]"
                    style={{
                      fontSize: "clamp(20px, 3vw, 38px)",
                    }}
                  >
                    {item.customerName}
                  </h3>

                  <div className="flex gap-1 my-2 justify-center lg:justify-start">
                    {[...Array(4)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="text-[#FFD700]"
                        style={{
                          width: "clamp(14px, 1.5vw, 19px)",
                          height: "clamp(14px, 1.5vw, 19px)",
                        }}
                      />
                    ))}
                    <HalfStar
                      size={parseInt(
                        window.innerWidth >= 1024 ? 19 : 16
                      )} // optional fallback
                      style={{
                        width: "clamp(14px, 1.5vw, 19px)",
                        height: "clamp(14px, 1.5vw, 19px)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p
                className="text-white font-inter font-normal leading-[130%] mt-3 lg:mt-0"
                style={{
                  fontSize: "clamp(16px, 2vw, 24px)",
                }}
              >
                {item.content}
              </p>
            </div>
          </TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
