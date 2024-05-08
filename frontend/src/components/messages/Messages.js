import React, {useEffect, useRef} from 'react';
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

function Messages(props) {
    const {messages,loading}=useGetMessages()
    useListenMessages()

    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            lastMessageRef.current?.scrollIntoView({behavior:'smooth'})
        },100)
        console.log('messages',messages)
    }, [messages]);

    return (
        <div className={'px-4 flex-1 overflow-auto'}>
            {!loading && messages.length === 0 && (
                <p className=' de text-center'>Send a message to start conversation</p>
            )}

            {!loading && messages.length > 0 && messages.map((message)=>(
                    <div  key={message._id} ref={lastMessageRef}>
                          <Message  message={message} />
                    </div>
                ))}
        </div>
    );
}

export default Messages;