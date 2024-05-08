import React, {useEffect} from 'react';
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {TiMessages} from "react-icons/ti";
import {useAuthContext} from "../../context/authContext";
import useConversation from "../../zustand/useConversation";

function MessageContainer(props) {
    const {selectedConversation,setSelectedConversation}=useConversation()

    useEffect(() => {
        // cleanup function (unmounts)
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);
    return (
        <div className='w-7/12 flex flex-col'>
            {!selectedConversation?(
                <NoChatSelected/>
            ):(
                <>
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span> <span
                        className='text-gray-900 font-bold text-xs lg:text-xl md:text-xl sm:text-lg'>{selectedConversation.fullName}</span>
                    </div>

                    <Messages/>
                    <MessageInput/>
                </>
            )}
        </div>
    );
}

export default MessageContainer;
const NoChatSelected = () => {
    const {authUser} = useAuthContext()

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div
                className='px-4 text-center sm: text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p className={'text-[8px] lg:text-2xl md:text-2xl sm:text-lg mt-0'}>Welcome 👋 {authUser.fullName} </p>
                <p className={' fy text-[8px] lg:text-2xl md:text-2xl sm:text-lg mt-0'}>Select a chat to start messaging</p>
                <TiMessages className='text-3x1 lg:text-3xl md:text-3xl sm:text-3xl text-center'/>
            </div>
        </div>
    )
}