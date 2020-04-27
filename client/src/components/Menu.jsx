import React, { Fragment, useState } from 'react';
import { ButtonGroup, Dropdown, Form, DropdownButton, Button } from 'react-bootstrap';

function Menu({ onSend }) {
    return(
        <div class='menu'>
            <h2>materials and tools</h2>
            <ButtonGroup vertical>
                <ButtonGroup className='btnGroup' vertical>
                    <Button className='btnSection' variant="warning" onClick={(e) => onSend('air compressors and tools', 'all')}>Air compressors and tools</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('air compressors and tools', 'air compressors')}>Air compressors</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('air compressors and tools', 'air compressor tool')}>Air compressor tool</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('air compressors and tools', 'nailers')}>Nailers</Button>
                </ButtonGroup>
                <ButtonGroup className='btnGroup' vertical>
                    <Button className='btnSection' variant="warning" onClick={(e) => onSend('gardening tools','all')}>Gardening tools</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('gardening tools','blade sharpeners')}>Blade sharpeners</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('gardening tools','cultivators, forks and hoes')}>Cultivators, forks and hoes</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('gardening tools','floral snips and scissors')}>Floral snips and scissors</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('gardening tools','push brooms')}>Push brooms</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('gardening tools','rakes')}>Rakes</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('gardening tools','shovels, scoops and spades')}>Shovels, scoops and spades</Button>
                </ButtonGroup>
                <ButtonGroup className='btnGroup' vertical>
                    <Button className='btnSection' variant="warning" onClick={(e) => onSend('hand tools','all')}>Hand tools</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('hand tools','screwdrivers')}>Screwdrivers</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('hand tools','wrenches')}>Wrenches</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('hand tools','pliers')}>Pliers</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('hand tools','vices and clamps')}>Vices and clamps</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('hand tools','hand saws and cutting tools')}>Hand saws and cutting tools</Button>
                </ButtonGroup>
                <ButtonGroup className='btnGroup' vertical>
                    <Button className='btnSection' variant="warning" onClick={(e) => onSend('ladders','all')}>Ladders</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('ladders','extension ladders')}>Extension ladders</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('ladders','step ladders')}>Step ladders</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('ladders','multi-position ladders')}>Multi-position ladders</Button>
                </ButtonGroup>
                <ButtonGroup className='btnGroup' vertical>
                    <Button className='btnSection' variant="warning" onClick={(e) => onSend('power tools','all')}>Power tools</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('power tools','drills')}>Drills</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('power tools','circular saws')}>Circular saws</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('power tools','grinders')}>Grinders</Button>
                </ButtonGroup>
                <ButtonGroup className='btnGroup' vertical>
                    <Button className='btnSection' variant="warning" onClick={(e) => onSend('measuring tools','all')}>Measuring tools</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('measuring tools','hanging scales')}>Hanging scales</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('measuring tools','levels')}>Levels</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('measuring tools','tape measures')}>Tape measures</Button>
                </ButtonGroup>
                <ButtonGroup className='btnGroup' vertical>
                    <Button className='btnSection' variant="warning" onClick={(e) => onSend('protective and safety equipment','all')}>Protective and safety equipment</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('protective and safety equipment','ear protection')}>Ear protection</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('protective and safety equipment','hard hats')}>Hard hats</Button>
                    <Button className='btnSubsection' variant="warning" onClick={(e) => onSend('protective and safety equipment','work gloves')}>Work gloves</Button>
                </ButtonGroup>
                <Button className='btnSection' variant="warning" onClick={(e) => onSend('all','all')}>all</Button>
            </ButtonGroup>
        </div>  
    )
}

export default Menu;