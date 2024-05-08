import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home(props) {
    return (
        <div style={{width:'60%'}} className='med  shadow-sm shadow-violet-200  flex h-[350px] sm:h-[450px] lg:h-[550px] md:h-[550px] rounded-lg overflow-hidden custom bg-clip-padding '>
            <Sidebar/>
            <MessageContainer/>
        </div>
    );
}

export default Home;