import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Table, Button, Navbar, Nav, Form, FormControl, } from 'react-bootstrap';
import { fetchTools, showTools } from '../store/tools-store';
import { addToolInCartDB, fetchToolsInCart } from '../store/cart-store';
import { logout } from '../store/login-store';
import  Menu from '../components/Menu';
import logo from '../logo.ico';

function ToolsList({ fetchTools, addToolInCartDB, tools, user, name, role, logout, cart}) {
    const [findTool, setFindTool] = useState();
    
    const onChangeFindTool = e => {
        setFindTool(e.target.value);
    }

    useEffect(() => {
        fetchTools('all', 'all');
        fetchToolsInCart();
	},[]);

	useEffect(() => {
    }, [tools, user, name, role, cart]);
    
    const onSubmit = (e) => {
        e.preventDefault();
        fetchTools('all','all', findTool);
    }
    return <div>
        <header class="header">  
        <div class="wrapper">
            <h1>Hardware store</h1>  
            <nav>     
                <a href="#">home</a>
                {
                    (role === 'admin')?<a href="/tools">Edit mode</a>:
                    <a href="/cart">Cart</a>
                }
                {
                    (role === 'not authenticate')?<a href="/Login">Sing in/Create an Account</a>:
                    <a onClick={logout}>Log out</a>
                }
            </nav>
            <Form inline onSubmit={onSubmit}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={onChangeFindTool} />
                <Button variant="outline-info" type='submit'>Search</Button>
            </Form>
        </div>
        </header>
        <main class="main">
        <div class="main--section1">
            <div class="main--section1-inst">
            </div>
            <div class="main--section1-item">
                <div class="wrapper">
                    <h1><br/><span>Hardware store</span></h1>
                    <p>At True Value, we’re more than just a hardware store; we’re a part of your community.</p>
                    <p>A place that you can call home. Where you can go to find necessities for every day living, products to tackle that next big DIY project and expert advice. </p>               
                </div>
            </div>
        </div>
        <div class="main--section7">
            <div class="wrapper">
                <Menu class='menu' onSend={(section, subsection) => fetchTools(section, subsection)}/>
                <div class='tool'>
                {tools.map(
                    (item, idx) =>
                    <tr key={idx}>
                    <td class="tool--item">
                        <img class="tool--item-pic" src={`${window.location.origin}/uploads/${item.file}`}/>
                        <div class="tool--item-info">
                            <h3>{item.title}</h3>
                            <h4>{item.brand}</h4>
                            <h5>{item.description}</h5>
                            <div className='toolPrice'>
                                <h1>{item.price}$</h1>
                                <Button variant="outline-warning" onClick={(e) => {addToolInCartDB(item._id)}}>add to card</Button>
                            </div>
                        </div>    
                    </td>
                    </tr>
                )}
                </div>
            </div>
        </div>
        
        
        </main>

       
        
        <footer class="footer">
        <h1>Hardware store</h1>
        <nav>
            <a href="">E-mail: 1mirnamarse1@gmail.com</a>
            
        </nav>
        <a href="tel:+375293339510">Tel: +375(29)-333-95-10</a>
    </footer>
  
    </div> 
}

const mapStateToProps = (state) => ({
    tools: state.reducerTools,
    user: state.login.userIsAuthorized,
    name: state.login.name,
    role: state.login.role,
    cart: state.reducerCart,
});

const mapDispatchToProps = {
    fetchTools,
    showTools,
    logout,
    addToolInCartDB,
    fetchToolsInCart,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ToolsList);

/*
<td>
                            <img src={`${window.location.origin}/uploads/${item.file}`} className='imgTool'></img>	 
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
                            <Button variant="outline-warning" onClick={() => {window.location.href = `/tools/update?id=${item._id}`}}>add to card</Button>
                        </td> */