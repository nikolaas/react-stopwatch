import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ElectronStopwatchView} from './ElectronStopwatchView';
import './Stopwatch.css';

const STOPWATCH_VIEWS = {
    'electron': ElectronStopwatchView,
    'defaults': ElectronStopwatchView
};

export class Stopwatch extends React.Component {

    static propTypes = {
        options: PropTypes.object.isRequired,
        time: PropTypes.number.isRequired,
        onChangeOptions: PropTypes.func.isRequired,
        onChangeTime: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    render() {
        const {className, options, time, onChangeOptions, onChangeTime} = this.props;
        const StopwatchView = getStopwatchView(options);
        return (
            <div className={classNames("Stopwatch", className)}>
                <div className="Stopwatch__options">

                </div>
                <StopwatchView className="Stopwatch__view" time={time}/>
                <div className="Stopwatch__controls">
                    <button type="button" className="Stopwatch__control Stopwatch__control--start" onClick={this.start}>Start</button>
                    <button type="button" className="Stopwatch__control Stopwatch__control--stop" onClick={this.stop}>Stop</button>
                </div>
            </div>
        );
    }

    start() {

    }

    stop() {

    }
}

function getStopwatchView({type}) {
    let StopwatchView = STOPWATCH_VIEWS[type];
    if (StopwatchView === undefined) {
        StopwatchView = STOPWATCH_VIEWS['defaults'];
    }
    return StopwatchView;
}
