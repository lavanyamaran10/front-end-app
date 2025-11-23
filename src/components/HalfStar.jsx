import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const HalfStar = ({ size = 24 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        overflow: "hidden",
      }}
    >
      <StarIcon
        style={{
          color: "#FFD700",
          width: size * 2,   // render double width
          height: size,
        }}
      />
    </div>
  );
};

export default HalfStar;
