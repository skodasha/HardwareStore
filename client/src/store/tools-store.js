import { toolsAPI } from '../api/tools-api';
import {reset} from 'redux-form';
import { setUserAuthorized } from './login-store';

const ADD_TOOL = 'ADD_TOOL';
const SHOW_TOOLS = 'SHOW_TOOLS';
const DELETE_TOOL = 'DELETE_TOOL';
const UPDATE_TOOL = 'UPDATE_TOOL';

const reducerTools = (state = [], action) => {
	switch (action.type) {
		case ADD_TOOL:
			return [...state, action.payload];
		case DELETE_TOOL:
			return state.filter((i) => {
				return i._id !== action.id;
            });
        case UPDATE_TOOL:
            return [...state, action.payload];
		case SHOW_TOOLS:
            return [...action.payload];
		default:
			return state;
	}
};

export function addTool(data) {

	return {
		type: ADD_TOOL,
		payload: {
			title: data.title,
            description: data.description,
            price: data.price,
            file: data.file,
            brand: data.brand,
		}
	}
}

export function addToolToBD (formData){

    return (dispatch) => {
		toolsAPI.insertTools(formData).then((res) => {
            dispatch(addTool(res.data))
        }
		);
	}
}

export function showTools (tools = [], section, subsection) {    
    let filterTools;

    if(section !== 'all'){
        filterTools = tools.filter(item => item.section === section);
    }
    else{
        filterTools = tools;
    }

    if(subsection !== 'all'){
        filterTools = filterTools.filter(item => item.subsection === subsection);
    }

    return {
        type: SHOW_TOOLS,
        payload: filterTools,
    }
}

export function fetchTools (section, subsection, findTool) {
    
	return (dispatch) => {
		toolsAPI.getAllTools().then((res) => {
            let tools = (findTool) ? res.data.tools.filter(item => item.title.toLowerCase().includes(findTool.toLowerCase()) ||
             item.section.toLowerCase().includes(findTool.toLowerCase()) || item.subsection.toLowerCase().includes(findTool.toLowerCase())):
            res.data.tools;
            dispatch(showTools(tools, section, subsection));
            dispatch(setUserAuthorized(res.data.name, res.data.role));           
        });
	} 
}

export function del(id){
    return{
        type: DELETE_TOOL,
        id
    }
}

export function deleteTool(id){
    return (dispatch) => {
		toolsAPI.deleteToolById(id).then((res) => {
            dispatch(del(id));
        });
	}
}

export function updateTool(id, title, description, price, brand){
    return (dispatch) => {
        toolsAPI.updateToolById(id, {title, description, price, brand}).then((res) => {
            dispatch(fetchTools('all', 'all'))
        });
    }
}
export default reducerTools;