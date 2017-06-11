import React from 'react';
import './Header.css';
import logo from './logo.svg';

export const Header = () => {
    return (
        <div className="Header">
            <img className="Header-logo" src={logo} alt="logo" />
            <h2 className="Header-title">React Stopwatch</h2>
        </div>
    );
};