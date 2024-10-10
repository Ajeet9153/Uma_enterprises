import React from 'react';
import './Hero.css'; // If you want to add custom styles

const Hero = () => {
    return (
        <div className="hero-container">
            <img
                src="/images/ajeeth.jpg"
                alt="Hero Banner"
                className="hero-image"

            />
            <div className="hero-text">
                <h1>Welcome to Our Store</h1>
                <p>Discover amazing products!</p>
            </div>
        </div>
    );
};

export default Hero;
