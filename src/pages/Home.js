import "../assets/Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const style = {
    backgroundColor: '#FD8515',
    margin: '10% auto 10% auto',
}



function Home() {
        
    return (

    <div className="homepage">
    <Container className="title">
        <Row className="justify-content-lg">
            <Col lg="auto">
                Killian Podhajsky
            </Col>
        </Row>
    </Container>
    <Container className="border">
        <Row className="justify-content-md-center">
            <Col md="auto" className="styrow">
            <p style={style}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
        </Row>

    </Container>
    </div>
      
    )
    };
    
    export default Home;