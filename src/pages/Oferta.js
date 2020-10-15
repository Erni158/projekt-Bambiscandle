import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CloseIcon from '@material-ui/icons/Close';
import candles from '../data/candles';

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
                    {candles.map(item => 
                        <Col>
                            <h1 onClick={() => setIsOpen(!isOpen)} className="offer">{item.name}</h1>
                        </Col>
                    )}
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