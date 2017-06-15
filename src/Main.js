import React from 'react'
import './Main.css'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {

    return (
        <div className="Main">
            <Sidebar />
            <NoteList noteArr = {props.notes}/>
            <NoteForm noteArr = {props.notes}/>
        </div>
    )
}



export default Main