'use client';
import React, { useState } from 'react';
import { RiUserFollowLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";
import Link from 'next/link';

const Page = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    {
      key: 'client',
      icon: <RiUserFollowLine className='size-[25px]' />,
      text: "I am Employer Looking For Skills"
    },
    {
      key: 'freelancer',
      icon: <PiHandbag className='size-[25px]' />,
      text: "I am Landlord who want to, Sell Or Rent Properties."
    },
    {
      key: 'jobSeeker',
      icon: <PiHandbag className='size-[25px]' />,
      text: "I am Job Seeker Looking for Work"
    },
    {
      key: 'serviceProvider',
      icon: <PiHandbag className='size-[25px]' />,
      text: "I am Service Provider, Offers Service"
    },
    {
      key: 'baby',
      icon: <PiHandbag className='size-[25px]' />,
      text: "I am Looking for baby sitter"
    }
  ];

  return (
    <div>
      <div className='flex justify-center mx-auto items-center min-h-[90vh] max-w-6xl'>
        <div className='flex flex-col mt-[40px] mb-[40px] space-y-6 mx-auto w-full justify-center items-center'>
          <h1 className='text-[30px] md:text-[42px] font-bold'>
          Join Our Platform 
          </h1>
          <div className='grid content-center grid-cols-2  lg:grid-cols-3 mx-auto pb-4 gap-6 text-center items-center'>
            {options.map(option => (
              <div
                key={option.key}
                className={`flex px-10 py-6 flex-col gap-3 border rounded-md cursor-pointer ${selectedOption === option.key ? 'bg-blue-100' : ''}`}
                onClick={() => handleOptionSelect(option.key)}
              >
                <div className='flex items-center justify-between'>
                  {option.icon}
                  <FaRegCircle className='size-[25px]' />
                </div>
                <p className="max-w-[156px]">{option.text}</p>
              </div>
            ))}
          </div>
          <Link href={"/signup"}>
            <button
              className={`py-3 px-6 rounded-md ${selectedOption ? 'bg-[#0097FF] text-white' : 'bg-[#ECF1F4] text-[#9E9EA1]'} cursor-pointer`}
              disabled={!selectedOption}
            >
              Create Account
            </button>
          </Link>
          <p>Already have an account? <Link className='text-blue-600 underline' href="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Page;