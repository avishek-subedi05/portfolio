import React from 'react'
import './About.css'
import Project from '../Projects/Project'
import portfolioImg from "../../assets/images/portfolio-image.png";


const About = () => {
    return (
        <div>

            <section className="about">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I’m a passionate web developer skilled in building responsive and modern web
                        applications using React, JavaScript, HTML, and CSS. I enjoy solving problems
                        and continuously learning new technologies.
                    </p>
                    <h3>Skills</h3>
                    <ul>
                        <li>Html</li>
                        <li>CSS </li>
                        <li>Js</li>
                        <li>React</li>
                        <li>C++</li>


                    </ul>
                </div>
                <Project
                    title="Portfolio Website"
                    description="My personal website built with React showcasing my skills and work."
                    image={portfolioImg}
                    link="../"
                />


            </section>


        </div>
    )
}

export default About
