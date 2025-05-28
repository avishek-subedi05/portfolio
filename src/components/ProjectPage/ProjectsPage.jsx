import React from "react";
import "./ProjectsPage.css";
import Project from "../Projects/Project";

const projectData = [
    {
        title: "Portfolio Website",
        description: "My personal website built with React showcasing my skills and projects.",
        image: "src/assets/images/portfoli image.png",
        link: "",
    },
    {
        title: "Weather App",
        description: "Fetches real-time weather data using OpenWeatherMap API.",
        image: "src/assets/images/weather app.png",
        link: "https://weatherapp.com",
    },
    {
        title: "Task Manager",
        description: "To-do list with CRUD operations and localStorage. It is a good app With showcasing my Java script skills.",
        image: "src/assets/images/todo list.jpeg",
        link: "https://taskmanager.com",
    },
];

const ProjectsPage = () => {
    return (
        <>
        <section id="project"></section>
        <section className="projects-page">
            <h2>My Projects</h2>

            <p className="project-intro"> Here are the Projects Build My me Showcasing my skills and using them to build smalls projects.</p>
            <div className="projects-container">
                {projectData.map((project, index) => (
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
