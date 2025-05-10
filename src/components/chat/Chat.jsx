import React, { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  Ellipsis,
  Phone,
  Search,
  Users,
  Video,
  Smile,
  Paperclip,
  Send,
} from "lucide-react";
import Avatarr from "../reusablecomponents/Avatarr";
import Buttonn from "../reusablecomponents/Buttonn";

const Chat = ({ isChatOpen, setIsChatOpen, setIsChatProfileOpen, setIsChatListOpen }) => {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const chatData = [
    {
      id: 1,
      sender: "Doris Brown",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      message: "Good morning",
      time: "10:00",
      isMe: true,
    },
    {
      id: 2,
      sender: "Patricia Smith",
      avatar: "https://docs.material-tailwind.com/img/face-3.jpg",
      message:
        "Good morning. How are you? What about our next meeting?",
      time: "10:02",
      isMe: false,
    },
    {
      id: 3,
      sender: "Doris Brown",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      message: "Yeah everything is fine",
      time: "10:05",
      isMe: true,
    },
    {
      id: 4,
      sender: "Doris Brown",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      message: "& Next meeting tomorrow 10.00AM",
      time: "10:05",
      isMe: true,
    }, {
      id: 5,
      sender: "Doris Brown",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      message: "Good morning",
      time: "10:00",
      isMe: true,
    },
    {
      id: 6,
      sender: "Patricia Smith",
      avatar: "https://docs.material-tailwind.com/img/face-3.jpg",
      message:
        "Good morning. How are you? What about our next meeting?",
      time: "10:02",
      isMe: false,
    },
    {
      id: 7,
      sender: "Doris Brown",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      message: "Yeah everything is fine",
      time: "10:05",
      isMe: true,
    },
    {
      id: 8,
      sender: "Doris Brown",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      message: "& Next meeting tomorrow 10.00AM",
      time: "10:05",
      isMe: true,
    },
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: hasLoaded ? "smooth" : "auto" });
    }
  }, [chatData, hasLoaded]);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  const handleChatListOpen = () => {
    setIsChatListOpen(true);
    setIsChatOpen(false);
    setIsChatProfileOpen(false);
  };

  return (
    <div className={`${isChatOpen ? "flex" : "hidden"} lg:flex flex-col h-screen bg-gray-50`}>
      {/* Header */}
      <div className="flex justify-between items-center w-full sticky top-0 border-b py-4 px-6 bg-white z-10 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="lg:hidden -ml-6">
            <ChevronLeft size={20} onClick={handleChatListOpen} className="cursor-pointer" />
          </div>
          {/* <Badge variant="default" className="border border-white"> */}
          <Avatarr src='https://docs.material-tailwind.com/img/face-2.jpg' fallback='PP' />
          {/* </Badge> */}
          <span className="hidden lg:block font-medium text-sm">John Doe</span>
        </div>

        <div className="flex items-center gap-6">
          <Search size={18} />
          <Phone size={18} />
          <Video size={18} />
          <Users size={18} />
          <Ellipsis size={18} />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
        <div className="flex justify-center mb-4">
          <span className="bg-indigo-100 text-indigo-600 text-xs px-4 py-1 rounded-full shadow-sm font-medium">
            Today
          </span>
        </div>

        {chatData.map((chat, idx) => (
          <div
            key={idx}
            className={`flex mb-4 ${chat.isMe ? "justify-end" : "justify-start"}`}
          >
            {!chat.isMe && (
              <Avatarr className='mr-2 mt-1' src={chat.avatar} />
            )}
            <div className="flex flex-col max-w-xs md:max-w-md">
              <div className={`relative ${chat.isMe ? 'ml-auto' : ''}`}>
                <div className={`p-3 relative ${chat.isMe
                  ? ' bg-[#7269ef] text-white rounded-t-lg rounded-bl-lg'
                  : 'bg-white rounded-t-lg rounded-br-lg shadow-md border-l-4 border-l-gray-200'
                  }`}>
                  <div className={`absolute bottom-0 ${chat.isMe
                    ? 'right-0 border-t-8 border-t-[#7269ef] border-l-8 border-l-transparent -mb-2'
                    : 'left-0 border-t-8 border-t-white border-r-8 border-r-transparent -ml-2 -mb-2'}`}>
                  </div>

                  <span className="text-sm pr-10">
                    {chat.message}
                  </span>
                  <span className={`text-xs font-medium absolute bottom-1 right-2 ${chat.isMe ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {chat.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="border-t bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-indigo-500 p-2 rounded-full hover:bg-indigo-100">
            <Smile size={20} />
          </button>
          <button className="text-gray-500 hover:text-indigo-500 p-2 rounded-full hover:bg-indigo-100">
            <Paperclip size={20} />
          </button>
          <Input
            placeholder="Enter Message....."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          {/* <Button
            size="icon"
            className="bg-[#7269ef] hover:bg-[#5e56d8] rounded-full"
            onClick={handleSendMessage}
          >
            <Send size={18} className="text-white" />
          </Button> */}
          <Buttonn
            size="icon"
            className="bg-[#7269ef] hover:bg-[#5e56d8] rounded-full"
            onClick={handleSendMessage}>
            <Send size={18} className="text-white" />
          </Buttonn>
        </div>
      </div>
    </div>
  );
};

export default Chat;
