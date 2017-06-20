import React from 'react'
import './SignOut.css'

const SignOut = ({signOut}) => {
    return (
        <button className="SignOut" onClick={signOut}>
            SignOut
        </button>
    )
}

export default SignOut