import React from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

import {login, register} from "../store/login-store";

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


class Login extends React.Component {
    state = {
        isAuthorizationActive: true
    };

    onButtonAuthClick = () => {
        this.setState(() => ({isAuthorizationActive: true}));
    };

    onButtonRegClick = () => {
        this.setState(() => ({isAuthorizationActive: false}));
    };

    render() { 
        if (this.props.userIsAuthorized) return <Redirect to='/'/>;

        return (
            <div class='login'>
                <div class='login-btns'>
                <button class='login-btn' onClick={this.onButtonAuthClick}>authorization
                </button>
                <button class='login-btn'
                        onClick={this.onButtonRegClick}>registration
                </button>
                </div>
                
                {this.state.isAuthorizationActive ?
                    <LoginForm onSubmit={(email, password) => this.props.login(email, password)}/> :
                    <RegistrationForm onSubmit={(name, email, password) => this.props.register(name, email, password)}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       userIsAuthorized: state.login.userIsAuthorized
    }
};

export default connect(mapStateToProps, {login, register})(Login);