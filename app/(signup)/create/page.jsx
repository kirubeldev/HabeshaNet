import React from 'react'
import { RiUserFollowLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";
import Link from 'next/link';
const page = () => {
  return (
    <div>
      <div className='flex justify-center mx-auto items-center h-[90vh] max-w-6xl'>
<div className='flex flex-col space-y-6 mx-auto w-full   justify-center items-center '>
<div>
    <h1 className=' text-[30px] md:text-[42px] font-bold'>
    Join as a client or freelancer 
    </h1>
    </div>
    <div className='flex-col w-fit  md:flex-row space-y-6 flex pb-4 md:w-full items-end justify-evenly'>
<div className='flex px-10 py-6 flex-col gap-3 border rounded-md'>
<div className='flex items-center justify-between'>
<RiUserFollowLine className='size-[25px]' />
<FaRegCircle className='size-[25px]'/>
</div>
<p>I'm a client , hiring 
for <br /> a project .</p>
</div>


<div className='flex px-[50px] py-6 flex-col gap-3 border rounded-md'>
<div className='flex items-center justify-between'>
<PiHandbag className='size-[25px]' />
<FaRegCircle className='size-[25px]'/>
</div>
<p>I’m a Freelancer , <br />
looking for work. </p>
</div>


    </div>

    <button className='bg-[#ECF1F4] py-3 px-6 rounded-md text-[#9E9EA1]'> Create Account</button>
  <p>Already have an account? <Link className='text-blue-600 underline' href={""}>Log in</Link></p>
</div>
      </div>
    </div>
  )
}

export default page
