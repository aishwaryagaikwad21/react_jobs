import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'

const SingleJob = () => {
    const { id } = useParams(); //destructure to get the id
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            try{
                const res = await fetch(`/api/jobs/${id}`)
                const data = await res.json()
                setJob(data)
            }
            catch(err){
                console.log('Error Fetching data', err);
            }
            finally{
                setLoading(false)
            }
        }

    fetchJob()
    }, [])

  return loading ? <Spinner /> : (
    <h1>{job.title}</h1>
  )
}

export default SingleJob