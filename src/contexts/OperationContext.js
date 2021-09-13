import React, { useReducer, createContext } from 'react';

export const OperationContext = createContext();

const OperationReducer  = (state, action) => {
    switch(action.type) {
        case 'GENERATE_RESULT':
            return { 
                newA: parseInt(Math.random()*100),
                newB: parseInt(Math.random()*100),
                a: state.newA, 
                b: state.newB,
                result: state.newA + state.newB,
                }
        default:
            return state;
    }
}

const OperationContextProvider= ({children}) => {
    const [operation, dispatch] = useReducer(OperationReducer, {
        newA: parseInt(Math.random()*100),
        newB: parseInt(Math.random()*100),
        a: 0, 
        b: 0, 
        result: 0,
    });

    return(
        <OperationContext.Provider value={{operation, dispatch}}>
            {children}
        </OperationContext.Provider>
    )
};

export default OperationContextProvider;
