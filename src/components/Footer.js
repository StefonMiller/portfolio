import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer()
{
    return (
        <footer className="mt-5">
            <Container fluid={true} className="footer-row">
                <Row className="border-top justify-content-center p-3 footer-row">
                        <a href="mailto:SMM248@pitt.edu" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon className="fa-icon" icon={faEnvelope} size="5x"/></a>
                        <a href="https://github.com/StefonMiller" target="_blank" rel="noopener noreferrer"className="footer-icon"><FontAwesomeIcon className="fa-icon" icon={faGithub} size="5x" /></a>
                        <a href="https://www.linkedin.com/in/stefon-miller-61a9a2193/" target="_blank" rel="noopener noreferrer"className="footer-icon"><FontAwesomeIcon className="fa-icon" icon={faLinkedin} size="5x" /></a>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;