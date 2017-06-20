import React, { Component } from 'react'

import './App.css';
import Main from './Main'
import base, { auth } from './base'
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

  componentWillMount(){
    auth.onAuthStateChanged(
      (user) => {
        if (user){
          //finish signing in
          this.authHandler(user)
        } else{
          //finish signing out
          this.setState({uid: null})
        }
      }
    )
  }

  syncNotes = () => {
    this.ref = base.syncState(
      `${this.state.uid}/notes`,
      {
        context: this,
        state: 'notes',
      })
  }

  delete = () => {
    if (this.state.notes) {
      const notes = { ...this.state.notes }

      notes[this.state.selected] = null

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
    this.setState({selected: note.id})
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
    this.setState({ uid: user.uid },
      this.syncNotes
    )
  }

  signOut = () => {
    auth.signOut().then(() => {
      base.removeBinding(this.ref)
      this.setState({notes: {}})
    })
  }

  renderMain() {
    //can clean up by putting actions in a const obj and using spread syntax to pass as props
    return (
      <div>
        <SignOut signOut={this.signOut} />

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
        {this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler} />}
      </div>
    );
  }
}

export default App;
