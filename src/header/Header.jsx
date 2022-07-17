import React from 'react'
import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Col, Row } from 'react-bootstrap';

import './Header.css';



const Header = () => {

    return (
        <>
            <Container fluid>
                <Row className='rows'>
                    <Col> <img src={logo} alt='logo' className='logo' /></Col>

                    <Col className='btns'> <button className='translate'>En</button>
                        <button className='iconBtn'
                        > <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></button>


                        <button className='iconBtn cart' data-count="0">  <svg xmlns="http://www.w3.org/2000/svg" className='icons' width="25" height="25" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                        </svg></button>
                    </Col>


                </Row>
            </Container>

        </>
    )
}

export default Header;
