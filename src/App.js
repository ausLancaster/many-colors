import React from 'react';
import './App.css';
import Canvas from './Canvas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas/>
        <p>
          Welcome to my beautiful technicolor picture. By&nbsp;
          <a
              className="App-link"
              href="https://github.com/ausLancaster"
              target="_blank"
              rel="noopener noreferrer"
          >
           Austin Lancaster
          </a>.
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
