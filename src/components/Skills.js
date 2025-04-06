// src/components/Skills.js
import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import ReactIcon from '../images/react-icon.png';
import AngularIcon from '../images/angular-icon.png';
// Importez d'autres icônes ici
import './Skills.css';
import {
    FaAngular,
    FaApple, FaBrain, FaComments,
    FaGithub,
    FaGitlab,
    FaJava, FaLightbulb,
    FaLinkedin,
    FaLinux,
    FaNodeJs, FaProjectDiagram, FaPuzzlePiece,
    FaReact, FaUsers,
    FaWindows
} from 'react-icons/fa';
import {
    SiCisco,
    SiCss3,
    SiHtml5,
    SiJavascript, SiKalilinux,
    SiMetasploit, SiOpenvpn,
    SiPfsense,
    SiVirtualbox,
    SiVmware,
    SiWireshark
} from "react-icons/si";
import {GrFirewall} from "react-icons/gr";
import {GiFirewall} from "react-icons/gi";

function FaJavaScript(props) {
    return null;
}

function Silinpeas(props) {
    return null;
}

const Skills = () => {
    const canvasRef = useRef(null);

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

    return (
        <Element name="skills" className="skills-section" id="skills">
            <h2 className="skills-title">Compétences Techniques</h2>
            <h4 className="skills-title">Programmation</h4>
            <canvas ref={canvasRef} className="star-canvas"></canvas>
            <div className="skills-cards">
                <div className="skill-card">
                    <FaReact className= "skill-icon" />
                    <p>React</p>
                    <p className="skill-description">Bibliothèque JavaScript pour construire des interfaces utilisateur.</p>
                </div>
                <div className="skill-card">
                    <SiHtml5 className="skill-icon" />
                    <p>HTML</p>
                    <p className="skill-description">Langage de balisage pour structurer le contenu web.</p>
                </div>
                <div className="skill-card">
                    <SiCss3 className="skill-icon" />
                    <p>CSS</p>
                    <p className="skill-description">Langage de style pour la présentation des documents HTML.</p>
                </div>
                <div className="skill-card">
                    <FaNodeJs className="skill-icon" />
                    <p>NodeJs</p>
                    <p className="skill-description">Environnement d'exécution JavaScript côté serveur.</p>
                </div>
                <div className="skill-card">
                    <SiJavascript className="skill-icon" />
                    <p>JavaScript</p>
                    <p className="skill-description">Langage de programmation pour le développement web.</p>
                </div>
                <div className="skill-card">
                    <FaGithub className="skill-icon" />
                    <p>Github</p>
                    <p className="skill-description">Plateforme de gestion de versions et de collaboration.</p>
                </div>
                <div className="skill-card">
                    <FaGitlab className="skill-icon" />
                    <p>Gitlab</p>
                    <p className="skill-description">Plateforme de gestion de versions et de CI/CD.</p>
                </div>
            </div>
            <h2 className="skills-title">Cybersécurité (Pentesting)</h2>
            <div className="skills-cards">
                <div className="skill-card">
                    <SiMetasploit className="skill-icon" />
                    <p>Metasploit</p>
                    <p className="skill-description">Outil pour simuler des attaques et tester la sécurité des réseaux et des machines.</p>
                </div>
                <div className="skill-card">
                    <SiKalilinux className="skill-icon" />
                    <p>Kali Linux</p>
                    <p className="skill-description">Système d’exploitation pour les hackers éthiques et les professionnels de la sécurité.</p>
                </div>
                <div className="skill-card">
                    <Silinpeas className="skill-icon" />
                    <p>Linpeas</p>
                    <p className="skill-description">Script automatisé qui aide à détecter les failles de sécurité et les moyens d’escalade de privilèges sur un système Linux.</p>
                </div>
                <div className="skill-card">
                    <Silinpeas className="skill-icon" />
                    <p>Nmap</p>
                    <p className="skill-description">Outil de scan réseau qui permet d’identifier les hôtes, les ports ouverts et les services actifs sur un réseau.</p>
                </div>
                <div className="skill-card">
                    <Silinpeas className="skill-icon" />
                    <p>NetCat</p>
                    <p className="skill-description">Outil en ligne de commande qui permet d’établir des connexions réseau en lecture/écriture via TCP ou UDP.</p>
                </div>
                <div className="skill-card">
                    <Silinpeas className="skill-icon" />
                    <p>Hydra</p>
                    <p className="skill-description">outil de brute force qui permet de tester automatiquement plusieurs combinaisons de mots de passe sur des services comme SSH, FTP, HTTP, etc.</p>
                </div>
                <div className="skill-card">
                    <Silinpeas className="skill-icon" />
                    <p>John the Ripper</p>
                    <p className="skill-description"> outil de cassage de mots de passe, souvent utilisé pour tester la robustesse des mots de passe hashés.</p>
                </div>
                <div className="skill-card">
                    <Silinpeas className="skill-icon" />
                    <p>Hashcat</p>
                    <p className="skill-description">outil très puissant et rapide pour casser des hashs (MD5, SHA1, NTLM, etc.) en utilisant le GPU.</p>
                </div>
            </div>
            <h2 className="skills-title">Réseaux</h2>
            <div className="skills-cards">
                <div className="skill-card">
                    <SiCisco className="skill-icon" />
                    <p>GNS3</p>
                    <p className="skill-description">Simulateur de réseau qui permet de créer et tester des topologies réseau complexes avec de vrais IOS Cisco ou d'autres équipements virtuels.</p>
                </div>
                <div className="skill-card">
                    <SiCisco className="skill-icon" />
                    <p>Cisco Packet Tracer</p>
                    <p className="skill-description">Simulateur réseau développé par Cisco pour apprendre et tester des configurations réseau simples avec des équipements virtuels.</p>
                </div>
                <div className="skill-card">
                    <SiWireshark className="skill-icon" />
                    <p>Wireshark</p>
                    <p className="skill-description"> Analyseur de paquets réseau qui permet de capturer et d’étudier le trafic en détail (protocoles, adresses IP, ports...).</p>
                </div>
                <div className="skill-card">
                    <GiFirewall className="skill-icon" />
                    <p>Stormshield</p>
                    <p className="skill-description">Solution française de sécurité (firewall, antivirus, filtrage, VPN) utilisée dans les environnements sensibles (entreprises, administrations).</p>
                </div>
                <div className="skill-card">
                    <SiPfsense className="skill-icon" />
                    <p>Pfsense</p>
                    <p className="skill-description">Firewall open-source basé sur FreeBSD, utilisé pour créer des pare-feux, routeurs, VPN, et filtrage réseau.</p>
                </div>
            </div>
            <h2 className="skills-title">Administration Systèmes</h2>
                <div className="skills-cards">
                    <div className="skill-card">
                        <FaLinux className="skill-icon" />
                        <p>Linux</p>
                        <p className="skill-description">OS open-source adapté à des serveurs, des machines virtuelles et des ordinateurs personnels.</p>
                    </div>
                    <div className="skill-card">
                        <FaWindows className="skill-icon" />
                        <p>Active Directory</p>
                        <p className="skill-description">Service d’annuaire développé par Microsoft, utilisé pour gérer les utilisateurs, les ordinateurs et les ressources d’un réseau Windows.</p>
                    </div>
                </div>
            <h2 className="skills-title">Virtualisation</h2>
                <div className="skills-cards">
                    <div className="skill-card">
                        <SiVirtualbox className="skill-icon" />
                        <p>Oracle Virtualbox</p>
                        <p className="skill-description">Logiciel de virtualisation open-source qui permet de créer et exécuter des machines virtuelles sur des systèmes d'exploitation comme Windows, Linux et macOS.</p>
                    </div>
                    <div className="skill-card">
                        <SiVmware className="skill-icon" />
                        <p>VMWare</p>
                        <p className="skill-description">Solution de virtualisation pour les entreprises, offrant une gestion centralisée des machines virtuelles.</p>
                    </div>
                </div>
            <h2 className="skills-title">Savoir-Faire</h2>
            <div className="skills-buttons">
                <button className="skill-button"><FaProjectDiagram /> Gestion du stress</button>
                <button className="skill-button"><FaUsers /> Travail en équipe et autonomie</button>
                <button className="skill-button"><FaComments /> Sens de l'écoute et de la communication</button>
                <button className="skill-button"><FaPuzzlePiece /> Esprit d’analyse et de résolution de problèmes</button>
                <button className="skill-button"><FaLightbulb /> Réactivité et capacité d’adaptation</button>
                <button className="skill-button"><FaBrain /> Créativité</button>
            </div>
        </Element>
    );
};

export default Skills;