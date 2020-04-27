import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

import reducerTools from './tools-store';
import loginReducer from './login-store';
import reducerCart from './cart-store';

const reducers = combineReducers({
    reducerTools,
    login: loginReducer,
    reducerCart,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;