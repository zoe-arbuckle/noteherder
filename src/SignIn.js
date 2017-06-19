import React from 'react'
import './SignIn.css'
import { githubProvider, googleProvider, auth } from './base'

const SignIn = () => {
    const authenticate = (e) => {
        let provider
        if(e.currentTarget.classList.contains('Github')){
            provider = githubProvider
        }else{
            provider = googleProvider
        }
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button className="SignIn Github" onClick={authenticate}>
                <i className="fa fa-github"> Sign In</i>
            </button>
            <button className="SignIn Google" onClick={authenticate}>
                 <i className="fa fa-google"> Sign In</i>
            </button>
        </div>
    )
}

export default SignIn