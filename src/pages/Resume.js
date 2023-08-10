import React from 'react';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';
import { info } from '../components/Info';
import '../assets/Resume.css';



function Resume() {
    
    const [ flip, setFlip] = useState(false);

    return (
        <div className="about-body">
            <div className="header">
                <h1 id="page">Resume</h1>
            </div>
            <Container className="card-grid">
                <div className="card">
                    <div className={`card ${flip ? "flip" : ""}`} id="cards">
                        <div className="front" onClick={() => setFlip(!flip)}>Education
                        </div>
                        <div className="back" onClick={() => setFlip(!flip)}>
                        <p>Here will be the Education information</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>


    )
}


export default Resume

    