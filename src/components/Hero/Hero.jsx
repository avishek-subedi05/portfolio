import React from "react";
import profile from "../../assets/images/profile.jpg";
import "./hero.css";
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hi, I'm Avishek Subedi</h1>
                <p> I'm a web developer.I create responsive websites using React, HTML, CSS, and JavaScript.</p>
            </div>
            <div className="hero-image">
                <img src={profile} alt="My Profile" />
            </div>
        </section>
    );
};

export default Hero;
