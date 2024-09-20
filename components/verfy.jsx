"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from "@/api/axios";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';





const VerificationForm = ({ verificationToken }) => {
  const router = useRouter();


  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [isTimerActive, setIsTimerActive] = useState(true); // To manage timer state

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsTimerActive(false); // Stop the timer when it reaches zero
    }
  }, [isTimerActive, timeLeft]);



  const [pass, setPass] = useState("");
  const [message, setMessage] = useState(""); // State for feedback messages

  // Handle OTP verification
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!/^\d{6}$/.test(pass)) { // Check if pass is a 6-digit number
      setMessage('Please enter a valid 6-digit verification code.');
      return;
    }

    try {
      const response = await axios.post("/auth/verify", {
        verificationCode: String(pass), // Ensure pass is sent as a string
      }, {
        headers: {
          Authorization: `Bearer ${verificationToken}`, // Add Bearer token here
        }
      });

      console.log('Verification response:', response.data);

      if (response.data.verificationToken) {
        localStorage.setItem('verificationToken', response.data.verificationToken); // Store the new token
      }

      if (response.status === 200) {
        router.push("/signin"); // Redirect to signin page on success
      }

      setMessage(response.data.message); // Set the success message

    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        setMessage(error.response.data.message || 'Error verifying code. Please try again.');
      } else {
        console.error('Error verifying OTP:', error);
        setMessage('Error verifying code. Please try again.');
      }
    }
  };

  // Handle re-sending the OTP
  const handleSubmitagain = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("/auth/send-verification", {}, {
        headers: {
          Authorization: `Bearer ${verificationToken}`, // Add Bearer token here
        }
      });

      if (response.status === 200) {
        setMessage('Verification code re-sent successfully.');
      } else {
        setMessage('Failed to re-send verification code.');
      }

    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        setMessage(error.response.data.message || 'Error re-sending the verification code.');
      } else {
        console.error('Error re-sending the OTP:', error);
        setMessage('Error re-sending the verification code.');
      }
    }
  };

  return (
    <div>
      <div>
        <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
          <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold'>1</div>
          <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
          <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold'>2</div>
          <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
          <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-bold'></div>
          <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
          <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-bold'></div>
        </div>
      </div>
      <div className="mt-[50px] flex item-center justify-center">
        <p className='text-[#161C2D] font-bold text-[36px] mt-4'>Enter Your Verification Code</p>
      </div>
      <div className="mt-[50px] flex item-center justify-center">
        <div className="py-5 px-12 shadow-md">
          <div className="text-center text-[24px] pb-4 font-semibold">
            <p>Sign Up as Offer Service</p>
          </div>
          <div className="text-center text-[16px] text-gray pb-4 ">
            <p>An 6-digit code has been sent to {type} <Link className="text-blue-500 underline" href="/signup"> {" "}Change</Link></p>
          </div>
          <form className='space-y-4 mt-6' onSubmit={handleSubmit}>
            <input
              type="number" // Set input type to number
              name="phoneNumber"
              className='border p-2 rounded-xl outline-blue-500 text-[14px] md:min-w-[590px] w-full'
              placeholder='e.g. 987237'
              onChange={(e) => setPass(e.target.value)} 
              min="0" // Ensure positive numbers only
              max="999999" // Limit to 6 digits
              required // Make the input required
            />
            {/* {pass && <p className="mt-2">Entered Code: {pass}</p>} */}
            <p className="mt-[15px]">
        The code will expire in <strong>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} </strong>
      </p>
      <button 
        onClick={handleSubmitagain} 
        className="text-blue-500 underline mt-2" 
        disabled={!isTimerActive} // Disable if the timer is still active
      >
        Didn’t receive the code? Resend
      </button>
      <div className="flex justify-center">
        <button 
          type="submit" 
          className="bg-[#B53CC9] mt-[40px] rounded-md text-white py-[7px] px-[30px]" 
          disabled={timeLeft === 0} // Disable if the countdown is still running
        >
          Verify
        </button>
      </div>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>} {/* Display feedback message */}
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
