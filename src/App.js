import React, {Component} from 'react';
import './App.css';
import Canvas from './Canvas'
import RandomTitle from './RandomTitle'
import RandomizeButton from './RandomizeButton'

class App extends Component {

  state = {
    seed: 0,
  };

  handleRandomize = () => {
    let seed = Math.random();
    this.setState({ seed });
  }

  render() {

    return (
        <div className="App">
          <header className="App-header">
            <RandomTitle seed={this.state.seed} />
            <br/>
            <Canvas seed={this.state.seed} />
            <br/>
            <RandomizeButton handleRandomize={this.handleRandomize} />
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
}

export default App;
