import React from "react";

const Skeleton = ({ width, height }) => {
  return (
    <div
      style={{
        width: width || "100%",
        height: height || "20px",
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        animation: "skeleton-animation 1.5s infinite",
      }}
      className="skeleton"
    />
  );
};

export default Skeleton;
