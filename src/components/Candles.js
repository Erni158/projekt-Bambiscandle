import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { motion } from 'framer-motion';
import Candle1 from '../img/1.jpg';
import Candle2 from '../img/2.jpg';
import Candle3 from '../img/3.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

const Candles = () => {
    const isMobile = useMediaQuery('(min-width:600px)');
    useEffect(() => {
        Aos.init({});
    }, []);

    const candle = {
        width: '100%',
        maxWidth: '350px',
        height: 'auto',
        border: '1px solid #fff',
        margin: '0 auto'
    };

    return <>
        <Container>
            <Row className="candles" sm={2} md={3} xs={1}>
                <Col>
                    <div data-aos={!isMobile && "zoom-in"} data-aos-offset="200">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 0.4 }}>
                                <Image style={candle} src={Candle1} />
                        </motion.div>
                    </div>
                </Col>
                <Col>
                    <div data-aos={!isMobile && "zoom-in"} data-aos-offset="200">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 0.8 }}>
                                <Image style={candle} src={Candle2} />
                        </motion.div>
                    </div>
                </Col>
                <Col>
                    <div data-aos={!isMobile && "fade-right"}>
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 1.2 }}>
                                <Image style={candle} src={Candle3} />
                        </motion.div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default Candles;