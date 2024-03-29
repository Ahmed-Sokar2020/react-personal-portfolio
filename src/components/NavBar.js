import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('about');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                
                <Container>
                    <Navbar.Brand>
                        {/* <img src={logo} alt="Logo" /> */}
                        <h1 className="header-logo">Sokar</h1>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>

                        <div className="navbar-text">
                            <div className="social-icon">
                                <a 
                                href="https://www.linkedin.com/in/ahmed-sokar" 
                                target="_blank" 
                                rel="noreferrer">
                                <img src={navIcon1} alt="" />
                                </a>

                                <a 
                                href="https://github.com/Ahmed-Sokar2020" 
                                target="_blank" 
                                rel="noreferrer">
                                <img src={navIcon2} alt="" />
                                </a>

                                <a href="https://www.facebook.com/ahmed.elhoseny.9003"
                                target="_blank" 
                                rel="noreferrer">
                                <img src={navIcon3} alt="" />
                                </a>
                            </div>

                            <HashLink to='#connect'>
                                <button className="connectBtn"><span>Let’s Connect</span></button>
                            </HashLink>
                        </div>
                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </Router>
    )
}
