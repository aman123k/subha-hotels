import React from "react";
import { FaCaretRight, FaTwitter } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { LiaFacebookF } from "react-icons/lia";
import { TbBrandYoutube } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";

import brandLogo from "../images/logo.png";
import brandLogo1 from "../images/brandLogo.png";
import brandLogo2 from "../images/brandLogo2.png";
import brandLogo3 from "../images/brandLogo3.png";
import brandLogo4 from "../images/brandLogo4.png";

function Footer() {
  const navLinks = {
    column1: [
      { title: "HOME", href: "#" },
      { title: "RESTAURANTS", href: "#" },
      { title: "BANQUETS", href: "#" },
      { title: "OUR BRAND", href: "#" },
      { title: "ABOUT US", href: "#" },
      { title: "CONTACT US", href: "#" },
    ],
    column2: [
      { title: "PARTNER WITH US", href: "#" },
      { title: "CINNAMON CATERING", href: "#" },
      { title: "GOVERNANCE", href: "#" },
      { title: "CAREERS", href: "#" },
      { title: "SAFETY AT SUBA HOTELS", href: "#" },
      { title: "PRIVACY POLICY", href: "#" },
    ],
    column3: [
      { title: "TERMS & CONDITIONS", href: "#" },
      { title: "UPCOMING HOTELS", href: "#" },
      { title: "PROMOTIONS", href: "#" },
      { title: "MANAGE BOOKING", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#F5F5F5]">
      {/* Contact and Social Section */}
      <div
        className=" px-32 py-20 max-[1250px]:px-20  max-[950px]:px-10 max-[650px]:px-10 max-[650px]:py-10 max-[950px]:py-20
          min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]"
      >
        <div className=" flex justify-between items-center max-[650px]:flex-col max-[650px]:gap-8">
          <div className=" max-[650px]:justify-center flex flex-col gap-6 max-[650px]:gap-4">
            <h3 className="text-[#656565] text-xl tracking-wide max-[650px]:text-center max-[650px]:text-lg">
              ANY QUESTIONS?
            </h3>
            <div className="flex gap-10 max-[650px]:gap-4 max-[650px]:flex-col ">
              <a
                href="/"
                className="flex items-center gap-2 max-[650px]:gap-4 text-gray-600 hover:text-gray-800"
              >
                <span className=" bg-[#545454] p-2 rounded-full max-[650px]:p-1.5">
                  <LuPhone
                    fill="#fff"
                    className=" text-[18px] max-[650px]:text-[14px]"
                  />
                </span>
                +91 2266 82 0707
              </a>
              <a
                href="mailto:info@subahotels.com"
                className="flex items-center gap-2 max-[650px]:gap-4 text-gray-600 hover:text-gray-800"
              >
                <VscMail className=" text-[28px] max-[650px]:text-[20px]" />
                info@subahotels.com
              </a>
            </div>
          </div>

          <div className=" max-[650px]:justify-center flex flex-col gap-6 max-[650px]:gap-4">
            <h3 className="text-[#656565] text-xl tracking-wide max-[650px]:text-center max-[650px]:text-lg">
              STAY CONNECTED
            </h3>
            <div className="flex gap-4">
              <span className=" bg-[#545454] p-2.5 max-[650px]:p-2 flex items-center justify-center rounded-full">
                <LiaFacebookF
                  fill="#fff"
                  className=" text-[20px] max-[650px]:text-[16px]"
                />
              </span>
              <span className=" bg-[#545454] p-2.5 max-[650px]:p-2 flex items-center justify-center rounded-full">
                <TbBrandYoutube
                  fill="#fff"
                  className=" text-[20px] max-[650px]:text-[16px]"
                />
              </span>
              <span className=" bg-[#545454] p-2.5 max-[650px]:p-2 flex items-center justify-center rounded-full">
                <PiInstagramLogoBold
                  fill="#fff"
                  className=" text-[20px] max-[650px]:text-[16px]"
                />
              </span>
              <span className=" bg-[#545454] p-2.5 max-[650px]:p-2 flex items-center justify-center rounded-full">
                <FaTwitter
                  fill="#fff"
                  className=" text-[20px] max-[650px]:text-[16px]"
                />
              </span>
            </div>
          </div>

          <div className="  flex-col gap-4 hidden max-[650px]:flex w-[250px]">
            <div className="relative">
              <input
                type="email"
                placeholder="Subscribe For Updates"
                className="w-full bg-[#545454] text-white tracking-wide px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
              <button className="absolute right-2 top-1/2 transform bg-[#333333] p-1.5 rounded-lg -translate-y-1/2 text-white">
                <FaCaretRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links Section */}
      <div className="bg-[#050505]">
        <div
          className=" text-[#F2F2F2] py-12 px-32 max-[1250px]:px-16 max-[650px]:px-0 max-[650px]:text-center max-[650px]:py-8
          min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]"
        >
          <div className="grid grid-cols-4 gap-6 max-[950px]:grid-cols-3 max-[800px]:grid-cols-2 max-[950px]:gap-10 max-[650px]:gap-5 ">
            {/* First Column */}
            <div className=" flex flex-col gap-4">
              {navLinks.column1.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="max-[650px]:text-[12px]"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Second Column */}
            <div className=" flex flex-col gap-4">
              {navLinks.column2.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="max-[650px]:text-[12px]"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Third Column */}
            <div className=" flex flex-col gap-4 ">
              {navLinks.column3.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="max-[650px]:text-[12px]"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Newsletter Column */}
            <div className=" flex flex-col gap-4 max-[650px]:hidden">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Subscribe For Updates"
                  className="w-full bg-[#151515] text-white tracking-wide px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
                <button className="absolute right-2 top-1/2 transform bg-[#333333] p-1.5 rounded-lg -translate-y-1/2 text-white">
                  <FaCaretRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="bg-[#151515]">
        <div
          className=" text-[#F2F2F2] py-12 px-32 max-[1250px]:px-16 max-[650px]:text-center max-[650px]:py-8 max-[650px]:px-10
       min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]"
        >
          <div className="">
            <div className="flex flex-wrap justify-between items-center gap-8 max-[650px]:grid grid-cols-3">
              <img src={brandLogo} alt="SUBA" className="h-12 object-contain" />
              <img
                src={brandLogo1}
                alt="Click Hotels"
                className="h-12 object-contain"
              />
              <img
                src={brandLogo2}
                alt="CLARION"
                className="h-12 object-contain"
              />
              <img
                src={brandLogo3}
                alt="Quality"
                className="h-12 object-contain"
              />
              <img
                src={brandLogo4}
                alt="Comfort"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#050505]">
        <div
          className=" py-6 border-t border-[#272727]
         min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]"
        >
          <div className=" py-1.5 px-32 max-[1250px]:px-16 max-[650px]:px-10 max-[650px]:text-center">
            <p className="text-[#F2F2F2] tracking-wide text-[16px] max-[650px]:text-center max-[650px]:text-[14px]">
              Copyright©2023, Suba group of hotels. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
