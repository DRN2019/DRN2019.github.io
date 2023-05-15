import './Home.css';
import tempLine from '../img/tempLine.svg';
import { Link } from 'react-router-dom';
import { useState } from "react";

/*
It would be pretty cool to get some animations in here
I'm thinking that the name and the navbar could slide in from both the top and bottom of the screen at the same time with the separating lines
Then once the names and navbar has stopped moving, the description could fade in

Furthermore, when hovering over the buttons of the navbar, I want the colors to fade in and out
*/

const Home = () => {
    return ( 
    <>
    <div className="home-container">
      <h1 className="home-name">DARREN WU</h1>
      <img src= {tempLine} className="line" alt="line" />
      <h4 className="home-desc">A junior studying Computer Science at Purdue seeking a software development internship to gain technical experience and build collaborative skills.</h4>
      <img src= {tempLine} className="line" alt="line" />

      <nav className="home-navbar">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/about">About</Link>
        <Link className="links" to="/projects">Projects</Link>
        <Link className="links" to="/resume">Resume</Link>
        <Link className="links" to="/contact">Contact</Link>
      </nav>

    </div>
    
    </> );
}
 
export default Home;