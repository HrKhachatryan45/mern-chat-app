// import {useEffect, useRef, useState} from "react";
// import toast from "react-hot-toast";
//
// const useGetConversations = () =>{
//     const [loading,setLoading]=useState(false)
//     const [conversations,setConversations]=useState([])
//     useEffect(() => {
//         const getConversations = async ()=>{
//             setLoading(true)
//             try{
//                 const response = await fetch(`/api/users/`);
//                 const json = await response.json();
//
//                 if (json.error){
//                     throw new Error(json.error)
//                 }
//                 setConversations(json)
//
//
//
//             }catch (error) {
//                 toast.error(error.message)
//             }finally {
//                 setLoading(false)
//             }
//         }
//         getConversations()
//     }, []);
//     return {conversations,loading}
// }
//
// export default useGetConversations;
import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";

const UseGetConversations = () =>{
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const response = await fetch(`z/api/users`,{
                    credentials: 'include',
                })


                const json = await response.json();

                if (json.error) {
                    throw new Error(json.error);
                }
                setConversations(json);

            }catch (error) {
                toast.error(error.message)
            }finally {
                setLoading(false)
            }
        }
        getConversations()
    }, []);


    return {loading,conversations};
}

export default UseGetConversations;