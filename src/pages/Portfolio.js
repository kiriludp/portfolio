import "../assets/Portfolio.css";
import brick from "../assets/imgs/brick2.png";
import meditation from "../assets/imgs/Meditation2.png";
import horror from "../assets/imgs/horror2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

function ModalOnClick(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Card>
            <Card.Img
              img className="who" 
              src={brick}
              alt="card text">
            </Card.Img>
          </Card>
        </Container>
        <div className="multi-btn">
          <Button>H</Button>
          <Button>E</Button>
          <Button>Y</Button>
          <Button>!</Button>
        </div>
      </Modal.Body>
      
    </Modal>
  )
};

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [modalShow, setModalShow] =useState(false);

  return (
    <div className="portfolio-body">
      <Container className="head">
        <Row className="justify-content-lg">
          <Col lg="auto">Portfolio</Col>
        </Row>
      </Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block" src={brick} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" 
          src={meditation} 
          alt="Second slide" />
          <Carousel.Caption>
           <p>
            <Button variant="primary" onClick={() => setModalShow(true)}>Meditation App </Button> </p>
            <ModalOnClick show={modalShow} onHide={() => setModalShow(false)} />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={horror} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Portfolio;
