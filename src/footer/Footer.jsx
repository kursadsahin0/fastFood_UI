import React from 'react';
import './Footer.css';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <>
            <Container fluid className='footers'>
                <Row className='footer'>
                    <Col>
                        <ul>
                            <li>About Us</li>                         
                            <li>Who we are</li>
                            <li>Contact us</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Kampanyalar</li>
                            <li>Aktif Kampanyalar</li>
                            <li>Üye Ol</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Yardım</li>
                            <li>Sıkça Sorulan Sorular</li>
                            <li>Canlı Yardım</li>
                            <li>İşlem Rehberi</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer
