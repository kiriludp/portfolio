import React, { useState, useEffect, useRef } from 'react';
import Menu from "../assets/imgs/menu.svg";
import Close from "../assets/imgs/close.svg";




function Nav() {
      
  const [isSideMenu, setSideMenu] = useState(false)

  const open = (isSideMenu, setSideMenu) => {
    return  (
    setSideMenu(!isSideMenu)
  )}

  const domeNode = useRef()

  const updateState = (event) => {
    if (domeNode.current.contains (event.target)) {
      return }
      setSideMenu(false)
    }
    useEffect (() => {
      document.addEventListener("mousedown", updateState)
      return() => {
        document.removeEventListener("mousedown", updateState)
      }
      },[])
    
      return (
        <div className= "navi">
          <header className="topBar">
            <div className="menuBar">
              <button
              className="navIcon"
              onClick ={() => {
                open(isSideMenu)
              }} >
              
                (isSideMenu ?) <img src={Menu}
        style={{
          width: '32px',
          height: '32px' 
                }} />
              </button>
              <div className="menuOptions" style={{ left: isSideMenu ? '0' : '-265px' }}>
              <a href="/">Home </a>
                <a href="/about">About</a>
                <a href="/resume">Resume</a>
                <a href="/portfolio">Portfolio</a>
              </div>
            </div>
          </header>
        </div>
      );
      
      }
        
           


export default Nav;