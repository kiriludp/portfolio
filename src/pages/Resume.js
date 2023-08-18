import React from 'react';
import '../assets/Resume.css';
import {info} from "../components/Info";


  

export default function() {

  return(
    <div className="res-body">
      <div id="title">
        <h1 id="header">Resume</h1>
      </div>
      <div className="timeline">
      <div className="info">
        <div className="outer">
          <div className="card">
            <div className="details">
            <h6 className="label">Education</h6>
              {info.education.map((education, index) => (
              <p key={index}> {education.school}< br/> {education.diploma} </p>
            ))}
            </div>
          </div>
          <div className="card">
            <div className="details">
              <h6 className="label">Experience</h6>
              <p>Work Experience Here.</p>
            </div>
          </div>
          <div className="card">
            <div className="details">
            <h6 className="label">Languages</h6>
              <ul>
                <li>Ones I know</li>
              </ul>
              <ul>
                <li>Ones I'm familiar with</li>
              </ul> 
            </div>
          </div>
          <div className="card">
            <div className="details">
            <h6 className="label">Skills</h6>
              <p>My Skills</p>
            </div>
          </div>
        </div>
      
      </div>
      </div>
    </div>
  )

}