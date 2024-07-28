import React from 'react'
import InputField from '../Components/InputField'

const EmploymentType = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg text-amber-600 font-bold mb-2'>Type of Employment</h4>

            <div>
                <label className='sidebar-label--container'>
                    <input type="radio" name="text" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>Any
                </label>

                <InputField handleChange={handleChange} value="temporary" title="Temporary" name="text" />
                <InputField handleChange={handleChange} value="part-time" title="Part-time" name="text" />
                <InputField handleChange={handleChange} value="full-time" title="Full-time" name="text" />



            </div>


        </div>
    )
}

export default EmploymentType
