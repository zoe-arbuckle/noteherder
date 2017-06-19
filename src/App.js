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
      uid: null,
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

      //TODO: fix
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
    return (this.state.uid !== null)
  }

  authHandler = (user) => {
    this.setState({uid: user.uid})
  }

  signOut = () => {
    this.setState({uid: null})
  }

  renderMain() {
    return (
      <div>
        <SignOut signOut={this.signOut}/>
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
        {this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler}/>}
      </div>
    );
  }
}

export default App;
