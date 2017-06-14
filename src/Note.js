import React from 'react'
import './Note.css'

const Note = (props) => {
    return (
        <li>
            <div className="note">
                <div className="note-title">
                    {props.title}    
                </div>
                <div className="note-body">
                    <p>{props.text}</p>
                </div>
            </div>
        </li>
    )
}

export default Note