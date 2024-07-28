import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../Components/PageHeader';


const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))

    }, [])

    const handleApply = async () => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
        });
        if (url) {
            Swal.fire(`Entered URL: ${url}`);
        }
    }
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <PageHeader title={"Single Job Page"} path={"single job"} />
            <h2 className='font-extrabold text-2xl'>JobDetails: {id}</h2>
            <h1 className='font-bold text-lg'>{job.jobTitle}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quidem vitae odit dolore distinctio alias hic iste nulla magnam natus voluptatem laboriosam itaque consequuntur, ab fuga rem in sapiente, accusantium nostrum delectus nemo! Debitis, velit impedit. Rem quos provident saepe, reprehenderit deleniti, cupiditate in architecto nihil corrupti dignissimos dolore? Praesentium?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero consequuntur quia perferendis laudantium, fuga voluptatibus officiis sapiente natus pariatur. Sapiente tempore obcaecati ullam maiores deserunt expedita minima eligendi in!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, impedit officiis id debitis dolor soluta, fuga molestiae, corporis cumque quod quae amet! Amet fuga ut ea cumque. Eveniet, voluptate, maiores odio sint minus iste sunt at, ipsam perspiciatis architecto corrupti!</p>
            <button className='bg-blue-600 px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
        </div>
    )
}

export default JobDetails
