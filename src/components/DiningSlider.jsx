import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { slides2 } from "../data/slidesData";

function DiningSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides2.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides2.length) % slides2.length);
  };

  return (
    <section className=" bg-[#F5F5F5] ">
      <section
        className="px-36 py-10 flex flex-col gap-8 max-[1250px]:px-16
  max-[650px]:px-8 max-[650px]:py-8 max-[650px]:gap-6  max-[950px]:gap-6 
  min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px] "
      >
        {/* Header */}
        <h2 className="text-[36px] text-[#545454] font-light uppercase font-Roboto mb-2 max-[650px]:mb-0 max-[650px]:text-[26px]">
          DINING
        </h2>

        {/* Main Content */}
        <div className=" flex items-center gap-24 m-auto max-[1250px]:gap-16 max-[950px]:gap-5 max-[800px]:flex-col-reverse">
          {/* Text Content */}
          <div className=" flex flex-col gap-6 max-w-[400px] max-[1250px]:max-w-[350px] max-[950px]:gap-4 max-[800px]:max-w-full">
            <h3 className=" text-[28px] text-[#767676] tracking-wide font-light max-[650px]:text-[24px]">
              {slides2[currentSlide].title}
            </h3>
            <p className="text-[#888888] leading-8 tracking-wider text-[16px] max-[950px]:leading-7 max-[650px]:text-[14px]">
              {slides2[currentSlide].description}
            </p>
            <button className=" flex items-center gap-3 text-[#888888] max-[650px]:text-[14px]">
              Explore
              <FaArrowRightLong className="w-5 h-5" />
            </button>
          </div>

          {/* Image */}
          <div
            className="relative overflow-hidden rounded-lg max-h-[400px] max-[1250px]:max-h-[350px]
         max-[650px]:object-contain max-[650px]:max-h-[200px] max-[800px]:max-h-[350px]"
          >
            <img
              src={slides2[currentSlide].image}
              alt={slides2[currentSlide].title}
              className="w-full h-[500px] object-cover max-[650px]:object-fill "
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between max-w-[120px] -mt-10 text-[#767676] max-[800px]:mt-6">
          <button onClick={prevSlide} aria-label="Previous slide">
            <FaArrowLeftLong className=" text-xl" />
          </button>

          <div className=" text-[14px]">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(slides2.length).padStart(2, "0")}
          </div>

          <button onClick={nextSlide} aria-label="Next slide">
            <FaArrowRightLong className=" text-xl" />
          </button>
        </div>
      </section>
    </section>
  );
}

export default DiningSlider;
