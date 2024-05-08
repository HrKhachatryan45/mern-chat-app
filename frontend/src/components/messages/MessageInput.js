import React, {useState} from 'react';
import {BsSend} from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput(props) {
    const [messageToSend,setMessageToSend]=useState('');
    const {loading,sendMessage}=useSendMessage()
    const handleSubmit=async (ev)=>{
        ev.preventDefault()
        if (!messageToSend) return
        await sendMessage(messageToSend)
        setMessageToSend('')
    }
    return (
        <form onSubmit={handleSubmit} className={'px-2 pb-5'}>
            <div className='w-full relative'>
                <input
                    type={'text'}
                    placeholder={'Send Message...'}
                    className='as border text-sm rounded-lg block w-full p-2.5  bg-white  text-gray-500 focus:outline-none  '
                    value={messageToSend}
                    onChange={(e) => setMessageToSend(e.target.value)}
                />
                <button className={'absolute right-3 bottom-3'}>
                    {loading?<span className={'loading loading-spinner'}></span>:<BsSend />}
                </button>
            </div>
        </form>
);
}

export default MessageInput;