import { CircleUser, LayoutDashboard, MessagesSquare, Moon, Settings, Sun } from 'lucide-react'
import Avatarr from '../reusablecomponents/Avatarr';
import { useState } from 'react';

const iconStyle = "p-4 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-200 cursor-pointer transition-colors";

const Sidebar = (
    // { isChatProfileOpen }
) => {

    const [lightMode, setLightMode] = useState(true);

    return (
        <div className="flex h-full w-full flex-row overflow-x-auto overflow-y-hidden lg:flex-col lg:justify-between lg:overflow-hidden  px-4 lg:px-2 py-2 z-40">
            <div className="flex flex-row lg:flex-col gap-2">
                <div className={iconStyle}>
                    <CircleUser strokeWidth={1.5} />
                </div>
                <div className={iconStyle}>
                    <LayoutDashboard strokeWidth={1.5} />
                </div>
                <div className={iconStyle}>
                    <MessagesSquare strokeWidth={1.5} />
                </div>
            </div>
            <div className="flex flex-row lg:flex-col gap-2">
                <div className={iconStyle}>
                    <Settings strokeWidth={1.5} />
                </div>
                {lightMode ? (
                    <div className={iconStyle} onClick={() => setLightMode(!lightMode)}>
                        <Sun strokeWidth={1.5} />
                    </div>
                ) : (
                    <div className={iconStyle} onClick={() => setLightMode(!lightMode)}>
                        <Moon strokeWidth={1.5} />
                    </div>
                )}
                <div className={iconStyle}>
                    <Avatarr src="https://docs.material-tailwind.com/img/face-2.jpg" fallback="PP" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;