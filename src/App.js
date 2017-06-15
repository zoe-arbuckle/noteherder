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
        },
        'note-2': {
          id: 'note-2',
          title: "Master Coders",
          text: "Angie, Zoe, Kai",
        },
      },
    }
  }

  delete = () => {
    if (this.state.notes) {
      const notes = {...this.state.notes}
    }
  }

  saveNote = (note) => {
    if(!note.id){
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note

    this.setState({ notes: notes })
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} 
            delete={this.delete}
            saveNote={this.saveNote}/>
      </div>
    );
  }
}

export default App;
