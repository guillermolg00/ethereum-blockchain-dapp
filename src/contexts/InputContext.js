import React, { useReducer, createContext } from 'react';

export const InputContext = createContext();

const InputReducer  = (state, action) => {
    switch(action.type) {
        case 'SET_INPUT':
            return { 
                displayInput: action.input + action.value
                }
            case 'RESET_INPUT':
                return { 
                    displayInput: ""
                    }
        default:
            return state;
    }
}

const InputContextProvider = ({children}) => {
    const [display, dispatch] = useReducer(InputReducer, {displayInput: ""});

    return(
        <InputContext.Provider value={{display, dispatch}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContextProvider
