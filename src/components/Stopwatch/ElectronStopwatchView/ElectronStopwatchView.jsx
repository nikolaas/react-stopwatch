import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ElectronStopwatchNumber} from './ElectronStopwatchNumber';
import {ElectronStopwatchDelimiter} from './ElectronStopwatchDelimiter';
import './ElectronStopwatchView.css';

export const ElectronStopwatchView = ({className, time, started}) => {
    const minutes = normalizeTime(getMinutes(time));
    const seconds = normalizeTime(getSeconds(time));
    return (
        <div className={classNames("ElectronStopwatchView", className)}>
            <ElectronStopwatchNumber number={minutes[0]}/>
            <ElectronStopwatchNumber number={minutes[1]}/>
            <ElectronStopwatchDelimiter started={started}/>
            <ElectronStopwatchNumber number={seconds[0]}/>
            <ElectronStopwatchNumber number={seconds[1]}/>
        </div>
    );
};

ElectronStopwatchView.propTypes = {
    className: PropTypes.string,
    time: PropTypes.number.isRequired,
    started: PropTypes.bool.isRequired
};

function getMinutes(time) {
    return Math.floor(time / 60);
}

function getSeconds(time) {
    return time % 60;
}

function normalizeTime(time) {
    if (time < 10) {
        return [0, time];
    } else {
        return [Math.floor(time / 10), time % 10];
    }
}