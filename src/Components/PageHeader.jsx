import React from 'react'

const PageHeader = ({ title, path }) => {
    return (
        <div className='bg-amber-600 py-24 mt-3 rounded flex items-center justify-center'>
            <div>
                <h2 className='text-white font-extrabold font-serif text-4xl mb-1 text-center'>{title}</h2>
                <p className='text-bold text-center text-white'><a href="/">Home</a> / {path}</p>
            </div>
        </div>
    )
}

export default PageHeader
