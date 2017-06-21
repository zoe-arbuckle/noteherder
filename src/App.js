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
      currentNote: this.blankNote(),
      notes: {

      },
    }
  }

  componentWillMount() {
    this.getUserFromLocalStorage()
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          //finish signing in
          this.authHandler(user)
        }
      }
    )
  }

  getUserFromLocalStorage() {
    const uid = localStorage.getItem('uid')
    if(!uid) return
    this.setState({ uid })
  }

  syncNotes = () => {
    this.ref = base.syncState(
      `notes/${this.state.uid}`,
      {
        context: this,
        state: 'notes',
      }
    )
  }

  stopSyncing = () => {
    if (this.ref) {
      base.removeBinding(this.ref)
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  saveNote = (note) => {
    let shouldRedirect = false
    if (!note.id) {
      note.id = `note-${Date.now()}`
      shouldRedirect = true
    }
    const notes = { ...this.state.notes }
    notes[note.id] = note

    this.setState({
      notes,
      currentNote: note,
    })
    if (shouldRedirect) {
      this.props.history.push(`/notes/${note.id}`)
    }
  }

  removeNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null
    this.resetCurrentNote()
    this.setState({ notes })
    this.props.history.push('/notes')
  }

  changeSelected = (e) => {
    if (e.target.closest('.note') !== null) {
      this.setState({ selected: e.target.closest('.note').getAttribute('id') })
    }
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
    auth.signOut()
      .then(
        () => {
          this.stopSyncing()
          this.setState({
            notes: {},
            currentNote: this.blankNote()
          })
        }
      )
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  render() {
     const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      signOut: this.signOut,
    }
    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }

    return (
      <div className="App">
        <Switch>
          <Route path="/notes" render={() => (
            this.signedIn()
              ? <Main
                  {...noteData}
                  {...actions}
                />
              : <Redirect to="/sign-in" />
          )} />
          <Route path="/sign-in" render={() => (
            !this.signedIn()
              ? <SignIn />
              : <Redirect to="/notes" />
          )} />

          <Route render={() => <Redirect to="/notes" />} />
        </Switch>
      </div>
    )
  }
}

export default App;
