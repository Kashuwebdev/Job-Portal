import React from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi'

const Card = ({ data }) => {
    const { _id, companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description } = data;
    return (
        <section className='card flex gap-4'>
            <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
                <img src={companyLogo} alt="" className='w-50 h-20' />
                <div>
                    <h4 className='text-black font-serif font-extrabold  mb-1'>{companyName}</h4>
                    <h3 className='text-lg font-bold mb-2'>{jobTitle}</h3>
                    <div className='flex flex-wrap gap-2 mb-2 text-base'>
                        <span className='flex items-center gap-2 font-semibold'><FiMapPin />{jobLocation}</span>
                        <span className='flex items-center gap-2 font-semibold'><FiClock />{employmentType}</span>
                        <span className='flex items-center gap-2 font-semibold'><FiDollarSign />{minPrice}-{maxPrice}</span>
                        <span className='flex items-center gap-2 font-semibold'><FiCalendar />{postingDate}</span>

                    </div>
                    <p className='text-base text-black'>{description}</p>
                </div>
            </Link>


        </section>
    )
}

export default Card
