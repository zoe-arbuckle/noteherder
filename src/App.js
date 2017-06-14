import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar'
import NoteList from './NoteList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <NoteList />
      </div>
    );
  }
}

export default App;
