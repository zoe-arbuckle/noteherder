import React from 'react'
import './SignIn.css'
import { githubProvider, googleProvider, auth } from './base'

const SignIn = () => {
    const authenticate = (e) => {
        let provider
        if(e.target.classList.contains('.Github')){
            provider = githubProvider
        }else{
            provider = googleProvider
        }
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button className="SignIn Github" onClick={authenticate}>
                Sign In with Github
            </button>
            <button className="SignIn Google" onClick={authenticate}>
                Sign In with Google
            </button>
        </div>
    )
}

export default SignIn