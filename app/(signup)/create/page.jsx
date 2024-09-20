'use client';
import React, { useState, useEffect } from 'react';
import { RiUserFollowLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use if in app directory

const Page = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const options = [
    {
      key: 'employer',
      icon: <RiUserFollowLine className='size-[25px]' />,
      text: "I am Employer Looking For Skills"
    },
    {
      key: 'propertyOwner',
      icon: <PiHandbag className='size-[25px]' />,
      text: "I am Landlord who want to, Sell Or Rent Properties."
    },
    {
      key: 'propertyRenter',
      icon: <PiHandbag className='size-[25px]' />,
      text: "I am property Renter Looking for property"
    },
    {
      key: 'serviceProvider',
      icon: <PiHandbag className='size-[25px]' />,
      text: "I am Service Provider, Offers Service"
    },
    {
      key: 'babySitterFinder',
      icon: <PiHandbag className='size-[25px]' />,
      text: "I am Looking for baby sitter"
    }
  ];

  useEffect(() => {
    console.log('Router Query:', router.query); // Log the full query
    if (router.query && router.query.userType) {
      console.log('userType found:', router.query.userType); // Debug log
    } else {
      console.log('userType is not set in the query parameters'); // Debug log
    }
  }, [router.query]);

  return (
    <div>
      <div className='flex justify-center mx-auto items-center min-h-[90vh] max-w-6xl'>
        <div className='flex flex-col mt-[40px] mb-[40px] space-y-6 mx-auto w-full justify-center items-center'>
          <h1 className='text-[30px] md:text-[42px] font-bold'>
            Join Our Platform 
          </h1>
          <div className='grid content-center grid-cols-2 lg:grid-cols-3 mx-auto pb-4 gap-6 text-center items-stretch justify-items-center'>
  {options.map(option => (
    <div
      key={option.key}
      className={`flex flex-col px-10 py-6 gap-3 border rounded-md cursor-pointer ${selectedOption === option.key ? 'bg-blue-100' : ''} h-full`}
      onClick={() => setSelectedOption(option.key)} // Simplified click handler
    >
      <div className='flex items-center justify-between'>
        {option.icon}
        <FaRegCircle className='size-[25px]' />
      </div>
      <p className="max-w-[156px]">{option.text}</p>
    </div>
  ))}
</div>


          <Link href={`/signup?userType=${selectedOption}`}>
            <button
              onClick={() => console.log('Navigating with userType:', selectedOption)} // Debug log
              className={`py-3 px-6 rounded-md ${selectedOption ? 'bg-[#B53CC9] text-white' : 'bg-[#ECF1F4] text-[#9E9EA1]'}`}
              disabled={!selectedOption}
            >
              Create Account
            </button>
          </Link>
          <p>Already have an account? <Link className='text-blue-600 underline' href="/signin">signin</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Page;