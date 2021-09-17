import React, { useContext } from 'react';
import './styles/components.css';
import { InputContext } from '../contexts/InputContext'
import Button from './Button';

const Panel = () => {

    const {display, dispatch} = useContext(InputContext)

    return(
        <div>
            <div className="p-6 max-w-sm mx-auto bg-gray-300 rounded-xl shadow-md flex items-center">{display.displayInput}</div>
            <div className= "p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex space-x-4">
                <div className= "grid grid-cols-3 auto-cols-max gap-3 justify-items-stretch">
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>1</Button>
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>2</Button> 
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>3</Button> 
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>4</Button> 
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>5</Button> 
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>6</Button> 
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>7</Button> 
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>8</Button> 
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>9</Button> 
                    <Button onClick={(children) => dispatch({type: 'SET_INPUT', input: display.displayInput, value: children })}>0</Button> 
                    <Button buttonStyle="btn-yellow" onClick={() => dispatch({type: 'RESET_INPUT'})}> Clear </Button>
                </div>
            </div>
        </div>
    )
}

export default Panel

