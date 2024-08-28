"use client";
import React, { useState } from "react";
import PriceCard from "./priceCard";
const PricePage = () => {
  // Set the default state to false for Yearly selected
  const [monthly, setMonthly] = useState(false);

  // Function to handle Yearly button click
  const handleYearlyClick = () => {
    setMonthly(false);
  };

  // Function to handle Monthly button click
  const handleMonthlyClick = () => {
    setMonthly(true);
  };

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
            <p className="text-[#161C2D] text-[18px] font-bold">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <div className="flex items-center gap-3 mt-[50px]">
            <p className="text-[#0097FF] text-[12px] font-bold">
              Save 15% on yearly plan!
            </p>
            <div className="border p-1 rounded-3xl flex">
              <button
                onClick={handleYearlyClick}
                className={`py-[6px] flex items-center gap-4 rounded-3xl px-[30px] ${
                  !monthly ? "bg-[#0097FF]" : "bg-transparent"
                } ${!monthly ? "text-white" : "text-[#A1A1AA"}`}
              >
                Monthly
              </button>
              <button
                onClick={handleMonthlyClick}
                className={`py-[6px] flex items-center gap-4 rounded-3xl px-[30px] ${
                  monthly ? "bg-[#0097FF]" : "bg-transparent"
                } ${monthly ? "text-white" : "text-[#A1A1AA"}`}
              >
                yearly
              </button>
            </div>
          </div>
        </div>
      {!monthly &&  <div className="flex flex-col justify-center md:flex-row w-full gap-[20px] mt-[40px]">

        <PriceCard
        title="Free"
        description="Best for personal use"
        price="$0"
        features={features}
        buttonText="Get Started"
      />
        <PriceCard
        title="Monthly"
        description="Best for personal use"
        price="$14.99"
        features={features}
        buttonText="Get Started"
      />
       <PriceCard
        title="Job poster"
        description="Best for personal use"
        price="$24.99"
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


        </div>}

       { monthly && <div className="flex flex-col justify-center md:flex-row w-full gap-[20px] mt-[40px]">
        <PriceCard
        title="Yearly"
        description="Best for personal use"
        price="$99.99"
        features={features}
        buttonText="Get Started"
      />
</div>}
      </div>
    </div>
  );
};

export default PricePage;
