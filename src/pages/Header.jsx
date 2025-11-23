import React, { useState, useEffect } from "react";
import plant from "../assets/plant.png";
import searchIcon from "../assets/search.png";
import bagIcon from "../assets/bag.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Show blur only when user scrolls OR mobile menu is open
  const showBlur = isScrolled || isMenuOpen;

  const headerStyle = showBlur
    ? {
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(27, 35, 23, 0.5)",
      }
    : {
        backgroundColor: "transparent",
      };

  return (
    <>
      {/* HEADER BAR */}
      <div
        className="fixed top-0 left-0 right-0 w-full min-h-[clamp(70px,calc((100vw/1728)*105),105px)]
                   flex flex-row items-center justify-between px-10 overflow-x-hidden 
                   max-w-full z-50 transition-all duration-300"
        style={headerStyle}
      >
        {/* LEFT SECTION (Logo) */}
        <div className="flex flex-row items-center gap-[clamp(8px,calc((100vw/1728)*16),16px)] flex-shrink-0">
          <img
            src={plant}
            alt="FloraVision logo"
            className="
              w-[clamp(28px,calc((100vw/1728)*48),48px)] 
              h-[clamp(28px,calc((100vw/1728)*48),48px)]
              object-contain opacity-100
            "
          />

          <span
            className="
              font-inter font-black text-white leading-[100%]
              text-[clamp(18px,calc((100vw/1728)*28),28px)]
            "
          >
            FloraVision.
          </span>
        </div>

        {/* CENTER NAV (Desktop only) */}
        <div className="hidden md:flex flex-row items-center gap-[clamp(20px,calc((100vw/1728)*56),56px)] flex-1 justify-center">
          <a className="text-white font-indie-flower text-[clamp(16px,calc((100vw/1728)*24),24px)]">Home</a>
          <div className="flex flex-row items-center gap-[clamp(8px,calc((100vw/1728)*16),16px)]">
            <a className="text-white font-indie-flower text-[clamp(16px,calc((100vw/1728)*24),24px)]">Plants Type</a>
            <span
              className="
                block w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px]
                border-l-transparent border-r-transparent border-t-white
              "
            />
          </div>

          <a className="text-white font-indie-flower text-[clamp(16px,calc((100vw/1728)*24),24px)]">More</a>
          <a className="text-white font-indie-flower text-[clamp(16px,calc((100vw/1728)*24),24px)]">Contact</a>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex flex-row items-center gap-[clamp(10px,calc((100vw/1728)*24),24px)] flex-shrink-0">
          {/* MOBILE NAV TOGGLE */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl font-bold"
          >
            ≡
          </button>

          <img src={searchIcon} className="w-[26px] h-[26px]" />
          <img src={bagIcon} className="w-[26px] h-[26px]" />

          <div className="flex flex-col gap-[9px] items-end">
            <span className="block h-0 border-t-white w-[31px] border-t-[4px]" />
            <span className="block h-0 border-t-white w-[23px] border-t-[4px]" />
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <div
          className="fixed top-[clamp(70px,calc((100vw/1728)*105),105px)] left-0 right-0
                     w-full z-[9999] md:hidden transition-all duration-300"
          style={{
            backdropFilter: "blur(15px)",
            backgroundColor: "rgba(27, 35, 23, 0.5)",
          }}
        >
          <div className="flex flex-col py-4 px-10 w-full">
            <a className="text-white py-3 border-b border-white/10 text-center" onClick={toggleMenu}>Home</a>
            <div className="flex flex-row items-center justify-center gap-4 py-3 border-b border-white/10">
              <a className="text-white" onClick={toggleMenu}>Plants Type</a>
              <span className="block w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-t-white border-l-transparent border-r-transparent"/>
            </div>
            <a className="text-white py-3 border-b border-white/10 text-center" onClick={toggleMenu}>More</a>
            <a className="text-white py-3 text-center" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
