import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { info } from '../components/Info.js';
import Smol from "../components/Smol";
import Socials from "../components/Socials";
import '../assets/Home.css';
import Pic from '../assets/imgs/pic.jpg';



function Home() {
  return (
    <div className="home-body">

      <div className="header">
        <h1 id="page">Home</h1>
      </div>

      <Container fluid>
        <Row xs={1} md={2} lg={3} xl={4}>
          <Col>
      <div className="prof">
        <img src={Pic} height='300px' width='300px' id="pic" />  
      </div>
      </Col>
      <Col>
      <Stack gap= {2}>
      <div className="intro">
      <h2 id="intro">Hey Demons.... it's j'boi{" "}</h2>
           
           <span
           id="name"
             style={{
               background: info.gradient,
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
             }}>
             {" "}
             {info.firstName}{" "}
             </span>
      </div>
      <div className="emojis">
      {info.miniBio.map((bio, index) => (
              <Smol key={index} emoji={bio.emoji} text={bio.text} />
            ))}
      </div>
      </Stack>
      </Col>
      </Row>
      <Row>
      <Col xs={1}>
      <div className='contact'>
      <p>{info.socials.map((social, index) => (
                  <Socials key={index} link={social.link} icon={social.icon} label={social.label} className="socials" />
               ))}</p>

      </div>
      </Col>
      </Row>
      </Container>
    </div>
  )
}


export default Home