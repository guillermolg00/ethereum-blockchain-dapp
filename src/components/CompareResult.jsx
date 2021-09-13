import React, { useContext } from 'react';
import './styles/components.css'
import { OperationContext } from '../contexts/OperationContext';
import { InputContext } from '../contexts/InputContext';
import swal from 'sweetalert';
import Button from './Button';

const Alert = (compare) => {
    if (compare === "true"){
        swal({
            title: "Good job!",
            text: "you have earned 1 token",
            icon: "success",
            button: "Claim",
        })
    }
        else 
            swal({
                title: "Ups!",
                text: "you have failed this time",
                icon: "warning",
                button: "Try again",
            });
} 

const CompareResult = () => {
    
    const {operation} = useContext(OperationContext);
    const {display} = useContext(InputContext);

    let input = Number.parseInt(display.displayInput);

    console.log(input)
    console.log(operation.result)
    
    const compare = input === operation.result ? "true": "false";
    console.log(compare)

    return(
        <div className="p-6 max-w-sm mx-auto flex items-center">
            <Button buttonStyle="btn-green" onClick={() => Alert(compare)}> Compare Result </Button> 
        </div>
    )
}

export default CompareResult
