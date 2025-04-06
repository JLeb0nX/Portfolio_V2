import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './About.css';
import IUT from "../images/IUTJPO2024-125.JPG"
import IUT2 from "../images/IUTJPO2024-126.JPG"
import TPTNT from "../images/IMG_2917.jpg"
import bac from "../images/chapeau-de-remise-de-diplome.png"
import attestation from "../images/certificat.png"
import CV from "../PDF/CV_Johan_Lebon.pdf"

const About = () => {
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

    const renderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-arrow-prev">
                &#9664;
            </button>
        );

    const renderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-arrow-next">
                &#9654;
            </button>
        );

    return (
        <Element name="about" className="about" id="about">
            <h2 className="about-title">À propos de moi</h2>
            <canvas ref={canvasRef} className="star-canvas"></canvas>
            <div className="cards-container">
                <div className="card card-left">
                    <h3 className="about-text">À propos de moi</h3>
                    <p className="about-text">Je suis Johan Lebon, j'ai 20 ans, je suis étudiant en 2èeme année de BUT Réseaux et Télécommunications spécialisé en cybersécurité à l'IUT de Saint-Pierre
                    <br></br>
                    </p>
                    <a href= {CV} className="download-button about-button" download>Télécharger mon CV</a>
                </div>
                <div className="card card-center">
                    <h3>Diplômes et Formations</h3>
                    <ul className="diplomas-list">
                        <li>
                            <img src= {bac} alt="Icon 2" className="diploma-icon" />
                            <strong>2023-2025</strong> - BUT Réseaux et Télécommunications, IUT de Saint-Pierre, (2ème Année en cours)
                        </li>
                        <li>
                            <img src= {attestation} alt="Icon 2" className="diploma-icon" />
                            <strong>2023</strong> - Attestation du MOOC de l'ANSII, IUT de Saint-Pierre
                        </li>
                        <li>
                            <img src= {bac} alt="Icon 3" className="diploma-icon" />
                            <strong>2023</strong> - Baccalauréat Technologique STI2D, Lycée Pierre Poivre
                        </li>
                    </ul>
                </div>
                <div className="card card-right">
                    <Carousel
                        showThumbs={false}
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        interval={3000}
                        renderArrowPrev={renderArrowPrev}
                        renderArrowNext={renderArrowNext}
                        showIndicators={true}
                    >
                        <div>
                            <img src={IUT} alt="Image 1" className="image-animated" />
                            <p className="legend">Journées Porte ouvertes de l'IUT 2024</p>
                        </div>
                        <div>
                            <img src={IUT2} alt="Image 2" className="image-animated" />
                            <p className="legend">Journées Porte ouvertes de l'IUT 2024</p>
                        </div>
                        <div>
                            <img src={TPTNT} alt="Image 3" className="image-animated" />
                            <p className="legend">Réalisation d'un TP d'une mise en place de la TNT</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </Element>
    );
};

export default About;