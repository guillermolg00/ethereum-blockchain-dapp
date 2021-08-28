import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css'
import NumberSet from './components/NumberSet';

class App extends React.Component {
    render() {
        return(            
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 h-96 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>Answer</div>
                        <div>Display</div>
                        <div><NumberSet/></div>
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
