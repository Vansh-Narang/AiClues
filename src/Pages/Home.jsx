import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    // const token = useSelector((state) => state.token);
    // const handleViewUserSkills = () => {
    //     redirect("/user-routes")
    // };
    const handleSkillSelect = (skill) => {
        console.log("Skill", skill)
        if (!selectedSkills.includes(skill)) {
            setSelectedSkills(prevClickedSkills => [...prevClickedSkills, skill]);
        } else {
            setSelectedSkills(prevClickedSkills => prevClickedSkills.filter(f => f !== skill));
        }
        // setSelectedSkills(prevSkills => [...prevSkills, skill]); // Add selected skill to the array
    };

    async function showSkills() {
        try {
            const res = await axios.get("https://staging-api.wonderfful.com/v1/tables/all-skills")
            // console.log(res)
            setData(res.data.data.skills)
            setFilter(res.data.data.skills)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        showSkills()
    }, [])
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [data, setData] = useState([])
    const [filterdata, setFilter] = useState([])
    const handleFilter = (value) => {
        const res = filterdata.filter(f => f.slug.toLowerCase().includes(value));
        setData(res); // Update filtered data in the state
        console.log(res)
        if (value === "") {
            setData([])
        }
    }
    return (
        <div className="">
            <h1 className='text-4xl text-center font-normal'>Add your skills here</h1>
            {/* <p>Token: {token} is</p> */}
            <div className='flex flex-col items-center mt-10'>
                <div className='w-60'>
                    <input type="search" placeholder="Enter the skills" className="border rounded-md p-2 cursor-auto" onChange={(e) => handleFilter(e.target.value)}></input>
                </div>
                <div className='text-black border rounded-md p-2 w-40 items-start mr-20'>
                    {
                        data.length > 0 ? (
                            data.map((d, i) => (
                                <div key={i} className={`text-black cursor-pointer ${selectedSkills.includes(d) ? 'text-blue-500' : ''}`} onClick={() => handleSkillSelect(d)}>
                                    {d.display_name}
                                    <hr className='p-2' />
                                </div>
                            ))
                        ) : (
                            <div>No skills found.</div>
                        )
                    }
                </div>
                <Link to={"user-skills"} state={selectedSkills} className='bg-blue-400 p-2 mr-28 mt-10'>View Skills</Link>
            </div>
        </div >
    )
}

export default Home
