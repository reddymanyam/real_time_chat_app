import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import Avatarr from '../reusablecomponents/Avatarr';

const ChatList = ({ isChatListOpen, setIsChatListOpen, setIsChatOpen, setIsChatProfileOpen }) => {

  const chatlist = [
    {
      id: 1,
      name: "Patrick Hendricks",
      message: "Hey there, how's it going?",
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      online: true
    },
    {
      id: 2,
      name: "Emma Wilson",
      message: "Did you finish the project?",
      avatar: "https://docs.material-tailwind.com/img/face-3.jpg",
      online: true
    },
    {
      id: 3,
      name: "Michael Johnson",
      message: "Let's meet tomorrow at 3 PM",
      avatar: "https://docs.material-tailwind.com/img/face-4.jpg",
      online: false
    },
    {
      id: 4,
      name: "Sarah Parker",
      message: "Thanks for your help!",
      avatar: "https://docs.material-tailwind.com/img/face-5.jpg",
      online: true
    },
    {
      id: 5,
      name: "Robert Davis",
      message: "Can you send me the files?",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      online: false
    },
    {
      id: 6,
      name: "Lisa Thompson",
      message: "Great work on the presentation",
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      online: true
    },
    {
      id: 7,
      name: "David Miller",
      message: "Let's catch up soon",
      avatar: "https://docs.material-tailwind.com/img/face-3.jpg",
      online: false
    },
    {
      id: 8,
      name: "Lisa Thompson",
      message: "Great work on the presentation",
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      online: true
    },
    {
      id: 9,
      name: "David Miller",
      message: "Let's catch up soon",
      avatar: "https://docs.material-tailwind.com/img/face-3.jpg",
      online: false
    }
  ];

  const handleChatOpen = () => {
    setIsChatOpen(true);
    setIsChatListOpen(false);
    setIsChatProfileOpen(false);
  }

  const handleChatProfileOpen = () => {
    setIsChatProfileOpen(true);
    setIsChatOpen(false);
    setIsChatListOpen(false);
  }

  return (
    <div className={`${isChatListOpen ? 'block' : 'hidden'} lg:flex w-full h-[calc(100vh-70px)] lg:h-full flex-col gap-2 py-2 overflow-y-auto`}>
      <div className="flex flex-col gap-2 shadow-xs py-2">
        <h3 className='flex items-start text-xl font-medium px-4'>Chats</h3>
        <div className='flex relative px-3 w-full '>
          <Input type="text" placeholder="Search Here..." className="pr-10" />
          <Search strokeWidth={1.25} className='absolute right-5 top-1' />
        </div>
      </div>
      <div className='overflow-y-auto flex-1'>
        <div className='px-4'>
          {
            chatlist.map((user) => (
              <div className='flex gap-4 justify-items-center items-center border-b py-2 px-1 rounded-sm cursor-pointer hover:bg-gray-300 ' key={user.id}>
                <Avatarr onClick={handleChatProfileOpen} src={user.avatar} fallback="CN" />
                <div className=' cursor-pointer' onClick={handleChatOpen}>
                  <h4 className="text-lg font-semibold tracking-tight">
                    {user.name}
                  </h4>
                  <p className='text-gray-600 text-sm truncate max-w-52'>{user.message}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ChatList;