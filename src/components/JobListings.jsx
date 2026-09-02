import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = () => {
   // console.log(jobs) //array of jobs

   const recentJobListings = jobs.slice(0, 3) //to show only 3 job cards and hide rest
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
        { recentJobListings.map((job) => {
          return <JobListing key={job.id} job={job}/>
          } ) }
        </div>
      </div>
    </section>
  )
}

export default JobListings

/* 
return <JobListing key={job.id} job={job}/>
  React renders all the cards with unique id
  specify key

  need explicit return bcz of {}

  job={job} -> it's a prop -> "Give this JobListing component the current job object."
  which is then received by const JobListing = ({ job }) => { component
  props is actually job data

  key={job.id}
    to disntinguish b/w Job 1, 2, 3
    gives each component a stable identity.
    <JobListing key={1} job={job1} />
    <JobListing key={2} job={job2} />
    <JobListing key={3} job={job3} />
    key isn't passed to JobListing as a normal prop
*/