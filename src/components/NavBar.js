import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [showNavbar, setShowNavbar] = useState(false);

    const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        let currentSection = '';

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element && window.scrollY >= element.offsetTop - 60 && window.scrollY < element.offsetTop + element.offsetHeight - 60) {
                currentSection = section;
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        setTimeout(() => {
            setShowNavbar(true);
        }, 100);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            scroller.scrollTo(section, {
                duration: 500,
                delay: 100,
                smooth: true,
                offset: -60, // Ajustez cet offset si nécessaire
            });
        } else {
            console.error(`Element with id ${section} not found`);
        }
    };

    return (
        <nav className={`navbar ${showNavbar ? "show" : ""}`}>
            <div className="nav-left">
                <ScrollLink to="home" smooth={true} duration={500} className={`github-link nav-item ${activeSection === 'home' ? 'active' : ''}`}>
                    Jleb0nX
                </ScrollLink>
            </div>
            <div className="nav-right">
                <ul className="nav-links">
                    <li className="nav-item">
                        <ScrollLink to="home" smooth={true} duration={500} className={activeSection === 'home' ? 'active' : ''}>
                            Accueil
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="about" smooth={true} duration={500} className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>
                            A propos
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="skills" smooth={true} duration={500} className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>
                            Compétences
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="projects" smooth={true} duration={500} className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>
                            Projets
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="contact" smooth={true} duration={500} className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;