import React from 'react';
import {Header} from './components/Header';
import {LetStarted} from './components/LetStarted';
import {Stopwatch} from './components/Stopwatch';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.showStopwatch = this.showStopwatch.bind(this);

        this.state = {
            started: false
        };
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="App__body">
                    {this.state.started ?
                        <Stopwatch className="App__content"/> :
                        <LetStarted className="App__content" onClick={this.showStopwatch}/>
                    }
                </div>
            </div>
        );
    }

    showStopwatch() {
        this.setState({started: true});
    }
}

export default App;
