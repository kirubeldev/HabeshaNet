import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiPlus } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

const EmployerHowitworks = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto mt-[80px]'>
        <h1 className='font-bold text-[36px]'>How It Works?</h1>

        <div className='flex justify-between items-center mt-[40px]'>

          {/* Post a Job Section */}
          <div className='flex flex-col space-y-3 max-w-[260px] items-center text-center group'>
            <div className='size-[90px] flex bg-[#9672FF] rounded-lg items-center justify-center'>
              <FiPlus className='text-white size-[36px]' />
            </div>
            <p className='font-semibold'>Post a Job</p>
            <p className='text-[14px] text-[#3C3C51] px-3'>
              Wonder twenty hunted and put income set desire expect. Am cottage calling.
            </p>

            {/* Button hidden but with fixed height */}
            <div className='mt-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300'>
              <Link href={"/create"}>
                <button className='py-[10px] flex gap-7 items-center rounded-lg px-[30px] text-white bg-[#B53CC9]'>
                  Get Started <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>

          {/* Connecting Dots */}
          <div className='flex items-center gap-2'>
            <div className='size-[11px] bg-[#9672FF] rounded-full'></div>
            <div className='border border-b border-dashed w-[210px]'></div>
            <div className='size-[11px] bg-[#4DDFFD] rounded-full'></div>
          </div>

          {/* Browse Profiles Section */}
          <div className='flex flex-col space-y-3 max-w-[260px] items-center text-center group'>
            <div className='size-[90px] flex bg-[#4DDFFD] rounded-lg items-center justify-center'>
              <IoSearchOutline className='text-white size-[36px]' />
            </div>
            <p className='font-semibold'>Browse Profiles</p>
            <p className='text-[14px] text-[#3C3C51] px-3'>
              Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.
            </p>

            {/* Button hidden but with fixed height */}
            <div className='mt-[60px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300'>
              <Link href={"/create"}>
                <button className='py-[10px] flex gap-7 items-center rounded-lg px-[30px] text-white bg-[#B53CC9]'>
                  Get Started <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>

          {/* Connecting Dots */}
          <div className='flex items-center gap-2'>
            <div className='size-[11px] bg-[#4DDFFD] rounded-full'></div>
            <div className='border border-b border-dashed w-[210px]'></div>
            <div className='size-[11px] bg-[#F2B8EC] rounded-full'></div>
          </div>

          {/* Hire Your Candidate Section */}
          <div className='flex flex-col space-y-3 max-w-[260px] items-center text-center group'>
            <div className='size-[90px] flex bg-[#F2B8EC] rounded-lg items-center justify-center'>
              <img src='./bul.png' alt='' />
            </div>
            <p className='font-semibold'>Hire Your Candidate</p>
            <p className='text-[14px] text-[#3C3C51]'>
              Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.
            </p>

            {/* Button hidden but with fixed height */}
            <div className='mt-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300'>
              <Link href={"/create"}>
                <button className='py-[10px] flex gap-7 items-center rounded-lg px-[30px] text-white bg-[#B53CC9]'>
                  Get Started <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EmployerHowitworks;
