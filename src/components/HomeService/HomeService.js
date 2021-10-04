import React, { useEffect, useState }  from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './HomeService.css';

const HomeService = (props) => {
    const {service} = props;
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="course-title">Our Course List</h2>
                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4">
                    {
                       service.slice(0, 3).map(course => <Col key={course.id}><Card>
                        <Card.Img variant="top" src={course.img} />
                        <Card.Body>
                        <Card.Title>{course.name}</Card.Title>
                        <Card.Text>{course.des}</Card.Text>
                        </Card.Body>
                    </Card>  
                    </Col>) 
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeService;