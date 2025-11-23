import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="relative inline-block px-10 py-6">

      {/* ---- LEFT BOTTOM BIG CURVE ---- */}
      <svg
        className="absolute bottom-0 left-0"
        width="140"
        height="140"
        viewBox="0 0 140 140"
      >
        <defs>
          {/* Base gradient */}
          <linearGradient id="leftGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#B6A450" />
            <stop offset="100%" stopColor="#707040" />
          </linearGradient>

          {/* Thicker highlight */}
          <linearGradient id="leftThick" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C8B45A" />
            <stop offset="100%" stopColor="#8A8755" />
          </linearGradient>
        </defs>

        {/* Base stroke */}
        <path
          d="M 130 140 
             H 50 
             Q 20 140 20 110
             V 50"
          stroke="url(#leftGrad)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Thicker horizontal enhancement */}
        <path
          d="M 130 140 
             H 50"
          stroke="url(#leftThick)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* ---- RIGHT TOP BIG CURVE ---- */}
      <svg
        className="absolute top-0 right-0"
        width="140"
        height="140"
        viewBox="0 0 140 140"
      >
        <defs>
          <linearGradient id="rightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B6A450" />
            <stop offset="100%" stopColor="#707040" />
          </linearGradient>

          <linearGradient id="rightThick" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8B45A" />
            <stop offset="100%" stopColor="#8A8755" />
          </linearGradient>
        </defs>

        {/* Base stroke */}
        <path
          d="M 20 0 
             H 90 
             Q 120 0 120 30
             V 90"
          stroke="url(#rightGrad)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Thicker horizontal enhancement */}
        <path
          d="M 20 0 
             H 90"
          stroke="url(#rightThick)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* ---- TITLE TEXT ---- */}
      <h2
        className="text-white font-inter font-semibold text-[55px] leading-none tracking-tight"
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
