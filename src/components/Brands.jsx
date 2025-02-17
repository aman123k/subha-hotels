import React from "react";
import subha from "../images/subha.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

import brandLogo1 from "../images/brandLogo.png";
import brandLogo2 from "../images/brandLogo2.png";
import brandLogo3 from "../images/brandLogo3.png";
import brandLogo4 from "../images/brandLogo4.png";

function Brands() {
  return (
    <section className=" relative ">
      {/* Bg Image */}
      <img
        src={subha}
        alt=""
        className=" w-full object-left-top min-[1400px]:max-h-[680px] max-[950px]:h-[450px] max-[650px]:h-[550px]"
      />
      {/* black bg */}
      <div className=" absolute top-0 left-0 w-[67%] bg-black h-full max-[650px]:rounded-none rounded-tr-full opacity-75  max-[850px]:w-[76%] max-[650px]:w-full"></div>
      <div
        className=" absolute top-0 left-0 w-[58%] text-[#fff] px-32 py-16  flex flex-col gap-16
        max-[1300px]:gap-10 max-[1250px]:px-16 max-[1150px]:pt-10 max-[1150px]:gap-6 max-[850px]:w-[70%]
         max-[650px]:px-10 max-[650px]:py-10 max-[650px]:w-full min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]"
      >
        <h2
          className="text-[36px] text-[#fff] font-Raleway font-light uppercase mb-6   max-[1300px]:mb-3
         max-[650px]:mb-0 max-[650px]:text-[26px] max-[1250px]:text-[24px]"
        >
          <span className=" text-[28px] max-[650px]:text-[20px] text-[#828282] max-[1250px]:text-[18px]">
            OUR
          </span>{" "}
          BRANDS
        </h2>

        <div className=" flex flex-col gap-6 max-[1250px]:gap-4">
          <h1 className="text-[#c3c2c2] text-[26px] font-Raleway tracking-wide max-[1250px]:text-[20px]">
            SUBA HOTELS <br />
            OUR LUXURY HOTELS
          </h1>
          <p className=" text-[#f3f1f1] tracking-wide text-[15px] leading-7 max-[1250px]:leading-6">
            Suba Hotels is much more than a brand. It represents a new wave of
            hospitality with the promise of luxury services and facilities at
            affordable prices.
          </p>

          <button className=" flex items-center gap-3 text-[#fff] max-[650px]:text-[14px]">
            Explore
            <FaArrowRightLong className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        className=" absolute  bottom-0 flex justify-between w-full px-32 py-10 max-[1250px]:px-16 max-[650px]:px-0 
      min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px] max-[650px]:grid max-[650px]:grid-cols-2 max-[650px]:justify-center
      max-[650px]:gap-y-10 max-[650px]:py-8"
      >
        <img
          src={brandLogo1}
          alt="Click Hotels"
          className="h-15 object-contain cursor-pointer max-[650px]:m-auto"
        />
        <img
          src={brandLogo2}
          alt="CLARION"
          className="h-15 object-contain cursor-pointer max-[650px]:m-auto"
        />
        <img
          src={brandLogo3}
          alt="Quality"
          className="h-15 object-contain cursor-pointer max-[650px]:m-auto"
        />
        <img
          src={brandLogo4}
          alt="Comfort"
          className="h-15 object-contain cursor-pointer max-[650px]:m-auto"
        />
      </div>
    </section>
  );
}

export default Brands;
