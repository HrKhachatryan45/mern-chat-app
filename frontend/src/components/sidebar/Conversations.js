import React from 'react';
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import {getRandomEmoji} from "../../utils/emoji";

function Conversations(props) {
    const {conversations,loading}=useGetConversations()
    return (
        <div className={'  flex flex-col h-5/6 overflow-auto'}>
            {conversations.map((conversation,idx)=>(
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx===conversations.length-1}
                />
            ))}
            {loading?<span className='loading loading-spinner'></span>:null}

        </div>

    );
}

export default Conversations;