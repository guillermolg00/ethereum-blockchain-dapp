import React from 'react'
import NumberButton from './NumberButton'

const NumberSet = () => {
    return(
        <div className="object-center justify-center w-54 h-16 flex-shrink grid grid-cols-3 gap-4">
            <NumberButton ButtonValue="1"/>
            <NumberButton ButtonValue="2"/>
            <NumberButton ButtonValue="3"/>
            <NumberButton ButtonValue="4"/>
            <NumberButton ButtonValue="5"/>
            <NumberButton ButtonValue="6"/>
            <NumberButton ButtonValue="7"/>
            <NumberButton ButtonValue="8"/>
            <NumberButton ButtonValue="9"/>
            <NumberButton ButtonValue="0"/>
            <NumberButton ButtonValue="Delete"/>
        </div>
    )
}

export default NumberSet