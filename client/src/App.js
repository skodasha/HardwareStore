import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import ToolsList from './pages/ToolsList'
import ToolsInsert from './pages/ToolsInsert'
import ToolsUpdate from './pages/ToolsUpdate'
import Login from './pages/Login'
import Main from './pages/Main'
import Cart from './pages/Cart'
import Order from './pages/Order'

import { fetchTools } from './store/tools-store'

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' exact component={Login}/>
                <Route path='/' exact component={Main}/>
                <Route path='/cart' exact component={Cart}/>
                <Route path='/order' exact component={Order}/>
                <Route path="/tools" exact component={ToolsList} />
                <Route path="/tools/add" exact component={ToolsInsert} />
                <Route path="/tools/update/" exact component={ToolsUpdate} />
            </Switch>
            
        </Router>
        
    )
}

const mapStateToProps = (state) => ({
    tools: state.reducerTools,
    userIsAuthorized: state.login.userIsAuthorized,
    cart: state.reducerCart,
});

export default connect(
	mapStateToProps,{}
)(App);