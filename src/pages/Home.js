import React from 'react';
import "../assets/Home.css";
import {info} from "../components/Info";
import Smol from "../components/Smol";
import Socials from "../components/Socials";





function Home() {
    return (
        <div className="home-body">
            <div className="head">
                <h1>Hi Folks! I am {info.firstName}.
                    </h1>
                <h2>I am a {info.position}.
                    </h2>
            </div> 
           <ul>
            {info.miniBio.map((bio, index) => (
                <Smol key={index} emoji={bio.emoji} text={bio.text} /> )
            )}    
            </ul>

            <ul>
                {info.socials.map((social, index) => (
                <Socials key={index} link={social.link} label={social.label} />)
            )}
            </ul>
            
            
        </div>    
            
            

    )
}

export default Home;