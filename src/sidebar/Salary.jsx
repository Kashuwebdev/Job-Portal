import React from 'react'
import Button from './Button'
import InputField from '../Components/InputField'

const Salary = ({ handleChange, handleClick }) => {
    return (
        <div>
            <h4 className='text-lg font-serif text-amber-600 font-extrabold mb-2'>Salary</h4>
            <div className='mb-4'>
                <Button onClickHandler={handleClick} value="" title="Hourly" />
                <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
                <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
            </div>

            <div>
                <label className='sidebar-label--container'>
                    <input type="radio" name="text" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>

                <InputField handleChange={handleChange} value={30} title="< 30000k" name="text2" />
                <InputField handleChange={handleChange} value={50} title="< 50000k" name="text2" />
                <InputField handleChange={handleChange} value={80} title="< 80000k" name="text2" />
                <InputField handleChange={handleChange} value={100} title="< 1000000k" name="text2" />

            </div>
        </div>
    )
}

export default Salary
