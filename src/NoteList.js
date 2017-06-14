import React from 'react'
import './NoteList.css'

import Note from './Note'

const NoteList = (props) => {
    return (
        <div className="NoteList">
            <h3>Notes <button className="delete button">
                <i className="fa fa-trash-o"></i>
            </button>
            </h3>

            <ul id="notes">
                {props.noteArr.map((noteInfo, i) =>
                    <Note noteInfo={noteInfo} key={i} />)}

            </ul>
        </div>
    )
}

export default NoteList