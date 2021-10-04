import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HeaderTop from '../HeaderTop/HeaderTop';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
    return (
       <div>
        <HeaderTop></HeaderTop>
        <Container>     
            <Row>
            <Col sm={4} className="logo">
                <img src={logo} alt="Logo"/>
            </Col>
            <Col sm={8}>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to ="/about">About us</NavLink>
                    <NavLink to="/service">Our Services</NavLink>
                    <NavLink to="/contact">Contact us</NavLink>
                </nav>
            </Col>
            </Row>
        </Container>
       </div>
        
    );
};

export default Header;