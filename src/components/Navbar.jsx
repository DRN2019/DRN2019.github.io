import "./Navbar.css";
import { Link } from 'react-router-dom';
import pfp from './../img/profilepic.png';

const Navbar = () => {
    return ( 
    <>
    <div class="navbar-container">
        <Link className="navbar-name" to="/">Darren Wu</Link>

        <div class="navbar-line">
            <nav className="navbar-nav">
                <Link className="navbar-links" to="/">Home</Link>
                <Link className="navbar-links" to="/about">About</Link>
                <Link className="navbar-links" to="/projects">Projects</Link>
                <Link className="navbar-links" to="/resume">Resume</Link>
                <Link className="navbar-links" to="/contact">Contact</Link>
            </nav>
            
        </div>
        
        <img class="navbar-pfp" src={pfp} alt=""/>

    </div>
    
    </> );
}
 
export default Navbar;