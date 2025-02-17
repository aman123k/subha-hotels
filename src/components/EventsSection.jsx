import React from "react";
import events from "../images/events.png";
import { FaArrowRightLong } from "react-icons/fa6";

function EventsSection() {
  return (
    <section className=" bg-[#F5F5F5] ">
      <section
        className="px-36 py-10 flex flex-col gap-8 max-[1250px]:px-16
  max-[650px]:px-8 max-[650px]:py-10 max-[650px]:gap-6
    min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px] "
      >
        {/* Header */}
        <h2 className="text-[36px] text-[#545454] font-light uppercase font-Roboto mb-6 max-[650px]:mb-0 max-[650px]:text-[26px]">
          EVENTS{" "}
          <span className=" text-[28px] max-[650px]:text-[20px]">AT SUBA</span>
        </h2>

        <img src={events} alt="events " className=" rounded-lg max-h-[750px]" />
        {/* Description Text */}
        <div className="text-center space-y-2.5 font-Roboto">
          <p className="text-[#838383] max-[650px]:text-[14px] tracking-wide text-[16px]">
            Every event, whether a corporate function, a grand wedding, or any
            social get-together, holds a special place in our hearts.
          </p>
          <p className="text-[#838383] max-[650px]:text-[14px] tracking-wide text-[16px] leading-8">
            They commemorate happiness, fun, success, and most importantly, the
            joy of togetherness, and we look forward to sharing this experience
            with you at our banquet halls.
          </p>
        </div>

        {/* Explore Button */}
        <div className="text-center text-[#7A7A7A] font-Raleway flex items-center gap-4 justify-center -mt-3">
          <button className="tems-center text-gray-600 text-[18px] font-light hover:text-gray-900 transition-colors">
            Explore
          </button>
          <FaArrowRightLong className=" cursor-pointer text-xl font-light" />
        </div>
      </section>
    </section>
  );
}

export default EventsSection;
