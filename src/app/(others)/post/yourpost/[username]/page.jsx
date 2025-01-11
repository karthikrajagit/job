import YourPost from '@/components/YourPost'
import Link from 'next/link';
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';

export default async function page({params}) {
  const username = await params.username;
  let jobs = null
  try {
    const result = await fetch(process.env.NEXT_PUBLIC_URL + '/api/userjobs', {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({ username: username })
    });
    jobs = await result.json();
    console.log(jobs)
  
  } catch (error) {
    console.log("Error fetching search", error)
  }
  return (
    <div>
       <Link href='/'>
      <IoMdArrowRoundBack
      className="md:w-20 h-20 sm:h-10 w-10 md:mt-4 ml-2 text-gray-700 cursor-pointer hover:text-blue-500 transition"
      />
      </Link>
      {jobs.length === 0 && (<h1 className='text-center pt-6 text-2xl'>No results found</h1>) }
      {jobs.map((job) => (
        <YourPost key={job._id} job={job} />
      ))
     }
    </div>
  )
}
