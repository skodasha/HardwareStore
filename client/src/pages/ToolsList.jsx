import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import  NavBar  from '../components/NavBar';
import { Table, Button, Nav } from 'react-bootstrap';
import { fetchTools, deleteTool } from '../store/tools-store';
import  Menu from '../components/Menu';
import {Redirect} from "react-router-dom";
import logo from '../logo.ico';

function ToolsList({ fetchTools, deleteTool, tools, user, name, role}) {
    useEffect(() => {
        fetchTools('all', 'all');
	},[]);

	useEffect(() => {
    }, [tools, user, name, role]);

    return <div>
        <NavBar></NavBar>
        <div class='main--section7'>
        <div class="wrapper">
        <Menu  onSend={(section, subsection) => fetchTools(section, subsection)}/>
        <table class='tableTools'>
            <tbody>
                <tr>
                    <td><h6>Image</h6></td>
                    <td class='title'><h6>Title</h6></td>
                    <td><h6>Brand</h6></td>
                    <td class='dec'><h6>Description</h6></td>
                    <td class='price'><h6>Price ($)</h6></td>
                    <td><h6>Update</h6></td>
                    <td><h6>Delete</h6></td>
                </tr>
                {tools.map(
                    (item, idx) =>
                    <tr key={idx}>
                        <td>
                            <img src={`${window.location.origin}/uploads/${item.file}`}></img>	 
                        </td>
                        <td>
                            {item.title}	 
                        </td>
                        <td>
                            {item.brand}	 
                        </td>
                        <td>
                            {item.description}
                        </td>
                        <td>
                            {item.price}
                        </td>
                        <td>
                            <Button variant="outline-warning" onClick={() => {window.location.href = `/tools/update?id=${item._id}`}}>Update</Button>
                        </td>
                        <td>
                            <Button variant="outline-danger" onClick={ (e) => {deleteTool(item._id)}}>Delete</Button>
                        </td>
                    </tr>,
                )}
            </tbody>
        </table>
        </div>
        </div>
        
  

    </div> 
}

const mapStateToProps = (state) => ({
    tools: state.reducerTools,
    user: state.login.userIsAuthorized,
    name: state.login.name,
    role: state.login.role,
});

const mapDispatchToProps = {
    fetchTools,
    deleteTool,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ToolsList);