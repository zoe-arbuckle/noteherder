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
            <NoteForm saveNote={props.saveNote}/>
        </div>
    )
}



export default Main