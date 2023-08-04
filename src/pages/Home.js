import React from "react";
import "../assets/Home.css";
import { info } from "../components/Info";
import Smol from "../components/Smol";
import Socials from "../components/Socials";
import { Box } from "@mui/material";


function Home() {
  return (
    <div className="home">
      <div className="title">Home</div>


      <div className="home-body">
        <Box
          component={"main"}
          display={"flex"}
          flexDirection={{ xs: "column", med: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <h1>
            Hi Folks! I am{" "}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              {info.firstName}{" "}
            </span>
            .
          </h1>
          <h2>I am a {info.position}.</h2>
        </Box>
        <Box>
          <Box component={"ul"}>
            {info.miniBio.map((bio, index) => (
              <Smol key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>


          <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <Socials key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </div>
    </div>
  );
}


export default Home;