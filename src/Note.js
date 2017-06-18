import React from 'react'

const Note = ({ note }) => {
    return (
        <li>
            <div className="note" id={note.id}>
                <div className="note-title">
                    {note.title} 
                </div>
                <div className="note-body">
                    <p>{note.body}</p>
                </div>
            </div>
        </li>
    )
}

export default Note