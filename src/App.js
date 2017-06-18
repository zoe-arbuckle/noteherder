import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      selected: null,

    }
  }

  delete = () => {
    if (this.state.notes) {
      const notes = {...this.state.notes}

      delete notes[this.state.selected]

      this.setState({ notes: notes, selected: null, })
    }
  }

  changeSelected = (e) => {
    this.setState({ selected: e.target.closest('.note').getAttribute('id')})
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
            selected={this.state.selected}
            delete={this.delete}
            saveNote={this.saveNote}
            changeSelected={this.changeSelected}/>
      </div>
    );
  }
}

export default App;
