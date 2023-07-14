import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {

    return (
    <div className="resume-body">
     <Container className="title">
        <Row className="justify-content-lg">
            <Col lg="auto">
                Resume
            </Col>
        </Row>
    </Container>
    </div>
    );
    }
    
    export default Resume;