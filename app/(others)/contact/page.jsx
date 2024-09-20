import ContactForm from '@/components/ContactForm'
import { Contact } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>

       <div className='max-w-6xl mx-auto flex mt-[100px] flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-[36px] font-bold'>Contact us</h1>
          <p className='text-[#161C2D]'>
          With lots of unique blocks, you can easily build a page without <br /> 
          coding. Build your next consultancy website within few minutes.
          </p>
    </div>
        </div>

        <div className='flex justify-evenly w-full mt-[50px]'>
        <div className='flex gap-3'>
                    <img src="./call.png" alt="" className=' size-[54px] object-cover' />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Call Us</h1>
                        <p className='text-[16px]'> (240) 605-7615</p>
                    </div>

                </div>
                <div className='flex gap-3'>
                    <img src="./mes.png" alt="" className=' size-[54px] object-cover' />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Email us</h1>
                        <p className='text-[16px]'> info@habnets.com</p>
                    </div>

                </div>
                <div className='flex gap-3'>
                    <img src="./loc.png" alt="" className=' size-[54px] object-cover' />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Call Us</h1>
                        <p className='text-[16px]'> Washington, DC Metro Area</p>
                    </div>

                </div>

          
            

        </div>



<ContactForm />
       
    </div>
  )
}

export default page
