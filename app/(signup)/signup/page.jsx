'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import axios from '@/api/axios';
import Link from 'next/link';

const Page = () => {
  const [formData, setFormData] = useState({
    emailOrPhoneNumber: '', // Renamed for consistency
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

  const validateForm = () => {
    const fieldErrors = {};

    if (!formData.emailOrPhoneNumber) {
      fieldErrors.emailOrPhoneNumber = 'Email or Phone number is required';
    }
    if (formData.password.length < 7) {
      fieldErrors.password = 'Password must be at least 8 characters long';
    }
    if (formData.confirmPassword.length < 7) {
      fieldErrors.confirmPassword = 'Confirm Password must be at least 8 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      fieldErrors.confirmPassword = "Passwords don't match";
    }

    return fieldErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldErrors = validateForm();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      const response = await axios.post("auth/signup", {
        userType,
        emailOrPhoneNumber: formData.emailOrPhoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (response.status === 201) { // Assuming 201 status for success
        router.push(`/Verification?type=${formData.emailOrPhoneNumber}`);
      }
    } catch (err) {
      alert("please select which type of user you want to be.  "  + err.response?.data?.message || 'Failed to create account. Please try again later.');
     router.push("/create")
    }
    
  };

  return (


<div className=' bg-[#ECF1F4]  h-[100vh] pt-[53px]'>
<div className='max-w-6xl mx-auto flex justify-between'>

<Link href={"/"}><h1  className='text-[#161C2D] font-bold text-[20px]' >HabeshaNets.com</h1></Link> 
<Link href={"/create"}><h1  className='text-[#B53CC9] underline  text-12px]' >Want to change type?</h1></Link> 
      
</div>
<div className='flex h-full -mt-[53px] items-center justify-center '>

<div className="mt-[50px] flex  item-center justify-center">
        <div className="py-5 px-6 bg-white rounded-md">
          <div className="text-center text-[26px] pb-4 font-semibold">
            <p>Sign Up as {userType ? userType.replace(/([A-Z])/g, ' $1') : 'User'}</p>
          </div>
          <form className='space-y-4' onSubmit={handleSubmit}>
            {/* Email / Phone Number */}
            <div>
              <p className='text-[#161C2D] font-bold text-[16px] mt-4'>Email / Phone number</p>
              <input
                type="text"
                name="emailOrPhoneNumber"
                className='p-2 border rounded-xl outline-none text-[14px] md:min-w-[350px] w-full'
                placeholder='i.e. example@example.com or 1234567890'
                value={formData.emailOrPhoneNumber}
                onChange={handleChange}
                aria-label="Email or Phone Number"
              />
              {errors.emailOrPhoneNumber && <p className='text-red-500'>{errors.emailOrPhoneNumber}</p>}
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
                  aria-label={showPassword ? "Hide password" : "Show password"}
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
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  alt={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                />
              </div>
              {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
            </div>

            {errors.submit && <p className='text-red-500'>{errors.submit}</p>} {/* Display submit error */}

            <div className="flex justify-center">
              <button type="submit" className="bg-[#B53CC9] mt-[40px] rounded-md text-white py-[7px] px-[30px]">
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
    
    </div>
















  );
};

export default Page;
