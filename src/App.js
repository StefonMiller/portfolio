import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer.js';
import Homepage from './pages/Homepage.js';
import Aboutpage from './pages/About.js';
import Projectpage from './pages/Projects.js';
import Pdf from './assets/resume.pdf'
import Project1 from './pages/cambot.js';
import Project2 from './pages/eft.js';
import Project3 from './pages/proj2.js';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      title: 'Stefon Miller',
      headerLinks: [
        {title: 'Stefon Miller', path: '/'},
        {title: 'Resume', path: '/resume'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'},
        {title: 'project1', path: '/cambot'},
        {title: 'project2', path: '/eft'},
        {title: 'project3', path: '/project2'}
      ],
      homepage:{
        title: 'Stefon Miller',
        subTitle: 'Student at the University of Pittsburgh',
        text: 'I am currently pursuing a B.S. in computer and information science at the University of Pittsburgh. I expect to graduate in the spring of 2022. Below you will find some of the things I\'ve been working on'
      },
      about: {
        title: 'Hi, I\'m Stefon!'
      },
      projects:{
        title: 'School/Personal Projects'
      },
      project1:{
        title: 'CamBot'
      },
      project2:{
        title: 'EFT Drop Idler'
      },
      project3:{
        title: 'Pokémon Leveler'
      }

    }
  }

  

  render()
  {
    return (
      <Router>
          <Container className="p-0 main-container dark-mode" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand = "lg">
              <Link to="/"><Navbar.Brand style={{color:'white', fontWeight: "400"}}>Stefon Miller</Navbar.Brand></Link>
              <Navbar.Toggle className = "border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav>
                  <Link className='nav-link' to="/about" style={{color:'#adadad', fontWeight: "400"}}>About Me</Link>
                  <a className='nav-link' href={Pdf} target="_blank" rel="noopener noreferrer" style={{color:'#adadad', fontWeight: "400"}}>Resume</a>
                  <Link className='nav-link' to="/projects" style={{color:'#adadad', fontWeight: "400"}}>Projects</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <Homepage title={this.state.homepage.title} subTitle={this.state.homepage.subTitle} text={this.state.homepage.text} />} />
            <Route path="/about" exact render={() => <Aboutpage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
            <Route path="/projects" exact render={() => <Projectpage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text}/>} />
            <Route path="/cambot" exact render={() => <Project1 title={this.state.project1.title} subTitle={this.state.project1.subTitle} text={this.state.project1.text}/>} />
            <Route path="/eft" exact render={() => <Project2 title={this.state.project2.title} subTitle={this.state.project2.subTitle} text={this.state.project2.text}/>} />
            <Route path="/project2" exact render={() => <Project3 title={this.state.project3.title} subTitle={this.state.project3.subTitle} text={this.state.project3.text}/>} />
            <div className="footer-div">
              <Footer />
            </div>

          </Container>
      </Router>
    );
  }
  
}

export default App;
