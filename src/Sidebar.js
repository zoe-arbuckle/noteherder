import React from 'react'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'

const Sidebar = () => {
    return (
        <nav className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder" />
            </div>
            <button className="new-note">
                <img src={newHover} alt="New note" />
                <img className="outline" src={newIcon} />
            </button>
        </nav>
    )

}

export default Sidebar