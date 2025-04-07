// src/components/Projects.js
import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HiddenKey from "../images/hiddenKey.png";
import Réseau_Sécurisé from "../images/réseau_sécurisé.png";
import CertificationImage from "../images/certification1.png";
import ANSSI from "../PDF/Attestation MOOC de l'ANSII Johan Lebon.pdf";
import RéseauSécuriséPDF from "../PDF/Concevoir_un_réseau_sécurisé.pdf";
import certif2 from "../images/certif2.png";
import SSI from "../images/sécuriser_un_SI.png";
import Modal from './Modal';

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
            }, 500);
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
            }, 500);
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
            }, 500);
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
        }, 300);
    };

    const projectDetails = {
        HiddenKey: {
            title: "HiddenKey",
            description: (
                <>
                    <h3>Objectif</h3>
                    <p>
                        Dans le cadre de ce projet, le but était de développer une application communicante client/serveur.
                        Avec mon groupe, nous avons décidé de créer un gestionnaire de mots de passe sécurisé, accessible via un navigateur web.
                        L'objectif : permettre aux utilisateurs de créer un compte, puis de stocker, chiffrer, consulter, modifier et supprimer leurs mots de passe personnels.
                    </p>
                    <br />
                    <h3>Technologies</h3>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Apache2</li>
                    </ul>
                    <br />
                    <h3>Résumé du projet</h3>
                    <p>
                        Notre application, nommée HiddenKey, est un gestionnaire de mots de passe en ligne.
                        L'utilisateur peut s'y inscrire, se connecter, puis gérer ses mots de passe (ajout, modification, suppression, visualisation).
                        <br /><br />
                        Le backend en Node.js utilise un fichier JSON local comme base de données, dans lequel les données sont chiffrées.
                        Chaque utilisateur est identifié via un token JWT.
                        L'interface, développée avec React, permet de naviguer facilement entre les pages d'inscription, connexion et tableau de bord.
                        Des fonctionnalités comme la génération automatique de mots de passe, un indicateur de sécurité, ainsi que des modales Bootstrap ont été ajoutées pour améliorer l'expérience utilisateur.
                        L'application est hébergée sur un VPS Linux, avec Apache configuré pour rediriger les requêtes du frontend vers l'API.
                        Le backend est géré avec PM2 pour assurer sa stabilité.
                    </p>
                    <br />
                    <h3>Ce que j'ai appris</h3>
                    <ul>
                        <li>Développement fullstack avec React + Node.js</li>
                        <li>Déploiement sur un serveur VPS avec Apache & PM2</li>
                        <li>Chiffrement des données sensibles (CryptoJS, bcrypt)</li>
                        <li>Mise en place d'une API REST sécurisée (authentification, CRUD, tokens)</li>
                    </ul>
                </>
            ),
            className: "hiddenkey",
            githubLink: "https://github.com/username/hiddenkey"
        },
        "Réseau Sécurisé": {
            title: "Concevoir un réseau Sécurisé",
            description: (
                <>
                    <h3>Objectif</h3>
                    <p>
                        Concevoir et déployer une architecture réseau reliant trois sites distants, en garantissant à la fois la haute disponibilité (HSRP, STP) et la sécurité (ACL, segmentation VLAN).
                        L'interconnexion se fait via un VPN MPLS (protocole opérateur) pour un échange de routes et de services sécurisé.
                    </p>
                    <br />
                    <h3>Technologies</h3>
                    <ul>
                        <li>VLAN</li>
                        <li>HSRP / STP</li>
                        <li>ACL</li>
                        <li>OSPF & BGP</li>
                        <li>MPLS</li>
                    </ul>
                    <br />
                    <h3>Résumé du projet</h3>
                    <p>
                        Ce projet a consisté à mettre en place trois réseaux locaux (un par site), chacun segmenté en plusieurs VLAN (RH, Ventes, Serveurs, Gestion ... ), puis à les connecter via un VPN MPLS.
                        <br /><br />
                        Nous avons d'abord configuré le routage inter-VLAN avec HSRP pour la redondance et STP pour éviter les boucles, avant d'implémenter des ACL pour contrôler l'accès aux ressources sensibles (serveurs RH, FTP).
                        <br /><br />
                        Ensuite, l'interconnexion multi-sites s'est faite à travers des routeurs PE (Provider Edge) et un cœur MPLS.
                        Des VRF (Virtual Routing and Forwarding) ont été créées pour isoler le trafic des sites.
                        <br /><br />
                        Le protocole OSPF a permis de découvrir et d'annoncer les réseaux locaux, tandis que BGP (VPNv4) a été utilisé pour propager les routes entre les différents PE dans le réseau opérateur.
                        <br /><br />
                        Après validation des configurations et tests de scénarios de panne, chaque site peut communiquer de manière sécurisée et fiable, tout en respectant les restrictions d'accès imposées par les politiques de sécurité.
                    </p>
                    <br />
                    <h3>Ce que j'ai appris</h3>
                    <ul>
                        <li>Configuration avancée de VLAN et ACL</li>
                        <li>Mise en place d'une haute disponibilité (HSRP, STP)</li>
                        <li>Création d'un VPN MPLS</li>
                        <li>Redistribution de routes OSPF / BGP</li>
                    </ul>
                    <br />
                    <a href={RéseauSécuriséPDF} target="_blank" rel="noopener noreferrer" className="pdf-button">Voir le PDF</a>
                </>
            ),
            className: "reseau-securise"
        }
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
                        <div className="project-card">
                            <img src={HiddenKey} alt="HiddenKey" className="project-image" />
                            <h4>HiddenKey</h4>
                            <p>Conception d'une application communicante..</p>
                            <div className="button-container">
                                <button className="view-more-button" onClick={() => handleProjectClick('HiddenKey')}>Voir plus</button>
                                <a href={projectDetails.HiddenKey.githubLink} target="_blank" rel="noopener noreferrer" className="view-project-button">Voir le projet</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={Réseau_Sécurisé} alt="Réseau Sécurisé" className="project-image" />
                            <h4>Concevoir un réseau sécurisé</h4>
                            <p>Mettre en place l’infrastructure réseau sécurisée de chacun des
                                trois sites, puis les interconnecter en utilisant un VPN d’opérateur (VPN MPLS)</p>
                            <div className="button-container">
                                <button className="view-more-button" onClick={() => handleProjectClick('Réseau Sécurisé')}>Voir plus</button>
                            </div>
                        </div>
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
                            <p>Description du projet en cours...</p>
                        </div>
                    </div>
                )}
                {selectedProject && (
                    <Modal
                        show={!!selectedProject}
                        onClose={handleCloseModal}
                        title={projectDetails[selectedProject].title}
                        className={projectDetails[selectedProject].className}
                    >
                        <p>{projectDetails[selectedProject].description}</p>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default Projects;