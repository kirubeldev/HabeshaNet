import Link from 'next/link';
import React from 'react';
import { TiTick } from 'react-icons/ti';

const PriceCard = ({ title, description, price, features = [], buttonText }) => {
  return (
    <div className="flex flex-col border rounded-xl px-6 w-fit shadow-md">
      <div className="space-y-5">
        <div>
          <h1 className="text-[23px] pt-3 font-bold">{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <h1 className="text-[32px] font-bold">
            {price} <span className="text-[17px] font-light">/month</span>
          </h1>
        </div>
      </div>
      <Link href="https://www.paypal.com/et/home">
      <button className='py-[10px] rounded-lg my-[30px] text-white bg-[#B53CC9] w-[260px] mt-[40px]'>
        {buttonText}
      </button>
      </Link>
      <p className="text-[16px] font-semibold">What you get:</p>
      <div className="space-y-4 my-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <TiTick className="size-[26px] text-[#FC9B00]" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
