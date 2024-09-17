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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold'>1</div>
          <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
          <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-bold'></div>
          <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
          <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-bold'></div>
          <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
          <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-bold'></div>
        </div>
      </div>

      <div className="mt-[50px] flex item-center justify-center">
        <div className="py-5 px-6 shadow-md">
          <div className="text-center text-[26px] pb-4 font-semibold">
            <p>Sign Up as Offer Service</p>
          </div>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Email</p>
              <input
                type="email"
                name="email"
                className='p-2 border rounded-xl outline-none text-[14px] md:min-w-[350px] w-full'
                placeholder='i.e. example@example.com'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>

            <div>
              <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Phone Number</p>
              <input
                type="text"
                name="phoneNumber"
                className='p-2 border rounded-xl outline-none text-[14px] md:min-w-[350px] w-full'
                placeholder='i.e. (123) 456-7890'
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber}</p>}
            </div>

            <div>
              <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Password</p>
              <div className="flex items-center p-2 border rounded-xl">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className='outline-none text-[14px] md:min-w-[350px] w-full'
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={handleChange}
                />
                <img 
                  src="./eye.png" 
                  className={`object-cover size-[20px] cursor-pointer transition-transform ${showPassword ? 'rotate-180' : ''}`} 
                  onClick={() => setShowPassword(!showPassword)} 
                  alt="Toggle visibility"
                />
              </div>
              {errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>

            <div>
              <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Confirm Password</p>
              <div className="flex items-center p-2 border rounded-xl">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className='outline-none text-[14px] md:min-w-[350px] w-full'
                  placeholder='Confirm your password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <img 
                  src="./eye.png" 
                  className={`object-cover size-[20px] cursor-pointer transition-transform ${showConfirmPassword ? 'rotate-180' : ''}`} 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                  alt="Toggle visibility"
                />
              </div>
              {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-[#0097FF] mt-[40px] rounded-md text-white py-[7px] px-[30px]">
                Create Account
              </button>
              div
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;