import YourPost from '@/components/YourPost'
import React from 'react'

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
      {jobs.map((job) => (
        <YourPost key={job._id} job={job} />
      ))
     }
    </div>
  )
}
