import React from "react";

const Button = ({
  label = "Buy Now",
  fontFamily = "Inter",
  width = "217px",
  height = "64px",
}) => {
  return (
    <button
      style={{
        width,
        height,
        background: "transparent",
        border: "2px solid white",
        borderRadius: "12px",
        color: "white",
        fontFamily,
        fontWeight: 400,
        fontSize: "28px",
        lineHeight: "100%",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
