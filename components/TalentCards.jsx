import React from 'react'
import { FaPhoneAlt, FaRegHeart } from 'react-icons/fa'
import { RiStarHalfLine, RiStarSFill } from 'react-icons/ri'

const TalentCards = () => {
    const user1 = "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  return (
    <div>
      <div className='px-4 border py-6 w-fit rounded-xl mt-[70px]'>
        <div className='flex items-center justify-between'>

<div className='flex items-center gap-5 mx-6 mr-12  '>
<img src={user1} alt="" className='rounded-full size-[80px] object-cover' />
<div className='flex flex-col gap-2'>
<p className='leading-3 text-[17px]'>Nahidi Hasen</p>
<p className='text-[14px] text-slate-400 leading-4'>UI/UX Designer</p>
<div className='flex items-center gap-2  -mt-1'>
<RiStarSFill  className='text-yellow-300 text-2xl'/> <RiStarSFill className='text-yellow-300 text-2xl'/> <RiStarSFill  className='text-yellow-300 text-2xl'/> <RiStarSFill className='text-yellow-300 text-2xl' /> <RiStarHalfLine className='text-yellow-300 text-xl' />
</div>
</div>
</div>
<FaRegHeart  className='text-2xl font-bold'/>
        </div>


        <p className='max-w-[350px] mt-6 text-center text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam ab illo facilis sed consequatur quae tenetur ut consectetur neque non eos, voluptates esse nemo veniam repellendus optio totam necessitatibus.
        </p>
<div className='flex justify-center items-center w-full'>

        <button className="py-[10px] flex gap-3 items-center rounded-lg mt-4 px-[30px] text-white bg-[#0097FF]">
                Contact <FaPhoneAlt className='text-white ' /> 
              </button>
</div>
      </div>
    </div>
  )
}

export default TalentCards
