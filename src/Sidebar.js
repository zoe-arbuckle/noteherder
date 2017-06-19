import React from 'react'
import './Sidebar.css'

import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'

const Sidebar = (props) => {
    return (
        <nav className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder" />
            </div>
            <button className="new-note" onClick={props.createNewNote}>
                <img src={newHover} alt="New note" />
                <img className="outline" src={newIcon} />
            </button>
        </nav>
    )

}

export default Sidebar