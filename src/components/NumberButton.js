import React from 'react';

const NumberButton = (props) => {
    return(
        <button className="box-content py-3 px-5 w-auto h-auto font-serif text-2xl rounded-lg shadow-lg text-gray-600 bg-blue-200 hover:bg-blue-300 hover:text-gray-700" > { props.ButtonValue } </button>
    )
}
export default NumberButton