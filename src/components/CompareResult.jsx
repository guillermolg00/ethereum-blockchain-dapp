import React, { useContext } from 'react';
import './styles/components.css'
import { OperationContext } from '../contexts/OperationContext';
import { InputContext } from '../contexts/InputContext';
import { CompareContext } from '../contexts/CompareContext';
import swal from 'sweetalert';
import Button from './Button';

const Alert = async (compareValue, compare) => {
    if (compareValue === true) {
        const result = await swal ({
            title: "Good job!",
            text: "you have earned 1 token",
            icon: "success",
            button: "Claim",
        })
        if (result===true) {compare(true)}
    } 

        else if (compareValue === false)
            swal({
                title: "Ups!",
                text: "you have failed this time",
                icon: "warning",
                button: "Try again",
            }); 

            else 
                swal({
                    title: "Error",
                    text: "Something went wrong",
                    icon: "warning",
                    button: "Continue",
                });
    }

const CompareResult = (props) => {

    const {operation, dispatch: operationDispatch} = useContext(OperationContext);
    const {display, dispatch: displayDispatch } = useContext(InputContext);
    const {compare, dispatch: compareDispatch} = useContext(CompareContext)

    function TryAgain() {
        return (
            displayDispatch({type: 'RESET_INPUT'}),
            operationDispatch({type: 'GENERATE_RESULT'})
        )
    }

    let input = Number.parseInt(display.displayInput);
    
    const CompareValue = () => {
        input === operation.result ? compareDispatch({type: 'COMPARE_TRUE'}): compareDispatch({type: 'COMPARE_FALSE'})
        TryAgain()
        return (
            input === operation.result
        )
    }

    return(
        <div className="p-6 max-w-sm mx-auto items-center">
            <Button buttonStyle="btn-green" className= "mb-5" onClick={() => Alert(CompareValue(), props.compare)}> Compare Result </Button> 
            <Button buttonStyle="btn-yellow" onClick={()=>TryAgain()}> Try </Button>
        </div>
    )
}

export default CompareResult