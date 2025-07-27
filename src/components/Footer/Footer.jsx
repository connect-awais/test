import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">

            <div className="language-txt">
                <p>Deutsch</p>
                <p>English</p>
            </div>
            
            <div className="footer-wrapper">

                <div className="footer-section">
                    <p>Quicklinks</p>
                    <div className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">Magazine</a>
                        <a href="#">Models</a>
                        <a href="#">M Motorsport</a>
                        <a href="#">M Driving Experience</a>
                        <a href="#">M Drivers Community</a>
                    </div>
                </div>

                <div className="footer-section">
                    <p>BMW-M.com</p>
                    <div className="footer-links">
                        <a href="#">About BMW M</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Imprint</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Legacy Disclaimer</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>

                <div className="footer-section">
                    <p>Visit Us On</p>
                    <div className="footer-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Tiktok</a>
                        <a href="#">Youtube</a>
                        <a href="#">Instagram Motorsport</a>
                        <a href="#">Facebook Motorsport</a>
                        <a href="#">X Motorsport</a>
                        <a href="#">Youtube Motorsport</a>
                    </div>
                </div>

                <div className="footer-section">
                    <p>More BMW Websites</p>
                    <div className="footer-links">
                        <a href="#">International Website</a>
                        <a href="#">BMW Lifestyle</a>
                        <a href="#">BMW Group Career</a>
                        <a href="#">BMW In Your Country</a>
                    </div>
                </div>
            </div>

            <div className="copyright-txt">
                <p>© BMW M GmbH 2025</p>
            </div>
        </div>
    )
}

export default Footer