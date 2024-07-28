import { useState } from "react"
import { useForm } from "react-hook-form"
import CreateableSelect from "react-select/creatable"

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data);
        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json()).then((result) => {
                console.log(result);
                if (result.acknowledged === true) {
                    alert("Job Posted Successfully!!!")
                }
                reset()
            });
    };

    const options = [
        { value: "C++", label: "C++" },
        { value: "JavaScript", label: "JavaScript" },
        { value: "HTML", label: "HTML" },
        { value: "Python", label: "Python" },
        { value: "CSS", label: "CSS" },
        { value: "React", label: "React" },
        { value: "Next JS", label: "Next JS" },
        { value: "Node", label: "Node" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Figma", label: "Figma" },
        { value: "Redux", label: "Redux" },
        { value: "Bootstrap", label: "Bootstrap" },
        { value: "Graphic Designer", label: "Graphic Designer" },

        { value: "Adobe Photoshop", label: "Adobe Photoshop" },


    ]

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 text-white'>
            {/* form */}

            <div className='bg-amber-500 py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* 1st row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Job Title</label>
                            <input type="text" placeholder={"Web Developer"}
                                {...register("jobTitle")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>

                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Company Name</label>
                            <input type="text" placeholder="Ex : Microsoft"
                                {...register("companyName")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>

                    </div>

                    {/*2nd row  */}

                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Minimum Salary</label>
                            <input type="text" placeholder="$20k"
                                {...register("minPrice")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>

                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Maximum Salary</label>
                            <input type="text" placeholder="$120k"
                                {...register("maxPrice")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>

                    </div>

                    {/* 3rd row */}

                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Salary Type</label>
                            <select {...register("salaryType")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6">
                                <option value="">Choose Your Salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Job Location</label>
                            <input type="text" placeholder="Ex : Canada"
                                {...register("jobLocation")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>

                    </div>

                    {/* 4th row */}

                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Job Posting Date</label>
                            <input type="date" placeholder="Ex : 2024-06-25"
                                {...register("postingDate")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>


                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Experience Level</label>
                            <select {...register("experienceLevel")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6">
                                <option value="">Choose Your Experience</option>
                                <option value="No Experience">No Experience</option>
                                <option value="Intership">Intership</option>
                                <option value="Work Remotely">Work Remotely</option>
                            </select>
                        </div>

                    </div>

                    {/* 5th row */}

                    <div>
                        <label className="block mb-2 text-lg font-serif font-extrabold">Required Skill Sets :</label>

                        <CreateableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            className="text-black font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />
                    </div>

                    {/* 6th row */}

                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Company Logo</label>
                            <input type="url" placeholder="Paste Your Company Logo URL: https://weshare.com/img1"
                                {...register("companyLogo")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>


                        <div className="lg:w-1/2 w-full my-5">
                            <label className="block mb-2 text-lg font-serif font-extrabold">Employment Type</label>
                            <select {...register("employmentType")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6">
                                <option value="">Choose Your Experience</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>

                    </div>

                    {/* 7th row */}

                    <div className="w-full">
                        <label className="block mb-2 text-lg font-serif font-extrabold">Job Description</label>
                        <textarea className="w-full py-1.5 pl-3 text-black focus:outline-none" rows={10}

                            defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} {...register("description")} />

                    </div>

                    {/* last row */}

                    <div className="w-full">
                        <label className="block mb-2 text-lg font-serif font-extrabold">Job Posted By</label>
                        <input type="email" placeholder="Your Email"
                            {...register("postedBy")} className="text-gray-900 font-medium block w-full flex-1 border-1 py-1.5 pl-3 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />


                    </div>

                    <input type="submit" className="bg-blue-800 block mt-12 text-white font-bold font-serif px-8 py-2 rounded-sm cursor-pointer" />
                </form>
            </div>
        </div>
    )
};

export default CreateJob;
