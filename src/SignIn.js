import React from 'react'
import './SignIn.css'

const SignIn = ({ authHandler }) => {
    const authenticate = () => {
        authHandler({
            uid: 'zarbuckl',
        })
    }

    return (
        <button className="SignIn" onClick={authenticate}>
            SignIn
        </button>
    )
}

export default SignIn