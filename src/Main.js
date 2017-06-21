import React from 'react'
import './Main.css'
import { Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {

    return (
        <div className="Main">
            <Sidebar createNewNote={props.createNewNote}
                signOut={props.signOut} />
            <NoteList notes={props.notes}
                delete={props.delete}
                changeSelected={props.changeSelected} />
            <Switch>
                <Route path='/notes/:id' render={(navProps) =>
                    <NoteForm notes={props.notes}
                        saveNote={props.saveNote}
                        selected={props.selected}
                        {...navProps} />} />
                <Route path='/notes' render={(navProps) =>
                    <NoteForm notes={props.notes}
                        saveNote={props.saveNote}
                        selected={props.selected}
                        {...navProps} />} />
            </Switch>


        </div>
    )
}



export default Main