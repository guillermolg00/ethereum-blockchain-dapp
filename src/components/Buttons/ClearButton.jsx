import React from 'react';
import './Buttons.css';

const ClearButton = (props) => {
    return(
        <button className={`font-serif rounded-lg shadow-lg ${props.buttonStyle} ${props.buttonSize}`} onClick={() => props.onClick(props.children)}>
            {props.children}
        </button>
    )
}

export default ClearButton
