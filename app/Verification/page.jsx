"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
 
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
    <div className="mt-[50px] flex item-center justify-center">
    
    <p className='text-[#161C2D] font-bold text-[36px] mt-4'>Enter Your Verification code </p>

   
      
    </div>
      
    <div className="mt-[50px] flex item-center justify-center">
       <div className="py-5 px-12 shadow-md "> 
        <div className=" text-center text-[24px] pb-4 font-semibold">

        <p>Sign Up as Offer Service</p>
    
        </div>
        <div className=" text-center text-[16px] text-gray pb-4 ">

<p>An 6-digit code has been sent to +2519 4829 2931 <Link className="text-blue-500 underline" href="/signup">
Change
</Link>  </p>

</div>
        

               

                <div className='space-y-4 mt-6'>
                 
                  <input
                    type="password"
                    name="phoneNumber"
                    className='border p-2 rounded-xl outline-blue-500 text-[14px] md:min-w-[590px] w-full'
                    placeholder='eg... 987237'
               
                  />
                </div>
                <p className="mt-[15px]">The code will be expired in <strong>2:59 </strong> </p>
           <p>Didn’t receive the code ?  <Link className="text-blue-500 underline" href="">  Resend 

 </Link> </p>
                <div className="flex justify-center "> 


                </div>

        </div>
    
    </div>
    <div className=" text-center ">

    <button className="bg-[#0097FF] mt-[40px] rounded-md text-white py-[7px] px-[30px]">verify</button>
    </div>

    </div>
  );
};

export default Page;
