import Feed from '@/components/Feed';
import React from 'react'

export default async function Home() {
  let jobs = null;
  try {
    const response = await fetch(process.env.URL + '/api/getall', {
      method: 'POST',
      cache: 'no-store',
    })
    jobs = await response.json();
   
  } catch (error) {
     console.log(error)
  }
  return (
    <div>
      <div className='flex flex-row gap-8'>
      <h1 className='md:text-3xl font-bold mt-8 ml-6 sm: text-2xl'>Recent Jobs</h1>
      <input
      name='search'
      id='search'
      placeholder='Search...'
      className='border border-gray-300 rounded-full p-4 md:ml-10 sm:ml-6 mt-6 sm:w-[80%] md:w-1/3 h-12'
      />
      </div>
      <Feed jobs={jobs}/>
    </div>
  )
}
