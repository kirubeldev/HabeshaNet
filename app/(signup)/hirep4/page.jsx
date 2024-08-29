"use client"
import React, { useState } from 'react';
import Thankyou from '@/components/thankyou';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Page = () => {
    const [showThankYou, setShowThankYou] = useState(false);
    const router = useRouter(); // Use useRouter here

    const handleFinish = () => {
        setShowThankYou(true);
        
        setTimeout(() => {
            router.push('/'); // Use router.push to navigate
        }, 2000);
    };

    useEffect(() => {
        if (showThankYou) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when thank you message is shown
        } else {
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }, [showThankYou]);

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
       <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold' >4</div>

       
        </div>
      
    </div>
      <div className='max-w-6xl mx-auto mt-[50px]'>
        <div className='w-full flex justify-center items-center'>
          <p className='text-[35px] font-bold py-5'>Review Your Profile</p>
        </div>
        <div className='flex flex-col'>
          <div className='border p-9 rounded-xl space-y-6'>
            <div className='flex justify-between'>
              <div className='space-y-6 w-[48%]'>
                <div className='space-y-4 flex flex-col'>
                  <p>
                    <span className='text-[#161C2D] font-bold text-[16px]'>Full Name</span>
                  </p>
                  <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
                </div>
                <div className='space-y-4 flex flex-col'>
                  <p>
                    <span className='text-[#161C2D] font-bold text-[16px]'>Service Category</span>
                  </p>
                  <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Service' />
                </div>
                <div className='space-y-4 flex flex-col'>
                  <p>
                    <span className='text-[#161C2D] font-bold text-[16px]'>Experience</span>
                  </p>
                  <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. 5 years' />
                </div>
              </div>
              <div className='space-y-6 w-[48%]'>
                <div className='space-y-4 flex flex-col'>
                  <p>
                    <span className='text-[#161C2D] font-bold text-[16px]'>Profile Picture</span>
                  </p>
                  <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. URL' />
                </div>
                <div className='space-y-4 flex flex-col'>
                  <p>
                    <span className='text-[#161C2D] font-bold text-[16px]'>Service Title</span>
                  </p>
                  <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
                </div>
                <div className='space-y-4 flex flex-col'>
                  <p>
                    <span className='text-[#161C2D] font-bold text-[16px]'>Qualification</span>
                  </p>
                  <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Qualification' />
                </div>
              </div>
            </div>
            <div className='space-y-4 flex flex-col'>
              <p>
                <span className='text-[#161C2D] font-bold text-[16px]'>Brief Description</span>
              </p>
              <textarea
                id="feedback"
                rows="4"
                className="border p-2 rounded-xl text-[14px] w-full"
                placeholder="Type your message here..."
              />
            </div>
            <div className='flex flex-col'>
              <p className='text-[24px] font-bold py-4'>Contact Information</p>
              <div className='rounded-xl space-y-6'>
                <div className='flex justify-between'>
                  <div className='space-y-6 w-[48%]'>
                    <div className='space-y-4 flex flex-col'>
                      <p>
                        <span className='text-[#161C2D] font-bold text-[16px]'>Phone Number</span>
                      </p>
                      <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. (123) 456-7890' />
                    </div>
                    <div className='space-y-4 flex flex-col'>
                      <p>
                        <span className='text-[#161C2D] font-bold text-[16px]'>City</span>
                      </p>
                      <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. City' />
                    </div>
                  </div>
                  <div className='space-y-6 w-[48%]'>
                    <div className='space-y-4 flex flex-col'>
                      <p>
                        <span className='text-[#161C2D] font-bold text-[16px]'>Email Address <span className='text-[#747171]'>(if different from sign-up)</span></span>
                      </p>
                      <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
                    </div>
                    <div className='space-y-4 flex flex-col'>
                      <p>
                        <span className='text-[#161C2D] font-bold text-[16px]'>State</span>
                      </p>
                      <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. State' />
                    </div>
                  </div>
                </div>
                {/* Additional Information Section */}
                <div className='flex flex-col'>
                  <p className='text-[24px] font-bold py-4'>Additional Information</p>
                  <div className='rounded-xl space-y-6'>
                    <div className='flex justify-between'>
                      <div className='space-y-6 w-[48%]'>
                        <div className='space-y-4 flex flex-col'>
                          <p>
                            <span className='text-[#161C2D] font-bold text-[16px]'>Languages Spoken</span>
                          </p>
                          <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. English, Spanish' />
                        </div>
                        <div className='space-y-4 flex flex-col'>
                          <p>
                            <span className='text-[#161C2D] font-bold text-[16px]'>Background Check</span>
                          </p>
                          <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Yes/No' />
                        </div>
                      </div>
                      <div className='space-y-6 w-[48%]'>
                        <div className='space-y-4 flex flex-col'>
                          <p>
                            <span className='text-[#161C2D] font-bold text-[16px]'>Special Skills <span className='text-[#747171]'>(if any)</span></span>
                          </p>
                          <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Skill' />
                        </div>
                        <div className='space-y-4 flex flex-col'>
                          <p>
                            <span className='text-[#161C2D] font-bold text-[16px]'>N/A</span>
                          </p>
                          <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. N/A' />
                        </div>
                      </div>
                    </div>
                    <div className='space-y-4 flex flex-col'>
                      <p>
                        <span className='text-[#161C2D] font-bold text-[16px]'>Upload Documents</span>
                      </p>
                      <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Document URL' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleFinish} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md w-fit flex justify-center mx-auto">
              Finish
            </button>
          </div>
        </div>
      </div>

      {showThankYou && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <Thankyou />
        </div>
      )}
    </div>
  );
};

export default Page;