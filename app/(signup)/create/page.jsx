'use client';
import React, { useState } from 'react';
import { RiUserFollowLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";
import Link from 'next/link';

const page = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className='flex justify-center mx-auto items-center h-[90vh] max-w-6xl'>
        <div className='flex flex-col space-y-6 mx-auto w-full justify-center items-center'>
          <div>
            <h1 className='text-[30px] md:text-[42px] font-bold'>
              Join as a client or freelancer
            </h1>
          </div>
          <div className='flex-col w-fit md:flex-row space-y-6 flex pb-4 md:w-full items-end justify-evenly'>
            <div
              className={`flex px-10 py-6 flex-col gap-3 border rounded-md cursor-pointer ${selectedOption === 'client' ? 'bg-blue-100' : ''}`}
              onClick={() => handleOptionSelect('client')}
            >
              <div className='flex items-center justify-between'>
                <RiUserFollowLine className='size-[25px]' />
                <FaRegCircle className='size-[25px]' />
              </div>
              <p>I am a client, hiring <br /> for a project.</p>
            </div>

            <div
              className={`flex px-[50px] py-6 flex-col gap-3 border rounded-md cursor-pointer ${selectedOption === 'freelancer' ? 'bg-blue-100' : ''}`}
              onClick={() => handleOptionSelect('freelancer')}
            >
              <div className='flex items-center justify-between'>
                <PiHandbag className='size-[25px]' />
                <FaRegCircle className='size-[25px]' />
              </div>
              <p>I am a Freelancer, <br /> looking for work.</p>
            </div>
          </div>
<Link href={"/hirep1"}>
          <button
            className={`py-3 px-6 rounded-md ${selectedOption ? 'bg-[#0097FF] text-white' : 'bg-[#ECF1F4] text-[#9E9EA1]'} cursor-pointer`}
            disabled={!selectedOption}
          >
            Create Account
          </button></Link>

          <p>Already have an account? <Link className='text-blue-600 underline' href="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default page;
