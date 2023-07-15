import '../assets/Portfolio.css';
import brick from '../assets/imgs/brick2.png';
import meditation from '../assets/imgs/Meditation2.png';
import horror from '../assets/imgs/horror2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {

    return (
    
    <div className='portfolio-body'>
         <Container className="title">
        <Row className="justify-content-lg">
            <Col lg="auto">
                Portfolio
            </Col>
        </Row>
    </Container>
    <Carousel>
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={brick}
            alt="First slide"/>
        
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>We will put a link here</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={meditation}
            alt="First slide"/>
        
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>We will put a link here</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={horror}
            alt="First slide"/>
        
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>We will put a link here</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
    
    );
    }
    
    export default Portfolio;