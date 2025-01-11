import Cart from '@/components/Cart';
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

export default async function Page({ params }) {
  
  let cart = null;
  let jobs = null
  try {
      const {username} = await params;
      const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/getcart', {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({ username })
    })
    cart = await response.json();
    const getJobs = await fetch(process.env.NEXT_PUBLIC_URL + '/api/getJobs', {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({ cart })
    })
    jobs = await getJobs.json();  
    
  } catch (error) { 
    console.log(error)
  }
  return (
    <div>
      <Link href='/'>
      <IoMdArrowRoundBack
      className="md:w-20 h-20 sm:h-10 w-10 md:mt-4 ml-2 text-gray-700 cursor-pointer hover:text-blue-500 transition"
      />
      </Link>
      {jobs.length === 0 && (<h1 className='text-center font-bold pt-6 text-3xl flex items-center'>No results found</h1>) }
      {jobs.map((job) => (
        <Cart key={job._id} job={job} />))} 
    </div>
  )
}
