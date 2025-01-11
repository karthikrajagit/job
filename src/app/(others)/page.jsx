import Feed from '@/components/Feed';
import Intro from '@/components/Intro';
import Search from '@/components/Search';
import React from 'react';

export default async function Home() {
  let jobs = null;
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/getall', {
      method: 'POST', // Change POST to GET if your API supports GET
      cache: 'no-store', // Disable caching for dynamic data
    });
    jobs = await response.json();
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }

  return (
    <div>
      <Intro />
      <div className="flex flex-row gap-8">
        <h1 className="md:text-3xl font-bold mt-8 ml-6 sm:text-2xl">Recent Jobs</h1>
        <Search />
      </div>
      <Feed jobs={jobs} />
    </div>
  );
}
