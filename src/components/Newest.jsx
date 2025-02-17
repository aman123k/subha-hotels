import React, { useState, useEffect } from "react";
import { hotels } from "../data/slidesData";

function Newest() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getSlidesPerView = () => {
    if (window.innerWidth > 1150) return 3;
    if (window.innerWidth >= 650) return 2;
    return 1;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length
    );
  };
  return (
    <>
      {/* Newest Launches Section */}
      <section
        className="px-36 py-16 flex flex-col gap-16 max-[1250px]:px-20 
      max-[650px]:px-10 max-[650px]:py-10 max-[650px]:gap-6 
          min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]"
      >
        <h2 className="text-[36px] text-[#545454] font-light uppercase font-Roboto mb-6 max-[650px]:mb-0 max-[650px]:text-[26px]">
          Newest{" "}
          <span className=" text-[28px] max-[650px]:text-[20px]">Launches</span>
        </h2>
        <div className="relative flex justify-center items-center max-[650px]:mb-5">
          <button
            onClick={prevSlide}
            className="absolute -left-4 max-[850px]:-left-12 bg-gray-900 text-white rounded-lg w-8 text-xl flex items-center justify-center h-8 shadow-md
             max-[650px]:text-[14px] max-[750px]:right-16 max-[750px]:-bottom-10 max-[750px]:left-auto"
          >
            ◀
          </button>
          <div className="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[1250px]:m-auto  gap-10 max-w-[1500px] max-[750px]:mb-4 max-[650px]:grid-cols-1">
            {hotels
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((hotel, index) => (
                <div
                  key={index}
                  className="w-72 bg-white shadow-lg rounded-l overflow-hidden"
                >
                  <img
                    src={hotel.image}
                    alt={hotel.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl text-[#8A8A8A] font-thin tracking-wider">
                      {hotel.title}
                    </h3>
                    <h6 className="text-xl text-[#8A8A8A] font-thin tracking-wider">
                      {hotel.title2}
                    </h6>

                    <div className=" w-16 m-auto h-[.1px] bg-[#8A8A8A] my-4"></div>
                    <p className="text-[#8A8A8A] text-[14px] px-6 pb-4 tracking-wider mt-4 leading-7">
                      {hotel.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute -right-4 max-[850px]:-right-12 bg-gray-900 text-white  rounded-lg w-8 text-xl flex items-center justify-center h-8 shadow-md  max-[650px]:text-[14px]
             max-[750px]:-bottom-10 max-[750px]:right-4"
          >
            ▶
          </button>
        </div>
      </section>
    </>
  );
}

export default Newest;
