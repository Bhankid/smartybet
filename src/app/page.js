"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("betslip");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs for the slider
  const imageUrls = [
    "https://placehold.co/1200x300/FF5733/FFFFFF?text=Image+1",
    "https://placehold.co/1200x300/33FF57/FFFFFF?text=Image+2",
    "https://placehold.co/1200x300/3357FF/FFFFFF?text=Image+3",
    "https://placehold.co/1200x300/FF33A1/FFFFFF?text=Image+4",
    "https://placehold.co/1200x300/FFC300/FFFFFF?text=Image+5",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [imageUrls.length]);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-1/5 p-4">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Popular</h2>
          <ul>
            <li className="mb-2 text-gray-800 font-semibold">
              Quizzes Today (10481)
            </li>
            <li className="mb-2 text-gray-800 font-semibold">
              Best Odds (241)
            </li>
            <li className="mb-2 text-gray-800 font-semibold">
              Odds &lt; 2.0 (1048)
            </li>
            <li className="mb-2 text-gray-800 font-semibold">Booking Codes</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Quiz</h2>
          <ul>
            <li className="mb-2 text-gray-800 font-semibold">NSMQ 299</li>
            <li className="mb-2 text-gray-800 font-semibold">JSMQ 299</li>
            <li className="mb-2 text-gray-800 font-semibold">Sharks 299</li>
            <li className="mb-2 text-gray-800 font-semibold">NIOC 299</li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-3/5 p-4">
        {/* Image Slider */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="w-full overflow-hidden rounded-lg">
            <img
              src={imageUrls[currentIndex]}
              alt={`Featured Image ${currentIndex + 1}`}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Featured Quizzes */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Featured Quizzes
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg text-center shadow-sm hover:shadow-md"
                >
                  <img
                    src="https://placehold.co/50x50"
                    alt="Quiz logo"
                    className="mx-auto mb-2 rounded-full"
                  />
                  <p className="text-gray-900 font-bold">Today</p>
                  <p className="text-gray-800 font-semibold">13:30</p>
                  <p className="text-gray-900 font-bold">NSMQ</p>
                  <p className="text-gray-700">Accra High</p>
                  <p className="text-gray-800">3.2</p>
                  <p className="text-gray-800">3.7</p>
                  <p className="text-gray-800">3.9</p>
                </div>
              ))}
          </div>
        </div>

        {/* Live Quizzes Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Live</h2>
          <div className="flex justify-between mb-2">
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold">
                All
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">
                NSMQ
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">
                JSMQ
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">
                Sharks
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">
                NIOC
              </button>
            </div>
            <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold">
              More v
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/5 p-4">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex mb-4">
            <button
              className={`px-4 py-2 w-1/2 ${
                activeTab === "betslip"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } rounded-l-lg font-semibold`}
              onClick={() => setActiveTab("betslip")}
            >
              Betslip
            </button>
            <button
              className={`px-4 py-2 w-1/2 ${
                activeTab === "mybets"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } rounded-r-lg font-semibold`}
              onClick={() => setActiveTab("mybets")}
            >
              My Bets
            </button>
          </div>
          {activeTab === "betslip" ? (
            <div>
              <label className="block mb-2 text-gray-900 font-semibold">
                Please insert booking code
              </label>
              <input
                type="text"
                placeholder="Booking code"
                className="w-full p-2 mb-2 border rounded-lg"
              />
              <button className="w-full p-2 bg-blue-500 text-white rounded-lg font-semibold">
                Load
              </button>
            </div>
          ) : (
            <div>
              <p className="text-center text-gray-800 font-semibold">
                No bets available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
