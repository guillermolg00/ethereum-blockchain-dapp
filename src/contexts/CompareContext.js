import React, { useReducer, createContext } from 'react';

export const CompareContext = createContext();

const compareReducer  = (state, action) => {
    switch(action.type) {
        case 'COMPARE_TRUE':
            return {
                compareResult: true
            }
            case 'COMPARE_FALSE':
                return { 
                    compareResult: false
                    }
        default:
            return state;
    }
}

const CompareContextProvider = ({children}) => {
    const [compare, dispatch] = useReducer(compareReducer, {compareResult: false});

    return(
        <CompareContext.Provider value={{compare, dispatch}}>
            {children}
        </CompareContext.Provider>
    )
}

export default CompareContextProvider