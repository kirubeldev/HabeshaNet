'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  // State for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profession, setProfession] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [preferredContact, setPreferredContact] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');
  
  const [experienceList, setExperienceList] = useState([{ position: '', years: '', responsibilities: [''], company: '', startDate: '', endDate: '' }]);
  const [qualifications, setQualifications] = useState([{ degree: '', certifications: [''], training: '' }]);
  const [skills, setSkills] = useState(['']);
  const [portfolioLinks, setPortfolioLinks] = useState(['']);
  const [portfolioFiles, setPortfolioFiles] = useState([]);
  const [availabilityDays, setAvailabilityDays] = useState([]);
  const [availabilityHours, setAvailabilityHours] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [languages, setLanguages] = useState(['']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      profession,
      bio,
      profilePicture,
      preferredContact,
      location: { city, state, country },
      serviceCategory,
      serviceTitle,
      experiences: experienceList,
      qualifications,
      skills,
      portfolioLinks,
      portfolioFiles,
      availability: { days: availabilityDays, hours: availabilityHours },
      hourlyRate,
      languages,
    };

    try {
      const response = await fetch('YOUR_API_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Profile saved successfully!');
      } else {
        alert('Failed to save profile.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div>
        <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
 <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold' >1</div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold' >2</div>

       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-bold' ></div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-bold' ></div>
       
        </div>
      
    </div>
       
   <div className="flex item-center justify-center">
<p className="text-[22px] mt-5 font-semibold">Fill Profile</p>   </div>

   <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
      <form onSubmit={handleSubmit} className='border p-9 rounded-xl space-y-6'>     
             <p className="text-[20px]">Personal information</p>
          <div className='flex justify-between gap-4'>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>First Name</span>
                </p>
                <input type="text"  onChange={(e) => setFirstName(e.target.value)}  className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>First Name Name</span>
                </p>
                <input type="text"  onChange={(e) => setFirstName(e.target.value)}  className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Company Name</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. (123) 456-7890' />
              </div>
 
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Last Name </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>First Name</span>
                </p>
                <input type="text"  onChange={(e) => setFirstName(e.target.value)}  className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Prefered Contact Method</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
              
            </div>

            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Email Address </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>First Name</span>
                </p>
                <input type="text"  onChange={(e) => setFirstName(e.target.value)}  className='border p-2 rounded-xl text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>profile Picture</span>
                </p>
                <div className="flex item-center">
                   <img src="./user.png"  className="object-contain size-[50px] rounded-full mx-3" />
                <input type="file" className='border p-2 text-gray rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
                </div>
              </div>
            
            </div>
          </div>
          
          <div className='flex flex-col'>
            <p className='text-[18px] font-bold pb-4'>Location</p>
        <div className='rounded-xl space-y-6'>
          <div className='flex justify-between gap-4'>
            <div className='space-y-6 w-[48%] '>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>city </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='city' />
              </div>
            
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>State <span className='text-[#747171]'> </span> </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='state' />
              </div>
              
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>State <span className='text-[#747171]'></span> </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='country' />
              </div>
              
            </div>
          </div>
         
        
        </div>
       
      </div>
       
        </form>
       
      </div>
    </div>



    <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
        <div className='border p-9 rounded-xl space-y-6'>
          <p className="text-[20px]">More information</p>

          <div className='flex flex-col'>
          <div className="flex item-center w-full gap-6">
    <div className="w-1/2">
      <p>Service Catagory</p>
      <input type="text" className='border p-2 w-full rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
      
    </div>

    <div className="w-1/2">
      <p>Service Title </p>
      <input type="text" className='border p-2 w-full rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
      
    </div>
   </div>
        <div className='rounded-xl space-y-6'>
          <div className='flex justify-between gap-4'>
          
            
            
          </div>
         
        
        </div>
       
      </div>
          <div className='flex justify-between gap-4'>
            
            <div className='space-y-6 w-[10%]'>
              <p>Experince 1</p>
 
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Position </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Responsibility</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Start Date </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
            </div>

            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Years of exeprience </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Company</span>
                </p>
                <div className="flex item-center">
                <input type="text" className='border p-2 w-full rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
                </div>
                <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>End Date </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              </div>
            
            </div>
          </div>
          <button className="py-[7px] px-[30px] rounded-md bg-[#3C3C51] text-white ">Add New Experience</button>
          
          <div className='flex justify-between mt-4 gap-4'>
            
            <div className='space-y-6 w-[12%]'>
              <p>Qualification 1</p>
 
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Degree </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
             
            </div>

            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-bold text-[16px]'>Certification</span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
              <div className='space-y-4 flex flex-col'>
               
               
               
              </div>
            
            </div>
            
          </div>
          <div className='space-y-4 pl-[10%] flex flex-col'>
                <p>
                  <span className='text-[#161C2D]  font-bold text-[16px]'>Tranings </span>
                </p>
                <input type="text" className='border p-2 rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
              </div>
          <button className="py-[7px] px-[30px] rounded-md bg-[#3C3C51] text-white ">Add New Qualifications</button>
          


    

  <div className="flex  flex-col md:flex-row item-center justify-center mx-auto  gap-6">

    <div className="flex flex-col bg-[#F8F8F8] w-fit p-3 rounded-md">
   <p className="font-semibold">Skill 1</p>
   <input type="text " className="w-[304px] border p-1 border-gray mt-1 rounded-md bg-transparent" placeholder="skill"/>
   <button className="py-[7px] px-8 mt-10 rounded-md w-fit  bg-[#3C3C51] text-white ">Add New Skill</button>
       
       </div>

       <div className="flex flex-col bg-[#F8F8F8] w-fit p-3 rounded-md">
   <p className="font-semibold">Portofolio 1</p>
   <input type="text " className="w-[304px] border p-1 border-gray mt-1 rounded-md bg-transparent" placeholder="skill"/>
   <button className="py-[7px] px-8 mt-10 rounded-md w-fit  bg-[#3C3C51] text-white ">Add New Portifolio</button>
       
       </div>

       <div className="flex flex-col bg-[#F8F8F8] w-fit p-3 rounded-md">
   <p className="font-semibold">Portifolio File 1</p>
   <input type="file" className='border p-2 text-gray rounded-xl text-[14px]' placeholder='i.e. Inquiry' />
   <button className="py-[7px] px-8 mt-10 rounded-md w-fit  bg-[#3C3C51] text-white ">Add New Portifolio</button>
       
       </div>
  </div>
     



<div className="flex item-center gap-5">



   <div className="flex item-center py-4 ">
   <div className="flex flex-col py-6 px-3 bg-[#F8F8F8] w-fit rounded-md">
   <p className="font-semibold">Shift time</p>
   <p className="text-[12px] font-light">start time</p>
   <input type="time" className='border p-2 text-gray rounded-xl w-[240px] text-[14px]' placeholder='i.e. Inquiry' />
       
       </div>
       <div className="flex  flex-col bg-[#F8F8F8] w-fit py-6 px-3 rounded-md">
   <p className="font-semibold hidden">Shift time</p>
   <p className="text-[12px] mt-6 font-light ">start time</p>
   <input type="time" className='border p-2  text-gray rounded-xl w-[240px] text-[14px]' placeholder='i.e. Inquiry' />
       
       </div>
   </div>




   <div className="flex flex-col h-fit py-4 px-3 bg-[#F8F8F8] w-fit rounded-md">

   <p>working Days</p>

   <div className="flex item-center  mt-3 flex-wrap gap-4">
 <p className="border cursor-pointer rounded-md px-[27px] py-[10px]">Mon</p>
 <p className="border cursor-pointer rounded-md px-[27px] py-[10px]">Tue</p>
 <p className="border cursor-pointer rounded-md px-[27px] py-[10px]">Wen</p>
 <p className="border cursor-pointer rounded-md px-[27px] py-[10px]">Thu</p>
 <p className="border cursor-pointer rounded-md px-[27px] py-[10px]">Fri</p>
 <p className="border cursor-pointer rounded-md px-[27px] py-[10px]">Sat</p>
 <p className="border cursor-pointer rounded-md px-[27px] py-[10px]">Sun</p>

   </div>

</div>
       </div>


   <div className="flex item-center w-full gap-6">
    <div className="w-1/2">
      <p>Hourly Rate</p>
      <input type="text" className='border p-2 w-full rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
      
    </div>

    <div className="w-1/2">
      <p>Language </p>
      <input type="text" className='border p-2 w-full rounded-xl text-[14px]' placeholder='i.e. john.doe@example.com' />
      
    </div>
   </div>
        </div>
       
      </div>
    </div>


  <div className="flex item-center justify-center">
    <Link href="">
    <button className="bg-[#0097FF] text-white px-[30px] mt-[50px] py-[7px] rounded-md " >Save Profile</button>
    </Link>
  </div>

    </div>
  )
}

export default Page


