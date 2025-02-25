import { useEffect, useState } from 'react'
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../Components/Newsletter';
// import JobPostingData from '../sidebar/JobPostingData';


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:3000/myjobs/kashish94178@gmail.com").then(res => res.json()).then(data => {
            setJobs(data);
            setIsLoading(false);
        })
    }, [])
    console.log(jobs)

    // handle input change
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)

    }

    // filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    // console.log(filteredItems)

    // ------------Radio filtering ---------
    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    // --------button based filtering -------
    const handleClick = (event) => {
        setSelectedCategory(event.target.value)
    }

    // calculate the index range
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return (startIndex, endIndex)
    }

    // function for the next page
    const nextPage = () => {
        if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    // function for the previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    //  main function
    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs;

        // filtering input items
        if (query) {
            filteredJobs = filteredItems;
        }

        // category filtering
        if (selected) {
            filteredJobs = filteredJobs.filter(
                ({
                    jobLocation,
                    maxPrice,
                    experienceLevel,
                    salaryType,
                    employmentType,
                    postingDate,
                }) =>

                    jobLocation.toLowerCase() === selected.toLowerCase() ||
                    parseInt(maxPrice) <= parseInt(selected) ||
                    postingDate >= selected ||
                    salaryType.toLowerCase() === selected.toLowerCase() ||
                    experienceLevel.toLowerCase() === selected.toLowerCase() ||

                    employmentType.toLowerCase() === selected.toLowerCase()



            );
            console.log(filteredJobs);
        }

        // slice the data based on current page
        const { startIndex, endIndex } = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex)

        return filteredJobs.map((data, i) => <Card key={i} data={data} />)
    }

    const result = filteredData(jobs, selectedCategory, query);

    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange} />

            {/* main content */}
            <div className='bg-amber-500 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

                {/* left side */}
                <div className='bg-zinc-100 text-black font-semibold p-4 rounded'>
                    <Sidebar handleChange={handleChange} handleClick={handleClick} />
                </div>

                {/* job cards */}
                <div className='col-span-2 bg-zinc-100 text-amber-600 rounded-sm'>
                    {
                        isLoading ? (<p className='font-medium'>Loading.....</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
                            <h3 className='text-lg text-black font-bold mb-2 mx-2'>{result.length} Jobs</h3>
                            <p className='font-semibold mx-3'>No data found ! </p>
                        </>
                    }

                    {/* pagination here */}
                    {
                        result.length > 0 ? (
                            <div className='flex justify-center text-black mb-4 space-x-8'>
                                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length) / itemsPerPage}</span>
                                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>

                            </div>
                        ) : ""
                    }
                </div>

                {/* right side */}
                <div className='bg-zinc-100 text-amber-600 p-4 rounded'><Newsletter /></div>

            </div>
        </div>
    )
}

export default Home
