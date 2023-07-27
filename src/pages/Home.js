import React from 'react';
import "../assets/Home.css";
import {info} from "../components/Info";
import Smol from "../components/Smol";
import Socials from "../components/Socials";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function Home() {
    return (
        <div className="home">
        <div className="title">
            Home
        </div>
        
        <div className="home-body">
            <Container className='head'>
                <Row md={{span: 6}}>
                    <Col md={{span: 12, offset: 6}}>
                <h1>Hi Folks! I am {info.firstName}.
                    </h1>
                <h2>I am a {info.position}.
                    </h2>
                    </Col>
                </Row>     
           <ul className="bio">
            {info.miniBio.map((bio, index) => (
                <Smol key={index} emoji={bio.emoji} text={bio.text} /> )
            )}    
            </ul>

            <ul className="social">
                {info.socials.map((social, index) => (
                <Socials key={index} link={social.link} label={social.label} />)
            )}
            </ul>
            
            
        </Container>    
        </div>
        </div>    
            

    )
}

export default Home;