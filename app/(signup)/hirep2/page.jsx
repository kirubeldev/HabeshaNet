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
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-bold' ></div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-bold' ></div>
       
        </div>
      
    </div>
       
   <div className="flex item-center justify-center">
<p className="text-[22px] mt-5 font-semibold">Fill Profile</p>   </div>

   <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
        <div className='border p-9 rounded-xl space-y-6'>
          <p className="text-[20px]">Personal information</p>
          <div className='flex justify-between gap-4'>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>First Name</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Company Name</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. (123) 456-7890' />
              </div>
 
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Last Name </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Prefered Contact Method</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
              
            </div>

            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Email Address </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>profile Picture</span>
                </p>
                <div className="flex item-center">
                   <img src="./user.png"  className="object-contain size-[50px] rounded-full mx-3" />
                <input type="file" className='border p-2 text-gray rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
                </div>
              </div>
            
            </div>
          </div>
          
          <div className='flex flex-col'>
            <p className='text-[18px] font-bold pb-4'>Location</p>
        <div className='rounded-xl space-y-6'>
          <div className='flex justify-between gap-4'>
            <div className='space-y-6 w-[48%] '>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>city </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='city' />
              </div>
            
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>State <span className='text-[#747171]'> </span> </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='state' />
              </div>
              
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>State <span className='text-[#747171]'></span> </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='country' />
              </div>
              
            </div>
          </div>
         
        
        </div>
       
      </div>
       
        </div>
       
      </div>
    </div>



    <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
        <div className='border p-9 rounded-xl space-y-6'>
          <p className="text-[20px]">More information</p>

          <div className='flex flex-col'>
            <div className="flex justify-around item-center">

            <p className='text-[14px] font-semibold pb-4'>Service Catagory</p>
            <p className='text-[14px] font-semibold pb-4'>Service Title</p>
            
            </div>
        <div className='rounded-xl space-y-6'>
          <div className='flex justify-between gap-4'>
          
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>State <span className='text-[#747171]'> </span> </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='state' />
              </div>
              
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>State <span className='text-[#747171]'></span> </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='country' />
              </div>
              
            </div>
          </div>
         
        
        </div>
       
      </div>
          <div className='flex justify-between gap-4'>
            
            <div className='space-y-6 w-[10%]'>
              <p>Experince 1</p>
 
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Position </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Responsibility</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Start Date </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
            </div>

            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Years of exeprience </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Company</span>
                </p>
                <div className="flex item-center">
                <input type="text" className='border p-2 w-full rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
                </div>
                <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>End Date </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              </div>
            
            </div>
          </div>
          <button className="py-[7px] px-[30px] rounded-md bg-[#3C3C51] text-white ">Add New Experience</button>
          
          <div className='flex justify-between mt-4 gap-4'>
            
            <div className='space-y-6 w-[10%]'>
              <p>Qualification 1</p>
 
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Degree </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
             
            </div>

            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Certification</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
               
               
               
              </div>
            
            </div>
            
          </div>
          <div className='space-y-4 pl-[10%] flex flex-col'>
                <p>
                  <span className='text-[#161C2D]  font-bold text-[16px]'>Tranings </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
          <button className="py-[7px] px-[30px] rounded-md bg-[#3C3C51] text-white ">Add New Qualifications</button>
          
        </div>
       
      </div>
    </div>


  

    </div>
  )
}

export default page


