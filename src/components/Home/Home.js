import React, { useEffect, useState }  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import homeBackground from '../images/home-banner.jpg';
import './Home.css';

const Home = () => {
    const homeBanner = {
        width: "100%",
        height: "700px",
        backgroundImage: `url(${homeBackground})`
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
            <div style={homeBanner}>
            <Container>
                <Row>
                    <Col>
                    <h1 className="home-header">Welcome To Our University</h1>
                    <p className="home-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </Col>
                </Row>
            </Container>
            </div>
            <HomeService service={service}>

            </HomeService>
        </div>
    );
};

export default Home;