import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import ChatList from '../chatlist/ChatList'
import ChatProfile from '../chatprofile/ChatProfile'
import Chat from '../chat/Chat'

const MainComponent = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isChatProfileOpen, setIsChatProfileOpen] = useState(false);
    const [isChatListOpen, setIsChatListOpen] = useState(true);

    return (
        <div className='flex flex-col-reverse lg:flex-row h-screen w-full overflow-hidden'>
            <div className='w-full h-[70px] lg:w-[80px] lg:h-full bg-gray-100 border-t lg:border-t-0 lg:border-r'>
                <Sidebar />
            </div>
            <div className='lg:block w-full lg:w-[300px] bg-gray-100 border-r'>
                <ChatList
                    isChatListOpen={isChatListOpen}
                    setIsChatOpen={setIsChatOpen}
                    setIsChatProfileOpen={setIsChatProfileOpen}
                    setIsChatListOpen={setIsChatListOpen}
                />
            </div>
            <div className='flex-1 bg-gray-50 overflow-y-auto'>
                <Chat
                    isChatOpen={isChatOpen}
                />
            </div>
            <div className='lg:block w-full lg:w-[280px] bg-gray-100 border-l overflow-y-auto'>
                <ChatProfile
                    isChatProfileOpen={isChatProfileOpen}
                />
            </div>
        </div>
    )
}

export default MainComponent