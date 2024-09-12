import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ResentjopPost = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-[80px]  ">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[36px]">How It Works?</h1>

          <div className="flex items-center gap-7 ">
            <img src="./leftarrow.png" alt="" className="cursor-pointer" />
            <img src="./rightarrow.png" alt="" className="cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center justify-between   bg-[ecf1f4a4] mt-[50px] gap-5   rounded-lg  w-fit ">
          <div className="flex flex-col space-y-6 bg-white px-8 rounded-xl border py-3">
            <div>
              <p className="text-[24px] font-bold">AI Research Scientist</p>
              <p className="text-[14px]">FutureTech AI</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-5">
   <img src="./loca.png" alt="" />
              <p className="text-[14px]">Silicon Valley, CA</p>
              </div>
              <div className="flex items-center gap-5">
              <img src="./dollar.png" alt="" />

              <p className="text-[14px]">$150,000 - $200,000/year</p>
              </div>
              <div className="flex items-center gap-5">
   <img src="./case.png" alt="" />
           
              <p className="text-[14px]">Full-time</p>
              </div>
            </div>
          <p className="max-w-[370px] text-[16px] text-[#3C3C51]">Push the boundaries of AI. Work on cutting-edge machine learning models and neural networks.</p>
          </div>






          <div className="flex flex-col space-y-6 bg-white px-8 rounded-xl border py-3">
            <div>
              <p className="text-[24px] font-bold">AI Research Scientist</p>
              <p className="text-[14px]">FutureTech AI</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-5">
   <img src="./loca.png" alt="" />
              <p className="text-[14px]">Silicon Valley, CA</p>
              </div>
              <div className="flex items-center gap-5">
              <img src="./dollar.png" alt="" />

              <p className="text-[14px]">$150,000 - $200,000/year</p>
              </div>
              <div className="flex items-center gap-5">
   <img src="./case.png" alt="" />
           
              <p className="text-[14px]">Full-time</p>
              </div>
            </div>
          <p className="max-w-[370px] text-[16px] text-[#3C3C51]">Push the boundaries of AI. Work on cutting-edge machine learning models and neural networks.</p>
          </div>



          <div className="flex flex-col space-y-6 bg-white px-8 rounded-xl border py-3">
            <div>
              <p className="text-[24px] font-bold">AI Research Scientist</p>
              <p className="text-[14px]">FutureTech AI</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-5">
   <img src="./loca.png" alt="" />
              <p className="text-[14px]">Silicon Valley, CA</p>
              </div>
              <div className="flex items-center gap-5">
              <img src="./dollar.png" alt="" />

              <p className="text-[14px]">$150,000 - $200,000/year</p>
              </div>
              <div className="flex items-center gap-5">
   <img src="./case.png" alt="" />
           
              <p className="text-[14px]">Full-time</p>
              </div>
            </div>
          <p className="max-w-[370px] text-[16px] text-[#3C3C51]">Push the boundaries of AI. Work on cutting-edge machine learning models and neural networks.</p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-[40px]">
        <Link href={"/create"}>
                <button className='py-[10px] flex gap-7 items-center rounded-lg px-[30px] text-white bg-[#0097FF]'>
                Explore All Posts <FaArrowRightLong />
                </button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default ResentjopPost;
