import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='bg-[#fffafa]'>
      <div className=' hidden md:flex md:justify-between md:py-3 md:items-center md:flex-row md:max-w-6xl md:mx-auto'>
        <div>
           <Link href={"/"}><h1  className='text-[#161C2D] font-bold text-[20px]' >HabeshaNets.com</h1></Link> 
        </div>
        <div>
            <nav>
                <ul className='flex gap-[30px]'>
                    <li><Link  className='text-[16px]  font-bold  text-bold' href="/"> Home </Link></li>
                    <li><Link  className='text-[16px]  font-bold text-bold' href="/about"> About us </Link></li>
                    <li><Link  className='text-[16px]  font-bold text-bold'  href=""> Service </Link></li>
                    <li><Link  className='text-[16px]  font-bold text-bold'  href="/pricing">pricing  </Link></li>
                    <li><Link  className='text-[16px]  font-bold text-bold'  href="/contact"> Contact us </Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <Link  href={"/hirep1"}>
            <button className='py-[10px] rounded-lg px-[30px] text-white bg-[#0097FF]'>
                Get Started
            </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
