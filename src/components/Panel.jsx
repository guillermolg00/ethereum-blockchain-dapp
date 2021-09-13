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
                <div className= "grid grid-cols-3 auto-cols-max md:auto-cols-min gap-3 justify-items-stretch">
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
                    <Button buttonStyle="btn-yellow" onClick={(children) => dispatch({type: 'RESET_INPUT'})}> Clear </Button>
                </div>
            </div>
        </div>
    )
}

export default Panel



// variante realizada con useState
// const Panel = () => {
//     const [input, setInput] = useState("")

//     const updateInput = (val) => {
//         setInput (input + val)
//     }

//     return (
//         <div>
//             <div className="p-6 max-w-sm mx-auto bg-gray-300 rounded-xl shadow-md flex items-center">{input}</div>
//             <div className= "p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center space-x-4">
//                 <div className= "grid grid-cols-3 auto-cols-max md:auto-cols-min gap-3">
//                     <Button onClick={(children) => updateInput(children)}> 1 </Button>
//                     <Button onClick={(children) => updateInput(children)}> 2 </Button>
//                     <Button onClick={(children) => updateInput(children)}> 3 </Button>
//                     <Button onClick={(children) => updateInput(children)}> 4 </Button>
//                     <Button onClick={(children) => updateInput(children)}> 5 </Button>
//                     <Button onClick={(children) => updateInput(children)}> 6 </Button>
//                     <Button onClick={(children) => updateInput(children)}> 7 </Button>
//                     <Button onClick={(children) => updateInput(children)}> 8 </Button>
//                     <Button onClick={(children) => updateInput(children)}> 9 </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Panel


