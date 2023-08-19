import React from 'react';
import "../assets/Resume.css";


export default function Resume() {

  return(
    <div className="resume-body">
      <div className="head">
        <h1 id="header">Resume</h1>
      </div>
      <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
              <div className="title">
              
                <h4 className="card-name">Education</h4>
                
                 <p> Here is where all the information one might need about my education</p>
                
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <div className="title">
              <p className="details">
                <h4 className="card-name">Languages</h4>
                
                  <ul>
                    <li>Language</li>
                    <li>Language</li>
                    <li>Language</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <div className="title">
                <h4 className="card-name">Skills</h4>
                <p className="details">
                <ul>
                    <li>Skills</li>
                    <li>Skills</li>
                    <li>Skills</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <div className="title">
                <h4 className="card-name">Experience</h4>
                <p className="details">
                <ul>
                    <li>WorkWorkWork</li>
                    <li>WorkWorkWork</li>
                    <li>WorkWorkWork</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div> 
        
      
    

  );
}


