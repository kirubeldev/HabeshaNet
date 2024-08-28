import React from 'react';
import TeamCard from './TeamCard';

const Meet = () => {

  return (
    <div> 
      <div className='text-center mt-[70px]'>
        <h1 className='text-[36px] font-bold'>meet the team</h1>
        <p className='text-[22px]'>
          People choose us because we serve the best for everyone
        </p>
      </div>
<div className='flex gap-6 justify-center'>

     <TeamCard />
     <TeamCard />
     <TeamCard />
     <TeamCard />
</div>
    </div>
  );
}

export default Meet;
