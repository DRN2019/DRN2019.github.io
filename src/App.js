import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const linepath = "./src/img/Line.png";

function App() {
  return (
    <>
    <BrowserRouter>

      <div className="content">
        <Routes>

          <Route 
            path = "/about" 
            element = {<About />} />
            
          <Route 
            path = "/projects" 
            element = {<Projects />} />

          <Route 
            path = "/contact" 
            element = {<Contact />} />

          <Route 
            path = "/resume"
            element = {<Resume />} />
          
          <Route 
            path = "/"
            element = {<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;


/*


      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </div>


*/
