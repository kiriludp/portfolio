
import React from 'react';
import "../assets/Portfolio.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {info} from "../components/Info.js";
import Projects from "../components/Projects";

function Portfolio() {
    return (
        <div className="port-body">
            
                <Row>
                    {info.portfolio.map((project, index)=>(
                    <Col key={index}>
                    <Projects image= {project.image} title={project.title} />
                    </Col>
                    ))}
                </Row>
                
        
            
            
        </div>
    );
};

export default Portfolio;