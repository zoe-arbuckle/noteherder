import React from 'react'
import './SignIn.css'
import { githubProvider, auth } from './base'

const SignIn = () => {
    const authenticate = () => {
        auth.signInWithPopup(githubProvider)
    }

    return (
        <button className="SignIn" onClick={authenticate}>
            SignIn
        </button>
    )
}

export default SignIn