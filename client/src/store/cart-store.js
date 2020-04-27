import { cartAPI } from '../api/cart-api';
import {reset} from 'redux-form';
import { toolsAPI } from '../api/tools-api';
import { setUserAuthorized } from './login-store';

const ADD_TOOL_TO_CART = 'ADD_TOOL_TO_CART';
const SHOW_CART_TOOLS = 'SHOW_CART_TOOLS';
const DELETE_TOOL_IN_CART = 'DELETE_TOOL_IN_CART';
const UPDATE_TOOL_IN_CART = 'UPDATE_TOOL_IN_CART';

let initState = [];

const reducerCart = (state = initState, action) => {
	switch (action.type) {
		case ADD_TOOL_TO_CART:
            console.log(action.payload)
			return [...state, action.payload];
		case DELETE_TOOL_IN_CART:
			return state.filter((i) => {
				return i.id !== action.id;
            });
		case SHOW_CART_TOOLS:
            return [...action.payload];
		default:
			return state;
	}
};

export function updateTool(id, count){
    return (dispatch) => {
        cartAPI.updateToolById(id, {count}).then((res) => {
            dispatch(fetchToolsInCart())
        });
    }
}

export function addToolInCart(data) {
	return {
		type: ADD_TOOL_TO_CART,
		payload: {
            id: data.id,
            count: data.count,
		}
	}
}

export function addToolInCartDB (id){
    return (dispatch) => {
		cartAPI.addTool({id}).then((res) => {
            dispatch(addToolInCart(res.data.tool))
        }
		);
	}
}

export function showTools (tools = []) {       
    return {
        type: SHOW_CART_TOOLS,
        payload: tools,
    }
}

export function fetchToolsInCart () {
	return (dispatch) => {
		cartAPI.getCart().then((res) => {
            dispatch(showTools(res.data));      
        });
	} 
}

export function del(id){
    return{
        type: DELETE_TOOL_IN_CART,
        id
    }
}

export function deleteTool(id){
    return (dispatch) => {
		cartAPI.deleteToolById(id).then((res) => {
            dispatch(del(id));
        });
	}
}
export default reducerCart;