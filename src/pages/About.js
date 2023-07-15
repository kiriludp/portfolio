import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/About.css'

function About() {
    return (
        <div>
        <Container className="title">
        <Row className="justify-content-lg">
            <Col lg="auto">
                About
            </Col>
        </Row>
    </Container>
    </div>
    );
}

export default About;