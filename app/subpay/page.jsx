"use client";
import PriceCard from "@/components/priceCard";
import React, { useState } from "react";
const Page = () => {
  // Set the default state to false for Yearly selected

 
  const features = [
    'Task management',
    'Project Planning',
    'Team Collaboration',
    'Notifications and Reminders',
    'Resource Allocation'
  ];
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto mt-[100px] flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-[36px] font-bold">Our Pricing</h1>
            <p className="text-[#161C2D] text-[16px] font-bold">
            please  Choose a plan to continue
            </p>
          </div>
       
        </div>
       <div className="flex flex-col justify-center md:flex-row w-full gap-[20px] mt-[40px]">

     
        <PriceCard
        title="Monthly"
        description="Best for personal use"
        price="$14.99"
        features={features}
        
        buttonText="Get Started"
      />
     
       <PriceCard
        title="6 Months"
        description="Best for personal use"
        price="$64.99"
        features={features}
        buttonText="Get Started"
      />
 

<PriceCard
        title="Yearly"
        description="Best for personal use"
        price="$99.99"
        features={features}
        buttonText="Get Started"
      />

        </div>

     
      </div>
    </div>
  );
};

export default Page;
