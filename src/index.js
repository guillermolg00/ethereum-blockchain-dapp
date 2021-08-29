import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css'
import NumberSet from './components/NumberSet.jsx';
import GenerateRandomOperation from './components/generateRandomOperation';
import { DisplayInput } from './components/DisplayInput';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ""
        };
    }

    addToInput = val => {
        this.setState({ input: this.state.input + val })
    }

    render() {
        return(            
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div><DisplayInput input={this.state.input}></DisplayInput>
                    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div><NumberSet addToInput={this.addToInput}/></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}



ReactDOM.render(
<App />, 
document.getElementById('root'));
