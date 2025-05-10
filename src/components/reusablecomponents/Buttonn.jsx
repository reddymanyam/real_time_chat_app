import React from 'react'
import { Button } from '../ui/button';

const Buttonn = ({ children, size, className, onClick }) => {
    return (
        <Button size={size} className={className} onClick={onClick}>{children}</Button>
    )
}

export default Buttonn;