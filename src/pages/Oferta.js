import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CloseIcon from '@material-ui/icons/Close';

const Style = styled.div`
    .offer{
        width: auto;
        color: white;
        font-size: 3em;
        font-family: 'Parisienne', cursive;
        letter-spacing: 2px;
        border-bottom: 1px solid #fff;
        margin: 0;
        padding: 0;
        text-align: center;
        margin-bottom: 100px;
        margin-top: 30px;
    }
`;

const variants = {
    open: { opacity: 1, clipPath: 'circle(100%)' },
    closed: { opacity: 0, clipPath: 'circle(0%)' },
};

const popup = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    zIndex: '5'
};

const Oferta = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <Container>
            <Style>
                <Row md={3} xs={1}>
                    <Col>
                        <h1 onClick={() => setIsOpen(!isOpen)} className="offer">Autumn Fire</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Halloween</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Enchanted Forest</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Witch's Poison</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Morning Coffee</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Cotton Cloud</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Tranquility</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Yule's Eve</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Winter Solstice</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Mermaid</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Witch's Infusion</h1>
                    </Col>
                    <Col>
                        <h1 className="offer">Love Spell</h1>
                    </Col>
                </Row>
            </Style>
        </Container>
        <motion.div 
            style={popup}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.8 }}
            >    
            <div onClick={ () => setIsOpen(false) }><CloseIcon /></div>
        </motion.div>
    </>
}

export default Oferta;