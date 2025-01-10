import Feed from '@/components/Feed';
import Intro from '@/components/Intro';
import Search from '@/components/Search';
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
      <Intro/>
      <div className='flex flex-row gap-8'>
      <h1 className='md:text-3xl font-bold mt-8 ml-6 sm: text-2xl'>Recent Jobs</h1>
      <Search/>
      </div>
      
      <Feed jobs={jobs}/>
    </div>
  )
}
