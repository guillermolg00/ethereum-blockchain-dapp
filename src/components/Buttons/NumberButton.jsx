import React from 'react';
import './Buttons.css';

const Styles = [
    "btn-blue",
    "btn-yellow",
    "btn-red",
]

const Sizes = [
    "btn-small",
    "btn-medium",
    "btn-large",
]


const NumberButton = ({
    children,
    type,
    onClick,
    buttonStyle= Styles[0],
    buttonSize= Sizes[1]
}) => {
    
    return(
        <button className={`font-serif rounded-lg shadow-lg ${buttonStyle} ${buttonSize}`} onClick={() => onClick(children)} type={type}>
            {children}
        </button>
    )
}
export default NumberButton
