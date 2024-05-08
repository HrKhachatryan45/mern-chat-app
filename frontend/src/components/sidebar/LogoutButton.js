import {BiLogOut} from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const {loading,logout}=useLogout()
    const handleLogout=async ()=>{
        await logout()
    }
    return (
        <div onClick={handleLogout} className='mt-auto'>
            {!loading?(
                <BiLogOut className='w-6 h-6 text-white cursor-pointer absolute bottom-6' />
            ):(
                <span className={'loading loading-spinner'}></span>
            )}
        </div>
    );
};
export default LogoutButton;