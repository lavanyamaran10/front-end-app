import React from "react";

const HeroBanner = ({ imageUrl, imageAlt, children }) => {
  return (
    <div className="relative" style={{ width: "512px", height: "644px" }}>

      {/* ===== BEHIND BORDER GLOW SHAPE ===== */}
      {/* <div
        className="absolute z-[-1]"
        style={{
          width: "440px",       // slightly bigger
          height: "540px",
          top: "-10px",
          left: "-10px",
          background:
            "linear-gradient(149.83deg, rgba(255,255,255,0.35) 6.85%, rgba(0,0,0,0.35) 94.86%)",
          filter: "blur(22px)",
          clipPath: `path('M 50 0 C 85 0, 105 12, 160 18 C 210 24, 210 24, 260 18 C 315 12, 335 0, 370 0 C 395 0, 420 18, 420 50 L 420 470 C 420 502, 395 520, 370 520 L 50 520 C 25 520, 0 502, 0 470 L 0 50 C 0 18, 25 0, 50 0 Z')`,
          WebkitClipPath: `path('M 50 0 C 85 0, 105 12, 160 18 C 210 24, 210 24, 260 18 C 315 12, 335 0, 370 0 C 395 0, 420 18, 420 50 L 420 470 C 420 502, 395 520, 370 520 L 50 520 C 25 520, 0 502, 0 470 L 0 50 C 0 18, 25 0, 50 0 Z')`,
        }}
      ></div> */}

      {/* ===== MAIN SHAPE ===== */}
      <div
        className="relative z-0 backdrop-blur-[15px]"
        style={{
          width: "420px",
          height: "520px",
          background: "#FFFFFF0D",

          border: "1px solid",
          borderImageSource:
            "linear-gradient(149.83deg, #FFFFFF 6.85%, #000000 94.86%)",
          borderImageSlice: 1,

          clipPath: `path('M 50 0 C 85 0, 105 12, 160 18 C 210 24, 210 24, 260 18 C 315 12, 335 0, 370 0 C 395 0, 420 18, 420 50 L 420 470 C 420 502, 395 520, 370 520 L 50 520 C 25 520, 0 502, 0 470 L 0 50 C 0 18, 25 0, 50 0 Z')`,
        }}
      >
        <div className="flex flex-col items-center h-full px-6 pt-24 pb-12 justify-between text-white">
          <div className="flex flex-col gap-14">
            <div className="w-2 h-10"></div>
            <div className="w-2 h-10"></div>
            <div className="w-2 h-5"></div>
          </div>

          {/* TEXT */}
          <div className="w-full text-center space-y-3">
            {children}
          </div>
        </div>
      </div>

      {/* ===== IMAGE ===== */}
      <div className="absolute left-[20%] -translate-x-1/4 -top-[130px] z-20">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-[459px] h-[459px] object-contain"
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

    </div>
  );
};

export default HeroBanner;
