import React, {useState} from 'react';
import {Link} from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login(props) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {login,loading}=useLogin()

    const handleSubmit=async (ev)=>{
        ev.preventDefault()
        await login(username,password);
    }

    return (
        <div className='p-6 flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div
                className={'p-5 w-full  rounded-xl backdrop-filter backdrop-blur-2xl   flex items-center justify-center flex-col'}>
                <h1 className='text-lg lg:text-2xl md:text-xl sm:text-lg  font-semibold text-center text-gray-300 mb-3'>
                    Login
                    <span className='text-blue-300'> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit} className={'flex flex-col items-center justify-center w-full'}>
                    <label className={'w-full label p-2 flex flex-col justify-start items-start'}>
                        <span className={'mb-1 text-gray-500'}>Username</span>
                        <input
                            type={'text'}
                            placeholder={'Username'}
                            className='w-full input border-transparent   focus:outline-none focus:ring focus:ring-gray-400 h-10 bg-slate-500 text-sm lg:text-lg md:text-md sm:text-md'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label className={' w-full label p-2 flex flex-col justify-start items-start'}>
                        <span className={'mb-1 text-gray-500'}>Password</span>
                        <input
                            type={'password'}
                            placeholder={'Password'}
                            className='w-full input  border-transparent   focus:outline-none focus:ring focus:ring-gray-400   h-10 bg-slate-500 text-sm lg:text-lg md:text-md sm:text-md'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <Link to='/signup'
                          className='text-sm text-gray-500  hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>
                    <button  style={{ height: '35px' }} className={'btn btn-neutral btn-xs sm:btn-xs md:btn-sm lg:btn-md btn-block text-white text-md mt-3'}>
                        {loading?<span className={'loading loading-spinner'}></span>:'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;