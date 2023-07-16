import '../assets/Resume.css'
import brick from '../assets/imgs/brick2.png';
import meditation from '../assets/imgs/Meditation2.png';
import horror from '../assets/imgs/horror2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';


function Resume() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
    <div className="resume-body">
     <Container className="title">
        <Row className="justify-content-lg">
            <Col lg="auto">
                Resume
            </Col>
        </Row>
    </Container>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          src={brick}
          alt="First slide"
        />
        <div className="fadedbox d-block">
          <div className="project caption">Brick Breaker Game</div>
        </div>
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={meditation}
          alt="Second slide"
        />
        <div className="faded d-block w-100">
          <div className="project caption">Brick Breaker Game</div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={horror}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    );
    }
    
    export default Resume;

    