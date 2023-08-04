import React from 'react';
import '../assets/About.css';
import {info} from "../components/Info";






 function About() {
    const firstName = info.firstName.toLowerCase()


    return (
        <div className="abso">
            <div className="top">
               
                <h1>about {firstName}</h1>
            </div>
            <div className="bio-graph">
                {info.bio}
            </div>
            <div className="skillz">
               
                <h1>proficient with</h1>
                <ul className="skills">
                {info.skills.proficientWith.map((proficiency, index) =>
                    <li key={index}>{proficiency}</li>)}
                </ul>
                <h1>Exposed To</h1>
                <ul className="skills">
                {info.skills.exposedTo.map((skill, index) =>
                    <li key={index}>{skill}</li>)}
                </ul>
            </div>
            <div className="hobbiez">
                <h1>hobbies/interests</h1>
                <ul>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby.text}</li>
                    ))}
                </ul>
            </div>
        </div>
        );
    }




 export default About;