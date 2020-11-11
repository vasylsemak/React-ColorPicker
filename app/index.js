import React from 'react';
import ReactDOM from 'react-dom';
import Color from '../components/Color.js';

class Picker extends React.Component {
  constructor() {
    super()
    this.state = { selectedColor: 'green' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const color = evt.target.className;
    this.setState(() => ({ selectedColor: color }));
  }

  render() {
    return (
      <div id='container'>
        <div id='navbar'>
          <div>Currently selected: </div>
          <div
            className={this.state.selectedColor}>{this.state.selectedColor}
          </div>
        </div>
        <div id='colors-list' onClick={this.handleChange}>
          <Color color='red' selectedColor={this.state.selectedColor} />
          <Color color='blue' selectedColor={this.state.selectedColor} />
          <Color color='green' selectedColor={this.state.selectedColor} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Picker />, document.getElementById('app'));
