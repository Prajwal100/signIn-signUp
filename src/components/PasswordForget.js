import React, { Component } from 'react'
import { withFirebase } from './Firebase';

const INITIAL_STATE={
    email:'',
    error:null
}
export class PasswordForgetForm extends Component {
    constructor(props){
        super(props);
        this.state={
            ...INITIAL_STATE
        }
    }
    handleSubmit=e=>{
        const {email}=this.state;
        this.props.firebase.doPasswordReset(email).then(()=>{
            this.setState({...INITIAL_STATE})
        })
        .catch(error=>{
            this.setState({
                error
            })
        })
        e.preventDefault();
    }
    handlChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {email,error}=this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email Address"
                        value={this.state.email}
                        name="email"
                        onChange={this.handlChange}
                    />
                    <button type="submit" >Reset Password</button>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    }
}
const PasswordForget=withFirebase(PasswordForgetForm)
export default PasswordForget
