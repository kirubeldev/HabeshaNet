'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaCog, FaSignOutAlt } from 'react-icons/fa'; 
import axios from "@/api/axios"
const EmpNav = () => {


  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
  };



  const handellogout = async () => {
    try {
        await axios.post('/auth/signout');

        setDropdownOpen(false);

        router.push("/");
        console.log("loged out");
        
    } catch (err) {
        console.error('Logout failed:', err);
    }
};

  return (
    <div className='bg-[#fffafa]'>
      <div className=' hidden md:flex md:justify-between md:py-3 md:items-center md:flex-row md:max-w-6xl md:mx-auto'>
        <div>
           <Link href={"/"}><h1  className='text-[#161C2D] font-bold text-[20px]' >HabeshaNets.com</h1></Link> 
        </div>
        <div>
            <nav>
                <ul className='flex gap-[30px]'>
                    <li><Link  className='text-[16px]  font- ' href="/jobsearch"> My jobs </Link></li>
                    <li><Link  className='text-[16px]  font- ' href="/talent"> Talent </Link></li>
                    <li><Link  className='text-[16px]  font- '  href="/contact"> Contact </Link></li>
                </ul>
            </nav>
        </div>
        <div>
        <div className='flex items-center gap-6 relative'>
            <img src="./noti.png" alt="Notification" />
            <div className='flex gap-3 items-center text-[16px]' onClick={toggleDropdown}>
                <img src="user.png" alt="User" />
                <p>john doe</p>
            </div>
            {dropdownOpen && (
                <div className=' hover:courser-pointer absolute top-full right-0 mt-2 w-40 bg-white border rounded shadow-lg'>
                    <div className='flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer' onClick={() => console.log('Go to Settings')}>
                        <FaCog />
                        <p>Settings</p>
                    </div>
                    <div className='flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer' onClick={handellogout}>
                        <FaSignOutAlt />
                        <p>Log Out</p>
                    </div>
                </div>
            )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default EmpNav
