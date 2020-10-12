import React, {Component} from 'react';
import './App.css';

class RandomizeButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleRandomize();
    }

    render() {
        return (
            <div>
                <button className="Button" type="button" onClick={this.handleClick} >Randomize!</button>
            </div>
        );
    }
}

export default RandomizeButton;