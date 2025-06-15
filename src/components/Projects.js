import React from "react";
import { Container } from "react-bootstrap";
import portfolioImg from "../assets/portfolioimage.png";
import badrobotsirlImg from "../assets/badrobotsirl.png";
import mpsarchImg from "../assets/mpsarchitecture.png";

export const Projects = () => {
  const projects = [
    {
      title: "BadRobotsIRL",
      description:
        "Recognizing successive robot failure by analyzing human reactions and behaviors during human-robot interactions using Python, Tensorflow, PyTorch and open source feature extraction tools (in progress). Presented at the 20th IEEE/ACM International Conference on Human-Robot Interaction (HRI 2025).",
      link: "https://github.com/IRL-CT/badrobotsIRL",
      imgUrl: badrobotsirlImg,
    },
    {
      title: "Mini Plane System",
      description:
        "Controlling GoPro image capture/settings, gimbal movement, and image/telemetry transmission using Python, Rust, and Raspberry Pi (in progress).",
      link: "https://github.com/CUAir/mini-plane-system",
      imgUrl: mpsarchImg,
    },
    {
        title: "Portfolio Website",
        description:
          "Documenting experiences and projects created throughout my career using JavaScript, React.js, HTML, CSS.",
        link: "https://github.com/shannon-jliu/portfolio",
        imgUrl: portfolioImg,
      }
  ];

  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="section-title">Projects</h2>
        <div className="projects-gallery">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-wrapper"
              >
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="project-image"
                />
              </a>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
