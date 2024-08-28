import React from 'react'
import { FaArrowRightLong, FaFacebook, FaLinkedin, FaSquareInstagram, FaTwitter } from 'react-icons/fa6'

const TeamCard = () => {
const imgs = "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D";

  return (
    <div>
      <div className="w-fit mx-auto border bg-white p-4 rounded-lg shadow-md overflow-hidden mt-10">
        <img 
          className=" object-cover rounded-xl " 
          src={imgs} 
          alt="green iguana" 
          width={255}
          height={192}
        />
        <div className="">
          <h5 className="text-xl font-semibold pt-3 ">Bonnie Green</h5>
         <p className='text-[#6B7280] pb-2 text-[12px]'>Senior Front-end Developer</p>
          <p className="text-gray-600 text-base max-w-[200px]">
          Worem ipsum dolor sit amet sur, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className='flex gap-3 mt-3 pb-3'>

    <FaTwitter className='text-[#FC9B00] size-[20px]'/> <FaFacebook className='text-[#FC9B00] size-[20px]' /> <FaSquareInstagram className='text-[#FC9B00] size-[20px]' /> <FaLinkedin className='text-[#FC9B00] size-[20px]' />
  </div>
      </div>
    </div>
  )
}

export default TeamCard
