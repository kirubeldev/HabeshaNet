'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import axios from '@/api/axios'

const ServiceProviderform = ({accestocken}) => {
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
  
  const [experience, setExperience] = useState({
    position: '',
    years: '',
    responsibilities: [''],
    company: '',
    startDate: '',
    endDate: ''
});
const [qualifications, setQualifications] = useState([{ degree: '', certifications: [''], training: '' }]);
  const [skills, setSkills] = useState(['']);
  const [portfolioLinks, setPortfolioLinks] = useState(['']);
  const [portfolioFiles, setPortfolioFiles] = useState([]);
  const [availabilityDays, setAvailabilityDays] = useState([]);
  const [availabilityHours, setAvailabilityHours] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [languages, setLanguages] = useState(['']);

  const handleChange = (field, value) => {
    setExperience(prev => ({ ...prev, [field]: value }));
};

const handleChanges = (field, value) => {
  setQualifications(prev => ({ ...prev, [field]: value }));
};

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const toggleDay = (day) => {
    setAvailabilityDays(prev => {
        if (prev.includes(day)) {
            // Remove day if it's already selected
            return prev.filter(d => d !== day);
        } else {
            // Add day if it's not selected
            return [...prev, day];
        }
    });
};
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
        firstName: firstName.toString(),
      lastName,
      email,
      phoneNumber,
      profession,
      bio,
      profilePicture,
      preferredContactMethod: preferredContact,
      location: { city, state, country },
      serviceCategory,
      serviceTitle,
      experience,
      qualifications,
      skills,
      portfolioLinks,
      portfolioFiles,
      availability: { days: availabilityDays, hours: availabilityHours },
      hourlyRate,
      languages,
    };
console.log(data);
console.log(" got acces tocken named :" + accestocken )

    try {
      const response = await axios.patch('/auth/service-providers/profile/complete', 
              {data}
            , {
                headers: {
                  Authorization: `Bearer ${accestocken}`, // Add Bearer token here
                }
              });

      if (response.ok) {
        alert('Profile saved successfully!');
      } else {
        alert('Failed to save profile.');
      }

     
        
    } catch (error) {
      console.error('Error:', error.response);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div>
        <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
 <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-semibold' >1</div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-semibold' >2</div>

       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-semibold' ></div>
       <div className='w-[200px] border md:w-[290px] border-[#B2B2B5] '></div>
       <div className='size-[35px] flex justify-center items-center  border-[3px] border-[#FC9B00] rounded-full text-white font-semibold' ></div>
       
        </div>
      
    </div>
    <form  onSubmit={handleSubmit}>
       
   <div className="flex item-center justify-center">
<p className="text-[22px] mt-5 font-semibold">Fill Profile</p>   </div>

   <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
      <div className='border p-9 rounded-md space-y-6'>     
             <p className="text-[20px]">Personal information</p>
          <div className='flex justify-between gap-4'>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>First Name</span>
                </p>
                <input type="text"  onChange={(e) => setFirstName(e.target.value)}  className='border p-2 rounded-md text-[14px]' placeholder='i.e. John Doe' />
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>Phone Number</span>
                </p>
                <input type="text"  onChange={(e) => setPhoneNumber(e.target.value)}  className='border p-2 rounded-md text-[14px]' placeholder='i.e. John Doe' />
              </div>
            
 
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>Last Name </span>
                </p>
                <input type="text" className='border p-2 rounded-md text-[14px]' placeholder='i.e. john.doe@example.com'    onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>Profession</span>
                </p>
                <input type="text"  onChange={(e) => setProfession(e.target.value)}  className='border p-2 rounded-md text-[14px]' placeholder='i.e. John Doe' />
              </div>


              
            </div>

            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>Email Address </span>
                </p>
                <input type="text" className='border p-2 rounded-md text-[14px]'   onChange={(e) => setEmail(e.target.value)} placeholder='i.e. john.doe@example.com' />
              </div>
             

              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>Prefered Contact Method</span>
                </p>
                <input type="text" className='border p-2 rounded-md text-[14px]'   onChange={(e) => setPreferredContact(e.target.value)} placeholder='i.e. Inquiry' />
              </div>
            

              
            
            </div>
          </div>

          <div className='flex flex-col'>
         
        <div className='rounded-md space-y-6'>
          <div className='flex items-center gap-4'>
          <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>profile Picture</span>
                </p>
                <div className="flex item-center">
                   <img src="./user.png"  className="object-contain size-[50px] rounded-full mx-3" />
                <input type="file" className='border p-2 text-gray rounded-md text-[14px]'   onChange={(e) => setProfilePicture(e.target.files)} placeholder='i.e. Inquiry' />
                </div>
              </div>
              <div className='space-y-4 flex flex-1 flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>Bio </span>
                </p>
                <textarea type="text"    className='border px-2  rounded-md text-[14px]'   onChange={(e) => setBio(e.target.value)} placeholder='i.e. John Doe' />
              </div>

          
          </div>
         
        
        </div>
       
      </div>
          
          <div className='flex flex-col'>
            <p className='text-[18px] font-semibold pb-4'>Location</p>
        <div className='rounded-md space-y-6'>
          <div className='flex justify-between gap-4'>
            <div className='space-y-6 w-[48%] '>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>city </span>
                </p>
                <input type="text" className='border p-2 rounded-md text-[14px]'   onChange={(e) => setCity(e.target.value)} placeholder='city' />
              </div>
            
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>State <span className='text-[#747171]'> </span> </span>
                </p>
                <input type="text" className='border p-2 rounded-md text-[14px]'   onChange={(e) => setState(e.target.value)} placeholder='state' />
              </div>
              
            </div>
            <div className='space-y-6 w-[48%]'>
              <div className='space-y-4 flex flex-col'>
                <p>
                  <span className='text-[#161C2D] font-semibold text-[16px]'>Country <span className='text-[#747171]'></span> </span>
                </p>
                <input type="text" className='border p-2 rounded-md text-[14px]'   onChange={(e) => setCountry(e.target.value)} placeholder='country' />
              </div>
              
            </div>
          </div>
         
        
        </div>
       
      </div>
       
        </div>
       
      </div>
    </div>



    <div className='max-w-6xl mx-auto mt-[50px]'>
      <div className='flex flex-col'>
        <div className='border p-9 rounded-md space-y-6'>
          <p className="text-[20px]">More information</p>

          <div className='flex flex-col'>
          <div className="flex item-center w-full gap-6">
    <div className="w-1/2">
      <p>Service Catagory</p>
      <input type="text" className='border p-2 w-full rounded-md text-[14px]'   onChange={(e) => setServiceCategory(e.target.value)} placeholder='i.e. john.doe@example.com' />
      
    </div>

    <div className="w-1/2">
      <p>Service Title </p>
      <input type="text" className='border p-2 w-full rounded-md text-[14px]'   onChange={(e) => setServiceTitle(e.target.value)} placeholder='i.e. john.doe@example.com' />
      
    </div>
   </div>
        <div className='rounded-md space-y-6'>
          <div className='flex justify-between gap-4'>
          
            
            
          </div>
         
        
        </div>
       
      </div>
      <div  className='flex justify-between gap-4'>
            <div className='space-y-6 w-[10%]'>
                <p>Experience 1</p>
            </div>
            <div className='space-y-6 w-[48%]'>
                <div className='space-y-4 flex flex-col'>
                    <p>
                        <span className='text-[#161C2D] font-semibold text-[16px]'>Position</span>
                    </p>
                    <input
                        type="text"
                        className='border p-2 rounded-md text-[14px]'
                        value={experience.position}
                        onChange={(e) => handleChange('position', e.target.value)}
                        placeholder='i.e. Software Engineer'
                    />
                </div>
                <div className='space-y-4 flex flex-col'>
                    <p>
                        <span className='text-[#161C2D] font-semibold text-[16px]'>Responsibility</span>
                    </p>
                    <input
                        type="text"
                        className='border p-2 rounded-md text-[14px]'
                        value={experience.responsibilities[0]} // Access the first element
                        onChange={(e) => handleChange('responsibilities', [e.target.value])} // Update the array
                        placeholder='i.e. Inquiry'
                    />
                </div>
                <div className='space-y-4 flex flex-col'>
                    <p>
                        <span className='text-[#161C2D] font-semibold text-[16px]'>Start Date</span>
                    </p>
                    <input
                        type="text"
                        className='border p-2 rounded-md text-[14px]'
                        value={experience.startDate}
                        onChange={(e) => handleChange('startDate', e.target.value)}
                        placeholder='i.e. 2022-01-01'
                    />
                </div>
            </div>

            <div className='space-y-6 w-[48%]'>
                <div className='space-y-4 flex flex-col'>
                    <p>
                        <span className='text-[#161C2D] font-semibold text-[16px]'>Years of Experience</span>
                    </p>
                    <input
                        type="text"
                        className='border p-2 rounded-md text-[14px]'
                        value={experience.years}
                        onChange={(e) => handleChange('years', e.target.value)}
                        placeholder='i.e. 2'
                    />
                </div>
                <div className='space-y-4 flex flex-col'>
                    <p>
                        <span className='text-[#161C2D] font-semibold text-[16px]'>Company</span>
                    </p>
                    <input
                        type="text"
                        className='border p-2 rounded-md text-[14px]'
                        value={experience.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder='i.e. Company XYZ'
                    />
                </div>
                <div className='space-y-4 flex flex-col'>
                    <p>
                        <span className='text-[#161C2D] font-semibold text-[16px]'>End Date</span>
                    </p>
                    <input
                        type="text"
                        className='border p-2 rounded-md text-[14px]'
                        value={experience.endDate}
                        onChange={(e) => handleChange('endDate', e.target.value)}
                        placeholder='i.e. 2023-01-01'
                    />
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
                        <span className='text-[#161C2D] font-semibold text-[16px]'>Degree</span>
                    </p>
                    <input
                        type="text"
                        className='border p-2 rounded-md text-[14px]'
                        value={qualifications.degree}
                        onChange={(e) => handleChanges('degree', e.target.value)}
                        placeholder='i.e. Bachelor of Science'
                    />
                </div>
            </div>

            <div className='space-y-6 w-[48%]'>
                <div className='space-y-4 flex flex-col'>
                    <p>
                        <span className='text-[#161C2D] font-semibold text-[16px]'>Certification</span>
                    </p>
                    <input
                        type="text"
                        className='border p-2 rounded-md text-[14px]'
                        value={qualifications.certifications} // Use empty string if undefined
                        onChange={(e) => handleChanges('certifications', [e.target.value])}
                        placeholder='i.e. Certified Java Developer'
                    />
                </div>
            </div>
            
            <div className='space-y-4 pl-[10%] flex flex-col'>
                <p>
                    <span className='text-[#161C2D] font-semibold text-[16px]'>Trainings</span>
                </p>
                <input
                    type="text"
                    className='border p-2 rounded-md text-[14px]'
                    value={qualifications.training}
                    onChange={(e) => handleChanges('training', e.target.value)}
                    placeholder='i.e. Project Management Training'
                />
            </div>
        </div>
          <button className="py-[7px] px-[30px] rounded-md bg-[#3C3C51] text-white ">Add New Qualifications</button>
          


    

  <div className="flex  flex-col md:flex-row item-center justify-center mx-auto  gap-6">

    <div className="flex flex-col bg-[#F8F8F8] w-fit p-3 rounded-md">
   <p className="font-semibold">Skill 1</p>
   <input type="text " className="w-[304px] border p-1 border-gray mt-1 rounded-md bg-transparent"   onChange={(e) => setSkills(e.target.value)} placeholder="skill"/>
   <button className="py-[7px] px-8 mt-10 rounded-md w-fit  bg-[#3C3C51] text-white ">Add New Skill</button>
       
       </div>

       <div className="flex flex-col bg-[#F8F8F8] w-fit p-3 rounded-md">
   <p className="font-semibold">Portofolio 1</p>
   <input type="text " className="w-[304px] border p-1 border-gray mt-1 rounded-md bg-transparent"   onChange={(e) => setPortfolioLinks(e.target.value)} placeholder="skill"/>
   <button className="py-[7px] px-8 mt-10 rounded-md w-fit  bg-[#3C3C51] text-white ">Add New Portifolio</button>
       
       </div>

       <div className="flex flex-col bg-[#F8F8F8] w-fit p-3 rounded-md">
   <p className="font-semibold">Portifolio File 1</p>
   <input type="file" className='border p-2 text-gray rounded-md text-[14px]'   onChange={(e) => setPortfolioFiles(e.target.files)} placeholder='i.e. Inquiry' />
   <button className="py-[7px] px-8 mt-10 rounded-md w-fit  bg-[#3C3C51] text-white ">Add New Portifolio</button>
       
       </div>
  </div>
     



<div className="flex item-center gap-5">



   <div className="flex item-center py-4 ">
   <div className="flex flex-col py-6 px-3 bg-[#F8F8F8] w-fit rounded-md">
   <p className="font-semibold">Shift time</p>
   <p className="text-[12px] font-light">start time</p>
   <input type="number" className='border p-2 text-gray rounded-md w-[240px] text-[14px]'   onChange={(e) => setAvailabilityHours(e.target.value)} placeholder='i.e 8' />
       
       </div>
      
   </div>




   <div className="flex flex-col h-fit py-4 px-3 bg-[#F8F8F8] w-fit rounded-md">

   <p>working Days</p>

   <div className="flex item-center mt-3 flex-wrap gap-4">
            {daysOfWeek.map(day => (
                <p
                    key={day}
                    className={`border cursor-pointer rounded-md px-[27px] py-[10px] ${availabilityDays.includes(day) ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => toggleDay(day)}
                >
                    {day}
                </p>
            ))}
        </div>

</div>
       </div>


   <div className="flex item-center w-full gap-6">
    <div className="w-1/2">
      <p>Hourly Rate</p>
      <input type="text" className='border p-2 w-full rounded-md text-[14px]'   onChange={(e) => setHourlyRate(e.target.value)} placeholder='i.e. john.doe@example.com' />
      
    </div>

    <div className="w-1/2">
      <p>Language </p>
      <input type="text" className='border p-2 w-full rounded-md text-[14px]'   onChange={(e) => setLanguages(e.target.value)} placeholder='i.e. john.doe@example.com' />
      
    </div>
   </div>
        </div>
       
      </div>
    </div>


  <div className="flex item-center justify-center">
    
    <button  className="bg-[#0097FF] text-white px-[30px] mt-[50px] py-[7px] rounded-md " >Save Profile</button>
      </div>
  </form>
    </div>
  )
}

export default ServiceProviderform


