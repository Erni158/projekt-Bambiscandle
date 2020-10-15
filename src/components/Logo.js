import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Image} from 'react-bootstrap';
import Moon from './../img/s.svg';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logoMobile from './../img/logoMobile2.png';

const Styles = styled.div`
    .title {
        font-size: 4.5em;
        font-family: 'Parisienne', cursive;
        text-align: center;
        margin-top: 30px;
        letter-spacing: 2px;
    }

    .link {
         text-decoration: none;
         color: white;
    }

    .logo {
        display: block;
        width: 160px;
        height: 160px;
        margin: 0 auto;
        margin-top: 5px;
    }

    .logoMobile {
        width: 100%;
        height: auto;
    }
`;

const Logo = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return(
        <Styles>
            <Container>
                <Row>
                    <Col>
                        { matches && <h1 className="title"><Link className="link" to="/">Bambi's Candle</Link></h1> }
                    </Col>
                 </Row> 
                 <Row>
                     <Col>
                         { matches ? <Image className="logo" src={Moon} roundedCircle /> : <Image className="logoMobile" src={logoMobile} /> }
                     </Col>
                 </Row>
            </Container>
        </Styles>
    )
}

export default Logo;