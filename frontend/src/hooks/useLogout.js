import {useAuthContext} from "../context/authContext";
import {useState} from "react";
import toast from "react-hot-toast";

const useLogout = () =>{
    const {setAuthUser}=useAuthContext()
    const [loading,setLoading]=useState(false)

    const logout = async ()=>{
        setLoading(true)
        try{
            const response = await fetch(`/api/auth/logout`,{
                method:"POST",
                headers:{"Content-type":"application/json"},
            });
            const json = await response.json();

            if (json.error){
                throw new Error(json.error)
            }

            if (response.ok){
                toast.success('User successfully logged out');
            }

            localStorage.removeItem("chat-user", JSON.stringify(json));
            setAuthUser(null)
        }catch (error) {
            toast.error(error.message)
        }finally {
            setLoading(false)
        }
    }
    return {logout,loading}
}

export default useLogout;