import Cart from '@/components/Cart';
import React from 'react'

export default async function Page({ params }) {
 
  let cart = null;
  let jobs = null
  try {
      const {username} = await params;
      const response = await fetch(process.env.URL + '/api/getcart', {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({ username })
    })
    cart = await response.json();
    const getJobs = await fetch(process.env.URL + '/api/getJobs', {
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
      {jobs.map((job) => (
        <Cart key={job._id} job={job} />))} 
    </div>
  )
}
