import { useState } from 'react';

import "./About.css"
import AboutSection from "./AboutSection";
import Navbar from "./Navbar.jsx";
import tempLine from '../img/tempLine.svg';

import family_pic from "../img/family_pic_crop.jpg";
import grilling from "../img/grilling.jpg";
import pc from "../img/pc.jpg";
import garfield from "../img/garfield.jpg";


const About = () => {
    const [aboutSections, setAboutSections] = useState([
        {title: "Background", desc: "My name is Darren Wu, and I'm from Southern California. I'm the youngest in our family, which includes both my parents and my older brother. Currently, I'm a student at Purdue studying for a Bachelors in Computer Science.", img: family_pic, imgLeft: true},
        {title: "Hobbies", desc: "One of my favorite hobbies is cooking/baking. I love finding new recipes on youtube or google and trying them out myself. One of the recent desserts I have been trying to nail is a lemon meringue pie. I also enjoy playing chess in my free time, and its not uncommon to see me with my phone out solving a chess puzzle or playing a match. I'm a huge fan of the outdoors, partly due to doing Boy Scouts when I was younger, but also because I enjoy a lot of outdoor activities such as fishing and hiking. Plus, being able to get away from the business of everyday life is in my eyes the best part of outdoor adventures.", img: grilling, imgLeft: false},
        {title: "Organizations", desc: "I've always enjoyed being a part of other organizations and giving back to the organization and community in some way. I've been a boy scout from 7th to 12th grade and managed to achieve the rank of Eagle Scout at the end. At Purdue, I pledged for a professional engineering fraternity, Theta Tau Phi Chapter, my freshman year and I've loved the community since. I'm currently the President of our chapter and will continue to be until the end of the year! I have also cofounded the Special Olympics club at Purdue along with a few others and are currently working to get a cohosted Special Olympics game with other colleges and local organizations.", img: pc, imgLeft: true},
        {title: "Pets", desc: "I am and have always been a huge cat person. Doesn't mean I'm against dogs or any other animal, cats are simply superior. I've had two cats before, one of them is Garfield, who loves sleeping on my laptop as I work, and the other is a black cat named Fluffy, who likes to eat a ton.", img: garfield, imgLeft: false},

    ]);

    return ( 
    <>
    <div className="about-container">
        <Navbar />

        <div className="about-main">
            <h1>About</h1>
            {aboutSections.map((aboutSection) => (
                <>
                <img src= {tempLine} className="line" alt="line" />
                <AboutSection title={aboutSection.title} desc={aboutSection.desc} img={aboutSection.img} imgLeft={aboutSection.imgLeft} />
                
                </>
            ))}
            
        </div>

    </div>
    </>
    );
}
 
export default About;