import React from 'react'

const Jobs = ({ result }) => {
    return (
        <>
            <div>
                <h3 className='text-lg text-black font-extrabold mb-2 mx-3'>{result.length} Jobs</h3>

            </div>
            <section>{result}</section>
        </>
    )
}

export default Jobs
