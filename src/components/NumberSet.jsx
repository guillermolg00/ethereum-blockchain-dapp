import React from 'react';
import NumberButton from './Buttons/NumberButton';
import ClearButton from './Buttons/ClearButton';
import './App.css';

const NumberSet = (props) => {
    return(
        <div className="grid grid-cols-3 auto-cols-max md:auto-cols-min gap-3">
            <NumberButton type="number" onClick={props.addToInput}> 1 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 2 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 3 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 4 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 5 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 6 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 7 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 8 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 9 </NumberButton>
            <NumberButton type="number" onClick={props.addToInput}> 0 </NumberButton>
            <ClearButton buttonStyle="btn-yellow btn-medium" handleClear={() => this.setState({input: ""})}> Clear </ClearButton>
            <NumberButton buttonStyle="btn-yellow btn-medium"> Send  </NumberButton>
        </div>
    )
}

export default NumberSet