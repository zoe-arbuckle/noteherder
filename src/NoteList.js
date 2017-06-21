import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes }) => {
    return (
        <div className="NoteList">
            <h3>Notes <button className="delete button" onClick={props.delete}>
                <i className="fa fa-trash-o"></i>
            </button>
            </h3>

            <ul id="notes">
                {Object.keys(notes).map((noteId) => {
                    return <Note note={notes[noteId]} key={noteId} />
                })}
            </ul>
        </div>
    )
}

export default NoteList