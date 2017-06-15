import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: "React Practice",
          text: "Amazing",
          selected: false,
        },
        'note-2': {
          id: 'note-2',
          title: "Master Coders",
          text: "Angie, Zoe, Kai",
          selected: false,
        },
      },
    }
  }

  delete() {
    if (this.state.notes) {
      let state = [...this.state.notes]
      state = state.slice(1) //fix so it doesn't apply to only arrays

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
