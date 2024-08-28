import React from 'react';
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";

const imgs = "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D";

const TestimonyCard = () => {
  return (
    <div className="flex justify-center mt-[70px]">
      <div className="border w-fit shadow-md flex px-6 rounded-2xl py-4">
        <div className="flex flex-col gap-6">
          <img
            src={imgs}
            alt=""
            className="w-[80px] h-[80px] relative -top-10 rounded-full object-cover"
          />

          <div className="flex gap-2 justify-end -mt-[60px]">
            <FaStar className="text-[#FC9B00]" />
            <FaStar className="text-[#FC9B00]" />
            <FaStar className="text-[#FC9B00]" />
            <FaStar className="text-[#FC9B00]" />
            <FaStar className="text-[#FC9B00]" />
          </div>
          <div>
            <p className="md:w-[250px] mr-[100px]">
             what a Great service you have! Found an amazing babysitter through Habesha nets!
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[16px] font-semibold">Jhon Doe</p>
              <p className="text-[#505050]">Washington</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#FC9B00] w-[26px] h-[26px] rounded-full flex items-center justify-center">
                <BiSolidLike className="text-white" />
              </div>
              <p className="font-semibold text-[14px]">Testimonial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
