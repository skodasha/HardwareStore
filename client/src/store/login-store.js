import { authAPI } from '../api/login-api';

export const LOGIN = 'LOGIN';
export const SET_USER_AUTHORIZED = 'SET_USER_AUTHORIZED';
export const SET_USER_UNAUTHORIZED = 'SET_USER_UNAUTHORIZED';

let initialState = {
    userIsAuthorized: false,
    role: 'not authenticate',
    name: ''
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: 
            return state;
        case SET_USER_AUTHORIZED:{
            return {
                ...state, userIsAuthorized: true, role: action.role, name: action.name
            }
            }
        case SET_USER_UNAUTHORIZED:
            return {
                ...state, userIsAuthorized: false, role: 'not authenticate',  name: ''
            };
        default:
            return state;
    }
};

export const loginAC = () => ({type: LOGIN});
export function setUserAuthorized(name, role){
    return {
        type: SET_USER_AUTHORIZED,
        role,
        name
    }
};
export const setUserUnauthorized = () => ({type: SET_USER_UNAUTHORIZED});

export const login = (email, password) => {
    return (dispatch) => {
        authAPI.login(email, password)
            .then(response => {
                console.log(response.data)
                dispatch(setUserAuthorized(response.data.data.user.name, response.data.data.user.role));
            }).catch(err => alert("Invalid login or password."));
    }
};

export function register (name, email, password){
    return (dispatch) => {
        authAPI.register(name, email, password).then(res => 
            dispatch(setUserAuthorized(name, 'user'))    
        );
}
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(res => 
            dispatch(setUserUnauthorized())    
        )
    }
};

export default loginReducer;