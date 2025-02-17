import React, { useState } from "react";
import { offers } from "../data/slidesData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function StatsAndOffers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };
  return (
    <section className="bg-[#fff] ">
      <section
        className="pl-36 py-10 flex flex-col gap-8 max-[1250px]:pl-16 
        max-[650px]:px-8 max-[650px]:py-8 max-[650px]:gap-6 max-[950px]:gap-6 
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px] relative"
      >
        <h2 className="text-[36px] text-[#545454] font-light uppercase font-Roboto mb-8 max-[650px]:mb-0 max-[650px]:text-[26px]">
          OFFERS{" "}
          <span className=" text-[28px] max-[650px]:text-[20px]">
            AS PER YOUR NEEDS
          </span>
        </h2>

        <div className="flex items-center gap-10 overflow-hidden max-[850px]:gap-8 max-[650px]:flex-col">
          {/* Image */}
          <div className="flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src={offers[currentSlide].image}
              alt={offers[currentSlide].title}
              className="w-[400px] h-[270px] object-cover max-[1250px]:w-[380px] max-[1250px]:h-[250px] 
              max-[850px]:w-[300px] max-[650px]:w-full max-[650px]:h-[220px]"
            />
          </div>

          {/* Content */}
          <div className="flex-shrink-0 flex w-[500px] flex-col gap-5 max-[1250px]:w-[400px] max-[850px]:w-[350px] max-[650px]:w-full max-[650px]:gap-3">
            <h3 className="text-[26px] text-[#545454] font-light tracking-wide font-Raleway max-[650px]:text-[23px]">
              {offers[currentSlide].title}
            </h3>
            <p className=" text-[16px] text-[#545454] tracking-wide max-[650px]:text-[14px]">
              {offers[currentSlide].description}
            </p>
            <button className="flex text-[16px] tracking-wide items-center gap-2 text-[#545454] ">
              {offers[currentSlide].buttonText}
              <FaArrowRightLong size={15} />
            </button>
          </div>

          {/* Second Slide (partially visible) */}
          <div className="flex-shrink-0 overflow-hidden rounded-lg max-[650px]:hidden">
            <img
              src={offers[(currentSlide + 1) % offers.length].image}
              alt={offers[(currentSlide + 1) % offers.length].title}
              className="w-[400px] h-[270px] object-cover max-[1250px]:w-[380px] max-[1250px]:h-[250px]"
            />
          </div>
          <div className="flex-shrink-0 flex w-[500px] flex-col gap-5 max-[1250px]:w-[400px] max-[850px]:w-[350px] max-[650px]:w-full max-[650px]:gap-3 max-[650px]:hidden">
            <h3 className="text-[26px] text-[#545454] font-light tracking-wide font-Raleway max-[650px]:text-[23px]">
              {offers[currentSlide].title}
            </h3>
            <p className=" text-[16px] text-[#545454] tracking-wide max-[650px]:text-[14px]">
              {offers[(currentSlide + 1) % offers.length].description}
            </p>
            <button className="flex text-[16px] tracking-wide items-center gap-2 text-[#545454] ">
              {offers[(currentSlide + 1) % offers.length].buttonText}
              <FaArrowRightLong size={15} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-end gap-2 px-16 max-[650px]:px-5">
          <button
            onClick={prevSlide}
            className="p-2 text-[#545454]"
            aria-label="Previous slide"
          >
            <FaArrowLeftLong />
          </button>

          <div className="text-[14px] text-[#545454]">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(offers.length).padStart(2, "0")}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 text-[#545454]"
            aria-label="Next slide"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </section>
    </section>
  );
}

export default StatsAndOffers;
