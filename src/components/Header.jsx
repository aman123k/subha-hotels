import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { slides } from "../data/slidesData";
import { GrLocation } from "react-icons/gr";
import { MdCalendarMonth } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt4 } from "react-icons/hi";
import { LuHotel } from "react-icons/lu";
import {
  FaArrowRightLong,
  FaArrowLeftLong,
  FaChampagneGlasses,
  FaBullhorn,
} from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaConciergeBell } from "react-icons/fa";

function Header({ isMenuOpen, setIsMenuOpen }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const handleSlideChange = (newSlideId) => {
    setActiveSlide(newSlideId);
    setIsAutoSliding(false);
    // Resume auto sliding after 5 seconds
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoSliding) {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoSliding]);

  return (
    <>
      <section className=" relative">
        {/* Bg Image */}
        <div className="relative w-full h-[85vh] overflow-hidden max-[950px]:h-[60vh]">
          {slides.map((slide, index) => (
            <div key={slide.id}>
              <img
                src={slide.bgImage}
                alt={slide.bgImage}
                className={`absolute inset-0 transition-transform h-full w-full duration-700 ease-in-out 
                ${
                  activeSlide === index
                    ? "translate-x-0"
                    : activeSlide < index
                    ? "translate-x-full"
                    : "-translate-x-full"
                } blur-bottom`}
              />
              <div
                className={`absolute top-40 right-40 max-[1250px]:right-20 transition-transform h-full duration-1000 ease-in-out  text-end capitalize
                    max-[650px]:right-4 max-[650px]:top-24
                ${
                  activeSlide === index
                    ? "translate-x-0"
                    : activeSlide < index
                    ? "translate-x-[900%]"
                    : "-translate-x-[900%]"
                }`}
              >
                <h1 className=" text-[32px] text-[#fff] tracking-wider max-[950px]:text-[26px]">
                  {slide.title}
                  <span className=" font-semibold font-Raleway">
                    {slide.title2}
                  </span>
                </h1>
                <p className=" font-Roboto font-semibold text-[32px] text-[#fff] max-[950px]:text-[20px]">
                  {slide?.place}
                </p>
              </div>
              <div
                className={`absolute bg-black rounded-2xl left-[9.5rem] text-white px-10 opacity-80
                    py-4 transition-transform  duration-1000 ease-in-out font-Roboto tracking-wide cursor-pointer
                    max-[1250px]:px-10 max-[1250px]:py-2.5 max-[1250px]:left-[7.5rem] max-[1250px]:w-[250px] max-[850px]:left-[6.5rem]
                    max-[650px]:hidden
                ${
                  activeSlide === index
                    ? "translate-x-0"
                    : activeSlide < index
                    ? "translate-x-[15000%]"
                    : "-translate-x-[15000%]"
                }`}
                style={
                  window?.innerWidth <= "1150"
                    ? { top: `${130 + 60 * slide.id}px` }
                    : { top: `${120 + 86 * slide.id}px` }
                }
              >
                {slide?.content}
              </div>
            </div>
          ))}

          {/* Silder Button */}
          <div className="flex flex-col gap-16 absolute top-36 left-0 ml-40 max-[1250px]:ml-32 z-20 max-[1250px]:gap-10 max-[850px]:ml-28 max-[650px]:hidden">
            {/* Connecting line */}
            {slides.map((slide, index) => (
              <div key={index} className="relative flex items-center z-10">
                <button
                  onClick={() => handleSlideChange(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index}`}
                >
                  {/* Outer circle */}
                  <div
                    className={`w-5 h-5 rounded-full transition-all duration-300 
                    ${
                      activeSlide === index
                        ? "border-2 border-[#C9982C]"
                        : "bg-transparent"
                    }`}
                  />

                  {/* Inner dot */}
                  <div
                    className={`absolute inset-0 m-auto rounded-full transition-all duration-300
                    ${
                      activeSlide === index
                        ? "bg-[#C9982C] w-3 h-3"
                        : "bg-white w-2 h-2"
                    }`}
                  />
                </button>
              </div>
            ))}
            <div
              className="absolute left-[50%] translate-x-[-50%] transform w-0.5 -z-10 top-2 bg-white"
              style={{ height: "calc(100% - 16px)" }}
            />
          </div>

          {/* mobile slide Icon */}
          <div className=" hidden max-[650px]:flex w-full absolute top-[50%] translate-y-[-50%] justify-between px-8 text-white">
            <FaArrowLeftLong
              size={28}
              className=" opacity-90"
              onClick={() =>
                handleSlideChange(
                  (activeSlide - 1 + slides.length) % slides.length
                )
              }
            />
            <FaArrowRightLong
              size={28}
              className=" opacity-90"
              onClick={() =>
                handleSlideChange((activeSlide + 1) % slides.length)
              }
            />
          </div>

          {/* mobile Book button  */}
          <button className=" absolute bottom-6 right-6 hidden max-[650px]:block bg-[#fcfcfcf1] drop-shadow-xl shadow-xl px-6 py-1.5 rounded-lg text-[#000] text-[18px] tracking-wide">
            Book Now
          </button>
        </div>

        {/* Header */}
        <div className="bg-black/25 absolute top-0 left-0 w-[100%] ">
          <header
            className=" flex justify-between items-center backdrop-blur-2xl px-36 py-2.5 max-[650px]:px-6
        max-[1250px]:px-16  min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]"
          >
            <div className="flex max-[650px]:items-center max-[650px]:w-full">
              <HiMenuAlt4
                className=" hidden max-[650px]:block text-4xl text-[#fff] cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />

              <img src={logo} alt="logo" className=" h-14 max-[650px]:m-auto" />
            </div>

            <ul
              className={` text-white flex items-center gap-8 top-0 z-10 max-[650px]:items-start max-[650px]:text-[#000]
            max-[650px]:flex-col  max-[650px]:absolute max-[650px]:w-full max-[650px]:bg-[#EFE9E9] max-[650px]:left-0 max-[650px]:h-screen
            max-[650px]:gap-2 duration-700 ease-in-out
            ${
              isMenuOpen ? "translate-x-0" : "max-[650px]:translate-x-[-100%]"
            }`}
            >
              <div className=" justify-between w-full py-3.5 px-3.5 max-[650px]:flex hidden">
                <img src={logo} alt="logo" className=" h-14 m-auto mt-3.5" />
                <RxCross2
                  size={28}
                  className=" cursor-pointer "
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <li
                className=" hover:text-[#C9982C] capitalize text-[16px] tracking-wide hover:cursor-pointer
               max-[650px]:py-2.5 max-[650px]:flex max-[650px]:gap-2.5 max-[650px]:items-center max-[650px]:px-8 max-[650px]:bg-white max-[650px]:w-full"
              >
                <span className="bg-[#EFE9E9] p-1.5 rounded-full text-[#333] max-[650px]:block hidden">
                  <LuHotel />
                </span>
                Our Hotels
              </li>
              <li
                className=" hover:text-[#C9982C] capitalize text-[16px] tracking-wide hover:cursor-pointer
               max-[650px]:py-2.5 max-[650px]:flex max-[650px]:gap-2.5 max-[650px]:items-center max-[650px]:px-8 max-[650px]:bg-white max-[650px]:w-full"
              >
                <span className="bg-[#EFE9E9] p-1.5 rounded-full text-[#333] max-[650px]:block hidden">
                  <FaBullhorn />
                </span>
                Promotion
              </li>
              <li
                className=" hover:text-[#C9982C] capitalize text-[16px] tracking-wide hover:cursor-pointer
               max-[650px]:py-2.5 max-[650px]:flex max-[650px]:gap-2.5 max-[650px]:items-center max-[650px]:px-8 max-[650px]:bg-white max-[650px]:w-full"
              >
                <span className="bg-[#EFE9E9] p-1.5 rounded-full text-[#333] max-[650px]:block hidden">
                  <FaConciergeBell />
                </span>
                Restaurant
              </li>
              <li
                className=" hover:text-[#C9982C] capitalize text-[16px] tracking-wide hover:cursor-pointer
               max-[650px]:py-2.5 max-[650px]:flex max-[650px]:gap-2.5 max-[650px]:items-center max-[650px]:px-8 max-[650px]:bg-white max-[650px]:w-full"
              >
                <span className="bg-[#EFE9E9] p-1.5 rounded-full text-[#333] max-[650px]:block hidden">
                  <FaChampagneGlasses />
                </span>
                Banquets
              </li>
              <li
                className=" hover:text-[#C9982C] capitalize text-[16px] tracking-wide hover:cursor-pointer
               max-[650px]:py-2.5 max-[650px]:flex max-[650px]:gap-2.5 max-[650px]:items-center max-[650px]:px-8 max-[650px]:bg-white max-[650px]:w-full"
              >
                <span className="bg-[#EFE9E9] p-1.5 rounded-full text-[#333] max-[650px]:block hidden">
                  <IoMdContact />
                </span>
                Contact
              </li>
            </ul>
          </header>
        </div>

        {/* Bottom Menu */}
        <section
          className="px-36 absolute -bottom-[4.5rem] w-full h-max pt-16 pb-6 max-[1250px]:px-10 max-[1250px]:-bottom-[5rem] max-[650px]:hidden"
          style={{
            background:
              "linear-gradient(to top, #F5F5F5, rgba(239, 239, 239, 0))",
          }}
        >
          <section
            className=" flex items-center justify-between bg-[#ffffff] drop-shadow-lg py-4 px-8 rounded-2xl max-[1250px]:py-3.5 max-[1250px]:px-4
          min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]"
          >
            <div className=" flex items-start gap-3 cursor-pointer hover:bg-white hover:drop-shadow-lg py-2.5 px-3 rounded-lg">
              <GrLocation className=" text-[#949494] text-[18px]" />
              <div className=" flex flex-col gap-px mt-[-6px]">
                <h1 className="text-[17px] max-[1250px]:text-[16px] text-[#000] tracking-wide">
                  Location
                </h1>
                <span className="max-[1250px]:text-[13px] text-[14px] text-[#94949494] tracking-wide">
                  Choose the destination
                </span>
              </div>
            </div>
            <div className=" flex items-start gap-3 cursor-pointer hover:bg-white hover:drop-shadow-lg py-2.5 px-3 rounded-lg">
              <MdCalendarMonth className=" text-[#949494] text-[18px]" />
              <div className=" flex flex-col gap-px mt-[-6px]">
                <h1 className="text-[17px] max-[1250px]:text-[16px] text-[#000] tracking-wide">
                  Check in
                </h1>
                <span className="max-[1250px]:text-[13px] text-[14px] text-[#94949494] tracking-wide">
                  Add date
                </span>
              </div>
            </div>
            <div className=" flex items-start gap-3 cursor-pointer hover:bg-white hover:drop-shadow-lg py-2.5 px-3 rounded-lg max-[850px]:hidden">
              <MdCalendarMonth className=" text-[#949494] text-[18px]" />
              <div className=" flex flex-col gap-px mt-[-6px]">
                <h1 className="text-[17px] max-[1250px]:text-[16px] text-[#000] tracking-wide">
                  Check out
                </h1>
                <span className="max-[1250px]:text-[13px] text-[14px] text-[#94949494] tracking-wide">
                  Add date
                </span>
              </div>
            </div>
            <div className=" flex items-start gap-3 cursor-pointer hover:bg-white hover:drop-shadow-lg py-2.5 px-3 rounded-lg max-[850px]:hidden">
              <MdOutlineBedroomParent className=" text-[#949494] text-[18px]" />
              <div className=" flex flex-col gap-px mt-[-6px]">
                <h1 className="text-[17px] max-[1250px]:text-[16px] text-[#000] tracking-wide">
                  Rooms
                </h1>
                <span className="max-[1250px]:text-[13px] text-[14px] text-[#94949494] tracking-wide">
                  Add Number of rooms
                </span>
              </div>
            </div>
            <div className=" flex items-start gap-3 cursor-pointer hover:bg-white hover:drop-shadow-lg py-2.5 px-3 rounded-lg">
              <TiGroup className=" text-[#949494] text-[18px]" />
              <div className=" flex flex-col gap-px mt-[-6px]">
                <h1 className="text-[17px] max-[1250px]:text-[16px] text-[#000] tracking-wide">
                  Visitors
                </h1>
                <span className="max-[1250px]:text-[13px] text-[14px] text-[#94949494] tracking-wide">
                  Add Guests
                </span>
              </div>
            </div>
            <button className=" bg-[#fcfcfcf1] drop-shadow-xl shadow-xl px-4 py-2.5 rounded-xl text-[#000] text-[16px] tracking-wide">
              Book Now
            </button>
          </section>
        </section>
      </section>

      {/*  */}
      <section
        className=" pt-24 text-center flex flex-col gap-8 pb-12 font-sans bg-[#F5F5F5] max-[650px]:pt-8 
      max-[950px]:px-16 max-[650px]:px-8 max-[650px]:gap-5"
      >
        <h1 className=" text-[#5B5B5B] text-[32px] tracking-wider font-light max-[650px]:text-[25px] ">
          60+ Locations | 100+ Hotels | 5100+ Keys & Counting
        </h1>
        <div className=" flex flex-col gap-5 max-[650px]:gap-3">
          <h2 className=" text-[#5B5B5B] text-[30px] tracking-wider font-light max-[650px]:text-[22px]">
            Elegant Stay. Luxurious Accommodations. Affordable Prices.
          </h2>
          <div className=" flex flex-col gap-2">
            <p className=" text-[16px] text-[#5B5B5B] max-[650px]:text-[14px]">
              Suba Hotels presents unmatched stays, fabulous facilities and
              supreme hospitality through its imoressive hotels.
            </p>
            <p className=" text-[16px] text-[#5B5B5B] max-[650px]:text-[14px]">
              Indulge in the comforts of contemporary conveniences & splendid
              services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
