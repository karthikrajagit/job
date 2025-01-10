import Jobs from '@/components/Jobs';
import Link from 'next/link';
import React from 'react'
import { HiArrowLeft } from 'react-icons/hi';

export default async function page({params}) {
  const searchTerm = await params.searchTerm;
  let data = null;
  try {
    
    const result = await fetch(process.env.NEXT_PUBLIC_URL + '/api/search', {
      method: 'POST',
      body: JSON.stringify({ searchTerm: searchTerm }),
      cache: 'no-store',
    });
    data = await result.json();
    
  } catch (error) {
    console.log("Error fetching search", error)
  }
  return (
    <div>
      <div className='flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <Link href={'/'} className='hover:bg-gray-100 rounded-full p-2'>
          <HiArrowLeft className='h-5 w-5' />
        </Link>
        <h2 className='sm:text-lg'>Back</h2>
      </div>
      <div className='border-b p-6'>
        <h1 className='text-center text-lg'>
          Search results for &quot;{decodeURIComponent(searchTerm)}&quot;
        </h1>
      </div>
      {data && data.length === 0 && (
        <h1 className='text-center pt-6 text-2xl'>No results found</h1>
      )}

      {data && data.map((job) => <Jobs key={job._id} job={job}></Jobs>)}
    </div>
  )
}
