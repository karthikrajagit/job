import React from 'react'
import Jobs from './Jobs';


export default function Feed({jobs = []}) {
  return (
    <div>
      {jobs.map((job) => (
        <Jobs key={job._id} job={job} />
      ))}
    </div>
  )
}
