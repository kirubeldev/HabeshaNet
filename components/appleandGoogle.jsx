
import React from 'react'

const AppleandGoogle = ({title}) => {
  return (
    <div>
      <div className='flex justify-center mx-auto items-center mt-[90px] max-w-6xl'>
        <div className='flex flex-col space-y-6 mx-auto w-full justify-center items-center'>
          <div>
            <h1 className='text-[30px] md:text-[35px] font-semibold'>
            {title}
            </h1>
          </div>
          <div>
            <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row items-center justify-start md:gap-[100px] w-full'>
              <button className='border py-2 px-5 flex gap-3 items-center rounded-md'>
                <img src="./Vector.png" className='size-[22px] object-cover' alt="Apple logo" />
                Continue with Apple
              </button>
              <button className='border py-2 px-5 flex gap-3 items-center rounded-md'>
                <img src="./google.png" className='size-[22px] object-cover' alt="Google logo" />
                Continue with Google
              </button>
            </div>
          </div>
          <div className='flex justify-center gap-8 items-center'>
            <div className='border w-[300px] border-[#B2B2B5]'></div>
            <p className='text-[24px]'>or</p>
            <div className='border w-[300px] border-[#B2B2B5]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppleandGoogle
