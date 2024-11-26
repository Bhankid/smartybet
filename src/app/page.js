"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Matches } from "./components/Matches";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Betslip");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const imageUrls = [
    "https://i.postimg.cc/bJ24mP2j/qz.png",
    "https://i.postimg.cc/DwrkTnCf/Frame-94.png",
    "https://i.postimg.cc/C169N1K7/Amanfuor.png",
    "https://i.postimg.cc/Hk6GxBCF/id.png",
    "https://i.postimg.cc/5Ndjq5RX/bg0.jpg",
  ];

  const cardsData = [
    {
      title: "Best Odds",
      event: ["1 W", "2 W", "3 W"],
      odds: ["3.98", "3.67", "2.01"],
      category: "NSMQ",
    },
    {
      title: "Best Odds",
      event: ["SCH W", "SCH W", "SCH W"],
      odds: ["3.98", "3.67", "2.01"],
      category: "Sharks",
    },
    {
      title: "Best Odds",
      event: ["1 W", "2 W", "3 W"],
      odds: ["3.98", "3.67", "2.01"],
      category: "NSMQ",
    },
    {
      title: "Best Odds",
      event: ["SCH W", "SCH W", "SCH W"],
      odds: ["3.98", "3.67", "2.01"],
      category: "Sharks",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        setIsTransitioning(false); // Reset transitioning state
      }, 500); // Duration of the transition
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <>
      <div className="block md:hidden p-2">
        <div className="bg-blue-200 h-24 mb-2 overflow-hidden">
          <div className="marquee">
            <img
              src="https://i.postimg.cc/bJ24mP2j/qz.png"
              alt="Slider Image 1"
              className="h-full w-full"
            />
            <img
              src="https://i.postimg.cc/DwrkTnCf/Frame-94.png"
              alt="Slider Image 2"
              className="h-full w-full"
            />
            <img
              src="https://i.postimg.cc/C169N1K7/Amanfuor.png"
              alt="Slider Image 3"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-2 mb-2 flex justify-around">
          <div className="flex flex-col items-center">
            <i className="fas fa-home text-xl mb-1"></i>
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-play-circle text-xl mb-1"></i>
            <span className="text-xs">Live Quizzes</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-question-circle text-xl mb-1"></i>
            <span className="text-xs">Quizzes</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-user-circle text-xl mb-1"></i>
            <span className="text-xs">My Quizzes</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-vr-cardboard text-xl mb-1"></i>
            <span className="text-xs">Virtuals</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-ellipsis-h text-xl mb-1"></i>
            <span className="text-xs">More</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-2 mb-2 overflow-hidden">
          <div className="marquee">
            <button className="bg-blue-100 rounded-full px-2 py-1 text-xs mx-1">
              Best Odds
            </button>
            <button className="bg-blue-100 rounded-full px-2 py-1 text-xs mx-1">
              Quizzes Today
            </button>
            <button className="bg-blue-100 rounded-full px-2 py-1 text-xs mx-1">
              Odds &lt; 2.0
            </button>
            <button className="bg-blue-100 rounded-full px-2 py-1 text-xs mx-1">
              Booking Code
            </button>
            <button className="bg-blue-100 rounded-full px-2 py-1 text-xs mx-1">
              Best Odds
            </button>
            <button className="bg-blue-100 rounded-full px-2 py-1 text-xs mx-1">
              Quizzes Today
            </button>
            <button className="bg-blue-100 rounded-full px-2 py-1 text-xs mx-1">
              Odds &lt; 2.0
            </button>
            <button className="bg-blue-100 rounded-full px-2 py-1 text-xs mx-1">
              Booking Code
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-2">
          <div className="flex items-center mb-2 bg-blue-100 rounded-lg p-1">
            <Image
              src="https://i.postimg.cc/152FXy6V/ac.png"
              alt="Accra Academy logo"
              className="mb-1"
              width={20}
              height={20}
            />
            <span className="text-xs font-bold mr-2">NSMQ</span>
            <Image
              src="https://i.postimg.cc/152FXy6V/ac.png"
              alt="Accra Academy logo"
              className="mb-1"
              width={20}
              height={20}
            />
            <Image
              src="https://i.postimg.cc/152FXy6V/ac.png"
              alt="Accra Academy logo"
              className="mb-1"
              width={20}
              height={20}
            />
            <Image
              src="https://i.postimg.cc/152FXy6V/ac.png"
              alt="Accra Academy logo"
              className="mb-1"
              width={20}
              height={20}
            />
            <Image
              src="https://i.postimg.cc/152FXy6V/ac.png"
              alt="Accra Academy logo"
              className="mb-1"
              width={20}
              height={20}
            />
            <Image
              src="https://i.postimg.cc/152FXy6V/ac.png"
              alt="Accra Academy logo"
              className="mb-1"
              width={20}
              height={20}
            />
          </div>
          <div className="bg-blue-50 rounded-lg p-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <i className="fas fa-fire text-pink-500 mr-1"></i>
                <span className="text-xs font-bold text-pink-500">
                  NSMQ - Finals
                </span>
              </div>
              <div className="text-xs">19:45</div>
              <div className="text-xs">Todav</div>
              <div className="text-xs">123</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <Image
                  src="https://i.postimg.cc/152FXy6V/ac.png"
                  alt="Accra Academy logo"
                  className="mb-1"
                  width={20}
                  height={20}
                />
                <span className="text-xs">Accra Academy</span>
                <span className="text-xs">1</span>
                <span className="text-xs">2.65</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://i.postimg.cc/152FXy6V/ac.png"
                  alt="Accra Academy logo"
                  className="mb-1"
                  width={20}
                  height={20}
                />
                <span className="text-xs">Accra Academy</span>
                <span className="text-xs">2</span>
                <span className="text-xs">3.25</span>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://i.postimg.cc/VNjn22Jr/ag.png"
                  alt="Accra Girls logo"
                  className="mb-1"
                  crossOrigin="anonymous"
                  width={20}
                  height={20}
                />
                <span className="text-xs">Accra Girls</span>
                <span className="text-xs">3</span>
                <span className="text-xs">3.00</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-gray-500"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Two */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 mt-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="text-lg font-bold">LIVE</div>
              <div className="h-6 border-l-2 border-blue-500 mx-2"></div>
              <div className="text-blue-500 cursor-pointer">All</div>
            </div>
            <div className="flex space-x-4">
              <div className="text-gray-500 cursor-pointer">NSMQ</div>
              <div className="text-gray-500 cursor-pointer">JSMQ</div>
              <div className="text-gray-500 cursor-pointer">Sharks</div>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm md:px-2 md:py-1 md:text-base cursor-pointer">
                1 2 3
              </button>
              <button className="border border-blue-500 text-blue-500 rounded-full px-3 py-1 text-sm md:px-2 md:py-1 md:text-base cursor-pointer">
                Over / Under
              </button>
              <button className="border border-blue-500 text-blue-500 rounded-full px-3 py-1 text-sm md:px-2 md:py-1 md:text-base cursor-pointer">
                Handicap
              </button>
              <button className="border border-blue-500 text-blue-500 rounded-full px-3 py-1 text-sm md:px-2 md:py-1 md:text-base cursor-pointer">
                Round
              </button>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg p-1 mb-4">
            <div className="flex justify-end space-x-4 text-blue-500">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4 relative">
            <div className="flex justify-between items-center mb-2">
              <div className="text-red-500 text-sm">9&apos; 43”</div>
              <div className="text-gray-500 text-sm">Round 1</div>
              <div className="text-blue-500 text-sm">NSMQ</div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-700">Accra Academy</div>
              <div className="text-gray-700">15</div>
              <div className="flex space-x-2">
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  9.75
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  3.40
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  1.45
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-700">Accra Academy</div>
              <div className="text-gray-700">15</div>
              <div className="flex space-x-2">
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  9.75
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  3.40
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  1.45
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-700">Accra Academy</div>
              <div className="text-gray-700">15</div>
              <div className="flex space-x-2">
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  9.75
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  3.40
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  1.45
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4 relative">
            <div className="absolute -top-4 right-0 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
              0
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-red-500 text-sm">9&apos; 43”</div>
              <div className="text-gray-500 text-sm">Round 1</div>
              <div className="text-blue-500 text-sm">Sharks</div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-700">Accra Academy</div>
              <div className="text-gray-700">15</div>
              <div className="flex space-x-2">
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  9.75
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  3.40
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  1.45
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-700">Accra Academy</div>
              <div className="text-gray-700">15</div>
              <div className="flex space-x-2">
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  9.75
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  3.40
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  1.45
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-700">Accra Academy</div>
              <div className="text-gray-700">15</div>
              <div className="flex space-x-2">
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  9.75
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  3.40
                </div>
                <div className="bg-gray-100 text-gray-700 rounded px-2 py-1">
                  1.45
                </div>
              </div>
            </div>
          </div>
          <div className="text-blue-500 text-center mt-4 cursor-pointer">
            All Events <i className="fas fa-chevron-right"></i>
          </div>
        </div>

        {/* Three */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 mt-10">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">Quizzes</h1>
            <div className="border-l-2 border-blue-500 h-6 mx-2"></div>
            <div className="flex space-x-2 text-sm">
              <a href="#" className="text-blue-500">
                All
              </a>
              <a href="#" className="text-gray-500">
                NSMQ
              </a>
              <a href="#" className="text-gray-500">
                JSMQ
              </a>
              <a href="#" className="text-gray-500">
                Sharks
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <button className="px-3 py-1 border rounded-full text-blue-500 border-blue-500 text-sm">
              1 2 3
            </button>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                Over / Under
              </button>
              <button className="px-3 py-1 border rounded-full text-blue-500 border-blue-500 text-sm">
                Handicap
              </button>
              <button className="px-3 py-1 border rounded-full text-blue-500 border-blue-500 text-sm">
                Round
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mb-2 flex justify-end text-gray-500 text-sm">
              <span className="mr-8">Points</span>
              <span className="mr-8">Over</span>
              <span>Under</span>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">21 Nov 13:15</span>
                <span className="text-blue-500">JSMQ</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Accra Academy</span>
                <span className="text-blue-500">15</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">9.75</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">3.40</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">1.45</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Accra Academy</span>
                <span className="text-blue-500">15</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">9.75</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">3.40</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">1.45</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Accra Academy</span>
                <span className="text-blue-500">15</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">9.75</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">3.40</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">1.45</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 mb-4"></div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">30 Dec 01:00</span>
                <span className="text-blue-500">Sharks</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Accra Academy</span>
                <span className="text-blue-500">15</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">9.75</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">3.40</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">1.45</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Accra Academy</span>
                <span className="text-blue-500">15</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">9.75</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">3.40</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">1.45</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Accra Academy</span>
                <span className="text-blue-500">15</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">9.75</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">3.40</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-lg">1.45</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="text-blue-500">
              Full Schedule <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="min-h-screen hidden md:flex bg-[#E7EDF6]">
        {/* Left Sidebar */}
        <div className="w-1/5 p-2">
          {/* <div className="bg-white p-4 rounded-lg shadow-md mb-4">
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
        </div> */}

          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-bold">
              Pop<span className="text-blue-600">ular</span>
            </h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <i className="fas fa-headphones-alt text-xl"></i>
                <span className="ml-2 text-gray-700 text-md">
                  Quizzes Today (9148)
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-headphones-alt text-xl"></i>
                <span className="ml-2 text-gray-700 text-md">
                  Best Odds (241)
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-headphones-alt text-xl"></i>
                <span className="ml-2 text-gray-700 text-md">
                  Odds &lt; 2.0 (1048)
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-headphones-alt text-xl"></i>
                <span className="ml-2 text-gray-700 text-md">
                  Booking Codes
                </span>
              </li>
            </ul>
          </div>

          {/* <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Quiz</h2>
          <ul>
            <li className="mb-2 text-gray-800 font-semibold">NSMQ 299</li>
            <li className="mb-2 text-gray-800 font-semibold">JSMQ 299</li>
            <li className="mb-2 text-gray-800 font-semibold">Sharks 299</li>
            <li className="mb-2 text-gray-800 font-semibold">NIOC 299</li>
          </ul>
        </div> */}

          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <h1 className="text-lg font-bold mb-4">
              <span className="text-gray-800">Qu</span>
              <span className="text-blue-600">iz</span>
            </h1>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>NSMQ</span>
              <span>299</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>JSMQ</span>
              <span>299</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Sharks</span>
              <span>299</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>NIQC</span>
              <span>299</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              Ran<span className="text-blue-500">king</span>
            </h2>
            <div className="mt-2">
              <div className="flex justify-between text-gray-700">
                <span>Presby Boys Sec</span>
                <span>12</span>
              </div>
              <div className="flex justify-between text-gray-700 mt-2">
                <span>Prempeh</span>
                <span>12</span>
              </div>
              <div className="flex justify-between text-gray-700 mt-2">
                <span>St. Peters</span>
                <span>12</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              Coun<span className="text-blue-500">tries</span>
            </h2>
            <div className="mt-2">
              <div className="flex justify-between text-gray-700">
                <span>Ghana</span>
                <span>12</span>
              </div>
              <div className="flex justify-between text-gray-700 mt-2">
                <span>United States</span>
                <span>12</span>
              </div>
              <div className="flex justify-between text-gray-700 mt-2">
                <span>United Kingdom</span>
                <span>12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-3/5 p-2">
          {/* Image Slider */}
          <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="relative w-full h-60 overflow-hidden rounded-lg">
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src={imageUrls[currentIndex]}
                  alt={`Featured Image ${currentIndex + 1}`}
                  layout="fill"
                  crossOrigin="anonymous"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Featured Quizzes */}
          <div className="bg-white p-2 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Featured Quizzes
            </h2>
            <div className="auto-scroll">
              <div className="scroll-container flex space-x-4">
                {cardsData.map((card, index) => (
                  <div
                    key={index}
                    className="bg-[#E7EDF6] rounded-lg shadow p-4 flex-shrink-0"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold">
                        Best Odds <i className="fas fa-fire text-red-500"></i>
                      </span>
                      <span className="text-sm">
                        Today{" "}
                        <span className="text-blue-500 font-bold">13:30</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <Image
                        src="/p.jpeg"
                        alt="Presby Sch logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                        crossOrigin="anonymous"
                      />
                      <Image
                        src="/m.jpeg"
                        alt="Mfantsipim Sch logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                        crossOrigin="anonymous"
                      />
                      <Image
                        src="/s.jpeg"
                        alt="St. Augustine Sch logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Presby Sch</span>
                      <span className="text-sm">Mfantsipim Sch</span>
                      <span className="text-sm">St. Augustine Sch</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">{card.event[0]}</span>
                      <span className="text-sm">{card.event[1]}</span>
                      <span className="text-sm">{card.event[2]}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">{card.odds[0]}</span>
                      <span className="text-sm">{card.odds[1]}</span>
                      <span className="text-sm">{card.odds[2]}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-500 text-sm">
                        {card.category}
                      </span>
                      <Link href="/target-url">
                        <span className="text-blue-500 text-sm">
                          More Events (3){" "}
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Quizzes Section */}
          <div className="bg-[#f9fcff]  rounded-lg shadow-md p-4 mb-4">
            <div className="p-4 bg-white rounded-lg shadow-sm mb-2">
              <h1 className="text-xl font-bold mb-4">Live</h1>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <button className="text-blue-500 font-semibold">All</button>
                  <button className="text-gray-500">NSMQ</button>
                  <button className="text-gray-500">JSMQ</button>
                  <button className="text-gray-500">Sharks</button>
                  <button className="text-gray-500">NIQC</button>
                </div>
                <button className="text-gray-500">
                  More <i className="fas fa-chevron-down"></i>
                </button>
              </div>
              <hr className="mb-4" />
              <div className="flex justify-end items-center space-x-4">
                <input
                  type="text"
                  className="border rounded px-2 py-1 w-40"
                  placeholder="1 2 3"
                />
                <select className="border rounded px-1 py-1">
                  <option>1st Correct School</option>
                </select>
              </div>
            </div>
            {/* <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              className="border rounded p-2 w-1/3"
              placeholder="1 2 3"
            />
            <select className="border rounded p-2 w-1/3">
              <option>1st Correct School</option>
            </select>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">02/11 Saturday</span>
              <span className="text-gray-500">
                National Science and Maths Quiz
              </span>
              <span className="text-blue-500">+12 &gt;</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-500">Round 1</span>
                <span className="text-red-500">9&apos; 43&quot;</span>
              </div>
              <div className="text-red-500 font-bold mb-2">NSMQ</div>
              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span>Accra High</span>
                  <span className="text-blue-500">3</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span>Accra Academy</span>
                  <span className="text-blue-500">15</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span>St. Thomas Aquinas</span>
                  <span className="text-blue-500">0</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col items-center space-y-1">
                  <span>Points</span>
                  <button className="border rounded p-2 w-20">20.00</button>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <span>Over</span>
                  <button className="border rounded p-2 w-20">20.00</button>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <span>Under</span>
                  <button className="border rounded p-2 w-20">15.00</button>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <span>Extra Market Available</span>
                  <button className="border rounded p-2 w-20">20.00</button>
                  <button className="border rounded p-2 w-20">20.00</button>
                  <button className="border rounded p-2 w-20">15.00</button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>
                  Round 1: <span className="text-blue-500">015</span>
                  <span className="text-red-500">012</span>
                  <span className="text-red-500">003</span>
                </span>
                <span>
                  Round 2: <span className="text-gray-500">000</span>
                  <span className="text-gray-500">000</span>
                  <span className="text-gray-500">000</span>
                </span>
                <span>
                  Round 3: <span className="text-gray-500">000</span>
                  <span className="text-gray-500">000</span>
                  <span className="text-gray-500">000</span>
                </span>
                <span className="text-red-500">
                  <i className="fas fa-fire"></i>
                </span>
                <span className="text-red-500">
                  <i className="fas fa-chart-line"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">02/11 Saturday</span>
              <span className="text-gray-500">
                National Science and Maths Quiz
              </span>
              <span className="text-blue-500">+12 &gt;</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-500">Round 1</span>
                <span className="text-red-500">9&apos; 43&quot;</span>
              </div>
              <div className="text-red-500 font-bold mb-2">NSMQ</div>
              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span>Accra High</span>
                  <span className="text-blue-500">3</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span>Accra Academy</span>
                  <span className="text-blue-500">15</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span>St. Thomas Aquinas</span>
                  <span className="text-blue-500">0</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col items-center space-y-1">
                  <span>Points</span>
                  <button className="border rounded p-2 w-20">20.00</button>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <span>Over</span>
                  <button className="border rounded p-2 w-20">20.00</button>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <span>Under</span>
                  <button className="border rounded p-2 w-20">15.00</button>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <span>Extra Market Available</span>
                  <button className="border rounded p-2 w-20">20.00</button>
                  <button className="border rounded p-2 w-20">20.00</button>
                  <button className="border rounded p-2 w-20">15.00</button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>
                  Round 1: <span className="text-blue-500">015</span>
                  <span className="text-red-500">012</span>
                  <span className="text-red-500">003</span>
                </span>
                <span>
                  Round 2: <span className="text-gray-500">000</span>
                  <span className="text-gray-500">000</span>
                  <span className="text-gray-500">000</span>
                </span>
                <span>
                  Round 3: <span className="text-gray-500">000</span>
                  <span className="text-gray-500">000</span>
                  <span className="text-gray-500">000</span>
                </span>
                <span className="text-red-500">
                  <i className="fas fa-fire"></i>
                </span>
                <span className="text-red-500">
                  <i className="fas fa-chart-line"></i>
                </span>
              </div>
            </div>
          </div> */}

            <div className="flex justify-between items-center mb-2">
              <div className="text-gray-500 text-sm">02/11 Saturday</div>
              <div className="text-gray-500 text-sm text-right">
                National Science and Maths Quiz
              </div>
            </div>
            <div className="space-y-4">
              {[1, 2].map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-gray-500 text-sm">
                      Round 1{" "}
                      <span className="text-red-500">9&apos; 43&quot;</span>
                    </div>
                    <div className="text-blue-500 text-sm">+12 &gt;</div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-red-500 text-lg font-bold">NSMQ</div>
                    <div className="flex space-x-2 text-center text-gray-500 text-sm">
                      <div className="w-12">1</div>
                      <div className="w-16">2</div>
                      <div className="w-16">3</div>
                      <div className="w-18">1st Correct School</div>
                    </div>
                  </div>
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">Accra High</div>
                      <div className="text-blue-500 w-8 text-center">3</div>
                      <div className="flex space-x-2">
                        <button className="w-12  flex items-center justify-center border rounded">
                          <i className="fas fa-lock text-gray-500"></i>
                        </button>
                        <button className="w-12 text-center border rounded p-1 text-sm">
                          10.00
                        </button>
                        <button className="w-12 text-center border rounded p-1 text-sm">
                          100.00
                        </button>
                        <button className="w-12 text-center border rounded p-1 text-sm">
                          +1.10
                        </button>
                        <button className="w-12 text-center border rounded p-1 text-sm">
                          +10.00
                        </button>
                        <button className="w-12 text-center border rounded p-1 bg-blue-500 text-white text-sm">
                          +50.00
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex-1">Accra Academy</div>
                      <div className="text-blue-500 w-8 pl-1 text-center">
                        15
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 text-center">Points</div>
                        <div className="w-12 text-center">Over</div>
                        <div className="w-12 text-center">Under</div>
                        <div className="w-34 text-center">
                          Extra Markets Available
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex-1">St. Thomas Aquinas</div>
                      <div className="text-blue-500 w-8 text-center">0</div>
                      <div className="flex space-x-2">
                        <select className="w-12 text-sm text-center border rounded p-1">
                          <option value="20.00">20.00</option>
                        </select>
                        <div className="flex space-x-2">
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            20.00
                          </button>
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            15.00
                          </button>
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            20.00
                          </button>
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            20.00
                          </button>
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            15.00
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm mb-2">
                    Round 1: <span className="text-blue-500">015</span>{" "}
                    <span className="text-gray-500">012</span>{" "}
                    <span className="text-red-500">003</span> | Round 2:{" "}
                    <span className="text-gray-500">000</span>{" "}
                    <span className="text-gray-500">000</span>{" "}
                    <span className="text-gray-500">000</span> | Round 3:{" "}
                    <span className="text-gray-500">000</span>{" "}
                    <span className="text-gray-500">000</span>{" "}
                    <span className="text-gray-500">000</span>
                  </div>
                  <div className="flex justify-end items-center">
                    <i className="fas fa-fire text-red-500 mr-2"></i>
                    <i className="fas fa-chart-line text-red-500"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quizzes Section */}
          <div className=" bg-[#f9fcff] rounded-lg shadow p-4">
            <div className="bg-white rounded-lg shadow-sm mb-4 p-4">
              <h1 className="text-xl font-semibold mb-4">Quizzes</h1>
              <div className="flex items-center border-b-2 border-gray-200 mb-4">
                <button className="text-blue-500 font-semibold mx-4">
                  All
                </button>
                <button className="text-gray-500 mx-4">NSMQ</button>
                <button className="text-gray-500 mx-4">JSMQ</button>
                <button className="text-gray-500 mx-4">Sharks</button>
                <button className="text-gray-500 mx-4">NIQC</button>
                <div className="flex-grow"></div>
                <button className="text-gray-500 flex items-center">
                  More <i className="fas fa-chevron-down ml-1"></i>
                </button>
              </div>
              <div className="flex items-center">
                <button className="text-blue-500 font-semibold mr-4">
                  Highlights
                </button>
                <button className="text-gray-500 mr-4">Today</button>
                <div className="border-r-2 border-gray-200 h-6 mr-4"></div>
                <div className="flex-grow"></div>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-1 py-1 w-40 mr-4"
                  placeholder="1 2 3"
                />
                <select className="border border-gray-300 rounded px-1 py-1">
                  <option>1st Wrong School</option>
                </select>
              </div>
            </div>
            <div className="bg-white p-4 shadow-sm rounded-lg mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-gray-500 text-sm">02/11 Saturday</div>
                <div className="text-gray-500 text-sm text-right">
                  National Science and Maths Quiz
                </div>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-gray-500 text-sm">
                    Round 1{" "}
                    <span className=" text-red-500">9&apos; 43&quot;</span>
                  </div>
                  <div className="text-blue-500 text-sm">+12 &gt;</div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-red-500 text-lg font-bold">NSMQ</div>
                  <div className="flex space-x-2 text-center text-gray-500 text-sm">
                    <div className="w-12">1</div>
                    <div className="w-16">2</div>
                    <div className="w-16">3</div>
                    <div className="w-18">Regular vHandicap</div>
                  </div>
                </div>

                {/* <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span>Accra High</span>
                  <span className="text-blue-500">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Accra Academy</span>
                  <span className="text-blue-500">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>St. Thomas Aquinas</span>
                  <span className="text-blue-500">0</span>
                </div>
              </div> */}
                {/* <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-2">
                  <button className="bg-gray-200 rounded px-2 py-1">1</button>
                  <button className="bg-gray-200 rounded px-2 py-1">2</button>
                  <button className="bg-gray-200 rounded px-2 py-1">3</button>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 rounded px-2 py-1">
                    Regular vHandicap
                  </button>
                  <button className="bg-gray-200 rounded px-2 py-1">+12</button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-2">
                  <button className="bg-gray-200 rounded px-2 py-1">
                    10.00
                  </button>
                  <button className="bg-gray-200 rounded px-2 py-1">
                    100.00
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 rounded px-2 py-1">
                    +1.10
                  </button>
                  <button className="bg-gray-200 rounded px-2 py-1">
                    +10.00
                  </button>
                  <button className="bg-gray-200 rounded px-2 py-1">
                    +50.00
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-2">
                  <select className="bg-gray-200 rounded px-2 py-1">
                    <option>20.00</option>
                  </select>
                  <button className="bg-gray-200 rounded px-2 py-1">
                    20.00
                  </button>
                  <button className="bg-gray-200 rounded px-2 py-1">
                    15.00
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 rounded px-2 py-1">
                    20.00
                  </button>
                  <button className="bg-gray-200 rounded px-2 py-1">
                    20.00
                  </button>
                  <button className="bg-gray-200 rounded px-2 py-1">
                    15.00
                  </button>
                </div>
              </div> */}

                <div className="space-y-1 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">Accra High</div>
                    <div className="text-blue-500 w-8 text-center">3</div>
                    <div className="flex space-x-2">
                      <button className="w-12  flex items-center justify-center border rounded">
                        <i className="fas fa-lock text-gray-500"></i>
                      </button>
                      <button className="w-12 text-center border rounded p-1 text-sm">
                        10.00
                      </button>
                      <button className="w-12 text-center border rounded p-1 text-sm">
                        100.00
                      </button>
                      <button className="w-12 text-center border rounded p-1 text-sm">
                        +1.10
                      </button>
                      <button className="w-12 text-center border rounded p-1 text-sm">
                        +10.00
                      </button>
                      <button className="w-12 text-center border rounded p-1 bg-blue-500 text-white text-sm">
                        +50.00
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex-1">Accra Academy</div>
                    <div className="text-blue-500 w-8 pl-1 text-center">15</div>
                    <div className="flex space-x-2">
                      <div className="w-12 text-center">Points</div>
                      <div className="w-12 text-center">Over</div>
                      <div className="w-12 text-center">Under</div>
                      <div className="w-34 text-center">
                        Extra Markets Available
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex-1">St. Thomas Aquinas</div>
                    <div className="text-blue-500 w-8 text-center">0</div>
                    <div className="flex space-x-2">
                      <select className="w-12 text-sm text-center border rounded p-1">
                        <option value="20.00">20.00</option>
                      </select>
                      <div className="flex space-x-2">
                        <div className="flex space-x-2">
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            20.00
                          </button>
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            15.00
                          </button>
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            20.00
                          </button>
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            20.00
                          </button>
                          <button className="w-12 text-center border rounded p-1 text-sm">
                            15.00
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-500 text-sm mb-2">
                  Round 1: <span className="text-blue-500">015</span>{" "}
                  <span className="text-gray-500">012</span>{" "}
                  <span className="text-red-500">003</span> | Round 2:{" "}
                  <span className="text-gray-500">000</span>{" "}
                  <span className="text-gray-500">000</span>{" "}
                  <span className="text-gray-500">000</span> | Round 3:{" "}
                  <span className="text-gray-500">000</span>{" "}
                  <span className="text-gray-500">000</span>{" "}
                  <span className="text-gray-500">000</span>
                </div>
                <div className="flex justify-end items-center">
                  <i className="fas fa-fire text-red-500 mr-2"></i>
                  <i className="fas fa-chart-line text-red-500"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/5 p-2">
          <div className="bg-white rounded-2xl shadow-lg flex flex-col justify-between mb-4">
            <div className="p-6">
              <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
                <div
                  className={`text-lg font-semibold relative cursor-pointer ${
                    activeTab === "Betslip" ? "text-blue-600" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("Betslip")}
                >
                  Betslip
                  {activeTab === "Betslip" && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
                <div
                  className={`text-lg font-semibold relative cursor-pointer ${
                    activeTab === "My Bets" ? "text-blue-600" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("My Bets")}
                >
                  My Bets
                  {activeTab === "My Bets" && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </div>
              {activeTab === "Betslip" && (
                <div>
                  <div className="text-gray-700 mb-4">
                    Please insert booking code
                  </div>
                  <input
                    type="text"
                    placeholder="Booking code"
                    className="w-full border border-blue-400 rounded px-3 py-2 text-gray-500"
                  />
                </div>
              )}
              {activeTab === "My Bets" && (
                <div className="text-gray-700 mb-4">No bets available</div>
              )}
            </div>
            <button className="w-full bg-gray-300 text-gray-500 py-2 rounded-bl-2xl rounded-br-2xl">
              Load
            </button>
          </div>

          {/* Matches Component */}
          <Matches />

          {/* Button */}
          <div className="flex items-center bg-blue-600 rounded-full p-2 w-40 relative">
            <div className="bg-blue-600 rounded-full p-1">
              <i className="fa-solid fa-headset text-white text-xl"></i>
            </div>
            <div className="absolute right-0 bg-blue-600 rounded-3xl p-2 border-2 border-white">
              <i className="fas fa-arrow-left text-white text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
