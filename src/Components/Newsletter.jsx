import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const Newsletter = () => {
    return (
        <div>
            <div>
                <h3 className='text-lg font-extrabold font-serif mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText />
                    Email me for Jobs</h3>
                <p className='text-base mb-4 text-black font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium vel? Qui vero repudiandae incidunt similique perferendi!</p>

                <div className='w-full space-y-4'>
                    <input type="email" name="email" id="email" placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
                    <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-600 rounded-sm text-white cursor-pointer font-semibold' />
                </div>

            </div>

            {/* 2nd part */}
            <div className='mt-20'>
                <h3 className='text-lg font-extrabold font-serif mb-2 flex items-center gap-2'>
                    <FaRocket />
                    Get Noticed Faster</h3>
                <p className='text-base mb-4 text-black font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium vel? Qui vero repudiandae incidunt similique perferendi!</p>

                <div className='w-full space-y-4'>
                    <input type="submit" value={"Upload Your Resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-600 rounded-sm text-white cursor-pointer font-semibold' />
                </div>

            </div>


        </div>
    )
}

export default Newsletter
