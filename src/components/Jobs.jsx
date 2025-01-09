import React from 'react';
import { FaBuilding } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';
import moment from 'moment';

export default function Jobs({ job }) {
  const date = new Date(job?.lastdate).toLocaleDateString();
  return (
    <div>

    <Link href={`/post/work/${job?._id}`} className='flex justify-center align-center mt-4'>  

    <div className="md:w-[800px] items-center p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer gap-8 hover:bg-blue-100">
      


      <span className='text-xs text-gray-500 flex-1 truncate max-w-32'>
      {moment(job?.createdAt).fromNow()}
      </span>
      <h1 className="text-xl font-bold text-gray-800 mb-2">{job?.title}</h1>
      
      {/* Job Description */}
      <p 
          className="text-gray-600 mb-4 line-clamp-2" 
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '3em', // Adjust based on line height to ensure two lines
            lineHeight: '1.5em',
          }}
        >
          {job?.description}
        </p>
      
      {/* Job Details */}
      <div className="space-y-3">
        {/* Company */}
        <div className="flex items-center text-gray-700">
          <FaBuilding className="w-5 h-5 mr-2 text-blue-600" />
          <span className="font-medium">Company:</span> 
          <span className="ml-1">{job?.company}</span>
        </div>

        {/* Experience */}
        <div className="flex items-center text-gray-700">
          <span className="font-medium">Experience:</span> 
          <span className="ml-1">{job?.experience}</span>
        </div>

        {/* Salary */}
        <div className="flex items-center text-gray-700">
          <RiMoneyDollarCircleLine className="w-5 h-5 mr-2 text-green-600" />
          <span className="font-medium">Salary:</span> 
          <span className="ml-1">{job?.salary}</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-700">
          <FaLocationDot className="w-5 h-5 mr-2 text-red-600" />
          <span className="font-medium">Location:</span> 
          <span className="ml-1">{job?.location}</span>
        </div>
        <div>
          
          <span className='font-bold text-gray-600 text-[16px]'>Last Date to Apply: </span>
          <span className='ml-1'>{date}</span>
        </div>
      </div>
    </div>
    </Link>
    </div>
  );
}
