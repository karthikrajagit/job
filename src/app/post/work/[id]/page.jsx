import Buttons from '@/components/Buttons';
import React from 'react';
import { FaBuilding } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';


export default async function Page({ params }) {
  let job = null;
  try {
    const { id } = await params; 
    const response = await fetch(process.env.URL + '/api/getpost',{
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({ id })
    })
    job = await response.json();
  } catch (error) {
    console.log(error)
  }
  
  
  return (
    <div className="flex flex-col justify-center align-center mt-8">
      <div className="items-center p-6 rounded-lg bg-slate-100 gap-8">
        {/* Job Title */}
        <h1 className="text-3xl font-bold text-black mb-2">{job?.title}</h1>

        <div className="flex flex-col">
          <span className="font-bold text-2xl">Description</span>
          <p className="text-gray-800 mb-4">{job?.description}</p>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-2xl">Skills</span>
          <p className="text-gray-800 mb-4">{job?.skills}</p>
        </div>

        <div className="space-y-3">
          {/* Company */}
          <div className="flex items-center text-gray-700">
            <FaBuilding className="w-5 h-5 mr-2 text-blue-600" />
            <span className="font-bold text-xl text-black">Company:</span>
            <span className="font-medium text-xl ml-3">{job?.company}</span>
          </div>

          {/* Experience */}
          <div className="flex items-center text-gray-700">
            <span className="font-medium text-black">Experience:</span>
            <span className="ml-1">{job?.experience}</span>
          </div>

          {/* Salary */}
          <div className="flex items-center text-gray-700">
            <RiMoneyDollarCircleLine className="w-5 h-5 mr-2 text-green-600" />
            <span className="font-medium text-black">Salary:</span>
            <span className="ml-1">{job?.salary}</span>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-700">
            <FaLocationDot className="w-5 h-5 mr-2 text-red-600" />
            <span className="font-medium text-black">Location:</span>
            <span className="ml-1">{job?.location}</span>
          </div>
        </div>
      </div>
      <Buttons id={job?._id}/>
    </div>
  );
}
