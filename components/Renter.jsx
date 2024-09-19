'use client'
import React, { useState } from 'react';
import axios from '@/api/axios';

const Renter = ({ accestocken }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [preferredContact, setPreferredContact] = useState('');
    const [location, setLocation] = useState({
        city: '',
        state: '',
        country: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            phoneNumber,
            companyName,
            bio,
            profilePicture,
            preferredContactMethod: preferredContact,
            location, // Pass location as an object
        };

        console.log(data);
        console.log("Got access token: " + accestocken);

        try {
            const response = await axios.patch('/auth/property-renters/profile/complete', data, {
                headers: {
                    Authorization: `Bearer ${accestocken}`, // Add Bearer token here
                }
            });

            if (response.status === 200) {
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
            <div className='flex justify-center mt-10 items-center max-w-6xl mx-auto'>
                <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-semibold'>1</div>
                <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
                <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-semibold'>2</div>
                <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
                <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-semibold'></div>
                <div className='w-[200px] border md:w-[290px] border-[#B2B2B5]'></div>
                <div className='size-[35px] flex justify-center items-center border-[3px] border-[#FC9B00] rounded-full text-white font-semibold'></div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex item-center justify-center">
                    <p className="text-[22px] mt-5 font-semibold">Fill Profile</p>
                </div>

                <div className='max-w-6xl mx-auto mt-[50px]'>
                    <div className='flex flex-col'>
                        <div className='border p-9 rounded-md space-y-6'>
                            <p className="text-[20px]">Personal Information</p>
                            <div className='flex justify-between gap-4'>
                                <div className='space-y-6 w-[48%]'>
                                    <div className='space-y-4 flex flex-col'>
                                        <p>
                                            <span className='text-[#161C2D] font-semibold text-[16px]'>First Name</span>
                                        </p>
                                        <input type="text" onChange={(e) => setFirstName(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. John' />
                                    </div>
                                    <div className='space-y-4 flex flex-col'>
                                        <p>
                                            <span className='text-[#161C2D] font-semibold text-[16px]'>Phone Number</span>
                                        </p>
                                        <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. +1234567890' />
                                    </div>
                                </div>
                                <div className='space-y-6 w-[48%]'>
                                    <div className='space-y-4 flex flex-col'>
                                        <p>
                                            <span className='text-[#161C2D] font-semibold text-[16px]'>Last Name</span>
                                        </p>
                                        <input type="text" onChange={(e) => setLastName(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. Doe' />
                                    </div>
                                    <div className='space-y-4 flex flex-col'>
                                        <p>
                                            <span className='text-[#161C2D] font-semibold text-[16px]'>Email Address</span>
                                        </p>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. john.doe@example.com' />
                                    </div>
                                    <div className='space-y-4 flex flex-col'>
                                        <p>
                                            <span className='text-[#161C2D] font-semibold text-[16px]'>Preferred Contact Method</span>
                                        </p>
                                        <input type="text" onChange={(e) => setPreferredContact(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. Email or Phone' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <div className='rounded-md space-y-6'>
                                    <div className='flex items-center gap-4'>
                                        <div className='space-y-4 flex flex-col'>
                                            <p>
                                                <span className='text-[#161C2D] font-semibold text-[16px]'>Profile Picture</span>
                                            </p>
                                            <div className="flex item-center">
                                                <img src="./user.png" className="object-contain size-[50px] rounded-full mx-3" alt="Profile" />
                                                <input type="file" className='border p-2 text-gray rounded-md text-[14px]' onChange={(e) => setProfilePicture(e.target.files[0])} />
                                            </div>
                                        </div>
                                        <div className='space-y-4 flex flex-1 flex-col'>
                                            <p>
                                                <span className='text-[#161C2D] font-semibold text-[16px]'>Bio</span>
                                            </p>
                                            <textarea className='border px-2 rounded-md text-[14px]' onChange={(e) => setBio(e.target.value)} placeholder='Tell us about yourself'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <p className='text-[18px] font-semibold pb-4'>Location</p>
                                <div className='rounded-md space-y-6'>
                                    <div className='flex justify-between gap-4'>
                                        <div className='space-y-6 w-[48%]'>
                                            <div className='space-y-4 flex flex-col'>
                                                <p>
                                                    <span className='text-[#161C2D] font-semibold text-[16px]'>City</span>
                                                </p>
                                                <input type="text" onChange={(e) => setLocation(prev => ({ ...prev, city: e.target.value }))} className='border p-2 rounded-md text-[14px]' placeholder='City' />
                                            </div>
                                        </div>
                                        <div className='space-y-6 w-[48%]'>
                                            <div className='space-y-4 flex flex-col'>
                                                <p>
                                                    <span className='text-[#161C2D] font-semibold text-[16px]'>State</span>
                                                </p>
                                                <input type="text" onChange={(e) => setLocation(prev => ({ ...prev, state: e.target.value }))} className='border p-2 rounded-md text-[14px]' placeholder='State' />
                                            </div>
                                        </div>
                                        <div className='space-y-6 w-[48%]'>
                                            <div className='space-y-4 flex flex-col'>
                                                <p>
                                                    <span className='text-[#161C2D] font-semibold text-[16px]'>Country</span>
                                                </p>
                                                <input type="text" onChange={(e) => setLocation(prev => ({ ...prev, country: e.target.value }))} className='border p-2 rounded-md text-[14px]' placeholder='Country' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex w-full items-center justify-center'>
                    <button type="submit" className="bg-[#0097FF] text-white px-[30px] mt-[50px] py-[7px] rounded-md">Save Profile</button>
                </div>
            </form>
        </div>
    );
}

export default Renter;