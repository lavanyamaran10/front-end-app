import React from "react";

const HeroBanner = ({ imageUrl, imageAlt, children }) => {
  return (
    <div className="relative w-[512px] h-[644px]">
      
      {/* ===== BEHIND BORDER GLOW ===== */}
      <div
        className="absolute z-[-1]"
        style={{
          width: "440px",
          height: "540px",
          top: "-10px",
          left: "-10px",
          background:
            "linear-gradient(149.83deg, rgba(255,255,255,0.35) 6.85%, rgba(0,0,0,0.35) 94.86%)",
          filter: "blur(22px)",
          borderRadius: "20px",
        }}
      ></div>

      {/* ===== MAIN SHAPE WITH BORDER (SVG) ===== */}
      <svg
        width="420"
        height="520"
        className="absolute z-0 top-[62px] left-[46px]"
      >
        <defs>
          <linearGradient id="gradBorder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
        </defs>

        <path
          d="M 50 0 C 85 0, 105 12, 160 18 C 210 24, 210 24, 260 18 C 315 12, 335 0, 370 0 C 395 0, 420 18, 420 50 L 420 470 C 420 502, 395 520, 370 520 L 50 520 C 25 520, 0 502, 0 470 L 0 50 C 0 18, 25 0, 50 0 Z"
          fill="rgba(255,255,255,0.05)"
          stroke="url(#gradBorder)"
          strokeWidth="2"
        />
      </svg>

      {/* ===== IMAGE INSIDE SHAPE ===== */}
      <div className="absolute top-[-110px] left-[46px] w-[420px] h-[520px] flex items-center justify-center z-10">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="max-w-[80%] max-h-[80%] object-contain"
          style={{
            filter: `
              drop-shadow(0px -2.71px 2.21px #0000000C)
              drop-shadow(0px -6.52px 5.32px #00000012)
              drop-shadow(0px -12.27px 10.02px #00000016)
              drop-shadow(0px -21.89px 17.87px #0000001A)
              drop-shadow(0px -40.94px 33.42px #0000001F)
              drop-shadow(0px -98px 80px #0000002B)
            `,
          }}
        />
      </div>

      {/* ===== CHILDREN TEXT INSIDE SHAPE ===== */}
      <div className="absolute top-[140px] left-[46px] w-[420px] h-[520px] flex flex-col justify-between items-center px-6 py-12 text-white z-20">
        <div className="basis-1/3">

        </div>

        <div className="basis-2/3 ">

        {children}
        </div>
      </div>



    </div>
  );
};

export default HeroBanner;
