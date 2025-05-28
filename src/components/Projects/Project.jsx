import React from "react";
import "./Project.css";

const Project = ({ title, description, image, link }) => {
  return (
    <div className="project">
      {image && (
        <div className="project-img">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
