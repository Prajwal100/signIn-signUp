import React from 'react'
import {withFirebase} from './Firebase'
function SignOutButton({firebase}) {
    return (
        <div className="signOut">
            <button type="button" onClick={firebase.doSignOut}>Sign Out</button>
        </div>
    )
}
const SignOut=withFirebase(SignOutButton)
export default SignOut
