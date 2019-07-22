import React, { Component,Fragment } from 'react'
import '../App.css'
import {withFirebase} from './Firebase'
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
const INITIAL_STATE={
    fname:"",
    lname:"",
    email:"",
    password:"",
    error:null,
}
class  SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state={
          ...INITIAL_STATE
        };
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        this.props.firebase.doCreateUserWithEmailAndPassword(email,password)
        .then(authUser=>{
            this.setState({...INITIAL_STATE});
            
        })
        .catch(error=>{
            this.setState({error});
        })
    }
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {fname,lname,email,password,error}=this.state
        const isInvalid=
        email===""||
        password==="";

        return (
            <Fragment>
              <div className="SignInForm">
                <h1>Sign Up</h1>
                <h5>Sign Up with your email address</h5>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="fname"
                        value={fname}
                        placeholder="First Name"
                        type="text"
                        onChange={this.handleChange}
                    /><br></br>
                    <input
                        name="lname"
                        value={lname}
                        placeholder="Last Name"
                        type="text"
                        onChange={this.handleChange}
                    />
                     <input
                        name="email"
                        value={email}
                        placeholder="Email address"
                        type="email"
                        onChange={this.handleChange}
                    />
                     <input
                        name="password"
                        value={password}
                        placeholder="Valid Password"
                        type="password"
                        onChange={this.handleChange}
                    />
                   
                    <button disabled={isInvalid} type="submit">Sign Up</button>
                  
                </form>
                <p className="forget_password">Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link></p>
                
            </div>
            </Fragment>
        )
    }
}

const SignUp=withFirebase(SignUpForm)

export default SignUp
