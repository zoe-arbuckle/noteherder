import React from 'react'
import './NoteList.css'

import Note from './Note'

const NoteList = (props) => {
    return (
        <div className="NoteList" id="NoteList">
            <h3>Notes <button className="delete button" onClick={props.delete}>
                <i className="fa fa-trash-o"></i>
            </button>
            </h3>

            <ul id="notes">
                {(props.notes) ?
                    Object.keys(props.notes).map((noteId) =>
                        <Note noteInfo={props.notes[noteId]} 
                            key={noteId}/>)
                    : null
                }
            </ul>
        </div>
    )
}

export default NoteList