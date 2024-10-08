

import AppleandGoogle from '@/components/appleandGoogle'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
          <div>
        <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
 <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold' >1</div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold' >2</div>

       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold' >3</div>

       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-bold' ></div>
       
        </div>
      
    </div>
      <AppleandGoogle title={"Fill Profile"}/>
   <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
        <div className='border p-9 rounded-xl space-y-6'>
          <div className='flex justify-between'>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Days Available  <span className='text-[#6b6969]'> (Select days of the week)</span></span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
             
             
            </div>
            <div className='space-y-6 w-[48%]'>
             
             
              <div className='space-y-4 flex flex-col'>
                <p>
                <span className='text-[#161C2D] font-bold text-[16px]'>Hours Available <span className='text-[#6b6969]'> (Specify time range) </span></span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
            </div>
          </div>
          
          <div className='flex flex-col'>
            <p className='text-[24px] font-bold py-4'>Additional Information </p>
        <div className='rounded-xl space-y-6'>
          <div className='flex justify-between'>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Languages Spoken </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Background Check</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. (123) 456-7890' />
              </div>
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Special Skills<span className='text-[#747171]'>( if different from sign-up) </span> </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>N/A</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
            </div>
          </div>
          <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Upload Documents </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
        
        </div>
       
      </div>
      <Link  href={"/hirep4"}>  <button type="submit" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md w-fit flex justify-center mx-auto">
         Continue
        </button></Link>  
        </div>
       
      </div>
    </div>

    </div>
  )
}

export default page
