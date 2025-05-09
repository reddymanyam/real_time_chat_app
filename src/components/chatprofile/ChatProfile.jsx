import { CircleUser, Clock, EllipsisVertical, Mail, MapPin, Phone } from 'lucide-react';
import Avatarr from '../reusablecomponents/Avatarr';

const ChatProfile = ({ isChatProfileOpen }) => {
    return (
        <div className={`${isChatProfileOpen ? "flex" : "hidden"} lg:flex flex-col p-4 h-full`}>
            <div className='flex justify-between'>
                <h3 className='text-xl'>My Profile</h3>
                <EllipsisVertical strokeWidth={1} />
            </div>
            <div className='flex flex-col justify-center items-center p-8'>
                <Avatarr className='size-20' src='https://docs.material-tailwind.com/img/face-2.jpg' fallback="PP" />
                <h4 className='text-2xl'>John Doe</h4>
                <div>
                    <p className="text-sm text-gray-700before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:mr-2 before:align-middle">Active</p>
                </div>
            </div>
            <div className='flex flex-1 flex-col bg-gray-200 rounded-lg p-5 gap-3'>

                <div className='flex gap-3 items-center'>
                    <div className="p-2 rounded-full bg-indigo-200">
                        <CircleUser size={20} className="text-indigo-600" />
                    </div>
                    <div className='flex flex-col '>
                        <p className=' text-gray-600 font-medium'>Name:</p>
                        <p className='text-sm text-blue-gray-800'>Tania Andrew</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className="p-2 rounded-full bg-green-100">
                        <Phone size={20} className="text-green-600" />
                    </div>
                    <div className='flex flex-col '>
                        <p className=' text-gray-600 font-medium'>Phone No:</p>
                        <p className='text-sm text-blue-gray-800'>+91 9849576748</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className="p-2 rounded-full bg-blue-200">
                        <Mail size={20} className="text-blue-500" />
                    </div>
                    <div className='flex flex-col '>
                        <p className=' text-gray-600 font-medium'>Email:</p>
                        <p className='text-sm text-blue-gray-800'>tania123@gmail.com</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className="p-2 rounded-full bg-orange-100">
                        <Clock size={20} className="text-orange-800" />
                    </div>
                    <div className='flex flex-col '>
                        <p className=' text-gray-600 font-medium'>Phone No:</p>
                        <p className='text-sm text-blue-gray-800'>+91 9849576748</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <div className="p-2 rounded-full bg-purple-200">
                        <MapPin size={20} className="text-purple-500" />
                    </div>
                    <div className='flex flex-col '>
                        <p className=' text-gray-600 font-medium'>Phone No:</p>
                        <p className='text-sm text-blue-gray-800'>+91 9849576748</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChatProfile;