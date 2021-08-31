import React, { Component } from 'react'
import Admin from './Admin'
import Guest from './Guest'
import './../../css/panel.css'

export default class LoginPanel extends Component {
    constructor(props){
        super(props);
        this.state={
            loggedIn:false
        }
        this.UserLogin=this.UserLogin.bind(this);
    }
    UserLogin(){
        this.setState(prevState=>({
            loggedIn:!prevState.loggedIn
        }))
    }
    render() {
        let panel=<Guest/>;
        let btnText="Login here";
        if(this.state.loggedIn){
            panel=<Admin/>;
            btnText="Logout"
        }
        
        return (
            <div>
                <button className="btn-login" onClick={this.UserLogin}>
                    <strong>{btnText}</strong>
                </button>
                <div className="user-panel">
                    {panel}
                </div>
            </div>
        )
    }
}
