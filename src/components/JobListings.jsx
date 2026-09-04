import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({isHome = false}) => {
   // console.log(jobs) //array of jobs

   //const jobListings = isHome ? jobs.slice(0,3) : jobs;
   const [jobs, setJobs] = useState([])
   const [loading, setLoading] = useState(true) //to show loading sign while fetching and when json data is loaded set it to false
  
    useEffect(() => { //cannot use async here
      const fetchJobs = async () => {
        const apiUrl = isHome ? '/api/jobs?_page=1&_per_page=3' : '/api/jobs'
        try{
          const res = await fetch(apiUrl)
          const data = await res.json()
          setJobs(isHome ? data.data : data)
        }
      catch(err){
        console.log('Error Fetching data', err);
      }
      finally{
        setLoading(false)
      };
    }
    
  fetchJobs()

  }, []) // [] This is called the dependency array. 

   return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs': 'Browse Jobs'}
        </h2>
          {loading ? (<Spinner loading={loading} />) : (
            <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              { jobs.map((job) => {
                return <JobListing key={job.id} job={job}/>
                } 
              ) }
              </div>
            </>
          )}

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