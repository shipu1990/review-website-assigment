import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import aboutBackground from '../images/about-banner.jpg';
import aboutImg from '../images/about-images.jpg';

const About = () => {
    const aboutBanner = {
        width: "100%",
        height: "450px",
        backgroundImage: `url(${aboutBackground})`
    };
    return (
        <div>
            <div style={aboutBanner}>
            <Container>
                <Row>
                    <Col>
                    <h1 className="common-header">About Us</h1>
                    <p className="common-para">We are number one university in the world</p>
                    </Col>
                </Row>
            </Container>
            </div>
            <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="contact-title">Our Campus</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className="campus-head">Our History</h4>
                        <p className="info-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
                        <p className="info-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
                        <p className="info-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
                        <p className="info-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p>
                    </Col>
                    <Col>
                        <img src={aboutImg} alt="about images"/>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default About;