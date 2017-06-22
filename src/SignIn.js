import React from 'react'

import './SignIn.css'
import { githubProvider, googleProvider, auth } from './base'
import quill from './quill.svg'

const SignIn = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }

    return (
        <div className="border">
            <h3>Welcome to NoteHerder!</h3>
            <button className="SignIn Github" onClick={() => authenticate(githubProvider)}>
                <i className="fa fa-github"> Sign In</i>
            </button>
            <button className="SignIn Google" onClick={() => authenticate(googleProvider)}>
                <i className="fa fa-google"> Sign In</i>
            </button>
        </div>
    )
}

export default SignIn