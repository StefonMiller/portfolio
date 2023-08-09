import React from 'react';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
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
import Project2 from './pages/usb.js';
import Project3 from './pages/path.js';

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
        {title: 'project2', path: '/usb'},
        {title: 'project3', path: '/path'}
      ],
      homepage:{
        title: 'Stefon Miller',
        subTitle: 'Assigned Support Engineer at Coupa Software',
        text: 'I am a graduate from the University of Pittsburgh with degrees in Computer and Information Science. Below you will find some of the things I\'ve been working on'
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
        title: 'Automatic USB Installers'
      },
      project3:{
        title: 'Pathfinding Comparison'
      }

    }
  }

  

  render()
  {
    return (
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
            <Router>
              <Switch>
                <Route exact path="/" exact render={() => <Homepage title={this.state.homepage.title} subTitle={this.state.homepage.subTitle} text={this.state.homepage.text} />}>
                </Route>
                <Route path="/about" exact render={() => <Aboutpage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />}>
                </Route>
                <Route path="/projects" exact render={() => <Projectpage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text}/>}>
                </Route>
                <Route path="/cambot" exact render={() => <Project1 title={this.state.project1.title} subTitle={this.state.project1.subTitle} text={this.state.project1.text}/>}>
                </Route>
                <Route path="/usb" exact render={() => <Project2 title={this.state.project2.title} subTitle={this.state.project2.subTitle} text={this.state.project2.text}/>}>
                </Route>
                <Route path="/path" exact render={() => <Project3 title={this.state.project3.title} subTitle={this.state.project3.subTitle} text={this.state.project3.text}/>}>
                </Route>
              </Switch>
            </Router>
            {/*<Route path="/" exact render={() => <Homepage title={this.state.homepage.title} subTitle={this.state.homepage.subTitle} text={this.state.homepage.text} />} />*/}
            {/*<Route path="/about" exact render={() => <Aboutpage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />*/}
            {/*<Route path="/projects" exact render={() => <Projectpage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text}/>} />*/}
            {/*<Route path="/portfolio/cambot" exact render={() => <Project1 title={this.state.project1.title} subTitle={this.state.project1.subTitle} text={this.state.project1.text}/>} />*/}
            {/*<Route path="/portfolio/eft" exact render={() => <Project2 title={this.state.project2.title} subTitle={this.state.project2.subTitle} text={this.state.project2.text}/>} />*/}
            {/*<Route path="/portfolio/project2" exact render={() => <Project3 title={this.state.project3.title} subTitle={this.state.project3.subTitle} text={this.state.project3.text}/>} />*/}
            <div className="footer-div">
              <Footer />
            </div>

          </Container>
    );
  }
  
}

export default App;
