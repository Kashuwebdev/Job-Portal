import React from 'react'
import InputField from '../Components/InputField'

const WorkExperience = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg text-amber-600 font-bold mb-2'>Work Experience</h4>

            <div>
                <label className='sidebar-label--container'>
                    <input type="radio" name="text" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>Expertise
                </label>

                <InputField handleChange={handleChange} value="Intership" title="Intership" name="text" />
                <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="text" />
                <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="text" />



            </div>


        </div>
    )
}

export default WorkExperience
