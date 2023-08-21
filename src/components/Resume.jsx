import "./Resume.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar.jsx";

const Resume = () => {
    return ( 
    <>
    
    <div className="resume-container">
        <Navbar />

        <div className="resume-main">
        
            <h1 className="resume-title">Resume</h1>

            <div className="resume-contact">
                <p>Email: darrenwu321@gmail.com</p>
                <p>Phone: (714) 253-2739</p>
                <p>LinkedIn: www.linkedin.com/in/darrenwu321</p>
                <p>Github: github.com/DRN2019</p>
            </div>
            <div className="resume-summary">
                <h2>Summary</h2>
                <p>
                A senior at Purdue University who seeks further professional experience in various fields of software development.
                Consistently studying emerging technologies and improving technical skills to remain on the cutting edge of software development.
                </p>
            </div>

        </div>

    </div>
    </>
    );
}
 
export default Resume;