import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import '../assets/Portfolio.css';
import Brick from '../assets/imgs/brick2.png';
import Horror from '../assets/imgs/horror2.png';
import Meditation from '../assets/imgs/Meditation2.png';
import Quiz from '../assets/imgs/quiz2.png';




function Portfolio() {
  return (
    <div className="body">
      <div className="header">
      <h1>Portfolio</h1>
      </div>
      <Row>
        <Col md='5'>
            <div className="pb-3">
                <a href="https://github.com/kiriludp/front-end-Horror">
                    <img className="images" src={Horror} alt="screenshot of game homepage" />
                </a>
            </div>
            <div className="description">
                <p>A Choose-Your-Own-Adventure game with multiple choices and endings based on classic horror tropes</p>
            </div>
        </Col>
        <Col md='5'>
            <div className="pb-3">
                <a href="https://github.com/kiriludp/meditation-app">
                    <img className="images" src={Meditation} alt="screenshot of app" />
                </a>
            </div>
            <div className="description">
                <p>An app designed to assist in meditation featuring various relaxing sounds and images.</p>
            </div>
        </Col>
      </Row>
      <Row>
        <Col md='5'>
            <div className="pb-3">
                <a href="https://github.com/kiriludp/scary-movies">
                    <img className="images" src={Quiz} alt="screenshot of quiz homepage" />
                </a>
            </div>
            <div className="description">
                <p>A multiple choice quiz built with JavaScript and including a count down timer</p>
            </div>
        </Col>
        <Col md='5'>
            <div className="pb-3">
                <a href="https://github.com/kiriludp/brick-breaker">
                    <img className="images" src={Brick} alt="screenshot of game after it has been started" />
                </a>
            </div>
            <div className="description">
                <p>A classic arcade style Brick Breaking app which tracks scores and gives you lives. </p>
            </div>
        </Col>
      </Row>
    
    <div className='upcomming'>
        <h4>Upcoming Projects</h4>
        <ul>
            <li>Active E-Commerce Website</li>
            <li>Writing and Comic hosting website</li>
            <li>Game Website</li>
            <li>Inclusive Dating Sim</li>
        </ul>
    </div>
      
      
      
    </div>
  );
}

export default Portfolio;
