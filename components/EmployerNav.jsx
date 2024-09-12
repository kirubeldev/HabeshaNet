import Link from 'next/link'
import React from 'react'

const EmpNav = () => {
  return (
    <div className='bg-[#fffafa]'>
      <div className=' hidden md:flex md:justify-between md:py-3 md:items-center md:flex-row md:max-w-6xl md:mx-auto'>
        <div>
           <Link href={"/"}><h1  className='text-[#161C2D] font-bold text-[20px]' >HabeshaNets.com</h1></Link> 
        </div>
        <div>
            <nav>
                <ul className='flex gap-[30px]'>
                    <li><Link  className='text-[16px]  font- ' href="/"> My jobs </Link></li>
                    <li><Link  className='text-[16px]  font- ' href="/about"> Talent </Link></li>
                    <li><Link  className='text-[16px]  font- '  href=""> Contact </Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <div className='flex items-center gap-6'>
                <img src="./noti.png" alt="" />
                <div className='flex gap-3 items-center text-[16px]'>
                    <img src="user.png" alt="" />
                  <p>john doe</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmpNav
