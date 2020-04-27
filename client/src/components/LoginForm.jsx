import { reduxForm} from "redux-form";
import React from "react";
import { validateEmail, validatePassword } from '../api/validate';

let LoginForm = (props) => {
    var data = {};

    return (
        <div class='form'>
            <h2>Authorization</h2>
            <form>
                <input type='email' name="email" placeholder="email" ref={ref => data.email = ref} required/>
                <hr/>
                <input type="password" name="password"
                          placeholder='password' ref={ref => data.password = ref} />
                          <hr/>
                <button type="submit" className='btn' onClick={(e) => {
                    e.preventDefault();
                    if(validateEmail(data.email.value) && validatePassword(data.password.value)){
                        props.onSubmit(data.email.value, data.password.value)
                    }
                    }
                }>Log in</button>
            </form>
        </div>
    )
};


LoginForm = reduxForm({form: 'loginForm'})(LoginForm);

export default LoginForm;