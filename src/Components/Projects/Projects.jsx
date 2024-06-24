import React from "react";
import "./Projects.css";
import ProjectDetails from "../../data/Projects.json";
import DemoIcon from "../../assets/demo.png";
import GithubIcon from "../../assets/github.png";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {ProjectDetails.map((project, id) => {
          return (
            <div className="project-item" key={project.id}>
              <div className="project-img">
                <img src={project.imagePath} alt={project.title} />
              </div>
              <p>{project.title}</p>
              <div className="technologies">
                {project.technologies.map((tech, id) => {
                  return <div className="technology">{tech}</div>;
                })}
              </div>
              <div className="project-actions">
                <a href={project.demoLink} target="_blank">
                  <div className="action">Demo</div>
                </a>
                <a href={project.codeLink} target="_blank ">
                  <div className="action">Source Code</div>
                </a>
              </div>
              <div className="mob-project-actions">
                <a href={project.demoLink} target="_blank">
                  <img src={DemoIcon} alt="" />
                </a>
                <a href={project.codeLink} target="_blank ">
                  <img src={GithubIcon} alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
