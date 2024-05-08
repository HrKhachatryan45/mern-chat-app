import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Gender from "./Gender";
import useSignup from "../../hooks/useSignup";

function Signup(props) {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    const {loading,signup}=useSignup()

    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs,gender})
    }

    const handleSubmit=async (ev)=>{
        ev.preventDefault()
        await signup(inputs)
    }

    return (
        <div className='p-6 flex flex-col items-center justify-center min-w-full mx-auto'>
            <div className={'p-5 med  rounded-xl backdrop-filter backdrop-blur-2xl   flex items-center justify-center flex-col'}>
                <h1 className='text-lg lg:text-2xl md:text-xl sm:text-lg  font-semibold text-center text-gray-300 mb-3'>
                    Signup
                    <span className='text-blue-300'> ChatApp</span>
                </h1>
                <form className={'flex flex-col items-center justify-center w-full'} onSubmit={handleSubmit}>
                    <label className={'w-full label p-2 flex flex-col justify-start items-start'}>
                        <span className={'mb-1 text-gray-500'}>Full Name</span>
                        <input
                            onChange={(ev)=>setInputs({...inputs,fullName:ev.target.value})}
                            value={inputs.fullName}
                            type={'text'}
                            placeholder={'Full Name'}
                            className='w-full input border-transparent   focus:outline-none focus:ring focus:ring-gray-400 h-10 bg-slate-500 text-sm lg:text-lg md:text-md sm:text-md'
                        />
                    </label>
                    <label className={'w-full label p-2 flex flex-col justify-start items-start'}>
                        <span className={'mb-1 text-gray-500'}>Username</span>
                        <input
                            onChange={(ev)=>setInputs({...inputs,username:ev.target.value})}
                            value={inputs.username}
                            type={'text'}
                            placeholder={'Username'}
                            className='w-full input border-transparent   focus:outline-none focus:ring focus:ring-gray-400 h-10 bg-slate-500 text-sm lg:text-lg md:text-md sm:text-md'
                        />
                    </label>
                    <label className={' w-full label p-2 flex flex-col justify-start items-start'}>
                        <span className={'mb-1 text-gray-500'}>Password</span>
                        <input
                            onChange={(ev)=>setInputs({...inputs,password:ev.target.value})}
                            value={inputs.password}
                            type={'password'}
                            placeholder={'Password'}
                            className='w-full input border-transparent   focus:outline-none focus:ring focus:ring-gray-400 h-10 bg-slate-500 text-sm lg:text-lg md:text-md sm:text-md'
                        />
                    </label>
                    <label className={' w-full label p-2 flex flex-col justify-start items-start'}>
                        <span className={'mb-1 text-gray-500'}>Confirm Password</span>
                        <input
                            onChange={(ev)=>setInputs({...inputs,confirmPassword:ev.target.value})}
                            value={inputs.confirmPassword}
                            type={'password'}
                            placeholder={'Confirm Password'}
                            className='w-full input border-transparent   focus:outline-none focus:ring focus:ring-gray-400 h-10 bg-slate-500 text-sm lg:text-lg md:text-md sm:text-md'
                        />
                    </label>
                    <Gender onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to='/login'
                          className='text-sm text-gray-500  hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Have an account already?
                    </Link>
                    <button style={{height: '35px'}}
                            className={'btn btn-neutral btn-xs sm:btn-xs md:btn-sm lg:btn-md btn-block text-white text-md mt-3'}>
                        {loading?<span className={'loading loading-spinner'}></span>: 'Signup'}
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Signup;