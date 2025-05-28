import React from "react";
import "./ProjectsPage.css";
import Project from "../Projects/Project";
import ProjectsData from "../../data/ProjectsData";



const ProjectsPage = () => {
    return (
        <>
            <section id="project"></section>
            <section className="projects-page">
                <h2>My Projects</h2>
                <p className="project-intro">
                    Here are the projects built by me, showcasing my skills through small applications.
                </p>
                <div className="projects-container">
                    {ProjectsData.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>
          

        </>
    );
};

export default ProjectsPage;
