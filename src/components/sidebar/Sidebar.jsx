import { CircleUser, LayoutDashboard, MessagesSquare, Moon, Settings } from 'lucide-react'
import Avatarr from '../reusablecomponents/Avatarr';

const iconStyle = "p-4 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-200 cursor-pointer transition-colors";

const Sidebar = () => {

    return (
        <div className="flex h-full w-full flex-row overflow-x-auto overflow-y-hidden lg:flex-col lg:overflow-hidden items-center justify-between px-4 lg:px-2 py-2 z-40">
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
                <div className={iconStyle}>
                    <Moon strokeWidth={1.5} />
                </div>
                <div className={iconStyle}>
                    <Avatarr src="https://docs.material-tailwind.com/img/face-2.jpg" fallback="PP" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;