import React, { useEffect, useState }  from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import aboutBackground from '../images/service-banner.jpg';
import './Service.css';

const Service = () => {
    const serviceBanner = {
        width: "100%",
        height: "450px",
        backgroundImage: `url(${aboutBackground})`
    };
    const [service, setService] = useState ([]);
    //console.log(service);
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
           <div style={serviceBanner}>
            <Container>
                <Row>
                    <Col>
                    <h1 className="common-header">Our Courses</h1>
                    <p className="common-para">Cheek Our Latest Courses That Can Help Your career</p>
                    </Col>
                </Row>
            </Container>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="course-title">Our Course List</h2>
                    </Col>
                </Row>
                <Row xs={1} md={4} className="g-4">
                    {
                       service.map(course => <Col key={course.id}><Card>
                        <Card.Img variant="top" src={course.img} />
                        <Card.Body>
                        <Card.Title>Course Name: {course.name}</Card.Title>
                        <Card.Text>Fee: {course.fee}</Card.Text>
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

export default Service;