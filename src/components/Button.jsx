import React from 'react';
import './styles/components.css'

const Styles = [
    "btn-blue",
    "btn-red",
    "btn-yellow",
    "btn-green",
]

const Sizes = [
    "btn-small",
    "btn-medium",
    "btn-large",
]


const Button = ({
    buttonStyle= Styles[0],
    buttonSize= Sizes[1],
    onClick,
    children,
    ...props
}) => {
    return (
        <div>
            <button onClick={() => onClick(children)} className={`font-serif rounded-lg shadow-lg min-w-4 w-full ${buttonStyle} ${buttonSize} ${props.className}`}>{children}</button>
        </div>
    )
}

export default Button 
