import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfoundBackground from '../images/notfound-bg.jpg';
import './NotFound.css';

const NotFound = () => {
    const notfoundBanner = {
        width: "100%",
        height: "450px",
        backgroundImage: `url(${notfoundBackground})`
    };
    return (
        <div>
            <div style={notfoundBanner}>
                
            </div>
            <Container>
                <Row>
                    <Col>
                    <h2>404</h2>
                    <p>The Page Your Are Looking For That Not Exit In This Website</p>
                    <button className="not-btn"> <Link to="/home">Home</Link></button>
                    </Col>
                </Row>
            </Container>
        </div> 
    );
};

export default NotFound;