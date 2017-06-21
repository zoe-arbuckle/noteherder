import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'

import SignOut from './SignOut'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'

const Sidebar = ({ signOut }) => {
    return (
        <nav className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder" />
            </div>
            <Link to='/notes' className='new-note'>
                <button>
                    <img src={newHover} alt="New note" />
                    <img className="outline" src={newIcon} />
                </button>
            </Link>
            <SignOut signOut={signOut} />
        </nav>
    )

}

export default Sidebar