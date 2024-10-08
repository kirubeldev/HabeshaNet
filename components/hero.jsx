import React from "react";
import herobg from "../public/herobg.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
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
      <div className="flex md:flex-row flex-col h-[90vh] justify-center md:justify-between item-center md:max-w-6xl mx-auto  w-full">
       
        <div className="flex w-1/2 justify-start items-center">
          <div className="flex flex-col">
            <h1 className="text-[#020617] text-[52px]  font-bold">
              make your business <br /> powerful with shade
            </h1>

            <p className="text-[#3C3C51]">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              accusantium <br />
              laborum adipisci hic expedita recusandaeid, facere tempore labore
              quae <br /> similique iste quaerat sumos temporibus nemo esse quis
              pariatur sumo <br /> repudiandae. Voluptas.
            </p>
            <div className="flex justify-between gap-3 pt-4">
              <button className="py-[10px] flex gap-3 items-center rounded-lg px-[30px] text-white bg-[#B53CC9]">
                Find a Professional <FaArrowRightLong />
              </button>
              <button className="py-[10px] border flex gap-3 rounded-lg px-[30px]">
                Offer Your Services
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 justify-center items-center 2xl:mt-12">
          <img
            src="./heron.jpg"
            className="  2xl:min-w-[600px] 2xl:min-h-[501px] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
