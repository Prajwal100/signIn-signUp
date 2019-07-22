import React from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import "../App.css"
import SignOut from './SignOut'
function Navigation() {
    return (
        <div className="nav-container">
            <ul className="nav">
                <li className="navbar">
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li className="navbar">
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li className="navbar">
                     <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                </li>
                       
            </ul>
        </div>
    )
}

export default Navigation
