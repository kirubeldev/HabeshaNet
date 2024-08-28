import React from 'react';
import herobg from '../public/herobg.jpg'
import Image from 'next/image';
const Hero = () => {
  return (
    
    <div 
      style={{
        backgroundImage: `url('./herobg.jpg')`, // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh', // Full height of the viewport
        width:"100vw"
      }} 
    >
        
        <div className='flex justify-between max-w-6xl mx-auto  pt-8 w-full'>
            <div className='flex w-1/2 justify-start items-center'>
            
            <div className='flex flex-col'>
                <h1 className='text-[#020617] text-[52px]  font-bold'>
                    make your business <br /> powerful with shade
                </h1>
                <p className='text-[#3C3C51]'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At accusantium   <br />laborum adipisci hic expedita recusandaeid, facere tempore  labore quae  <br /> similique iste quaerat sumos temporibus nemo esse quis pariatur sumo <br /> repudiandae. Voluptas.</p>
            </div>
            </div>
            <div className='flex w-1/2 justify-center items-center'>
            <img src="./herochick.svg"className='w-[500px] h-[450px] 2xl:w-[640px] 2xl:h-[701px] ' />
            </div>
</div>
    </div>
  );
}

export default Hero;
