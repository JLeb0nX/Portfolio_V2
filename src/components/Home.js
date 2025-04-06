import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gif from "../images/accueil.gif"

const Home = () => {
    const [animate, setAnimate] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 500);

        const canvas = canvasRef.current;
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
        <section className={`home ${animate ? 'animate' : ''}`} id="home">
            <canvas ref={canvasRef} className="star-canvas"></canvas>
            <div className="home-content">
                <div className="animated-text home-item">Bienvenue sur mon portfolio</div>
                <div className="decoration home-item"></div>
                <h1 className="title home-item">
                    <span className="first-name">Johan</span>
                    <br/>
                    <span className="last-name">Lebon</span>
                </h1>
                <p className="typing-animation home-item">Étudiant en BUT réseaux et télécommunications</p>
                <div className="button-group home-item">
                    <a href="#projects" className="animated-button">Projets</a>
                    <a href="#contact" className="contact-button">Me contacter</a>
                </div>
                <div className="social-buttons home-item">
                    <a href="https://github.com/JLeb0nX/" target="_blank" rel="noopener noreferrer" className="social-button">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/johan-lebon-5a00712a5/" target="_blank" rel="noopener noreferrer" className="social-button">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </div>
            <div className="sidebar">
                <img src={gif} alt="Gif d'accueil" className="cybersecurity-gif" />
            </div>
        </section>
    );
};

export default Home;