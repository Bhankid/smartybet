import React from "react";
import Skeleton from "./Skeleton"; 
import FooterSkeleton from "./FooterSekelton";
import MobileSkeleton from "./MobileSkeleton";


const Loading = () => {
    return (
      <>
        <MobileSkeleton />
        <div className="flex-col min-h-screen h-screen w-screen md:flex hidden">
          {" "}
          {/* Set height to 100vh */}
          <div className="flex flex-grow">
            {" "}
            {/* Left Sidebar */}
            <div className="w-1/5 p-2">
              <div className="bg-white p-4 rounded-lg shadow-md ">
                <h2 className="text-lg font-bold">
                  Pop<span className="text-blue-600">ular</span>
                </h2>
                <ul className="mt-4 space-y-2">
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md ">
                <h2 className="text-lg font-bold">
                  Qu<span className="text-blue-600">iz</span>
                </h2>
                <ul className="mt-4 space-y-2">
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md ">
                <h2 className="text-lg font-bold">
                  Ran<span className="text-blue-600">king</span>
                </h2>
                <ul className="mt-4 space-y-2">
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md ">
                <h2 className="text-lg font-bold">
                  Coun<span className="text-blue-600">tries</span>
                </h2>
                <ul className="mt-4 space-y-2">
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                  <Skeleton width="100%" height="40px" />
                </ul>
              </div>
            </div>
            {/* Main Content Area */}
            <div className="w-3/5 h-full p-2 flex flex-col">
              <div className="bg-white rounded-lg shadow-md mb-4 flex-grow">
                <Skeleton width="100%" height="240px" />{" "}
                {/* Image Slider Skeleton */}
              </div>
              <div className="bg-white p-1 rounded-lg shadow-md mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Featured Quizzes
                </h2>
                <div className="flex space-x-4">
                  <Skeleton width="100%" height="150px" />
                  <Skeleton width="100%" height="150px" />
                  <Skeleton width="100%" height="150px" />
                </div>
              </div>
              {/* Live Quizzes Section Skeleton */}
              <div className="bg-[#f9fcff] rounded-lg shadow-md p-0.5 mb-4">
                <div className="p-4 bg-white rounded-lg shadow-sm mb-2">
                  <h1 className="text-xl font-bold mb-4">
                    <Skeleton width="100px" height="24px" />
                  </h1>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <Skeleton width="40px" height="20px" />
                      <Skeleton width="40px" height="20px" />
                      <Skeleton width="40px" height="20px" />
                      <Skeleton width="40px" height="20px" />
                      <Skeleton width="40px" height="20px" />
                    </div>
                    <Skeleton width="60px" height="20px" />
                  </div>
                  <hr className="mb-4" />
                  <div className="flex justify-end items-center space-x-4">
                    <button
                      className="border border-gray-300 rounded px-2 py-1 w-36 mr-4 bg-white text-gray-700 cursor-pointer"
                      disabled
                    >
                      <Skeleton width="100%" height="20px" />
                    </button>
                    <select className="border rounded px-1 py-1">
                      <Skeleton width="150px" height="20px" />
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <Skeleton width="100px" height="20px" />
                  <Skeleton width="250px" height="20px" />
                </div>
                <div className="space-y-4">
                  {[1, 2].map((_, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <Skeleton width="100px" height="20px" />
                        <Skeleton width="50px" height="20px" />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <Skeleton width="100px" height="20px" />
                        <div className="flex space-x-2 text-center text-gray-500 -ml-2 mr-6 text-sm">
                          <Skeleton width="20px" height="20px" />
                          <Skeleton width="20px" height="20px" />
                          <Skeleton width="20px" height="20px" />
                          <Skeleton width="100px" height="20px" />
                        </div>
                      </div>

                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between items-center">
                          <Skeleton width="100px" height="20px" />
                          <Skeleton width="20px" height="20px" />
                          <div className="flex space-x-2">
                            <Skeleton width="20px" height="20px" />
                            <Skeleton width="20px" height="20px" />
                            <Skeleton width="20px" height="20px" />
                            <Skeleton width="20px" height="20px" />
                            <Skeleton width="20px" height="20px" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quizzes Section Skeleton */}
              <div className="bg-[#f9fcff] rounded-lg shadow p-0.5">
                <div className="bg-white rounded-lg shadow-sm mb-4 p-2">
                  <h1 className="text-xl font-semibold mb-4">
                    <Skeleton width="100px" height="24px" />
                  </h1>
                  <div className="flex items-center border-b-2 border-gray-200 mb-4">
                    <Skeleton width="40px" height="20px" className="mx-4" />
                    <Skeleton width="40px" height="20px" className="mx-4" />
                    <Skeleton width="40px" height="20px" className="mx-4" />
                    <Skeleton width="40px" height="20px" className="mx-4" />
                    <Skeleton width="40px" height="20px" className="mx-4" />
                    <div className="flex-grow"></div>
                    <Skeleton width="60px" height="20px" />
                  </div>
                  <div className=" flex items-center">
                    <Skeleton width="100px" height="20px" className="mr-4" />
                    <Skeleton width="80px" height="20px" className="mr-4" />
                    <div className="border-r-2 border-gray-200 h-6 mr-4"></div>
                    <div className="flex-grow"></div>
                    <button
                      className="border border-gray-300 rounded px-1 py-1 w-40 mr-4 bg-white text-gray-700 cursor-pointer"
                      disabled
                    >
                      <Skeleton width="100%" height="20px" />
                    </button>
                    <select className="border border-gray-300 rounded px-1 py-1">
                      <Skeleton width="150px" height="20px" />
                    </select>
                  </div>
                </div>
                <div className="bg-white p-1 shadow-sm rounded-lg mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Skeleton width="100px" height="20px" />
                    <Skeleton width="250px" height="20px" />
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton width="100px" height="20px" />
                      <Skeleton width="50px" height="20px" />
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton width="100px" height="20px" />
                      <div className="flex space-x-2 text-center text-gray-500 -ml-2 mr-6 text-sm">
                        <Skeleton width="20px" height="20px" />
                        <Skeleton width="20px" height="20px" />
                        <Skeleton width="20px" height="20px" />
                        <Skeleton width="100px" height="20px" />
                      </div>
                    </div>

                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between items-center">
                        <Skeleton width="100px" height="20px" />
                        <Skeleton width="20px" height="20px" />
                        <div className="flex space-x-2">
                          <Skeleton width="20px" height="20px" />
                          <Skeleton width="20px" height="20px" />
                          <Skeleton width="20px" height="20px" />
                          <Skeleton width="20px" height="20px" />
                          <Skeleton width="20px" height="20px" />
                        </div>
                      </div>
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
                    <div className="relative cursor-pointer">
                      <Skeleton width="80px" height="20px" />
                    </div>
                    <div className="relative cursor-pointer">
                      <Skeleton width="80px" height="20px" />
                    </div>
                  </div>
                  <div>
                    <Skeleton width="100%" height="40px" />
                    <div className="text-gray-700 mb-4">
                      <Skeleton width="100%" height="20px" />
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gray-300 text-gray-500 py-2 rounded-bl-2xl rounded-br-2xl">
                  <Skeleton width="100%" height="20px" />
                </button>
              </div>

              {/* Matches Component Skeleton */}
              <Skeleton width="100%" height="100px" />

              <div className="shadow-md mt-6 mb-6">
                <div className="text-white text-center rounded-tl-lg rounded-tr-lg py-2">
                  <h1 className="text-lg font-semibold">
                    <Skeleton width="300px" height="24px" />
                  </h1>
                  <p className="text-sm">
                    <Skeleton width="150px" height="16px" />
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-b-2xl">
                  <div className="grid grid-cols-3 text-gray-500 text-sm font-semibold py-2 px-4 border-b">
                    <Skeleton width="80px" height="20px" />
                    <div></div>
                    <Skeleton
                      width="80px"
                      height="20px"
                      className="text-right"
                    />
                  </div>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 px-4 border-b"
                    >
                      <Skeleton
                        width="50px"
                        height="20px"
                        className="text-blue-600 font-semibold"
                      />
                      <div className="flex-1 ml-4">
                        <Skeleton
                          width="150px"
                          height="20px"
                          className="text-gray-700 font-semibold"
                        />
                        <Skeleton
                          width="100px"
                          height="16px"
                          className="text-gray-500 text-sm"
                        />
                      </div>
                      <Skeleton
                        width="60px"
                        height="20px"
                        className="text-right text-red-500 font-semibold"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Button Skeleton */}
              <div className="flex items-center bg-blue-600 rounded-full p-2 w-40 relative">
                <div className="bg-blue-600 rounded-full p-1">
                  <Skeleton width="30px" height="30px" />
                </div>
                <div className="absolute right-0 bg-blue-600 rounded-3xl p-2 border-2 border-white">
                  <Skeleton width="30px" height="30px" />
                </div>
              </div>
            </div>
          </div>
          <FooterSkeleton />
        </div>
      </>
    );
};

export default Loading;
