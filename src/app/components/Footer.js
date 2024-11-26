"use client";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-blue-600 text-white flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <i className="fas fa-file-alt text-2xl"></i>
          <span className="text-2xl font-bold">18+</span>
        </div>
        <div className="text-sm">
          © {currentYear} <Link href="/SmartyBet.com">SmartyBet.com</Link> All
          rights reserved.
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">
            <Link href="/SmartyBet.com">SmartyBet.com</Link>
          </h1>
          <p className="text-lg mb-2 font-bold text-blue-600">Pay bill:</p>
          <p className="text-2xl font-bold mb-4">*713*9099#</p>
          <p className="text-lg mb-2 text-blue-600 font-bold">
            Payment methods
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <Image
              src="/mtn.png"
              alt="MTN logo"
              className="h-12"
              width={48}
              height={48}
              crossOrigin="anonymous"
            />
            <Image
              src="/atg.png"
              alt="AirtelTigo logo"
              className="h-12"
              width={48}
              height={48}
              crossOrigin="anonymous"
            />
            <Image
              src="/vf.png"
              alt="Vodafone logo"
              className="h-12"
              width={48}
              height={48}
              crossOrigin="anonymous"
            />
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-blue-600 text-white rounded-full p-2">
              <i className="fab fa-facebook fa-2x"></i>
            </div>
            <div className="bg-black text-white rounded-full p-2">
              <i className="fa-brands fa-x-twitter text-3xl"></i>{" "}
              {/* Change text-3xl to text-4xl for an even larger icon */}
            </div>
            <div className="bg-red-600 text-white rounded-full p-2">
              <i className="fab fa-youtube fa-2x"></i>
            </div>
          </div>
          <p className="text-lg mb-2">Sponsorship</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Image
              src="/ch.png"
              alt="Chelsea FC logo"
              className="h-12"
              width={48}
              height={48}
              crossOrigin="anonymous"
            />
            <Image
              src="/dt.png"
              alt="Borussia Dortmund logo"
              className="h-12"
              width={48}
              height={48}
              crossOrigin="anonymous"
            />
          </div>
          <p className="text-sm text-gray-600">
            Players must be 18 or older to register or play at SmartyBet.
            <br />
            Please note that gambles may have negative effects if not made with
            temperance.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
