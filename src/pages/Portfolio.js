import '../assets/Portfolio.css';
import brick from '../assets/imgs/brick2.png';
import meditation from '../assets/imgs/Meditation2.png';
import horror from '../assets/imgs/horror2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';

function Portfolio() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    return (
    
    <div className='portfolio-body'>
         <Container className="head">
        <Row className="justify-content-lg">
            <Col lg="auto">
                Portfolio
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
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={meditation}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={horror}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
    );
    }
    
    export default Portfolio;