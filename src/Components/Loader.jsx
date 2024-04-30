import React from 'react'
import { Grid } from "react-loader-spinner"
const Loader = () => {
    return (
        <div className='flex flex-col text-center justify-center items-center  mx-auto mt-10'>
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />

        </div>
    )
}

export default Loader
