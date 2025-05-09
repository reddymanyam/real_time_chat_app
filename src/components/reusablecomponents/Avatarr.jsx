import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatarr = ({className, src, fallback, onClick }) => {
    return (
        <Avatar className={className} onClick={onClick}>
            <AvatarImage className="rounded-full" src={src} alt="Avatar" />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
}

export default Avatarr