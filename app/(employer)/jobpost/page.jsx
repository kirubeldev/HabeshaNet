import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { BsPlusLg } from "react-icons/bs";
const page = () => {
  return (
    <div>
        <div className='max-w-6xl mx-auto mt-[50px]'>
<div className='flex items-center gap-3'>
<IoIosArrowBack  className='text-2xl font-bold'/>
<p className='text-[24px] font-bold'>
Job Posting
</p>
</div>



<div className='max-w-6xl mx-auto mt-[10px]'>
      <div className='flex flex-col'>
        <div className=' p-9 rounded-xl space-y-6'>
          <div className='flex justify-between'>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Job Title</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Job Type</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. (123) 456-7890' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Salary/Rate</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. 5' />
              </div>
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Location</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Hour Required</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Application Deadline  </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
            </div>
          </div>
          <div className='space-y-4 flex flex-col'>
            <p>
              <span className='text-[#161C2D] font-bold text-[16px]'>Job Description </span>
            </p>
            <textarea
              id="feedback"
              rows="4"
              className="border p-2 rounded-xl text-[14px] w-full"
              placeholder="Type your message here..."
            />
          </div>

          <div className='space-y-4 flex flex-col'>
            <p>
              <span className='text-[#161C2D] font-bold text-[16px]'>Responsibilities </span>
            </p>
            <textarea
              id="feedback"
              rows="4"
              className="border p-2 rounded-xl text-[14px] w-full"
              placeholder="Type your message here..."
            />
          </div>

          <div className='space-y-4 flex flex-col'>
            <p>
              <span className='text-[#161C2D] font-bold text-[16px]'>Requirements  </span>
            </p>
            <textarea
              id="feedback"
              rows="4"
              className="border p-2 rounded-xl text-[14px] w-full"
              placeholder="Type your message here..."
            />
          </div>
        
   
        </div>
       
      </div>
      
    </div>
    
        </div>
        <div className='flex justify-start gap-5 items-start max-w-6xl mx-auto pl-9'>

        <Link  href={""}>  <button type="submit" className=" gap-3 items- bg-blue-500 text-white px-6 py-2 rounded-md w-fit flex justify-ceter mx-auto">
      <BsPlusLg className='text-2xl' />   Create Job
        </button></Link> 

        <button className='bg-[#F4F4F5] px-[16px] py-[8px] rounded-md h-fit  '>
           Cancel
            </button> 
        </div>
    </div>
  )
}

export default page

