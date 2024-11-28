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
    <>
      <div className="bg-blue-600 text-white flex flex-col md:px-16 py-2">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between ml-3 mb-4 md:hidden">
          <div className="text-lg font-bold">SmartyBet</div>
          <div className="flex items-center space-x-3 mr-4">
            <div className="flex items-center space-x-1">
              <i className="fas fa-search text-white text-sm mr-1"></i>
              <button className="bg-white text-blue-600 px-1 py-0.5 rounded">
                Join Now
              </button>
            </div>
            <button className="border border-white text-white px-1 py-0.5 rounded mr-4">
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
            <div className="border-l-2 border-white h-6"></div>
            <Link href="/deposit">Deposit</Link>
            <div className="border-l-2 border-white h-6"></div>
            <Link href="/my-bets">My Bets</Link>
            <div className="border-l-2 border-white h-6"></div>
            <Link href="/my-account" className="flex items-center">
              My Account <i className="fa fa-angle-down ml-1"></i>
            </Link>
          </div>
        </div>

        {/* Navigation Links and Search Icon (Only visible on Desktop) */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex space-x-6 overflow-x-auto overflow-hidden">
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
                    <span
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full"
                      style={{
                        fontSize: "0.48rem",
                        padding: "0.1rem 0.1rem",
                        top: "-0.3rem",
                        right: "0.01rem",
                      }}
                    >
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
        {/* <div className="flex justify-end mt-2 mr-4 md:hidden">
        <i className="fas fa-search"></i>
      </div> */}
      </div>
    </>
  );
}

export default Nav;
