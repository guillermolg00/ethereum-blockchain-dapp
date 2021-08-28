import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

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


const Button = ({
    children,
    type,
    onClick,
    buttonStyle= Styles[0],
    buttonSize= Sizes[1]
}) => {
    


    return(
        <button className={`font-serif rounded-lg shadow-lg ${buttonStyle} ${buttonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button