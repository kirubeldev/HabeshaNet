import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong, FaFacebook, FaLinkedin, FaSquareInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#F7FBFB] mt-[100px] py-8'>

    <div className='max-w-6xl mx-auto  '>
      <div className='flex justify-between items-center'>
        <div>

      <h1 className='text-[36px] font-bold '>Ready to launch your next project?</h1>
      With lots of unique blocks, you can easily build a page without coding. Build your <br />next landing page.
        </div>
        <Link href={'/hirep1'}>
        <button className='py-[10px] h-fit rounded-lg px-[30px] text-white flex gap-3 items-center bg-[#0097FF]'> Get Started <FaArrowRightLong />
</button></Link>
    </div>

<div className='border-b-2 my-7  border-[-B2B2B5]'></div>

<div className='flex felx-col md:flex-row gap-[50px] md:gap-[128px]'>
<div>
<h1 className='text-[24px] font-semibold '>HabeshaNet.com</h1>
    <p>With lots of unique blocks, you can <br />easily build a page without coding. <br /> Build your next landing page.</p>
  <div className='flex gap-3 mt-3'>

    <FaTwitter className='text-[#FC9B00] size-[24px]'/> <FaFacebook className='text-[#FC9B00] size-[24px]' /> <FaSquareInstagram className='text-[#FC9B00] size-[24px]' /> <FaLinkedin className='text-[#FC9B00] size-[24px]' />
  </div>
</div>

<div>
    <p className='text-[#404044]'>Company</p>
    <nav>
        <ul>
            <li><Link href={""}>About us</Link></li>
            <li><Link href={""}>Service</Link></li>
            <li><Link href={""}>How It Works</Link></li>
            <li><Link href={""}>Pricing</Link></li>
            <li><Link href={""}>Contact us</Link></li>
        </ul>
    </nav>
</div>

<div>
    <p className='text-[#404044]'>Contact Information</p>
    <nav>
        <div className='flex gap-3'>
           <p className='font-semibold'>Email:</p> <p>info@habnets.com</p>
        </div>
        <div className='flex gap-3'>
           <p className='font-semibold'>Phone:</p>
           <p>(240) 605-7615</p>
        </div>
        <div className='flex gap-3'>
           <p className='font-semibold'>Address:</p>
           <p>Washington, DC Metro Area</p>
        </div>
    </nav>
</div>

<div>
    <p className='text-[#404044]'>Legal</p>
    <nav>
        <div className='flex gap-3'>
           <p className='font-semibold'>pricacy policy:</p> 
        </div>
        <div className='flex gap-3'>
           <p className='font-semibold'>Term & conditions:</p>
          
        </div>
        
    </nav>
</div>

</div>


      </div>
    </div>
  )
}

export default Footer
