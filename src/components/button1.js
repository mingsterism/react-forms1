import React, { Component } from 'react';

class Button1 extends Component {

  onButtonClick = (evt) => {
    const btn = evt.target;
    console.log(`The user clicked ${btn.name}: ${btn.value}`)
    console.log(evt)
  }
  
  render() {
    return (
      <div>
        <h1> What do you think of react </h1>
        <button 
          name='button1'
          value='great'
          onClick={this.onButtonClick}
        >
          Great 
        </button>

        <button 
          name='button2'
          value='amazing'
          onClick={this.onButtonClick}
        >
          Amazing 
        </button>

      </div>
    )
  }
}

export default Button1