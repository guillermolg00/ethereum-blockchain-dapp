import React, { useContext } from 'react';
import './styles/components.css';
import { OperationContext } from '../contexts/OperationContext'

const Operation = () => {

    const {operation} = useContext(OperationContext)

    return(
        <div className={`flex px-3 py-5 bg-gray-200 shadow-lg sm:rounded-3xl sm:p-6 my-20`}>
            <div className="max-w-sm mx-auto">
                <div className="leading-6 font-medium text-gray-700 sm:text-lg sm:leading-7 text-xl">
                    <div>
                        {`Resolve ${operation.a} + ${operation.b}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Operation