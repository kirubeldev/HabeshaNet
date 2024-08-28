import React from 'react'
import Meet from './meetteam'

const About = () => {
  return (
    <div>
       <div className=' pb-[70px] bg-[#F7FBFB] -mt-[130px] '>
        <div className='max-w-6xl mx-auto pt-[60px] mt-[130px] flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-[36px] font-bold'>Why choose us</h1>
          <p className='text-[22px] fon'>
          People choose us because we serve the best for everyone
          </p>
        </div>



        <div className='flex justify-evenly w-full mt-[50px]'>
            <div className='flex flex-col gap-[40px]'>
                <div className='flex gap-3'>
                    <img src="./Icon3.png" alt="" className=' size-[79px] object-cover' />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Dedicated project manager</h1>
                        <p>With lots of unique blocks, you can easily <br />build a page without coding. Build your <br /> next landing page.</p>
                    </div>

                </div>
                <div className='flex flex-col'>
                <div className='flex gap-3'>
                    <img src="./Icon.png" alt="" className=' size-[79px] object-cover' />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Organized tasks</h1>
                        <p>With lots of unique blocks, you can easily <br />build a page without coding. Build your <br /> next landing page.</p>
                    </div>

                </div>

            </div>
            </div>

            <div className='flex flex-col gap-[40px]'>
                <div className='flex gap-3'>
                    <img src="./Icon1.png" alt="" className=' size-[79px] object-cover' />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Dedicated project manager</h1>
                        <p>With lots of unique blocks, you can easily <br />build a page without coding. Build your <br /> next landing page.</p>
                    </div>

                </div>
                <div className='flex flex-col'>
                <div className='flex gap-3'>
                    <img src="./Icon2.png" alt="" className=' size-[79px] object-cover' />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Never miss deadline</h1>
                        <p>With lots of unique blocks, you can easily <br />build a page without coding. Build your <br /> next landing page.</p>
                    </div>

                </div>

            </div>
            </div>
            

        </div>

       


  

      </div>
    </div>

    <Meet />
    </div>
  )
}

export default About
