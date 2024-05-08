import {useAuthContext} from "../context/authContext";
import {useState} from "react";
import toast from "react-hot-toast";

const useLogin = () =>{
    const {setAuthUser}=useAuthContext()
    const [loading,setLoading]=useState(false)
    const login = async (username,password)=>{
        setLoading(true)
        try{
            const success =  handleErrors(username,password)
            if (!success) return;
            const response = await fetch(`api/auth/login`,{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({username,password}),
                credentials: 'include',
            });
            const json = await response.json();

            if (json.error){
                throw new Error(json.error)
            }

            if (response.ok){
                toast.success('User successfully logged in');
            }

            localStorage.setItem("chat-user", JSON.stringify(json));
            setAuthUser(json)
            console.log(json,'json')
        }catch (error) {
            toast.error(error.message)
            console.log(error,'errorMain')
        }finally {
            setLoading(false)
        }
    }
    return {login,loading}
}

export default useLogin;

const handleErrors=(username,password)=>{
    if (!username || !password){
        toast.error('All fields must be filled in')
        return false;
    }
    return true;
}
