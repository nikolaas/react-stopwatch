import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ElectronStopwatchView} from './ElectronStopwatchView';
import {StopwatchDevice} from './StopwatchDevice';
import './Stopwatch.css';

const STOPWATCH_VIEWS = {
    'electron': ElectronStopwatchView,
    'defaults': ElectronStopwatchView
};

const STOPWATCH_PHASES = {
    INIT: 'INIT',
    STARTED: 'STARTED',
    PAUSED: 'PAUSED'
};

export class Stopwatch extends React.Component {

    static propTypes = {
        className: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.resume = this.resume.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.tick = this.tick.bind(this);

        this.stopwatch = new StopwatchDevice(1000);
        this.stopwatch.onTick(this.tick);

        this.state = {
            phase: STOPWATCH_PHASES.INIT,
            time: 0,
            options: {
                type: 'electron'
            }
        };
    }

    render() {
        const {className} = this.props;
        const {options, time} = this.state;
        const StopwatchView = getStopwatchView(options);

        const canStart = this.state.phase === STOPWATCH_PHASES.INIT;
        const canPause = this.state.phase === STOPWATCH_PHASES.STARTED;
        const canResume = this.state.phase === STOPWATCH_PHASES.PAUSED;
        const canStop = this.state.phase === STOPWATCH_PHASES.STARTED;
        const canReset = this.state.phase === STOPWATCH_PHASES.INIT && time > 0;

        return (
            <div className={classNames("Stopwatch", className)}>
                <div className="Stopwatch__options"/>
                <StopwatchView className="Stopwatch__view" time={time}/>
                <div className="Stopwatch__controls">
                    <StopwatchControl className="Stopwatch__start" onClick={this.start} disabled={!canStart}>Start</StopwatchControl>
                    <StopwatchControl className="Stopwatch__pause" onClick={this.pause} disabled={!canPause}>Pause</StopwatchControl>
                    <StopwatchControl className="Stopwatch__resume" onClick={this.resume} disabled={!canResume}>Resume</StopwatchControl>
                    <StopwatchControl className="Stopwatch__stop" onClick={this.stop} disabled={!canStop}>Stop</StopwatchControl>
                    <StopwatchControl className="Stopwatch__reset" onClick={this.reset} disabled={!canReset}>Reset</StopwatchControl>
                </div>
            </div>
        );
    }

    start() {
        this.setState({time: 0}, () => {
            this.stopwatch.start();
            this.setState({phase: STOPWATCH_PHASES.STARTED});
        });
    }

    pause() {
        this.stopwatch.stop();
        this.setState({phase: STOPWATCH_PHASES.PAUSED});
    }

    resume() {
        this.stopwatch.start();
        this.setState({phase: STOPWATCH_PHASES.STARTED});
    }

    stop() {
        this.stopwatch.stop();
        this.setState({phase: STOPWATCH_PHASES.INIT});
    }

    reset() {
        this.setState({time: 0});
    }

    tick() {
        this.setState({time: this.state.time + 1});
    }
}

function getStopwatchView({type}) {
    let StopwatchView = STOPWATCH_VIEWS[type];
    if (StopwatchView === undefined) {
        StopwatchView = STOPWATCH_VIEWS['defaults'];
    }
    return StopwatchView;
}

const StopwatchControl = ({className, ...props}) => {
    return <button {...props} type="button" className={classNames("Stopwatch__control", className)}/>;
};