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
                    <li><Link  className='text-[16px]  font-semibold  ' href="/"> Home </Link></li>
                    <li><Link  className='text-[16px]  font-semibold ' href="/about"> About us </Link></li>
                    <li><Link  className='text-[16px]  font-semibold '  href=""> Service </Link></li>
                    <li><Link  className='text-[16px]  font-semibold '  href="/pricing">pricing  </Link></li>
                    <li><Link  className='text-[16px]  font-semibold '  href="/contact"> Contact us </Link></li>
                </ul>
            </nav>
        </div>
        <div className='flex gap-5 items-center'>
            <Link  href={"/create"}>
            <button className='py-[6px] rounded-lg px-[30px] text-[#B53CC9] hover:bg-[#B53CC9] duration-700 hover:text-[white] border border-[#B53CC9] outline-[#B53CC9]'>
              Signup
            </button></Link>
            <Link  href={"/signin"}>
            <button className='py-[6px] rounded-lg px-[30px] hover:bg-[transparent] hover:border hover:border-[#B53CC9] hover:text-[#B53CC9] duration-700 text-white bg-[#B53CC9]'>
Signin            </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
