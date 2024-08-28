import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Features = () => {
  return (
    <div className='bg-[#F7FBFB]  mt-[30px] pb-[70px]'>
        <div className='max-w-6xl mx-auto pt-[60px] mt-[130px] flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-[36px] font-bold'>Featured Services</h1>
          <p className='text-[#161C2D]'>
          Lorem ipsum dolor sit amet consectetur. Eget ultricies risus  <br /> pharetra enim enim. Scelerisque pharetra enim  turpis 
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-[95px] mt-[50px]'>
            <div >

<div className='flex gap-3'>
<img src="./roadmap.png" alt="" />
<h1 className='text-[20px] font-bold'>Cleaning Services</h1>
            </div>
            <p className='max-w-[292px] ml-[60px]'>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
</div>
<div >

<div className='flex gap-3'>
<img src="./users.png" alt="" />
<h1 className='text-[20px] font-bold'>Catering</h1>
            </div>
            <p className='max-w-[292px] ml-[60px]'>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.            </p>
</div>
<div >

<div className='flex gap-3'>
<img src="./share.png" alt="" />
<h1 className='text-[20px] font-bold'>Special Needs Care</h1>
            </div>
            <p className='max-w-[292px] ml-[60px]'>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
</div>
<div >

<div className='flex gap-3'>
<img src="./video.png" alt="" />
<h1 className='text-[20px] font-bold'>Babysitting</h1>
            </div>
            <p className='max-w-[292px] ml-[60px]'>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
</div>
<div >

<div className='flex gap-3'>
<img src="./open.png" alt="" />
<h1 className='text-[20px] font-bold'>Photography</h1>
</div>
            <p className='max-w-[292px] ml-[60px]'>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
</div>   <div >

<div className='flex gap-3'>
<img src="./card.png" alt="" />
<h1 className='text-[20px] font-bold'>Cleaning Services</h1>
            </div>
            <p className='max-w-[292px] ml-[60px]'>
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
</div>

        </div>


  <button className='py-[10px] flex  items-center gap-4 mt-12 rounded-lg px-[30px] text-white bg-[#0097FF]'>See more <FaArrowRightLong /></button>

      </div>
    </div>
  )
}

export default Features
