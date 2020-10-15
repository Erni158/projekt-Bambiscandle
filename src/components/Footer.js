import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';

const FooterStyle = styled.footer`
    display: flex;
    background-color: gray;
    flex: 1;
    margin-top: 20px;
    padding: 20px;
`;

const Footer = () => {
    return <>
        <FooterStyle>
            <Container className="footer">
                <Row>
                    <Col>
                         <InstagramIcon />
                    </Col>
                </Row>
            </Container>
        </FooterStyle>
    </>
}

export default Footer;