import React from "react";
import { Container } from "react-bootstrap";
import portfolioImg from "../assets/portfolioimage.png";
import badrobotsirlImg from "../assets/badrobotsirl.png";
import mpsarchImg from "../assets/mpsarchitecture.png";
import dadskitchenImg from "../assets/dadskitchen.png";

export const Projects = () => {
  const projects = [
    {
      title: "BadRobotsIRL",
      description:
        "Recognizing successive robot failure by analyzing human reactions and behaviors during human-robot interactions. Presented at the 20th IEEE/ACM International Conference on Human-Robot Interaction (HRI 2025).",
      link: "https://github.com/IRL-CT/badrobotsIRL",
      imgUrl: badrobotsirlImg,
      skills: "Machine Learning & Data - Python, Tensorflow, PyTorch, Scikit-learn, NumPy, Pandas, Matplotlib",
      status: "Presented analysis. Currently training models to predict robot failure based on human reactions :)"
    },
    {
      title: "Mini Plane System",
      description:
        "Controlling GoPro image capture/settings, gimbal movement, and image/telemetry transmission using Python, Rust, and Raspberry Pi.",
      link: "https://github.com/CUAir/mini-plane-system",
      imgUrl: mpsarchImg,
      skills: "Embedded Systems - Python, Rust, Raspberry Pi",
      status: "Currently in development :D"
    },
    {
      title: "Dad's Kitchen",
      description: "Building a web app to help users manage and update recipes and ingredients, and interact with a community of chefs and eaters through ratings and reviews. Inspired by my dad who loves coding and cooking XD.",
      link: "https://github.com/shannon-jliu/dadskitchen-frontend",
      imgUrl: dadskitchenImg,
      skills: "Full Stack - Java, JavaScript, React.js, HTML, CSS, PostgreSQL, Spring",
      status: "Currently in development :O"
    },
    {
      title: "Portfolio Website",
      description:
        "Documenting experiences and projects created throughout my career. Experimenting with UI design and responseive web development.",
      link: "https://github.com/shannon-jliu/portfolio",
      imgUrl: portfolioImg,
      skills: "Frontend - JavaScript, React.js, HTML, CSS",
      status: "Always a work in progress ;)"
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
                <h5>{project.status}</h5>
                <p>{project.description}</p>
                <h6>{project.skills}</h6>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
