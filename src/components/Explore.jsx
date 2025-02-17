import React from "react";
import Explore1 from "../images/Explore1.jpg";
import Explore2 from "../images/Explore2.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Explore() {
  return (
    <section className="bg-[#fff]">
      <section
        className="pl-36 py-6 flex flex-col gap-8 max-[1250px]:pl-16 
max-[650px]:px-8 max-[650px]:py-4 max-[650px]:gap-6 max-[950px]:gap-6
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px] relative"
      >
        <h2 className="text-[36px] text-[#545454] font-light uppercase font-Roboto mb-8 max-[650px]:mb-0 max-[650px]:text-[26px]">
          OFFERS{" "}
          <span className=" text-[28px] max-[650px]:text-[20px]">
            AS PER YOUR NEEDS
          </span>
        </h2>

        <div className=" mb-28 relative max-[650px]:mb-20">
          {/* image */}
          <img
            src={Explore1}
            alt="Explore1"
            className=" max-[1250px]:h-[350px] max-[850px]:h-[300px] max-[650px]:h-[250px] object-cover min-[1400px]:w-[60%] max-[1250px]:w-[60%] max-[850px]:w-auto"
          />
          {/* content Image */}
          <img
            src={Explore2}
            alt="Explore2"
            className=" absolute top-[50%] translate-y-[-80%] right-36 h-[220px] max-[1250px]:h-[150px] 
          max-[850px]:h-[100px] max-[850px]:right-24 max-[650px]:h-[80px] max-[650px]:right-10 min-[1400px]:right-[20%]"
          />
          <div
            className=" absolute w-[400px] -bottom-14 right-[45%] bg-[#F5F5F5] py-4 px-8 leading-7 flex flex-col gap-2.5 drop-shadow-md
        rounded-xl translate-x-[90%]  max-[1250px]:leading-6 max-[850px]:w-[350px] max-[850px]:px-6 max-[850px]:translate-x-0 max-[850px]:right-20
        max-[650px]:-right-5 max-[650px]:w-[90%] max-[650px]:gap-2"
          >
            <p className=" text-[16px] font-light font-Raleway tracking-wide text-[#888888] max-[850px]:text-[14px] max-[650px]:leading-normal">
              Explore hotel according to your needs,we will make sure to deliver
              you we will make sure to deliver you
            </p>
            <button className=" flex items-center gap-3 font-Raleway text-[#888888] max-[650px]:text-[14px]">
              Explore
              <FaArrowRightLong className="text-[14px]" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Explore;
