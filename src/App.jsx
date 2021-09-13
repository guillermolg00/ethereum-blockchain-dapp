import React from 'react';
import './index.css';

import Panel from './components/Panel';
import Operation from './components/Operation';
import CompareResult from './components/CompareResult'


import OperationContextProvider from './contexts/OperationContext'
import InputContextProvider from './contexts/InputContext'


const App = () => {
  return(
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div>
              <InputContextProvider>
                <OperationContextProvider>
                  <Operation />
                  <Panel />
                  <CompareResult />
                </OperationContextProvider>
              </InputContextProvider>
            </div>
        </div>
    </div>
  )
}

export default App