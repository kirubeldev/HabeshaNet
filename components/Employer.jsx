'use client';
import React, { useState } from 'react';
import axios from '@/api/axios';

const Employer = ({ accestocken }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [preferredContact, setPreferredContact] = useState('Email'); // Default value set to 'Email'
    const [location, setLocation] = useState({
        city: '',
        state: '',
        country: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object
        const formData = new FormData();

        // Append fields to FormData
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('companyName', companyName);
        formData.append('bio', bio);
        formData.append('preferredContactMethod', preferredContact);
        formData.append('profilePicture', profilePicture); // Append the file
        formData.append('location[city]', location.city);   // Location fields as nested
        formData.append('location[state]', location.state);
        formData.append('location[country]', location.country);

        console.log("FormData submitted:", formData);
        console.log("Got access token named: " + accestocken);

        try {
            const response = await axios.patch('/auth/employers/profile/complete', formData, {
                headers: {
                    Authorization: `Bearer ${accestocken}`,
                    'Content-Type': 'multipart/form-data', // Set correct content type
                }
            });

            if (response.status) {
                alert('Profile saved successfully!');
            } else {
                alert('Failed to save profile.');
            }
        } catch (error) {
            // Log the entire error response for debugging
            console.error('Error:', error.response);
        
            // Prepare a user-friendly error message
            const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
        
            // Show the error message to the user
            alert(`An error occurred: ${errorMessage}`);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file); // Set the file, not just the URL
        }
    };

    return (
        <div>
            <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
                <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-semibold'>1</div>
                <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
                <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-semibold'>2</div>
                <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
                <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold'>3</div>
            </div>

            <div className="flex item-center justify-center">
                <p className="text-[22px] mt-5 font-semibold">Fill Profile</p>
            </div>

            <div className='max-w-6xl mx-auto mt-[50px]'>
                <form onSubmit={handleSubmit} className='border p-9 rounded-md space-y-6'>
                    <p className="text-[20px]">Personal Information</p>
                    <div className='flex justify-between gap-4'>
                        <div className='space-y-6 w-[48%]'>
                            <div className='space-y-4 flex flex-col'>
                                <p>
                                    <span className='text-[#161C2D] font-semibold text-[16px]'>First Name</span>
                                </p>
                                <input type="text" onChange={(e) => setFirstName(e.target.value)} className='border p-2 rounded-md text-[14px] outline-none' placeholder='i.e. John' />
                            </div>
                            <div className='space-y-4 flex flex-col'>
                                <p>
                                    <span className='text-[#161C2D] font-semibold text-[16px]'>Phone Number</span>
                                </p>
                                <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} className='border p-2 rounded-md text-[14px] outline-none' placeholder='i.e. +1234567890' />
                            </div>
                        </div>
                        <div className='space-y-6 w-[48%]'>
                            <div className='space-y-4 flex flex-col'>
                                <p>
                                    <span className='text-[#161C2D] font-semibold text-[16px]'>Last Name</span>
                                </p>
                                <input type="text" onChange={(e) => setLastName(e.target.value)} className='border p-2 rounded-md text-[14px] outline-none' placeholder='i.e. Doe' />
                            </div>
                            <div className='space-y-4 flex flex-col'>
                                <p>
                                    <span className='text-[#161C2D] font-semibold text-[16px]'>Company Name</span>
                                </p>
                                <input type="text" onChange={(e) => setCompanyName(e.target.value)} className='border p-2 rounded-md text-[14px] outline-none' placeholder='i.e. Company ABC' />
                            </div>
                        </div>
                    </div>

                    <div className='space-y-6 w-full'>
                        <div className='space-y-4 flex flex-col'>
                            <p>
                                <span className='text-[#161C2D] font-semibold text-[16px]'>Email Address</span>
                            </p>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className='border p-2 rounded-md text-[14px] outline-none' placeholder='i.e. john.doe@example.com' />
                        </div>
                        <div className='space-y-4 flex flex-col'>
                            <p>
                                <span className='text-[#161C2D] font-semibold text-[16px]'>Preferred Contact Method</span>
                            </p>
                            <select 
                                className='border p-2 rounded-md text-[14px] outline-none' 
                                value={preferredContact}
                                onChange={(e) => setPreferredContact(e.target.value)}
                            >
                                <option value="Email">Email</option>
                                <option value="Phone">Phone</option>
                                <option value="SMS">SMS</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='rounded-md space-y-6'>
                            <div className='flex items-center gap-4'>
                                <div className='space-y-4 flex flex-col'>
                                    <p className='text-[#161C2D] font-semibold text-[16px]'>Profile Picture</p>
                                    <div className="flex items-center">
                                        <img 
                                            src={profilePicture ? URL.createObjectURL(profilePicture) : "./user.png"} 
                                            alt="User" 
                                            className="object-cover w-12 h-12 rounded-full mx-3" 
                                        />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className='border p-2 text-gray rounded-md text-[14px]'
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>

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

                    <div className='flex flex-col'>
                        <p className='text-[18px] font-semibold pb-4'>Location</p>
                        <div className='rounded-md space-y-6'>
                            <div className='flex justify-between gap-4'>
                                <div className='space-y-4 w-[48%]'>
                                    <p>
                                        <span className='text-[#161C2D] font-semibold text-[16px]'>City</span>
                                    </p>
                                    <input
                                        type="text"
                                        onChange={(e) => setLocation({ ...location, city: e.target.value })}
                                        className='border p-2 rounded-md text-[14px] outline-none'
                                        placeholder='City'
                                    />
                                </div>
                                <div className='space-y-4 w-[48%]'>
                                    <p>
                                        <span className='text-[#161C2D] font-semibold text-[16px]'>State</span>
                                    </p>
                                    <input
                                        type="text"
                                        onChange={(e) => setLocation({ ...location, state: e.target.value })}
                                        className='border p-2 rounded-md text-[14px] outline-none'
                                        placeholder='State'
                                    />
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <p>
                                    <span className='text-[#161C2D] font-semibold text-[16px]'>Country</span>
                                </p>
                                <input
                                    type="text"
                                    onChange={(e) => setLocation({ ...location, country: e.target.value })}
                                    className='border p-2 rounded-md text-[14px] outline-none'
                                    placeholder='Country'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button type="submit" className="w-full md:w-1/2 mt-6 bg-blue-600 text-white p-3 rounded-lg text-[16px]">Save Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Employer;
