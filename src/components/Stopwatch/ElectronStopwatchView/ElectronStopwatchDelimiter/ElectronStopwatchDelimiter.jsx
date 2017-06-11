import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ElectronStopwatchDelimiter.css';

export const ElectronStopwatchDelimiter = ({started}) => {
    const classes = classNames(
        "ElectronStopwatchDelimiter",
        started && "ElectronStopwatchDelimiter--started"
    );
    return (
        <div className={classes}>
            <div className="ElectronStopwatchDelimiter__dot"/>
            <div className="ElectronStopwatchDelimiter__dot"/>
        </div>
    );
};

ElectronStopwatchDelimiter.propTypes = {
    started: PropTypes.bool
};

ElectronStopwatchDelimiter.defaultProps = {
    started: false
};