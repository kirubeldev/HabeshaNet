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
      console.log(response.data.userType);
     
      if(!response.data.isProfileCompleted && response.data.userType === 'employer'){
        router.push("/employerform");
  
      }else if(response.data.isProfileCompleted && response.data.userType === 'employer'){
        router.push("/employer");

      }


      if(!response.data.isProfileCompleted && response.data.userType === 'serviceProvider'){
        router.push("/serviceprovider");
  
      }else if(response.data.isProfileCompleted && response.data.userType === 'serviceProvider'){
        router.push("/about");

      }



      if(!response.data.isProfileCompleted && response.data.userType === 'propertyOwner'){
        router.push("/propertyowner");
  
      }else if(response.data.isProfileCompleted && response.data.userType === 'propertyOwner'){
        router.push("/about");

      }


      if(!response.data.isProfileCompleted && response.data.userType === 'propertyRenter'){
        router.push("/renter");
  
      }else if(response.data.isProfileCompleted && response.data.userType === 'propertyRenter'){
        router.push("/about");

      }



      if(!response.data.isProfileCompleted && response.data.userType === 'babySitterFinder'){
        router.push("/babysitterfinder");
  
      }else if(response.data.isProfileCompleted && response.data.userType === 'babySitterFinder'){
        router.push("/about");

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
<div className=' bg-[#ECF1F4] pt-[53px]'>
<div className='max-w-6xl mx-auto'>
<div>
           <Link href={"/"}><h1  className='text-[#161C2D] font-bold text-[20px]' >HabeshaNets.com</h1></Link> 
        </div>
</div>

    <div className='h-[100vh] -mt-[53px] flex items-center justify-center bg-[#ECF1F4]'>
    

      <div className="mt-[50px]  rounded-md bg-white flex item-center justify-center">
        <div className="py-5 px-6">
          <div className="text-center text-[26px] pb-4 font-semibold">
            <p>Sign In</p>
          </div>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <p className='text-[#161C2D] mb-2 font-bold text-[16px] mt-4'>Email / Phone number</p>
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
              <div className="flex items-center p-2 border mt- rounded-xl">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className='outline-none text-[14px]  md:min-w-[350px] w-full'
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
                className="bg-[#B53CC9] mt-[40px] rounded-md text-white py-[7px] px-[30px]"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
            <div className='flex gap-2 text-[12px] mt-5 items-center justify-end '>
              <p>Doesen't Have An account?</p>
              <Link className='text-blue-500' href="/create"> Signup</Link>
            </div>
          </form>
        </div>
</div>
</div>
    </div>
  );
};

export default Page;
