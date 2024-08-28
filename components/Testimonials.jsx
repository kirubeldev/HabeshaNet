import React from 'react'
import Testimonycard from './testimonycard'
const Testimonials = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto mt-[100px] flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-[36px] font-bold">Testimonials</h1>
            <p className="text-[#161C2D] text-[14px] ">
            Lorem ipsum dolor sit amet consectetur. Eget ultricies <br /> risus pharetra enim enim. Scelerisque turpis 
            </p>
          </div>
          
        </div>

<div className='flex gap-[30px] '>
<Testimonycard />
        <Testimonycard />
        <Testimonycard />
</div>

        
        
      </div>
      
    </div>
  )
}

export default Testimonials
