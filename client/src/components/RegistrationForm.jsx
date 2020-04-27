import {reduxForm } from "redux-form";
import React from "react";
import { validateEmail, validateName, validatePassword } from '../api/validate';

let RegistrationForm = ({onSubmit}) => {
    var data = {};
    
    return (
        <div class='form'>
            <h2>Registration</h2>
            <form>
                <input type="text" name="name" placeholder='name' ref={ref => data.name = ref} required/>
                <hr/>
                <input type='email' name="email" placeholder="email" ref={ref => data.email = ref}
                       required/><hr/>
                <input type="password" name="password" placeholder='password' ref={ref => data.password = ref}
                       required/><hr/>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    if(validateEmail(data.email.value) && validateName(data.name.value) && validatePassword(data.password.value)){
                        onSubmit(data.name.value, data.email.value, data.password.value)
                    }
                    }}>Register</button>
            </form>
        </div>
    )
};

RegistrationForm = reduxForm({form: 'RegistrationForm'})(RegistrationForm);

export default RegistrationForm;