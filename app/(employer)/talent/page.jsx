import TalentCards from '@/components/TalentCards'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { RiStarHalfLine, RiStarSFill } from 'react-icons/ri'

const page = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto mt-[22px]'>
      <div className="flex justify-between items-center">
          <div className="flex items-center border rounded-xl px-4">
            <FiSearch className="mr-5" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search job postings "
              className="outline-none text-[14px] py-1 md:w-[570px] xl:[774px] "
            />
          </div>

          <div className="flex items-center gap-7 ">
            <div className="bg-[#B2B2B51A] flex items-center gap-2 rounded-md py-[10px] px-[30px]">
              <img src="./fil.png" alt="" />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className='relative'>

        <div className='grid md:grid-cols-3 s gap-4 max-h-[80vh] overflow-y-scroll  px-4' >

           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
           <TalentCards/>
        </div>


        <div className='flex w-full items-center justify-center flex-col mt-6 absolute bottom-4 bg-white/90'>
          <div className='flex items-center gap-3'>

<RiStarSFill  className='text-yellow-300 text-2xl'/> <RiStarSFill className='text-yellow-300 text-2xl'/> <RiStarSFill  className='text-yellow-300 text-2xl'/> <RiStarSFill className='text-yellow-300 text-2xl' /> <RiStarHalfLine className='text-yellow-300 text-xl' />
          </div>
          

          <p>Upgrade Your Subscription To Explore All Profiles   </p>
          <button className="py-[10px] flex gap-3 items-center rounded-lg mt-4 px-[30px] text-white bg-[#B53CC9]">
          Upgrade Subscription <FaStar />
              </button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default page
