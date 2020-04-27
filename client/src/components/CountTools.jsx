import React, { Component, useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.ico'

function CountTools({price}) {
    const [count, setCount] = useState(1);

    let inc = (e) => {
        if(count < 10){
            let value = count + 1;
            setCount(value);
        }
    }

    let dec = (e) => {
        if(count > 1){
            let value = count - 1;
            setCount(value);
        }
    }

    return (
        <div>
            <h1>{price * count}$</h1>
            <Button variant="outline-warning" onClick={(e) => {dec()}}>-</Button>
            <input type='text' id='count' value={count} readOnly/>
            <Button variant="outline-warning" onClick={(e) => {inc()}}>+</Button>
        </div>
    )

}

export default CountTools