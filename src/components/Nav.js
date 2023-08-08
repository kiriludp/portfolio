import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../assets/Nav.css';



function Nav() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/resume">
        Resume
      </a>
    </Menu>
  );
};

export default Nav