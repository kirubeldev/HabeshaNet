import React from 'react';
const image1 = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvxenS8UHh6VNNc79AK_6F5AHRUTCcJmy8d6y7fPyzHVFy0v2H";
import { IoMdNotifications } from "react-icons/io";
const Howitworks = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-[36px] font-bold'>How it Works</h1>
          <p className='text-[#161C2D]'>
            With lots of unique blocks, you can easily build a page without coding. <br /> 
            Build your next landing page.
          </p>
        </div>

        <div className="flex mt-[100px] flex-col gap-[100px] md:gap-[200px] 2xl:gap-[250px] md:flex-row justify-center w-full items-center">
  <div className="relative flex justify-center items-center w-full md:w-[300px] md:h-[400px]">
    {/* Bottom Card */}
    <div 
  className="absolute w-[250px] md:w-[300px] h-[425px] md:h-[400px] overflow-hidden"
  style={{
    filter: 'blur(15px)',
    transform: 'translate(40px, 60px)', // Offset the bottom card
    backgroundColor: 'rgba(0, 151, 255, 0.1)', // Semi-transparent blue overlay
  }}
>
  <img src={image1} alt="Card 1" className="w-full h-full object-cover rounded-md" />
</div>



    {/* Top Card */}
    <div className="relative w-[250px] md:w-[300px] overflow-visible h-[350px] md:h-[400px] shadow-lg">
      <img src={image1} alt="Card 2" className="w-[425px] h-[425px] object-cover rounded-md relative"  />
      <div className="absolute bottom-[20px] px-8 flex  -left-[100px] rounded-2xl  w-[351px] h-1/4 bg-[#161C2D]" >
      
              <div className='flex gap-3 items-center pb-3'>
              <div className="w-[43px] h-[43px] rounded-full mt-1 flex justify-center items-center font-bold text-white bg-[#68D585]">
  <IoMdNotifications className="text-black" />
</div>
               <div>

                <h1 className='text-[15px]  text-white'>New Invitation!</h1>
                <p className=' text-[17px] font-bold text-white'>Interview invitation at Greener</p>
               </div>
           
              </div>
            
      </div>

    </div>
  </div>

  <div>
            <div>
              <div className='flex gap-3 items-center pb-3'>
                <div className='size-[43px] rounded-full  mt-1 flex justify-center items-center font-bold text-white bg-[#FC9B00]'>1</div>
               <div>

                <h1 className='text-[20px] font-bold'>Sign Up</h1>
                <p className='text-[#161C2D] text-[16px] '>Create your profile as a professional or customer.</p>
               </div>
           
              </div>
            </div>

            <div>
              <div className='flex items-center gap-3 pb-2'>
                <div className='size-[43px] rounded-full flex justify-center items-center font-bold text-white mt-1 bg-[#FC9B00]'>2</div>
                <div>

                <h1 className='text-[20px] font-bold '>Find a Match</h1>
                <p className='text-[#161C2D] text-[16px] '>Search for professionals or browse job listings.</p>
                </div>
            
              </div>
            </div>

            <div>
              <div className='flex items-center gap-3 pb-2'>
                <div className='size-[43px] rounded-full flex justify-center items-center font-bold text-white mt-1 bg-[#FC9B00]'>3</div>
              <div>

                <h1 className='text-[20px] font-bold'>Connect and Hire</h1>
                <p className='text-[#161C2D] text-[16px] '>Contact and hire the right person for your needs.</p>
              </div>
             
              </div>
            </div>
          </div>
</div>

      </div>
    </div>
  );
}

export default Howitworks;
