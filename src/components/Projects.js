import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importer Font Awesome
import HiddenKey from "../images/hiddenKey.png";
import Réseau_Sécurisé from "../images/réseau_sécurisé.png";
import CertificationImage from "../images/certification1.png"; // Ajoutez l'image de la certification
import ANSSI from "../PDF/Attestation MOOC de l'ANSII Johan Lebon.pdf";
import certif2 from "../images/certif2.png";
import SSI from "../images/sécuriser_un_SI.png"

const Projects = () => {
    const canvasRef = useRef(null);
    const [showProjects, setShowProjects] = useState(false);
    const [showCertifications, setShowCertifications] = useState(false);
    const [showInProgress, setShowInProgress] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const stars = [];
        const numStars = 200;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                vy: Math.random() * 0.5 + 0.2
            });
        }

        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < numStars; i++) {
                const star = stars[i];
                star.y += star.vy;

                if (star.y > canvas.height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
            requestAnimationFrame(animateStars);
        }

        animateStars();
    }, []);

    const handleShowProjects = () => {
        if (showProjects) {
            setAnimateOut(true);
            setTimeout(() => {
                setShowProjects(false);
                setAnimateOut(false);
            }, 500); // Durée de l'animation de sortie
        } else {
            setShowProjects(true);
            setShowCertifications(false);
            setShowInProgress(false);
        }
    };

    const handleShowCertifications = () => {
        if (showCertifications) {
            setAnimateOut(true);
            setTimeout(() => {
                setShowCertifications(false);
                setAnimateOut(false);
            }, 500); // Durée de l'animation de sortie
        } else {
            setShowCertifications(true);
            setShowProjects(false);
            setShowInProgress(false);
        }
    };

    const handleShowInProgress = () => {
        if (showInProgress) {
            setAnimateOut(true);
            setTimeout(() => {
                setShowInProgress(false);
                setAnimateOut(false);
            }, 500); // Durée de l'animation de sortie
        } else {
            setShowInProgress(true);
            setShowProjects(false);
            setShowCertifications(false);
        }
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setAnimateOut(true);
        setTimeout(() => {
            setSelectedProject(null);
            setAnimateOut(false);
        }, 300); // Durée de l'animation de sortie du modal
    };

    return (
        <div className="projects-section" id="projects">
            <canvas ref={canvasRef} className="star-canvas"></canvas>
            <div className="content">
                <h2 className="projects-title">Mes Projets</h2>
                <div className="menu">
                    <button className="menu-button" onClick={handleShowProjects}>
                        <i className="fas fa-project-diagram"></i> Projets
                    </button>
                    <button className="menu-button" onClick={handleShowCertifications}>
                        <i className="fas fa-certificate"></i> Certifications
                    </button>
                    <button className="menu-button" onClick={handleShowInProgress}>
                        <i className="fas fa-spinner"></i> En cours...
                    </button>
                </div>
                {showProjects && (
                    <div className={`project-cards ${animateOut ? 'fade-out' : 'fade-in'}`}>
                        <div className="project-card" onClick={() => handleProjectClick('Projet 1')}>
                            <img src={HiddenKey} alt="Projet 1" className="project-image" />
                            <h4>HiddenKey</h4>
                            <p>Conception d'une application communicante..</p>
                        </div>
                        <div className="project-card" onClick={() => handleProjectClick('Projet 2')}>
                            <img src={Réseau_Sécurisé} alt="Projet 2" className="project-image" />
                            <h4>Concevoir un réseau sécurisé</h4>
                            <p>Description du projet 2...</p>
                        </div>
                        {/* Ajoutez ici d'autres éléments */}
                    </div>
                )}
                {showCertifications && (
                    <div className={`project-cards ${animateOut ? 'fade-out' : 'fade-in'}`}>
                        <div className="project-card">
                            <img src={CertificationImage} alt="Certification 1" className="project-image" />
                            <h4>Attestaion du MOOC de l'ANSII</h4>
                            <p>L'attestation du MOOC de l'ANSSI atteste de mes compétences en cybersécurité,
                                acquises à travers un cours en ligne sur la protection des systèmes d'information et la gestion des risques.
                            </p>
                            <a href={ANSSI} target="_blank" rel="noopener noreferrer" className="pdf-button">Voir le PDF</a>
                        </div>
                        {/* Ajoutez ici d'autres éléments */}
                    </div>
                )}
                {showInProgress && (
                    <div className={`project-cards ${animateOut ? 'fade-out' : 'fade-in'}`}>
                        <div className="project-card">
                            <img src={certif2} alt="Certification en cours 1" className="project-image" />
                            <h4>Certification en cours </h4>
                            <p>Introduction à la cybersécurité, Cisco Networking Academy</p>
                        </div>
                        <div className="project-card">
                            <img src={SSI} alt="Projet en cours 1" className="project-image" />
                            <h4>Sécuriser un Système d'information</h4>
                            <p>Description du projet en cours 2...</p>
                        </div>
                        {/* Ajoutez ici d'autres éléments */}
                    </div>
                )}
                {selectedProject && (
                    <div className={`modal ${animateOut ? 'fade-out' : ''}`} onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-button" onClick={handleCloseModal}>&times;</span>
                            <h2>{selectedProject}</h2>
                            <p>Description détaillée du {selectedProject}...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;