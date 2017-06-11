import React from 'react';
import {Header} from './components/Header';
import {LetStarted} from './components/LetStarted';
import {Stopwatch} from './components/Stopwatch';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.showStopwatch = this.showStopwatch.bind(this);
        this.changeStopwatchOptions = this.changeStopwatchOptions.bind(this);
        this.changeStopwatchTime = this.changeStopwatchTime.bind(this);

        this.state = {
            started: false,
            stopwatchOptions: {
                type: 'electron'
            },
            stopwatchTime: 69
        };
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="App__body">
                    {this.state.started ?
                        <Stopwatch
                            className="App__content"
                            options={this.state.stopwatchOptions}
                            time={this.state.stopwatchTime}
                            onChangeOptions={this.changeStopwatchOptions}
                            onChangeTime={this.changeStopwatchTime}
                        /> :
                        <LetStarted className="App__content" onClick={this.showStopwatch}/>
                    }
                </div>
            </div>
        );
    }

    showStopwatch() {
        this.setState({started: true});
    }

    changeStopwatchOptions(changedOptions) {
        const newOptions = {...this.state.stopwatchOptions, changedOptions};
        this.setState({stopwatchOptions: newOptions})
    }

    changeStopwatchTime(time) {
        this.setState({stopwatchTime: time});
    }
}

export default App;
