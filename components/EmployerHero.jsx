import React from "react";
import herobg from "../public/herobg.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const EmployerHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url('./herobg.jpg')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh", // Full height of the viewport
        maxwidth: "100vw",
      }}
    >
      <div className="flex md:flex-row flex-col justify-center md:justify-between md:max-w-6xl mx-auto  pt-8 w-full">
        <div className="flex w-1/2 justify-start items-center">
          <div className="flex flex-col">
            <h1 className="text-[#020617] text-[32px] md:text-[48px]  font-bold">
            Post Jobs, Find Your Next Hire Quickly            </h1>

            <p className="text-[#3C3C51] text-[16px]">
              {" "}
              Post jobs and access candidate profiles with ease.            </p>
            <div className="flex gap-12 pt-12">
              <button className="py-[10px] flex gap-3 items-center rounded-lg px-[38px] text-white bg-[#B53CC9]">
               Post Job <FaArrowRightLong />
              </button>
              <button className="py-[10px] border flex gap-3 rounded-lg px-[30px]">
              Explore profile
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <img
            src="./emphero.svg"
            className="w-[500px] h-[450px] 2xl:w-[640px] 2xl:h-[701px] "
          />
        </div>
      </div>
    </div>
  );
};

export default EmployerHero;
