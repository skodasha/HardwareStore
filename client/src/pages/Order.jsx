import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import  NavBar  from '../components/NavBar';
import { Table, Button, Nav, Form, FormControl, Input } from 'react-bootstrap';
import { fetchTools } from '../store/tools-store';
import { toolsAPI } from '../api/tools-api';
import  CountTools from '../components/CountTools';
import { fetchToolsInCart, deleteTool, updateTool } from '../store/cart-store';
import { sendOrder } from '../api/order-api';

function Order({ fetchToolsInCart, deleteTool, fetchTools,updateTool, cart, tools}) {
    useEffect(() => {
        fetchToolsInCart();
        
        fetchTools('all', 'all');
	},[]);

    useEffect(() => {
     
	},[cart, tools]);

    return <div>
        <header class="header">  
        <div class="wrapper">
            <h1>Hardware store</h1>  
            <nav>     
                <a href="/">Main page</a>
            </nav>    
        </div>
        </header>
        <div class='toolsCart'>
            <h2>Your order is accepted.</h2>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    tools: state.reducerTools,
    cart: state.reducerCart,
});

const mapDispatchToProps = {
    fetchToolsInCart,
    fetchTools,
    deleteTool,
    updateTool,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Order);
