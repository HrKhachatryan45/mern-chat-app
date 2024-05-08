import {useState} from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useSendMessage = () =>{

    const [loading,setLoading]=useState(false)
    const {selectedConversation,messages,setMessages}=useConversation()
    const sendMessage = async (message)=>{
        setLoading(true)
        try{
            const response = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({message})
            });
            const json = await response.json();

            if (json.error){
                throw new Error(json.error)
            }

            setMessages([...messages,json])
        }catch (error) {
            toast.error(error.message)
            console.log(error,'errorMain')
        }finally {
            setLoading(false)
        }
    }
    return {sendMessage,loading}
}

export default useSendMessage;

