import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: [
        {
          id: '1',
          title: "Citizens of distant epochs",
          text: "Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?",
          selected: false,
        },
      ],

      max: 1,
    }
  }

  delete() {
    if (this.state.notes) {
      let state = [...this.state.notes]
      state = state.slice(1)

      this.setState({ notes: state })
    }
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} 
            delete={this.delete.bind(this)}/>
      </div>
    );
  }
}

export default App;
