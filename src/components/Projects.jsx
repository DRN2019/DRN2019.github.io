import Navbar from "./Navbar";
import "./Projects.css";
import Card from '@mui/material/Card';
import ProjectCard from "./ProjectCard";
import { useState } from 'react';

import Goosebot from "../img/Goosebot.png";
import Gplay from "../img/gplay.png";

const Projects = () => {
    const [projects, setProjects] = useState([
        {row1: [
            {title:"Goosebot", github:"https://github.com/DRN2019/Goosebot", img:Goosebot, description:"A Discord bot that can play music, send memes, and more!"}, 
            {title:"Google Play Store (Research)", img:Gplay}
        ]},
        {row2: []},

        {title:"Goosebot", github:"https://github.com/DRN2019/Goosebot", img:Goosebot, description:"A Discord bot that can play music, send memes, and more!"},
        {},
        {},
        {},
        {},
        
    ]);

    const [projectstemp, setTempProjects] = useState([
        {title:"Goosebot", github:"https://github.com/DRN2019/Goosebot", img:Goosebot, description:"A Discord bot that can play music, send memes, and more!"},
        {},
        {},
        {},
        {},
        {title:"Google Play Store (Research)", img:Gplay}
    ]);

    return ( 
    <>
    <div className="projects-container">
        <Navbar />
        
        <div className="projects-main">

            <h1>Projects</h1>
            <p>Coming soon!</p>
            {/*projects.map((project) => (
                <ProjectCard title={project.title} github={project.github} img={project.img} description={project.description} />   
            ))*/}
            
        </div>

    </div>
    </>
    );
}
 
export default Projects;