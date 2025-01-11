'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { IoMdArrowRoundBack } from "react-icons/io";


export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const [data, setData] = useState({
    username: user?.username,
    email: user?.emailAddresses[0].emailAddress,
    title: '',
    description: '',
    company: '',
    experience: '',
    salary: '',
    location: '',
    skills: '',
    lastdate: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(data); // Log the updated data to the console for debuggi
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user){
      router.push('/sign-in');
      return;
    }
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const job = await response.json();
      location.reload();
      router.push('/');
      
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <form
        className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-start"
        onSubmit={handleSubmit}
      >
        {/* Back Icon */}
        <IoMdArrowRoundBack
          className="md:w-20 h-20 sm:h-10 w-10 text-gray-700 cursor-pointer hover:text-blue-500 transition  md:mb-0 md:mr-6"
          onClick={() => router.back()}
        />

        {/* Left Section: Image */}
        <div className="md:w-[600px] flex-shrink-0 mt-8">
          <img
            src="https://d30xyenmgipudp.cloudfront.net/media/uploads/JOB-IMAGE.jpg"
            alt="Company"
            className="w-full h-[300px] md:h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-full flex flex-col gap-6 p-6">
          <h2 className="text-3xl font-semibold text-gray-800">Post a Job</h2>
          <input
            type="text"
            id="title"
            placeholder="Job Title"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="text"
            id="description"
            placeholder="Job Description"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="text"
            id="company"
            placeholder="Company Name"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="text"
            id="experience"
            placeholder="Experience"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="text"
            id="salary"
            placeholder="Salary"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="text"
            id="location"
            placeholder="Location"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
           <input
            type="text"
            id="skills"
            placeholder="Required Skills"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="date"
            id="lastdate"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
}
