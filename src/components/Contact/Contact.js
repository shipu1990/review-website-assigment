import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import contactBackground from '../images/contact-banner.jpg';
import './Contact.css';

const Contact = () => {
    const contactBanner = {
        width: "100%",
        height: "450px",
        backgroundImage: `url(${contactBackground})`
    };
    return (
        <div>
           <div style={contactBanner}>
            <Container>
                <Row>
                    <Col>
                    <h1 className="contact-header">Contact Us</h1>
                    <p className="contact-para">We All are here to Listening from you</p>
                    </Col>
                </Row>
            </Container>
            </div>
            <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="contact-title">Our Contact Info</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className="campus-head">Main Campus Address</h4>
                        <p className="info-para"><span>Address:</span> Unisco university Albany, NY USA. 11001</p>
                        <p className="info-para"><span>Email:</span> info@unisco.edu</p>
                        <p className="info-para"><span>Phone:</span> +91 555 668 986</p>
                        <h4 className="campus-head">Second Campus Address</h4>
                        <p className="info-para"><span>Address:</span> Unisco university Albany, NY USA. 11001</p>
                        <p className="info-para"><span>Email:</span> info@unisco.edu</p>
                        <p className="info-para"><span>Phone:</span> +91 555 668 986</p>
                    </Col>
                    <Col>
                    <Form>
                        <Form.Group className="contact-info">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="contact-info">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Mobile Number" />
                        </Form.Group>
                        <Form.Group className="contact-info">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="contact-info">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    />
                        </Form.Group>
                        <Button className="btn-common">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Contact;