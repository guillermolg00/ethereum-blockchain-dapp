import React from "react";
import "./App.css";

export const DisplayInput = (props) => {
    return(
        <div className="p-6 max-w-sm mx-auto bg-gray-200 rounded-xl shadow-md flex items-center h-16">{props.input}</div>
    )
}