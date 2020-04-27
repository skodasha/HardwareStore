import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import  NavBar  from '../components/NavBar';
import { Table, Button, Nav, Form, FormControl, Input } from 'react-bootstrap';
import { fetchTools } from '../store/tools-store';
import { toolsAPI } from '../api/tools-api';
import  Order from '../pages/Order';
import { fetchToolsInCart, deleteTool, updateTool } from '../store/cart-store';
import { sendOrder } from '../api/order-api';
import {Redirect} from "react-router-dom";

function Cart({ fetchToolsInCart, deleteTool, fetchTools,updateTool, cart, tools}) {
    let total = 0;
    
    let inc = (e, item) => {
        if(item.count < 10){
            item.count = item.count + 1;
            total += item.price;
            updateTool(item._id, item.count);
        }
    }

    let dec = (e, item) => {
        if(item.count > 1){
            item.count = item.count - 1;
            total -= item.price;
            updateTool(item._id, item.count);
        }
    }

    let send = (e, items) => {
        sendOrder(items).then(res => {
            console.log("fhhf");
        });
        return <Redirect to='/order'/>
    }
    useEffect(() => {
        fetchToolsInCart();
        
        fetchTools('all', 'all');
	},[]);

    useEffect(() => {
     
	},[cart, tools]);

    let cartTools = [];
    if(tools.length !== 0){
        cart.map(item => {
            let tool = tools.find((i) => i._id === item.id);
            tool.count = item.count;
            total += tool.price * item.count;
            cartTools.push(tool);
        })
    }

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
            {
                cartTools.length > 0 ? 
                cartTools.map(
                    (item, idx) =>
                    <tr class="item" key={idx}>
                    <td>
                        <img class="item-pic" src={`${window.location.origin}/uploads/${item.file}`}/>
                        <div class="item-info">
                            <h3>{item.title}</h3>
                            <h4>{item.brand}</h4>
                            <h5>{item.description}</h5>
                            <div className='toolPrice'>  
                            <div>
                            <h1>{item.price * item.count}$</h1>
                            <Button variant="outline-warning" onClick={(e) => {dec(e,item)}}>-</Button>
                            <input type='text' id='count' value={item.count} readOnly/>
                            <Button variant="outline-warning" onClick={(e) => {inc(e,item)}}>+</Button>
                            </div>
                            </div>
                            <div class='remove'>
                            <button  onClick={ (e) => {deleteTool(item._id)}}>Remove from cart</button>
                            </div>
                            
                        </div>    
                    </td>
                    </tr>
                ):
                <h2>Your cart is empty.</h2>
            }
            {
                cartTools.length > 0 ?
                <label>Total: {total}$
                <button onClick={(e) => {
                   send({cartTools})
                }}>Order</button></label>:null
            }
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
)(Cart);

//<Button variant="outline-danger" onClick={ (e) => {deleteTool(item._id)}}>Delete</Button>