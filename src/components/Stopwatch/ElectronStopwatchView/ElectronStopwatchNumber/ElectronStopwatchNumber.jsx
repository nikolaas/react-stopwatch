import React from 'react';
import classNames from 'classnames';
import './ElectronStopwatchNumber.css';

const NUMBER_TEMPLATES = [
    [true, true, true, true, true, true, false],        // 0
    [false, true, true, false, false, false, false],    // 1
    [true, true, false, true, true, false, true],       // 2
    [true, true, true, true, false, false, true],       // 3
    [false, true, true, false, false, true, true],      // 4
    [true, false, true, true, false, true, true],       // 5
    [true, false, true, true, true, true, true],        // 6
    [true, true, true, false, false, false, false],     // 7
    [true, true, true, true, true, true, true],         // 8
    [true, true, true, true, false, true, true]        // 9
];


export const ElectronStopwatchNumber = ({number}) => {
    const numberTemplate = NUMBER_TEMPLATES[number];
    const numberShape = numberTemplate.map((active, index) => {
        const classes = classNames(
            "ElectronStopwatchNumber__part",
            `ElectronStopwatchNumber__part-${index}`,
            active && 'ElectronStopwatchNumber__part--active'
        );
        return <div key={index} className={classes}/>
    });

    const classes = classNames(
        "ElectronStopwatchNumber",
        numberTemplate[6] === false && "ElectronStopwatchNumber--without-center-line"
    );
    return (
        <div className={classes}>
            <div className="ElectronStopwatchNumber__shape">
                {numberShape}
            </div>
        </div>
    );
};
