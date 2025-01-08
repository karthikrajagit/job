import React from 'react'

export default function Intro() {
  return (
    <div className='flex justify-between bg-blue-100'>
       <img
       src="https://nietm.in/wp-content/uploads/2022/11/CSE3.png"
       alt="CSE3"
       className='w-[600px] h-[400px]'
       />
       <div className='flex justify-center items-center flex-col mr-8'>
       <h1 className='font-bold text-6xl text-blue-600'>
            FIND YOUR DREAM 
       </h1>
       <h1 className='font-bold text-6xl'>
            JOB
       </h1>
       <h1 className='font-bold text-6xl text-blue-600'>
            EASILY AND QUICKLY 
       </h1>
       </div>
    </div>
  )
}
