import React from 'react'
import InputField from '../Components/InputField'

const Location = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg text-amber-600 font-bold mb-2'>Location</h4>

            <div>
                <label className='sidebar-label--container'>
                    <input type="radio" name="text" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>

                <InputField handleChange={handleChange} value="seattle" title="Seattle" name="text" />
                <InputField handleChange={handleChange} value="london" title="London" name="text" />
                <InputField handleChange={handleChange} value="madrid" title="Madrid" name="text" />
                <InputField handleChange={handleChange} value="New York" title="New York" name="text" />
                <InputField handleChange={handleChange} value="San Francisco" title="San Francisco" name="text" />



            </div>


        </div>
    )
}

export default Location
