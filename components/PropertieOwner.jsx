'use client'
import React, { useState } from 'react';
import axios from '@/api/axios'; // Ensure axios is imported correctly

const PropertieOwnerForm = ({ accestocken }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [propertyType, setPropertyType] = useState('');
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
            propertyType,
            bio,
            profilePicture,
            preferredContactMethod: preferredContact,
            location,
        };

        console.log(data);
        console.log("Got access token: " + accestocken);

        try {
            const response = await axios.patch('/auth/property-owners/profile/complete', data, {
                headers: {
                    Authorization: `Bearer ${accestocken}`, // Add Bearer token here
                }
            });

            if (response.status) {
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
                <div className='size-[35px] flex justify-center items-center bg-[#FC9B00] rounded-full text-white font-bold'>3</div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex item-center justify-center">
                    <p className="text-[22px] mt-5 font-semibold">Fill Profile</p>
                </div>

                <div className='max-w-6xl mx-auto mt-[50px]'>
                    <div className='border p-9 rounded-md space-y-6'>
                        <p className="text-[20px]">Personal Information</p>
                        <div className='flex justify-between gap-4'>
                            <div className='space-y-6 w-[48%]'>
                                <div className='flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>First Name</label>
                                    <input type="text" onChange={(e) => setFirstName(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. John' />
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>Phone Number</label>
                                    <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. +1234567890' />
                                </div>
                            </div>
                            <div className='space-y-6 w-[48%]'>
                                <div className='flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>Last Name</label>
                                    <input type="text" onChange={(e) => setLastName(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. Doe' />
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>Property Type</label>
                                    <input type="text" onChange={(e) => setPropertyType(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. Apartment' />
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between gap-4'>
                            <div className='space-y-6 w-[48%]'>
                                <div className='flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>Email Address</label>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. john.doe@example.com' />
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>Preferred Contact Method</label>
                                    <input type="text" onChange={(e) => setPreferredContact(e.target.value)} className='border p-2 rounded-md text-[14px]' placeholder='i.e. Email or Phone' />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='space-y-6'>
                                <div className='flex items-center gap-4'>
                                    <div className='flex flex-col space-y-4'>
                                        <label className='text-[#161C2D] font-semibold text-[16px]'>Profile Picture</label>
                                        <div className="flex items-center">
                                            <img src="./user.png" className="object-contain size-[50px] rounded-full mx-3" alt="Profile" />
                                            <input type="file" className='border p-2 text-gray rounded-md text-[14px]' onChange={(e) => setProfilePicture(e.target.files[0])} />
                                        </div>
                                    </div>
                                    <div className='flex flex-1 flex-col space-y-4'>
                                        <label className='text-[#161C2D] font-semibold text-[16px]'>Bio</label>
                                        <textarea className='border px-2 rounded-md text-[14px]' onChange={(e) => setBio(e.target.value)} placeholder='Tell us about yourself'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-[18px] font-semibold pb-4'>Location</p>
                            <div className='flex justify-between gap-4'>
                                <div className='w-[48%] flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>City</label>
                                    <input type="text" onChange={(e) => setLocation(prev => ({ ...prev, city: e.target.value }))} className='border p-2 rounded-md text-[14px]' placeholder='City' />
                                </div>
                                <div className='w-[48%] flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>State</label>
                                    <input type="text" onChange={(e) => setLocation(prev => ({ ...prev, state: e.target.value }))} className='border p-2 rounded-md text-[14px]' placeholder='State' />
                                </div>
                                <div className='w-[48%] flex flex-col space-y-4'>
                                    <label className='text-[#161C2D] font-semibold text-[16px]'>Country</label>
                                    <input type="text" onChange={(e) => setLocation(prev => ({ ...prev, country: e.target.value }))} className='border p-2 rounded-md text-[14px]' placeholder='Country' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex w-full items-center justify-center'>
                    <button type="submit" className="bg-[#B53CC9] text-white px-[30px] mt-[50px] py-[7px] rounded-md">Save Profile</button>
                </div>
            </form>
        </div>
    );
}

export default PropertieOwnerForm;