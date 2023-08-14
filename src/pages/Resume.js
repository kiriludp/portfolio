import React, {useContext} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import {info} from "../components/Info";

const PINK = 'rgba(255, 192, 203, 0.6)';
const BLUE = 'rgba(0, 0, 255, 0.6)';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Resume() {
  return (
    <div className="res-body">
      <div id="title">
        <h1 id="header">Resume</h1>
      </div>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <h6>Education Experience</h6>
          {info.education.map((education, index) => (
          <p key={index}>{education.school}<br/>{education.diploma}</p>))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <h6>Work Experience</h6>
          <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <h6>Education Experience</h6>
          {info.education.map((education, index) => (
          <p key={index}>{education.school}<br/>{education.diploma}</p>))}
        </Accordion.Body>
      </Accordion.Item>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  );
}

export default Resume;

    