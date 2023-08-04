import '../assets/Navigation.css';
import mdMenu from '../assets/imgs/menu.svg';
import mdClose from '../assets/imgs/close.svg';
import { Nav } from 'react-bootstrap';
import React, {useState} from 'react';


function Navigation() {


  const [navbarOpen, setNavbarOpen] = useState(false);
   
    return (
      <div className="navi">
        <button className="toggle"
        onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? (<img src={mdClose} style={{width: '32px', height: '32px'}} />
    ) : (
      <img src={mdMenu}
        style={{
          width: '32px',
          height: '32px',
        }}
        />
    )}
        </button>
        <ul className={`menu-nav${navbarOpen ? 'show-menu' : ''}`}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </ul>
           
      </div>
    )
}
 


export default Navigation;