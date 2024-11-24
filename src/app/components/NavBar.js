"use client";

import React from "react";
import Link from "next/link";

function Nav() {
  const [active, setActive] = React.useState("Home");

  const navItems = [
    "Home",
    "Quizzes",
    "Live Quiz",
    "My Quizzes",
    "Virtual Promotion",
    "Games",
    "App",
  ];

  return (
    <div className="bg-blue-600 text-white flex flex-col px-16 py-4">
      {/* Mobile Layout */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <div className="text-2xl font-bold">SmartyBet</div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded">
            Join Now
          </button>
          <button className="border border-white text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between mb-4">
        <div className="text-2xl font-bold">SmartyBet</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span>GHS 0</span>
            <i className="fas fa-eye"></i>
            <i className="fas fa-sync-alt"></i>
          </div>
          <div className="border-l-2 border-white h-5"></div>{" "}
          {/* Thicker vertical border */}
          <Link href="/deposit">Deposit</Link>
          <div className="border-l-2 border-white h-5"></div>{" "}
          {/* Thicker vertical border */}
          <Link href="/my-bets">My Bets</Link>
          <div className="border-l-2 border-white h-5"></div>{" "}
          {/* Thicker vertical border */}
          <Link href="/my-account" className="flex items-center">
            My Account <i className="fa fa-angle-down ml-1"></i>
          </Link>
        </div>
      </div>

      {/* Navigation Links and Search Icon (Only visible on Desktop) */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex space-x-6 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span
                onClick={() => setActive(item)}
                className={`relative mb-1 ${
                  active === item ? "border-b-4 border-white" : ""
                }`}
              >
                <em>{item}</em>
                {item === "App" && (
                  <span className="absolute top-0 right-0 bg-red-500 text-xs text-white px-1 rounded-full">
                    Hot
                  </span>
                )}
              </span>
            </Link>
          ))}
        </div>
        {/* Search Icon for Desktop (Placed inline with nav links) */}
        <i className="fas fa-search text-white text-xl ml-4"></i>
      </div>

      {/* Search Icon for Mobile */}
      <div className="flex justify-end mt-2 md:hidden">
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Nav;
