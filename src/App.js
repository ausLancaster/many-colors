import React from 'react';
import './App.css';
import Canvas from './Canvas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas/>
        <p>
          Welcome to this startling, psychedelic, technicolor picture.<br/>
          (Thought to be created by aliens?)
        </p>
        <a
          className="App-link"
          href="https://github.com/ausLancaster/many-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
