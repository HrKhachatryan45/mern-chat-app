import React, {useState} from 'react';
import {IoSearchSharp} from "react-icons/io5";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

function SearchInput(props) {
    const [search, setSearch] = useState('');
    let {conversations} = useGetConversations()
    const {setSelectedConversation}=useConversation()
    const handleSubmit = (ev) =>{
        ev.preventDefault();
        if (!search) return;

        if (search.length <3){
            return toast.error('Search term must be at least 3 characters');
        }
      const  conversation= conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation){
            setSelectedConversation(conversation)
            setSearch('')
        }else  toast.error('No such user found')


    }


    return (
        <div className={''}>
            <form onSubmit={handleSubmit} className={'flex items-center justify-between '}>
                <input
                    type={'text'}
                    placeholder={'Search...'}
                    className={'as input w-8/12 h-8 lg:h-12 md:h-12 sm:h-10 input-bordered bg-slate-100 rounded-full focus:outline-none'}
                    value={search}
                    onChange={(ev) => setSearch(ev.target.value)}
                />
                <button
                    className={'change btn text-white hover:bg-violet-400  rounded-full bg-customPurple border-none'}>
                    <IoSearchSharp className='w-5 h-5 mx-0 outline-none'/>
                </button>
                <button
                    className={'change2  text-white hover:bg-violet-400  rounded-full bg-customPurple border-none'}>
                    <IoSearchSharp className='w-5 h-5 mx-0 outline-none'/>
                </button>
            </form>
        </div>
    );
}

export default SearchInput;