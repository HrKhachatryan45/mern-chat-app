import React from 'react';
import useConversation from "../../zustand/useConversation";
import {useSocketContext} from "../../context/socketContext";

function Conversation({conversation,emoji,lastIdx}) {
    const {selectedConversation,setSelectedConversation}=useConversation()
    const isSelected = selectedConversation?._id === conversation._id
    const {onlineUsers}=useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)
    return (
        <div onClick={()=>setSelectedConversation(conversation)}>
            <div className={`flex h-10 lg:h-16 md:h-16 sm:h-16 p-0 rounded-md hover:bg-customHover ${isSelected ? 'bg-customHover' : ''} pr-2 cursor-pointer  items-center justify-between`}>
                <div className={`w-2/6 flex items-center justify-center `}>
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className='w-6 h-6 lg:w-12 lg:h-12 sm:w-12 sm:h-12 md:w-12 md:h-12  rounded-full'>
                        <img
                            src={conversation.profilePic}
                            alt='user avatar'
                        />
                    </div>
                </div>
                </div>
                <div className={'w-4/6 flex items-center justify-between'}>
                    <h2 className={'font-bold text-gray-200 m-0 text-[8px] lg:text-[16px] sm:text-[12px]'}>{conversation.fullName}</h2>
                    <p className={'text-[8px] lg:text-[16px] sm:text-[12px]'}>{emoji}</p>
                </div>
            </div>
            {!lastIdx && <div className='divider  my-0 py-0 h-1'/>}
        </div>

    );
}

export default Conversation;