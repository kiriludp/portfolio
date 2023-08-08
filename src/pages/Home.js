import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "../assets/Home.css";
import { info } from "../components/Info";
import Smol from "../components/Smol";
import Socials from "../components/Socials";
import pic from '../assets/imgs/pic.jpg';


function Home() {
  return (
    <div className="body">
      
        <h1 className="title"> Home </h1>
      
      <MDBContainer>
        <MDBRow>
          <MDBCol size="4">
            <img src={pic} style={{width: '400px', height:'400px'}} />
          </MDBCol>
          <MDBCol size="4" className="intro" style={{justifyContent:'center'}}>
            <h2>Hey Demons.... it's j'boi{" "}
            <p><span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              {info.firstName}{" "}
              </span></p></h2>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="3" style={{flexWrap:"wrap", display: 'Flex-end' }}>
          {info.miniBio.map((bio, index) => (
              <Smol key={index} emoji={bio.emoji} text={bio.text} />
            ))}

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
 
  );
}



export default Home;