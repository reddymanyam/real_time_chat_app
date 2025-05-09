import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatarr = ({className, src, fallback, onClick }) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
}

export default Avatarr