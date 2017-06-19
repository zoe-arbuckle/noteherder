import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import base from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {
  constructor() {
    super()

    this.state = {
      selected: null,
      notes: {

      },
    }
  }

  componentWillMount() {
    base.syncState('notes',
      {
        context: this,
        state: 'notes',
      })
  }

  delete = () => {
    if (this.state.notes) {
      const notes = { ...this.state.notes }

      delete notes[this.state.selected]

      this.setState({ notes: notes, selected: null, })
    }
  }

  changeSelected = (e) => {
    if (e.target.closest('.note') !== null) {
      this.setState({ selected: e.target.closest('.note').getAttribute('id') })
    }
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = { ...this.state.notes }
    notes[note.id] = note

    this.setState({ notes: notes })
  }

  createNewNote = () => {
    const note = {
      id: `note-${Date.now()}`,
      title: '',
      body: '',
    }

    const notes = { ...this.state.notes }
    notes[note.id] = note

    this.setState({ notes: notes, selected: note.id })
  }

  signedIn = () => {
    return true
  }

  renderMain() {
    return (
    <div>
      <SignOut />
      <Main notes={this.state.notes}
        selected={this.state.selected}
        delete={this.delete}
        saveNote={this.saveNote}
        changeSelected={this.changeSelected}
        createNewNote={this.createNewNote} />
      
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() ? this.renderMain() : <SignIn />}
      </div>
    );
  }
}

export default App;
