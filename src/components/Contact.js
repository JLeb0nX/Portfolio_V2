import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const canvasRef = useRef(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const stars = [];
        const numStars = 200;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                vy: Math.random() * 0.5 + 0.2
            });
        }

        const animateStars = () => {
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
        };

        animateStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Email envoyé avec succès !');
            } else {
                alert('Erreur lors de l\'envoi de l\'email.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'envoi de l\'email.');
        }
    };

    return (
        <section className="contact" id="contact">
            <canvas ref={canvasRef} className="star-canvas"></canvas>
            <h1 className="contact-title">Contactez-moi</h1>
            <div className="contact-content">
                <div className="card">
                    <h2>Se connecter avec moi</h2>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                            <i className="fab fa-linkedin-in"></i> LinkedIn
                        </a>
                    </div>
                </div>
                <div className="card">
                    <h2>Laisser un commentaire</h2>
                    <form className="comment-form">
                        <input type="text" placeholder="Votre nom" required />
                        <textarea placeholder="Votre commentaire" required></textarea>
                        <input type="file" accept="image/*" />
                        <button type="submit">Envoyer</button>
                    </form>
                    <div className="comments-section">
                        <p>Commentaire 1</p>
                        <p>Commentaire 2</p>
                    </div>
                </div>
                <div className="card">
                    <h2>Formulaire de contact</h2>
                    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Votre nom" {...register('name', { required: 'Nom est requis' })} />
                        {errors.name && <p className="error-message">{errors.name.message}</p>}
                        <input type="email" placeholder="Votre email" {...register('email', { required: 'Email est requis', pattern: { value: /^\S+@\S+$/i, message: 'Email invalide' } })} />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                        <textarea placeholder="Votre message" {...register('message', { required: 'Message est requis' })}></textarea>
                        {errors.message && <p className="error-message">{errors.message.message}</p>}
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;