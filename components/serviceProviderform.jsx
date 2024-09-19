'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import axios from '@/api/axios';

const ServiceProviderForm = ({ accestocken }) => {
  // State for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profession, setProfession] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [preferredContact, setPreferredContact] = useState('');
  const [location, setLocation] = useState({ city: '', state: '', country: '' });
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');
  const [experience, setExperience] = useState([
    { 
      position: '', 
      years: '', 
      responsibilities: [''], 
      company: '', 
      startDate: '', 
      endDate: '' 
    }
  ]);
  const [qualifications, setqualifications] = useState({
    degree: '',
    education: '',
    certifications: [''],
    trainings: [''],
  });
  const [skills, setSkills] = useState(['']);
  const [portfolioLinks, setPortfolioLinks] = useState(['']);
  const [portfolioFiles, setPortfolioFiles] = useState([]);
  const [availabilityDays, setAvailabilityDays] = useState([]);
  const [availabilityHours, setAvailabilityHours] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [languages, setLanguages] = useState(['']);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Toggle availability day
  const toggleDay = (day) => {
    setAvailabilityDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('profession', profession);
    formData.append('bio', bio);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }
    formData.append('preferredContactMethod', preferredContact);
    formData.append('location', JSON.stringify(location));
    formData.append('serviceCategory', serviceCategory);
    formData.append('serviceTitle', serviceTitle);
    formData.append('experience', JSON.stringify(experience));
    formData.append('qualifications', JSON.stringify(qualifications));
    formData.append('skills', JSON.stringify(skills));
    formData.append('portfolioLinks', JSON.stringify(portfolioLinks));
    formData.append('availabilityDays', JSON.stringify(availabilityDays));
    formData.append('availabilityHours', availabilityHours);
    formData.append('hourlyRate', hourlyRate);
    formData.append('languages', JSON.stringify(languages));

    // Append portfolio files
    portfolioFiles.forEach((file, index) => {
      formData.append(`portfolioFiles`, file);
    });

    try {
      const response = await axios.patch('/auth/service-providers/profile/complete', formData, {
        headers: {
          Authorization: `Bearer ${accestocken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Profile saved successfully!');
        console.log(response.data);
        
      } else {
        alert('Failed to save profile.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
      // console.log(response.data);
      
    }
  };

  // Handlers for dynamic fields

  // Skills
  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  // Languages
  const handleAddLanguage = () => {
    setLanguages([...languages, '']);
  };

  const handleLanguageChange = (index, value) => {
    const newLanguages = [...languages];
    newLanguages[index] = value;
    setLanguages(newLanguages);
  };

  // Portfolio Links
  const handleAddPortfolioLink = () => {
    setPortfolioLinks([...portfolioLinks, '']);
  };

  const handlePortfolioLinkChange = (index, value) => {
    const newLinks = [...portfolioLinks];
    newLinks[index] = value;
    setPortfolioLinks(newLinks);
  };

  // Portfolio Files
  const handleAddPortfolioFile = () => {
    setPortfolioFiles([...portfolioFiles, null]);
  };

  const handlePortfolioFileChange = (index, file) => {
    const newFiles = [...portfolioFiles];
    newFiles[index] = file;
    setPortfolioFiles(newFiles);
  };

  // Experience
  const handleAddExperience = () => {
    setExperience([...experience, {
      position: '', 
      years: '', 
      responsibilities: [''], 
      company: '', 
      startDate: '', 
      endDate: '' 
    }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const handleAddResponsibility = (expIndex) => {
    const newExperience = [...experience];
    newExperience[expIndex].responsibilities.push('');
    setExperience(newExperience);
  };

  const handleResponsibilityChange = (expIndex, resIndex, value) => {
    const newExperience = [...experience];
    newExperience[expIndex].responsibilities[resIndex] = value;
    setExperience(newExperience);
  };

  // qualifications
  const handleAddqualifications = () => {
    // Assuming you want to add a new set of qualifications
    setqualifications(prev => ({
      ...prev,
      // Add new qualification logic here
    }));
  };



const handleDegreeInputChangeForqualifications = (e) => {
  setqualifications(prev => ({
    ...prev,
    degree: e.target.value,
  }));
};

// Unique and long handler for education change
const handleEducationInputChangeForqualifications = (e) => {
  setqualifications(prev => ({
    ...prev,
    education: e.target.value,
  }));
};

// Unique and long handler for certification input change
const handleCertificationInputChangeAtIndexForqualifications = (index) => (e) => {
  const updatedCertifications = [...qualifications.certifications];
  updatedCertifications[index] = e.target.value;
  setqualifications(prev => ({
    ...prev,
    certifications: updatedCertifications,
  }));
};

// Unique and long handler for adding a new certification field
const handleAddNewCertificationFieldToqualifications = () => {
  setqualifications(prev => ({
    ...prev,
    certifications: [...prev.certifications, ''],
  }));
};

// Unique and long handler for training input change
const handleTrainingInputChangeAtIndexForqualifications = (index) => (e) => {
  const updatedTrainings = [...qualifications.trainings];
  updatedTrainings[index] = e.target.value;
  setqualifications(prev => ({
    ...prev,
    trainings: updatedTrainings,
  }));
};

// Unique and long handler for adding a new training field
const handleAddNewTrainingFieldToqualifications = () => {
  setqualifications(prev => ({
    ...prev,
    trainings: [...prev.trainings, ''],
  }));
};















  return (
    <div>
      {/* Progress Indicators */}
      <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
        <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-semibold'>1</div>
        <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
        <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-semibold'>2</div>
        <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
        <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-semibold'></div>
        <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
        <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-semibold'></div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Form Title */}
        <div className="flex items-center justify-center">
          <p className="text-[22px] mt-5 font-semibold">Fill Profile</p>
        </div>

        {/* Personal Information */}
        <div className='max-w-6xl mx-auto mt-[50px]'>
          <div className='flex flex-col'>
            <div className='border p-9 rounded-md space-y-6'>
              <p className="text-[20px]">Personal Information</p>
              <div className='flex justify-between gap-4'>
                {/* Left Column */}
                <div className='space-y-6 w-[48%]'>
                  <div className='space-y-4 flex flex-col'>
                    <p className='text-[#161C2D] font-semibold text-[16px]'>First Name</p>
                    <input
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      className='border p-2 rounded-md text-[14px]'
                      placeholder='i.e. John'
                      required
                    />
                  </div>
                  <div className='space-y-4 flex flex-col'>
                    <p className='text-[#161C2D] font-semibold text-[16px]'>Phone Number</p>
                    <input
                      type="tel"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className='border p-2 rounded-md text-[14px]'
                      placeholder='i.e. +1234567890'
                      required
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className='space-y-6 w-[48%]'>
                  <div className='space-y-4 flex flex-col'>
                    <p className='text-[#161C2D] font-semibold text-[16px]'>Last Name</p>
                    <input
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      className='border p-2 rounded-md text-[14px]'
                      placeholder='i.e. Doe'
                      required
                    />
                  </div>
                  <div className='space-y-4 flex flex-col'>
                    <p className='text-[#161C2D] font-semibold text-[16px]'>Profession</p>
                    <input
                      type="text"
                      onChange={(e) => setProfession(e.target.value)}
                      className='border p-2 rounded-md text-[14px]'
                      placeholder='i.e. Electrician'
                      required
                    />
                  </div>
                </div>

                {/* Email and Preferred Contact */}
                <div className='space-y-6 w-[48%]'>
                  <div className='space-y-4 flex flex-col'>
                    <p className='text-[#161C2D] font-semibold text-[16px]'>Email Address</p>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className='border p-2 rounded-md text-[14px]'
                      placeholder='i.e. john.doe@example.com'
                      required
                    />
                  </div>
                  <div className='space-y-4 flex flex-col'>
                    <p className='text-[#161C2D] font-semibold text-[16px]'>Preferred Contact Method</p>
                    <input
                      type="text"
                      onChange={(e) => setPreferredContact(e.target.value)}
                      className='border p-2 rounded-md text-[14px]'
                      placeholder='i.e. Email or Phone'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Profile Picture and Bio */}
              <div className='flex flex-col'>
                <div className='rounded-md space-y-6'>
                  <div className='flex items-center gap-4'>
                    {/* Profile Picture */}
                    <div className='space-y-4 flex flex-col'>
                      <p className='text-[#161C2D] font-semibold text-[16px]'>Profile Picture</p>
                      <div className="flex items-center">
                        <img src="./user.png" alt="User" className="object-contain w-12 h-12 rounded-full mx-3" />
                        <input
                          type="file"
                          accept="image/*"
                          className='border p-2 text-gray rounded-md text-[14px]'
                          onChange={(e) => setProfilePicture(e.target.files[0])}
                        />
                      </div>
                    </div>

                    {/* Bio */}
                    <div className='space-y-4 flex flex-1 flex-col'>
                      <p className='text-[#161C2D] font-semibold text-[16px]'>Bio</p>
                      <textarea
                        className='border px-2 rounded-md text-[14px] h-24'
                        onChange={(e) => setBio(e.target.value)}
                        placeholder='Tell us about yourself...'
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className='flex flex-col'>
                <p className='text-[18px] font-semibold pb-4'>Location</p>
                <div className='rounded-md space-y-6'>
                  <div className='flex justify-between gap-4'>
                    <div className='space-y-4 flex flex-col w-[32%]'>
                      <p className='text-[#161C2D] font-semibold text-[16px]'>City</p>
                      <input
                        type="text"
                        value={location.city}
                        onChange={(e) => setLocation(prev => ({ ...prev, city: e.target.value }))}
                        className='border p-2 rounded-md text-[14px]'
                        placeholder='i.e. Addis Ababa'
                        required
                      />
                    </div>
                    <div className='space-y-4 flex flex-col w-[32%]'>
                      <p className='text-[#161C2D] font-semibold text-[16px]'>State</p>
                      <input
                        type="text"
                        value={location.state}
                        onChange={(e) => setLocation(prev => ({ ...prev, state: e.target.value }))}
                        className='border p-2 rounded-md text-[14px]'
                        placeholder='i.e. Addis Ababa'
                        required
                      />
                    </div>
                    <div className='space-y-4 flex flex-col w-[32%]'>
                      <p className='text-[#161C2D] font-semibold text-[16px]'>Country</p>
                      <input
                        type="text"
                        value={location.country}
                        onChange={(e) => setLocation(prev => ({ ...prev, country: e.target.value }))}
                        className='border p-2 rounded-md text-[14px]'
                        placeholder='i.e. Ethiopia'
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Information Section */}
            <div className='border p-9 rounded-md space-y-6 mt-6'>
              <p className="text-[20px]">More Information</p>

              {/* Service Details */}
              <div className='flex flex-col space-y-4'>
                <div className="flex items-center gap-6">
                  <div className="w-1/2 flex flex-col">
                    <p className='text-[#161C2D] font-semibold text-[16px]'>Service Category</p>
                    <input
                      type="text"
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className='border p-2 rounded-md text-[14px]'
                      placeholder='i.e. Plumbing'
                      required
                    />
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <p className='text-[#161C2D] font-semibold text-[16px]'>Service Title</p>
                    <input
                      type="text"
                      value={serviceTitle}
                      onChange={(e) => setServiceTitle(e.target.value)}
                      className='border p-2 rounded-md text-[14px]'
                      placeholder='i.e. Residential Plumbing'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className='space-y-6'>
    <p className='text-[18px] font-semibold'>Experience</p>
    {experience.map((exp, index) => (
        <div key={index} className='border p-4 rounded-md space-y-4'>
            <div className='flex justify-between items-center'>
                <h4 className='font-semibold'>Experience {index + 1}</h4>
                {experience.length > 1 && (
                    <button
                        type="button"
                        onClick={() => {
                            const newExperience = experience.filter((_, i) => i !== index);
                            setExperience(newExperience);
                        }}
                        className="text-red-500"
                    >
                        Remove
                    </button>
                )}
            </div>
            <div className='flex justify-between gap-4'>
                <div className='flex flex-col w-[48%]'>
                    <p className='text-[#161C2D] font-semibold text-[14px]'>Position</p>
                    <input
                        type="text"
                        value={exp.position || ''}
                        onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                        className='border p-2 rounded-md text-[14px]'
                        placeholder='e.g., Senior Plumber'
                        required
                    />
                </div>
                <div className='flex flex-col w-[48%]'>
                    <p className='text-[#161C2D] font-semibold text-[14px]'>Company</p>
                    <input
                        type="text"
                        value={exp.company || ''}
                        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                        className='border p-2 rounded-md text-[14px]'
                        placeholder='e.g., ABC Plumbing Co.'
                        required
                    />
                </div>
            </div>
            <div className='flex justify-between gap-4'>
                <div className='flex flex-col w-[48%]'>
                    <p className='text-[#161C2D] font-semibold text-[14px]'>Years of Experience</p>
                    <input
                        type="text" // Change to text to ensure it's treated as a string
                        value={exp.yearsOfExperience || ''}
                        onChange={(e) => handleExperienceChange(index, 'yearsOfExperience', e.target.value)}
                        className='border p-2 rounded-md text-[14px]'
                        placeholder='e.g., 5'
                        required
                    />
                </div>
                <div className='flex flex-col w-[48%]'>
                    <p className='text-[#161C2D] font-semibold text-[14px]'>Start Date</p>
                    <input
                        type="date"
                        value={exp.startDate || ''}
                        onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                        className='border p-2 rounded-md text-[14px]'
                        required
                    />
                </div>
            </div>
            <div className='flex justify-between gap-4'>
                <div className='flex flex-col w-[48%]'>
                    <p className='text-[#161C2D] font-semibold text-[14px]'>End Date</p>
                    <input
                        type="date"
                        value={exp.endDate || ''}
                        onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                        className='border p-2 rounded-md text-[14px]'
                        required
                    />
                </div>
            </div>
            {/* Responsibilities */}
            <div className='flex flex-col'>
                <p className='text-[#161C2D] font-semibold text-[14px]'>Responsibilities</p>
                {exp.responsibilities.map((res, resIndex) => (
                    <input
                        key={resIndex}
                        type="text"
                        value={res || ''}
                        onChange={(e) => handleResponsibilityChange(index, resIndex, e.target.value)}
                        className='border p-2 rounded-md text-[14px] mb-2'
                        placeholder='e.g., Install plumbing systems'
                        required
                    />
                ))}
                <button
                    type="button"
                    onClick={() => handleAddResponsibility(index)}
                    className="py-2 px-8 w-fit bg-[#3C3C51] text-white rounded-md text-base"
                >
                    Add Responsibility
                </button>
            </div>
        </div>
    ))}
    <button
        type="button"
        onClick={handleAddExperience}
        className="py-[7px] px-[30px] rounded-md bg-[#3C3C51] text-white "
    >
        Add New Experience
    </button>
</div>

              {/* qualifications */}
              <div className="space-y-6 p-6  rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Degree:
            <input
              type="text"
              value={qualifications.degree}
              onChange={handleDegreeInputChangeForqualifications}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Education:
            <input
              type="text"
              value={qualifications.education}
              onChange={handleEducationInputChangeForqualifications}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Certifications:</label>
          {qualifications.certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={cert}
                onChange={handleCertificationInputChangeAtIndexForqualifications(index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddNewCertificationFieldToqualifications}
            className="inline-flex items-center px-4 py-2 bg-[#3C3C51] text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Certification
          </button>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Trainings:</label>
          {qualifications.trainings.map((training, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={training}
                onChange={handleTrainingInputChangeAtIndexForqualifications(index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddNewTrainingFieldToqualifications}
            className="inline-flex items-center px-4 py-2 bg-[#3C3C51] text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Training
          </button>
        </div>
      </div>
      
      <button
        type="button"
        onClick={handleAddqualifications}
        className="py-2 px-6 bg-gray-800 text-white font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Add New Qualifications
      </button>
    </div>

              {/* Skills */}
              <div className='space-y-6'>
                <p className='text-[18px] font-semibold'>Skills</p>
                {skills.map((skill, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      className='border p-2 rounded-md text-[14px] flex-1'
                      placeholder='e.g., Electrical Wiring'
                      required
                    />
                    {skills.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newSkills = skills.filter((_, i) => i !== index);
                          setSkills(newSkills);
                        }}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="py-[7px] px-4 rounded-md bg-[#3C3C51] text-white "
                >
                  Add Skill
                </button>
              </div>

              {/* Portfolio */}
              <div className='space-y-6'>
                <p className='text-[18px] font-semibold'>Portfolio</p>
                {/* Portfolio Links */}
                <div>
                  <p className='text-[#161C2D] font-semibold text-[14px]'>Portfolio Links</p>
                  {portfolioLinks.map((link, index) => (
                    <div key={index} className='flex items-center space-x-2 mt-2'>
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => handlePortfolioLinkChange(index, e.target.value)}
                        className='border p-2 rounded-md text-[14px] flex-1'
                        placeholder='e.g., https://portfolio.com/project1'
                        required
                      />
                      {portfolioLinks.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const newLinks = portfolioLinks.filter((_, i) => i !== index);
                            setPortfolioLinks(newLinks);
                          }}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddPortfolioLink}
                    className="py-[7px] px-4 rounded-md bg-[#3C3C51] text-white mt-2"
                  >
                    Add Portfolio Link
                  </button>
                </div>

                {/* Portfolio Files */}
                <div className='mt-4'>
                  <p className='text-[#161C2D] font-semibold text-[14px]'>Portfolio Files</p>
                  {portfolioFiles.map((file, index) => (
                    <div key={index} className='flex items-center space-x-2 mt-2'>
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={(e) => handlePortfolioFileChange(index, e.target.files[0])}
                        className='border p-2 rounded-md text-[14px] flex-1'
                        required
                      />
                      {portfolioFiles.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const newFiles = portfolioFiles.filter((_, i) => i !== index);
                            setPortfolioFiles(newFiles);
                          }}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddPortfolioFile}
                    className="py-[7px] px-4 rounded-md bg-[#3C3C51] text-white mt-2"
                  >
                    Add Portfolio File
                  </button>
                </div>
              </div>

              {/* Availability */}
              <div className='space-y-6'>
                <p className='text-[18px] font-semibold'>Availability</p>
                <div className='rounded-md space-y-6'>
                  <div className='flex items-center gap-4'>
                    {/* Available Days */}
                    <div className='space-y-4 flex flex-col w-[48%]'>
                      <p className='text-[#161C2D] font-semibold text-[16px]'>Available Days</p>
                      <div className='flex flex-wrap gap-2'>
                        {daysOfWeek.map(day => (
                          <button
                            key={day}
                            type="button"
                            className={`border rounded-md px-4 py-2 ${availabilityDays.includes(day) ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => toggleDay(day)}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Available Hours */}
                    <div className='space-y-4 flex flex-col w-[48%]'>
                      <p className='text-[#161C2D] font-semibold text-[16px]'>Available Hours</p>
                      <input
                        type="text"
                        onChange={(e) => setAvailabilityHours(e.target.value)}
                        className='border p-2 rounded-md text-[14px]'
                        placeholder='e.g., 9am-5pm'
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hourly Rate and Languages */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Hourly Rate */}
                <div className="flex flex-col w-full md:w-1/2">
                  <p className='text-[#161C2D] font-semibold text-[16px]'>Hourly Rate</p>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className='border p-2 rounded-md text-[14px]'
                    placeholder='e.g., 50'
                    required
                  />
                </div>

                {/* Languages */}
                <div className="flex flex-col w-full md:w-1/2">
                  <p className='text-[#161C2D] font-semibold text-[16px]'>Languages</p>
                  {languages.map((lang, index) => (
                    <div key={index} className='flex items-center space-x-2 mt-2'>
                      <input
                        type="text"
                        value={lang}
                        onChange={(e) => handleLanguageChange(index, e.target.value)}
                        className='border p-2 rounded-md text-[14px] flex-1'
                        placeholder='e.g., English'
                        required
                      />
                      {languages.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const newLanguages = languages.filter((_, i) => i !== index);
                            setLanguages(newLanguages);
                          }}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddLanguage}
                    className="py-[7px] px-4 rounded-md bg-[#3C3C51] text-white mt-2"
                  >
                    Add Language
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#0097FF] text-white px-[30px] mt-[50px] py-[7px] rounded-md"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceProviderForm;
