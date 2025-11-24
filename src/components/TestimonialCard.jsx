import React from "react";

const TestimonialCard = ({ children }) => {
  return (
    <div
      className={`
        relative 
        w-[360px] h-[360px]

        lg:w-[420px] lg:h-[400px]
        xxl:w-[512px] xl:h-[480px]
      `}
    >
      {/* GLOW BEHIND */}
      <div
        className={`
          absolute z-[-1]
          w-full h-full
          lg:w-[360px] lg:h-[340px]
          xxl:w-[512px] xl:h-[480px]
        `}
        style={{
          top: "-15px",
          left: "-15px",
          background:
            "linear-gradient(149.83deg, rgba(255,255,255,0.40) 6.85%, rgba(0,0,0,0.40) 94.86%)",
          filter: "blur(25px)",
          borderRadius: "28px",
        }}
      />

      {/* MAIN INWARD CURVED SHAPE */}
      <svg
        className={`
          absolute top-0 left-0 z-0
          w-full h-full
        `}
        viewBox="0 0 512 480"
      >
        <defs>
          <linearGradient id="gradBorder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
        </defs>

        <path
          d="
            M 55 0
            C 90 0, 120 10, 175 15
            C 230 20, 280 20, 335 15
            C 390 10, 420 0, 455 0
            C 485 0, 512 20, 512 55
            L 512 425
            C 512 460, 485 480, 455 480
            L 55 480
            C 25 480, 0 460, 0 425
            L 0 55
            C 0 20, 25 0, 55 0
            Z
          "
          fill="rgba(255,255,255,0.05)"
          stroke="url(#gradBorder)"
          strokeWidth="2"
        />
      </svg>

      {/* CARD CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-4 sm:py-5 text-white z-20">
        {children}
      </div>
    </div>
  );
};

export default TestimonialCard;
