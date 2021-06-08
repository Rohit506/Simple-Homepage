import React from 'react';
import './About.css';

const about_img="https://i0.wp.com/www.curiouskeeda.com/wp-content/uploads/2017/12/Curiosukeeda-Foodies-Featured-Image-1.jpg?fit=1200%2C660&ssl=1";
const about_paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const About = () => {
    return (
        <>
            <div className="about-div">
                <h2 className='about1'>About us</h2>
                <p className='about1'><img id='about-img1' src={about_img}></img>{about_paragraph}</p>
            </div>
        </>
    );
};

export default About;