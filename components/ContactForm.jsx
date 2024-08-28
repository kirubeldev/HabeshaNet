import React from 'react';

const ContactForm = () => {
  return (
    <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
        <div className='border flex justify-evenly p-9 rounded-xl'>
          <div className='space-y-6'>
            <div className='space-y-4 flex flex-col'>
              <p>
                <span className='text-[#161C2D] font-bold text-[16px]'>First & Last Name</span>
              </p>
              <input type="text" className='border p-2 rounded-xl text-[14px] w-[490px]' placeholder='i.e. John Doe' />
            </div>
            <div className='space-y-4 flex flex-col'>
              <p>
                <span className='text-[#161C2D] font-bold text-[16px]'>Phone Number</span>
              </p>
              <input type="text" className='border p-2 rounded-xl text-[14px] w-[490px]' placeholder='i.e. (123) 456-7890' />
            </div>
            <div className='space-y-4 flex flex-col'>
              <p>
                <span className='text-[#161C2D] font-bold text-[16px]'>Message</span>
              </p>
              <textarea
                id="feedback"
                rows="4"
                className="border p-2 rounded-xl text-[14px] w-full"
                placeholder="Type your message here..."
              />
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-4 flex flex-col'>
              <p>
                <span className='text-[#161C2D] font-bold text-[16px]'>Email</span>
              </p>
              <input type="text" className='border p-2 rounded-xl text-[14px] w-[490px]' placeholder='i.e. john.doe@example.com' />
            </div>
            <div className='space-y-4 flex flex-col'>
              <p>
                <span className='text-[#161C2D] font-bold text-[16px]'>Subject</span>
              </p>
              <input type="text" className='border p-2 rounded-xl text-[14px] w-[490px]' placeholder='i.e. Inquiry' />
            </div>
          </div>
          
        </div>
        <button type="submit" className="mt-4 bg-[#FC9B00] text-white px-4 py-2 rounded-md w-fit flex justify-center mx-auto">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactForm;