import React from "react";
import Skeleton from "./Skeleton"; 

const MobileSkeleton = () => {
  return (
    <div className="block md:hidden p-2">
      {/* Slider */}
      <div className="bg-blue-200 h-24 rounded mb-2 overflow-hidden">
        <div className="marquee">
          <Skeleton width="100%" height="100%" />
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-lg shadow p-4 mb-2 flex justify-around">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <Skeleton width="20px" height="20px" />
            <Skeleton width="40px" height="20px" />
          </div>
        ))}
      </div>

      {/* Odds */}
      <div className="bg-white rounded-lg shadow p-1 mb-2 overflow-hidden">
        <div
          className="odds scrollable-buttons"
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <button
              key={index}
              className="bg-blue-100 rounded-full px-1 py-1 text-xs mx-1"
            >
              <Skeleton width="60px" height="20px" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow p-2">
        {/* Card Slider */}
        <div className="flex items-center mb-2 bg-blue-100 rounded-lg p-0.5">
          <Skeleton width="20px" height="20px" />
          <Skeleton width="80px" height="20px" />
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} width="20px" height="20px" />
          ))}
        </div>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="min-w-full flex flex-col">
                <div className="bg-blue-50 rounded-lg p-2">
                  <Skeleton width="100%" height="20px" />
                  <Skeleton width="100%" height="20px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIVE Quizzes */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-2 mt-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Skeleton width="80px" height="20px" />
          <Skeleton width="40px" height="20px" />
          <div className="flex space-x-2 text-sm">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} width="40px" height="20px" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-0 w-full rounded-lg">
          <div className="bg-gray-100 p-0.5 h-6 rounded-lg mb-2 flex justify-end text-gray-500 text-sm">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} width="20px" height="20px" />
            ))}
          </div>
          <div className="mb-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <Skeleton width="80px" height="20px" />
                <Skeleton width="20px" height="20px" />
                <div className="flex space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} width="40px" height="20px" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quizzes Section */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-2 mt-10">
        <div className="flex justify-between items-center mb-4">
          <Skeleton width="80px" height="20px" />
          <div className="border-l-2 border-blue-500 h-6 mx-2"></div>
          <div className="flex space-x-2 text-sm">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} width="40px" height="20px" />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mb-4 overflow-hidden">
          <div className="flex space-x-2 overflow-x-auto whitespace-nowrap scrollable-buttons">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} width="40px" height="20px" />
            ))}
          </div>
        </div>
        <div className="bg-white p-0 w-full rounded-lg">
          <div className="bg-gray-100 p-0.5 h-6 rounded-lg mb-2 flex justify-end text-gray-500 text-sm">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} width="20px" height="20px" />
            ))}
          </div>
          <div className="mb-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <Skeleton width="80px" height="20px" />
                <Skeleton width="20px" height="20px" />
                <div className="flex space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} width="40px" height="20px" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSkeleton;
