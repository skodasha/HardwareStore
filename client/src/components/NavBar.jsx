import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.ico'

function NavBar() {
        return (
            <header class="header">  
                <div class="wrapper">
                    <h1>Hardware store</h1>  
                    <nav>     
                        <a href="/">Main page</a>
                        <a href="/tools">Tools list</a>
                        <a href="/tools/add">Add new tool</a>
                    </nav>
                </div>
            </header>
        )

}

export default NavBar