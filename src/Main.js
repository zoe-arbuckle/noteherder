import React from 'react'
import './Main.css'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {

    return (
        <div className="Main">
            <Sidebar />
            <NoteList notes = {props.notes} 
                delete={props.delete}
                changeSelected={props.changeSelected}/>
            <NoteForm notes = {props.notes}
                saveNote={props.saveNote}
                selected={props.selected}/>
        </div>
    )
}



export default Main