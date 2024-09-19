'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import axios from '@/api/axios';
import Link from 'next/link';

const Page = () => {
  const [formData, setFormData] = useState({
    emailorphoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const searchParams = useSearchParams();
  const userType = searchParams.get('userType');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldErrors = {};
    if (!formData.emailorphoneNumber) {
      fieldErrors.emailorphoneNumber = 'Required';
    }
    if (formData.password.length < 8) {
      fieldErrors.password = 'Password must be at least 8 characters long';
    }
    if (formData.confirmPassword.length < 8) {
      fieldErrors.confirmPassword = 'Confirm Password must be at least 8 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      fieldErrors.confirmPassword = "Passwords don't match";
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      const response = await axios.post("auth/signup", {
        userType,
        emailOrPhoneNumber: formData.emailorphoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (response.status === 201) {
        router.push("/Verification");
      }
    } catch (err) {
      setErrors({ submit: 'Failed to create account. Please try again later.' });
    }
  };

  return (
    <div>
      <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
        {/* Progress indicator */}
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
            <p>Sign Up as {userType ? userType.replace(/([A-Z])/g, ' $1') : 'User'}</p>
          </div>
          <form className='space-y-4' onSubmit={handleSubmit}>
            {/* Email / Phone Number */}
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

            {/* Password */}
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
                  src={showPassword ? "/openeye.png" : "/eye.png"} 
                  className="object-contain size-[15px] cursor-pointer transition-transform"
                  onClick={() => setShowPassword(!showPassword)}
                  alt={showPassword ? "Hide password" : "Show password"}
                />
              </div>
              {errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>

            {/* Confirm Password */}
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
                  aria-label="Confirm Password"
                />
                <img 
                  src={showConfirmPassword ? "/openeye.png" : "/eye.png"} 
                  className="object-contain size-[15px] cursor-pointer transition-transform"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  alt={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                />
              </div>
              {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
            </div>

            {errors.submit && <p className='text-red-500'>{errors.submit}</p>} {/* Display submit error */}

            <div className="flex justify-center">
              <button type="submit" className="bg-[#0097FF] mt-[40px] rounded-md text-white py-[7px] px-[30px]">
                Create Account
              </button>
            </div>

            <div className='flex gap-2 text-[14px] mt-2 items-center justify-end '>
              <p>Already Have An account?</p>
              <Link className='text-blue-500' href="/signin"> Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
