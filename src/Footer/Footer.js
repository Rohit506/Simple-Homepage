import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
            <div className="footer">
                <h3>Follow us</h3>
                <a href="#" target="_blank"><i class="fab fa-3x fa-facebook"></i></a>
                <a href="#" target="_blank"><i class="fab fa-3x fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fab fa-3x fa-linkedin"></i></a>
                <a href="#" target="_blank"><i class="fab fa-3x fa-google-plus"></i></a>
            </div>
        </>
    );
};

export default Footer;