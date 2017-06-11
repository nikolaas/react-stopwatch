import React from 'react';
import classNames from 'classnames';
import './LetStarted.css';

export const LetStarted = ({className, ...props}) => {
    return (
        <div className={classNames("LetStarted", className)}>
            <button {...props} type="button" className="LetStarted__button">Let's Started</button>
        </div>
    );
};