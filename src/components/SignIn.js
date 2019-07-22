import React, { Component,Fragment } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {withFirebase} from './Firebase'
const INITIAL_STATE={
    email:"",
    password:"",
    error:null
}
 class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state={
           ...INITIAL_STATE
        }
    }
    handleSubmit=e=>{
        e.preventDefault();
        const {email,password}=this.state;
        this.props.firebase.doSignInWithEmailAndPassword(email,password).then(()=>{
            this.setState({...INITIAL_STATE})
            this.props.history.push(ROUTES.LANDING);
        })
        .catch(error=>{
            this.setState({error});
        })
        e.preventDefault();
    }
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
      const  {email,password,error}=this.state;
        return (
            <Fragment>
              <div className="SignInForm">
                <h1>Sign In</h1>
                <h5>Sign in with your email address</h5>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={email}
                        name="email"
                        placeholder="Email address or username"
                        type="text"
                        onChange={this.handleChange}
                    /><br></br>
                    <input
                        name="password"
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <p className="forget_password"><Link to={ROUTES.PASSWORD_FORGET}>Forget your password?</Link></p>
                    <button type="submit">Sign In</button>

                    {error && <p>{error.message}</p>}
                </form>

                
            </div>
            </Fragment>
        )
    }
}
const SignIn=withFirebase(SignInForm)
export default SignIn
