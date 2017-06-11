import React from 'react';
import {Header} from './components/Header';
import {LetStartedButton} from './components/LetStartedButton';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-content">
            <LetStartedButton/>
        </div>
      </div>
    );
  }
}

export default App;
