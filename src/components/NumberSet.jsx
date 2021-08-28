import React from 'react'
import Button from './Button'
import './App.css';

const NumberSet = () => {
    return(
        <div className="object-center justify-center w-auto h-auto grid grid-cols-3 auto-cols-max md:auto-cols-min gap-3">
            <Button 
            onClick={()=> {console.log ("you clicked on me") }}
            type="number">
            1 </Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>0</Button>
            <Button buttonStyle="btn-yellow">Del</Button>
            <Button buttonStyle="btn-yellow">Send</Button>
        </div>
    )
}

export default NumberSet