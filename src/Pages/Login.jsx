import React, { useState, useEffect } from 'react'
import axios from "axios"
import Loader from '../Components/Loader';
import { Navigate, useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post("https://staging-api.wonderfful.com/v1/rest-auth/login", {
                email, password
            })
            console.log(res)
            if (res.statusText === "OK") {
                // toast.success("Successfully logged in")
                console.log("Res", res.data.data.access_token)
                const token = res.data.data.access_token;
                //   console.log(token)
                localStorage.setItem('token', token);
                dispatch({ type: 'LOGIN', payload: token });
                navigate("/")
            }
            // else {
            //     toast.error("Try again")
            // }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alert("Couldn't login")
            //  toast.error("Error while login")
            console.log(error.message);
        }
    }
    return (
        <div className="h-screen text-center font-normal">
            {
                loading ? <div className='flex text-center'>
                    <Loader />
                </div> :
                    <div className='w-11/12 mx-auto '>
                        <h1 className='text-4xl font-bold'>Login Form</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center border-2 rounded-lg gap-10 border-gray-900 m-20 p-20 w-96 h-96 justify-center mx-auto bg-blue-200'>
                            <input type="email" value={email} placeholder="Enter the email" onChange={(e) => setEmail(e.target.value)} className='border p-2 rounded-md' />
                            < input type="password" value={password} placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} className='border p-2 rounded-md' />
                            <button type='submit' className='border-2 rounded-md border-black bg-blue-400 p-4'>Login Now</button>
                        </form >
                    </div >
            } </div >
    )
}

export default Login