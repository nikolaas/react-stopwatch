import React from 'react';
import './Header.css';
import logo from './logo.svg';

export const Header = (props) => {
    return (
        <div className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <h2>React Stopwatch</h2>
        </div>
    );
};