import React from 'react';
import ReactDOM from 'react-dom';
import Color from '../components/Color.js';

class Picker extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedColor: "green"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(color) {
    this.setState({selectedColor: color});
  }

  render() {
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={this.state.selectedColor}>{this.state.selectedColor}</div>
        </div>
        <div id="colors-list">
          <Color color="red" selectColor={this.handleChange} />
          <Color color="blue" selectColor={this.handleChange} />
          <Color color="green" selectColor={this.handleChange} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);
