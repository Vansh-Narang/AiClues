import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
const UserSkills = () => {
    const location = useLocation();
    const selectedSkills = location.state;
    const [selectedSkiller, setSelectedSkillers] = useState(selectedSkills)
    const handleRemoveSkill = (skill) => {
        setSelectedSkillers(prevSkills => prevSkills.filter(s => s !== skill));
    };
    return (
        <>
            <h1 className='text-center text-4xl font-semibold'>Skills are</h1>
            <div className='flex flex-row gap-2 m-4 items-center justify-center mx-auto'>
                {
                    selectedSkiller.length > 0 ?
                        selectedSkiller.map((d, i) => (
                            <div key={i}
                                onClick={() => handleRemoveSkill(d)}
                                className='cursor-pointer bg-[#605BFF] rounded-lg p-1 text-white flex flex-row items-center max-w-min max-h-min gap-2'
                            >
                                {d.display_name}<RxCross2 />
                                {'  '}
                            </div>
                        )) : <div className='font-normal text-2xl items-center'>
                            No skills to show
                            <br />
                            <Link to="/" className='text-blue-400'>Add skills</Link>
                        </div>
                }
            </div>

        </>

    )
}

export default UserSkills
