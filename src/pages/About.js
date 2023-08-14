import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/About.css';
import {info} from "../components/Info";


 function About() {

    const firstName = info.firstName.toLowerCase()

    return (
        <div className="about-body">
            <div className="header">
                <h1 id="page">About</h1>
            </div>
            <Container>
                <Row className="row">
                    <Col sm={8}>
                        {info.bio}
                    </Col>
                </Row>
                <Row>
                    <Col sm={5} className="column">
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby.text}</li>
                    ))}
                    </Col>
                    <Col sm={5} className="column">
                    {info.skills.map((skills, index) =>
                    <li key={index}>{skills.example}</li>)}
                    </Col>
                </Row>
            </Container>
            <div className="contact">
                here will be the contact info or whatevvvs
            </div>


                

        </div>
        );
    }




 export default About;