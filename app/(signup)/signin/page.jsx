"use client";
import AppleandGoogle from '@/components/appleandGoogle';
import Progressbar from '@/components/Progressbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { z } from 'zod';
import axios from "@/api/axios";

// Zod schema for form validation
const SignupSchema = z.object({
  emailorphoneNumber: z.union([
    z.string().email('Invalid email address'),
    z.string().min(10, 'Phone number must be at least 10 digits'),
  ]),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

const Page = () => {
  const [formData, setFormData] = useState({
    emailorphoneNumber: '',
    password: '',
  });

  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state
    try {
      // Validate form data
      SignupSchema.parse(formData);
      setErrors({});

      // Send the data to the server
      const response = await axios.post("/auth/signin", {
        emailOrPhone: formData.emailorphoneNumber,
        password: formData.password,
      });

      console.log('Form submitted successfully', response.data);

      if (response.status === 201) {
        // Navigate to the Verification page
        router.push("/Verification");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Capture and display validation errors
        const fieldErrors = {};
        err.errors.forEach((error) => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
      } else if (err.response) {
        // Handle other errors (e.g., server errors)
        console.error('Error submitting form:', err.response.data || err.message);
        setErrors({ submit: 'Failed to sign in. Please try again later.' });
      } else {
        console.error('Unexpected error:', err);
        setErrors({ submit: 'An unexpected error occurred. Please try again later.' });
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
        {/* Progress indicators */}
        <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold'>1</div>
        <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
        <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-bold'></div>
        <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
        <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-bold'></div>
        <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
        <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-bold'></div>
      </div>

      <div className="mt-[50px] flex item-center justify-center">
        <div className="py-5 px-6 shadow-md">
          <div className="text-center text-[26px] pb-4 font-semibold">
            <p>Sign In</p>
          </div>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Email / Phone number</p>
              <input
                type="text"
                name="emailorphoneNumber"
                className='p-2 border rounded-xl outline-none text-[14px] md:min-w-[350px] w-full'
                placeholder='i.e. example@example.com or 1234567890'
                value={formData.emailorphoneNumber}
                onChange={handleChange}
                aria-label="Email or Phone Number"
              />
              {errors.emailorphoneNumber && <p className='text-red-500'>{errors.emailorphoneNumber}</p>}
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
                  aria-label="Password"
                />
                <img 
                  src={showPassword ? "./openeye.png" : "./eye.png"} 
                  className={`object-contain size-[15px] cursor-pointer transition-transform`} 
                  onClick={() => setShowPassword(!showPassword)} 
                  alt={showPassword ? "Hide password" : "Show password"}
                />
              </div>
              {errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>

            {errors.submit && <p className='text-red-500'>{errors.submit}</p>} {/* Display submit error */}

            <div className="flex justify-center">
              <button 
                type="submit" 
                className="bg-[#0097FF] mt-[40px] rounded-md text-white py-[7px] px-[30px]"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
            <div className='flex gap-2 text-[14px] mt-2 items-center justify-end '>
              <p>Doesen't Have An account?</p>
              <Link className='text-blue-500' href="/create"> Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
