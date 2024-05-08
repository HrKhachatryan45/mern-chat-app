import React from 'react';
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";

function Sidebar(props) {
    return (
        <div className='border-r border-customPurple w-5/12 p-2 lg:p-4 md:p-4 sm:p-4 pb-12 relative'>
            <SearchInput/>
            <div className='divider divide-customPurple px-3'></div>
            <Conversations/>
            <LogoutButton/>
        </div>
    );
}

export default Sidebar;