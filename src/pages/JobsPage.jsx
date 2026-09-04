import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = ({isHome = false}) => {
  return <>
    <section className="bg-blue-50 px-4 py-10">
      <JobListings />
    </section>
  </>
}

export default JobsPage