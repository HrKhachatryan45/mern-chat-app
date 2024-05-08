import React from 'react';
import {useAuthContext} from "../../context/authContext";
import useConversation from "../../zustand/useConversation";
import {extractTime} from "../../utils/extractTime";
import useListenMessages from "../../hooks/useListenMessages";

function Message({message}) {
    const {authUser}=useAuthContext()
    console.log(message)
    const {selectedConversation}=useConversation()
    const fromMe =authUser._id===message.senderId
    const profilePic = fromMe?authUser.profilePic:selectedConversation?.profilePic;
    const bubbleBgColor=fromMe?'bg-customPurple':''
    const chatClassname=fromMe?'chat-end':'chat-start'
    const formattedTime = extractTime(message.createdAt)
    const shakeClass = message.shouldShake?'shake':''
    return (
        <div className={`chat ${chatClassname}`}>
            <div className={'chat-image avatar'}>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt="Avatar"/>
                </div>
            </div>
            <div className={`chat-bubble  text-[10px] lg:text-[16px] md:text-[16px] sm:text-[13px] mx-0 my-0 text-white ${bubbleBgColor}  ${shakeClass}  pb-2`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
        </div>
    );
}

export default Message;