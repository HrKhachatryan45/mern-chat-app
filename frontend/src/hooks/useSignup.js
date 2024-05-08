import {useAuthContext} from "../context/authContext";
import {useState} from "react";
import toast from "react-hot-toast";

const useSignup = () =>{
    const {setAuthUser}=useAuthContext()
    const [loading,setLoading]=useState(false)
    const signup = async ({fullName,username,password,confirmPassword,gender})=>{
        setLoading(true)
        try{
            const success =  handleErrors(fullName,username,password,confirmPassword,gender)
            if (!success) return;
            const response = await fetch(`/api/auth/signup`,{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            });
            const json = await response.json();

            if (json.error){
                throw new Error(json.error)
            }

            if (response.ok){
                toast.success('User successfully signed up');
            }

            localStorage.setItem("chat-user", JSON.stringify(json));
            setAuthUser(json)
            console.log(json,'json')
        }catch (error) {
            toast.error(error.message)
        }finally {
            setLoading(false)
        }
    }
    return {signup,loading}
}

export default useSignup;

const handleErrors=(fullName,username,password,confirmPassword,gender)=>{
    if (!username || !password || !fullName || !confirmPassword || !gender){
        toast.error('All fields must be filled in')
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false;
    }

    if (password.length < 6){
        toast.error('Password must be at least 6 characters');
        return false
    }
    return true;
}
