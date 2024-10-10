import React from 'react';
import './Footer.css'; // Assuming you will add custom styles here
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // React icons for social media

export default function Footer() {
    return (
        <footer className="footer-container py-4">
            <div className="footer-content">
                <div className="footer-section location">
                    <h4>Our Location</h4>
                    <p>Vil : Lohiyaria chowk, mainatard road bettiah</p>
                    <p>West Champaran, Bettiah</p>
                </div>
                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:ajeetbhai258036@gmail.com">ajeetbhai258036@gmail.com</a></p>
                    <p>Phone: <a href="tel:+918002782871">+918002782871</a></p>
                </div>
                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/vineet.rqja?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                            <FaFacebook /> Facebook
                        </a>
                        <a href="https://www.instagram.com/kumar_vineet_07?igsh=em91Z3phOG53NnRk" target="_blank" rel="noopener noreferrer">
                            <FaInstagram /> Instagram
                        </a>
                        <a href="https://wa.me/918002782871" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp /> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-center text-dark mt-2">
                    Uma Enterprises - 2024, All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
