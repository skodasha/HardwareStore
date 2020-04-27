import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { addToolToBD } from '../store/tools-store';
import { connect } from 'react-redux';
import  NavBar  from '../components/NavBar';

function ToolsInsert({addToolToBD, tools}) {
    const [file, setFile] = useState();
    const [title, setTitle] = useState();
    const [brand, setBrand] = useState();
    const [section, setSection] = useState('air compressors and tools');
    const [subsection, setSubsection] = useState('air compressors');
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [filename, setFilename] = useState('Choose picture');

    useEffect(() => {
    }, [tools]);

    const onChangeFile = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }
    const onChangeTitle = e => {
        setTitle(e.target.value);
    }
    const onChangeDescription = e => {
        setDescription(e.target.value);
    }
    const onChangePrice = e => {
        setPrice(e.target.value);
    }
    const onChangeSection = e => {
        setSection(e.target.value);
    }
    const onChangeSubsection = e => {
        setSubsection(e.target.value);
    }
    const onChangeBrand= e => {
        setBrand(e.target.value);
    }

    const onSubmit = async (e) => {
        //e.preventDefault();
        if(!file || !title || !description || !price || !brand){
            alert('Check fields!')
        }else{
            const formData = new FormData();
            formData.append('file', file);
            formData.append('title', title);
            formData.append('brand', brand);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('section', section);
            formData.append('subsection', subsection);
            addToolToBD(formData)
        }
        
    } 

    let subsections = {
        'air compressors and tools': ['air compressors', 'air compressor tool', 'nailers'],
        'gardening tools': ['blade sharpeners', 'cultivators, forks and hoes','floral snips and scissors', 'push brooms','rakes', 'shovels, scoops and spades'],
        'hand tools':['screwdrivers', 'wrenches', 'pliers', 'vices and clamps', 'hand saws and cutting tools'],
        'ladders':['extension ladders', 'step ladders', 'multi-position ladders'],
        'power tools':['drills', 'circular saws', 'grinders'],
        'measuring tools':['hanging scales', 'levels', 'tape measures'],
        'protective and safety equipment':['ear protection', 'hard hats', 'work gloves'],
    };

    return(
        <div class='updatePage add'>
            <NavBar/>
            <div className='form'>
            <form onSubmit={onSubmit}>
                <Form.Group as={Row} controlId="title">
                    <Form.Label column sm='3'>Title tool:</Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" placeholder="Enter title..." onChange={onChangeTitle}/>
                    </Col>    
                </Form.Group>
                <Form.Group as={Row} controlId="brand">
                    <Form.Label column sm='3'>Brand:</Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" placeholder="Enter brand..." onChange={onChangeBrand}/>
                    </Col>    
                </Form.Group>
                <Form.Group as={Row} controlId="description">
                    <Form.Label column sm='3'>Description:</Form.Label>
                    <Col sm="9">
                        <Form.Control as="textarea" rows="4" onChange={onChangeDescription}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="price">
                    <Form.Label column sm='3'>Price:</Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" placeholder="Enter price..." onChange={onChangePrice}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId='section'>
                    <Form.Label column sm='3'>Section: {section}</Form.Label>
                    <Col sm='9'>
                    <Form.Control as="select" multiple  onChange={onChangeSection}>
                        <option className='option'>air compressors and tools</option>
                        <option className='option'>gardening tools</option>
                        <option className='option'>hand tools</option>
                        <option className='option'>ladders</option>
                        <option className='option'>power tools</option>
                        <option className='option'>measuring tools</option>
                        <option className='option'>protective and safety equipment</option>
                    </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId='subsection'>
                    <Form.Label column sm='3'>Subsection: {subsection}</Form.Label>
                    <Col sm='9'>
                    <Form.Control as="select" multiple  onChange={onChangeSubsection}>
                        {subsections[section].map( (item) =>
                            <option className='option'>{item}</option>
                        )}
                    </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId='file'>
                    <Form.Label column sm='3'>Picture:</Form.Label>
                    <Col sm='9'>
                        <Form.File id="custom-file" label={filename} custom accept='image/*' onChange={onChangeFile}/>
                    </Col>
                </Form.Group>
                <Button variant="info" type="submit" className='btnSubmit'>
                    Add
                </Button>
            </form>
        </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
	tools: state.reducerTools,
});

const mapDispatchToProps = {
    addToolToBD,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ToolsInsert);