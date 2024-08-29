import Link from 'next/link'
import React from 'react'

const Thankyou = () => {
  return (
    <div>
      <div className='max-w-6xl flex mx-auto    justify-center items-center h-[100vh] '>
        <div className='flex flex-col border bg-white p-6 rounded-xl shadow-md gap-5 '>
<div className='flex flex-col items-center justify-center mx-auto text-center'>
    <h1 className='text-[36px] font-bold'>Thank you !</h1>
    <p className='text-[13px]'>Lorem sit amet consectetur adipisicing elit. <br /> Vero veniam Quasi similique eaque eos saepe vero, harum aut.</p>
</div>
<div className='flex justify-center items-center  w-fit mx-auto'>
    <img src="./Group.png" alt="" className='size-[198px] object-cover' />
</div>
<div className='felx justify-center items-center mx-auto mt-4'>
    <Link href={"www.gmail.com"}>
<button className='flex gap-3 items-center border rounded-md py-2 px-4 justify-center'>
    <img src="gmail.png " alt="" className='h-[24px] w-[32px]' />
<p>Check your email</p>
</button></Link>
</div>
        </div>
    </div>
    </div>
  )
}

export default Thankyou
