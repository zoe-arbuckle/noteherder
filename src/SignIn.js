import React from 'react'
import './SignIn.css'
import { githubProvider, auth } from './base'

const SignIn = ({ authHandler }) => {
    const authenticate = () => {
        auth
            .signInWithPopup(githubProvider)
            .then((data) => {
                authHandler(data.user)
            })

    }

    return (
        <button className="SignIn" onClick={authenticate}>
            SignIn
        </button>
    )
}

export default SignIn