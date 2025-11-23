import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="relative inline-block px-6 py-4">
      {/* ---- LEFT BOTTOM CORNER ---- */}
      <svg
        className="absolute bottom-0 left-0"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <defs>
          <linearGradient id="leftGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#B6A450" />
            <stop offset="100%" stopColor="#707040" />
          </linearGradient>
        </defs>
        <path
          d="M 50 50 H 15 Q 0 50 0 35 V 15"
          stroke="url(#leftGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* ---- RIGHT TOP CORNER ---- */}
      <svg
        className="absolute top-0 right-0"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <defs>
          <linearGradient id="rightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B6A450" />
            <stop offset="100%" stopColor="#707040" />
          </linearGradient>
        </defs>
        <path
          d="M 0 0 H 35 Q 50 0 50 15 V 35"
          stroke="url(#rightGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* ---- TITLE TEXT ---- */}
      <h2
        className="text-white font-inter font-semibold
                   text-[20px] md:text-[35px] lg:text-[55px]
                   leading-none tracking-tight"
        style={{
          textShadow: `
            0px 2px 2px #00000016,
            0px 4px 4px #00000020,
            0px 8px 6px #00000027,
            0px 12px 10px #0000002E,
            0px 20px 15px #00000034,
            0px 30px 24px #0000003C,
            0px 50px 40px #00000046,
            0px 100px 80px #0000005C
          `,
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
