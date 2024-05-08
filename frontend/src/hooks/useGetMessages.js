import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation.js";

const useGetMessages = () =>{
    const [loading,setLoading]=useState(false)
    const {messages,setMessages,selectedConversation}=useConversation()
    console.log(selectedConversation,'selectedConversation')
    useEffect(() => {
        const getMessages = async ()=>{
            setLoading(true)
            try{
                const response = await fetch(`/api/messages/${selectedConversation._id}`);

                const json = await response.json();

                if (json.error){
                    throw new Error(json.error)
                }
                setMessages(json)

            }catch (error) {
                toast.error(error.message)
            }finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) getMessages()
    }, [selectedConversation._id]);
    return {messages,loading}
}

export default useGetMessages;

