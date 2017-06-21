import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Main from './Main'
import base, { auth } from './base'
import SignIn from './SignIn'

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
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          //finish signing in
          this.authHandler(user)
        } else {
          //finish signing out
          this.setState({ uid: null })
        }
      }
    )
  }

  getUserFromLocalStorage() {
    const uid = localStorage.getItem('uid')
    if(!uid){
      return
    }else{
      this.setState({ uid })
    }
  }

  syncNotes = () => {
    this.ref = base.syncState(
      `notes/${this.state.uid}`,
      {
        context: this,
        state: 'notes',
      })
  }

  stopSyncing = () => {
    if (this.ref) {
      base.removeBinding(this.ref)
    }
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
    this.setState({ selected: note.id })
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
    localStorage.setItem('uid', user.uid)

    this.setState({ uid: user.uid },
      this.syncNotes
    )
  }

  signOut = () => {
    this.setState({ selected: null })
    auth.signOut().then(() => {
      this.stopSyncing()
      this.setState({ notes: {} })
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/notes' render={() => (
            this.signedIn()
              ? <div>
                <Main notes={this.state.notes}
                  selected={this.state.selected}
                  delete={this.delete}
                  saveNote={this.saveNote}
                  changeSelected={this.changeSelected}
                  createNewNote={this.createNewNote}
                  signOut={this.signOut} />
              </div>
              : <Redirect to='/sign-in' />
          )} />
          <Route path='/sign-in' render={() => (
            this.signedIn()
            ? <Redirect to='/notes' />
            : <SignIn/> ) }/>
          <Route render={() => <Redirect to='/notes' />} />
        </Switch>
      </div>
    );
  }
}

export default App;
