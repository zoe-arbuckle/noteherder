import React from 'react'
import './SignIn.css'
import { githubProvider, googleProvider, auth } from './base'

const SignIn = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider).catch((error) => {
            const email = error.email
            const otherProviders = auth.fetchProvidersForEmail(email)
        })
    }

    return (
        <div>
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