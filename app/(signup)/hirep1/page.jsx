"use client"
import AppleandGoogle from '@/components/appleandGoogle';
import Progressbar from '@/components/Progressbar';
import Link from 'next/link';
import React, { useState } from 'react';
import { z } from 'zod';

// Zod schema for form validation
const SignupSchema = z.object({
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters long'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // Set the path of the error message for confirmPassword field
});

const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      SignupSchema.parse(formData);
      setErrors({});
      // Form submission logic
      console.log('Form submitted successfully', formData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach((error) => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div>
<div>
        <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
 <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold' >1</div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-bold' ></div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-bold' ></div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-bold' ></div>
       
        </div>
      
    </div>

      <AppleandGoogle title={"  Sign up to hire talent"}/>

      <div className='max-w-6xl mx-auto mt-[50px]'>
        <div className='flex flex-col'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='flex flex-col w-full md:justify-between space-y-6 md:space-y-0'>
              <div className='w-full '>
                <div className='space-y-4'>
                  <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Email</p>
                  <input
                    type="text"
                    name="email"
                    className='border p-2 rounded-xl text-[14px]  w-full'
                    placeholder='i.e. john.doe@example.com'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className='space-y-4'>
                  <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Phone Number</p>
                  <input
                    type="text"
                    name="phoneNumber"
                    className='border p-2 rounded-xl text-[14px]  w-full'
                    placeholder='i.e. (123) 456-7890'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>
              </div>
              <div className='w-full '>
                <div className='space-y-4'>
                  <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Password</p>
                  <input
                    type="password"
                    name="password"
                    className='border p-2 rounded-xl text-[14px]  w-full'
                    placeholder='Enter your password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className='space-y-4'>
                  <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Confirm Password</p>
                  <input
                    type="password"
                    name="confirmPassword"
                    className='border p-2 rounded-xl text-[14px]  w-full'
                    placeholder='Confirm your password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
              </div>
            </div>
          <Link href={"/hirep2"} >  <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-fit flex justify-center mx-auto"
            >
              Create Account
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
