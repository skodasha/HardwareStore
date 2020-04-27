import React, { useEffect } from 'react'
import queryString from 'query-string';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { fetchTools, updateTool } from '../store/tools-store';
import  NavBar  from '../components/NavBar';

function ToolsUpdate({location, tools, fetchTools, updateTool, name, role}) {
    useEffect(() => {
        fetchTools('all', 'all','', { name, role });
    },[]);
    
    useEffect(() => {
        
    }, [tools]);

    const {id} = queryString.parse(location.search);

    if(id){
        var { title, description, price, brand } = (tools.length) ? tools.find((item) => item._id === id) : {};
    }

    let data = {};

    return (
        <div class='updatePage'>
            <NavBar/>
            <div className='form'>
            <Form>
                <Form.Group as={Row} controlId="title">
                    <Form.Label column sm='2'>Title tool:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter title..." defaultValue={title} ref={ref => data.title = ref}/>
                    </Col>    
                </Form.Group>
                <Form.Group as={Row} controlId="brand">
                    <Form.Label column sm='2'>Brand:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter brand..." defaultValue={brand} ref={ref => data.brand = ref}/>
                    </Col>    
                </Form.Group>
                <Form.Group as={Row} controlId="description">
                    <Form.Label column sm='2'>Description</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows="4" defaultValue={description} ref={ref => data.description = ref}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="price">
                    <Form.Label column sm='2'>Price:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter price..." defaultValue={price} ref={ref => data.price = ref}/>
                    </Col>
                </Form.Group>
                <Button variant="info" type="submit" className='btnSubmit' onClick={ (e) => {
                    updateTool(id, data.title.value, data.description.value, data.price.value, data.brand.value);
                }}>
                    Update
                </Button>
            </Form>
        </div>
        </div>
    )
    
}

const mapStateToProps = (state) => ({
    tools: state.reducerTools,
    name: state.login.name,
    role: state.login.role,
});

const mapDispatchToProps = {
    fetchTools,
    updateTool,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ToolsUpdate);