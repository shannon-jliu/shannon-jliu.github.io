import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {Container} from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import cuairIcon from "../assets/cuair-icon.jpeg";
import factsetIcon from "../assets/factset-icon.jpeg"
import cornelltechIcon from "../assets/cornell-tech-icon.jpeg";
import cornelluniversityIcon from "../assets/cornell-university-icon.jpeg";
import trilliumtradingIcon from "../assets/trilliumtrading-icon.jpg";
import ReactMarkdown from 'react-markdown';
import React from "react";

export const Experience = () => {

    const experiences = [
        {
            id: 1,
            position: "Cybersecurity Engineering Intern",
            location: "FactSet Research Systems Inc.",
            date: "June 2025 - Present",
            description: "Developed secure, cloud-native solutions with JavaScript, GraphQL, and Azure, delivering role-based APIs that provided risk and vulnerability data to 11 business units and 30+ departments. Built MCP tools and a Python server integrated with Anthropic Claude, enabling 40+ teams to query asset vulnerabilities and receive guided LLM-driven resolutions. Deployed a threat intelligence platform on AWS EKS with Kubernetes, Helm, and CI/CD pipelines, integrating 10+ APIs to automate threat data collection and improve security visibility.",
            skills: "Python, JavaScript, Kubernetes, Helm, PostgreSQL, GraphQL, Github Actions, Amazon Web Services, automation, CI/CD",
            icon: factsetIcon
        },
        {
            id: 2,
            position: "Research Intern",
            location: "Interaction Research Lab (IRL) @ Cornell Tech",
            date: "June 2024 - Present",
            description: "Led research on the Bystander Affect Detection (BAD) Robots project to study human reactions to repeated robot failures and improve robot communication strategies. Analyzed 28K+ data points from 30+ videos, extracted 66 multimodal features, and built time-series models in TensorFlow and PyTorch, achieving 93% intraparticipant and 71% interparticipant accuracy. Published findings in a peer-reviewed paper [“I'm Done”: Describing Human Reactions to Successive Robot Failure](https://dl.acm.org/doi/abs/10.5555/3721488.3721699) and presented at the 20th IEEE/ACM HRI conference.",
            skills: "Python, Tensorflow, PyTorch, NumPy, Pandas, Scikit-learn, Matplotlib, machine learning, neural networks, feature extraction, data analysis, data processing, qualitative analysis",
            icon: cornelltechIcon,
        },
        {
            id: 3,
            position: "Imaging Systems Software Engineer",
            location: "Cornell University Unmanned Air Systems",
            date: "October 2023 - Present",
            description: "Designed and implemented the “Plane System,” a Python and Rust app on Raspberry Pi for GoPro control and real-time telemetry, actively used by 60+ engineers on an autonomous aircraft. Built the “Logs Page,” a full-stack Java and React web app to analyze flight data, integrating telemetry and imagery. Led 10+ system tests, resolving key bugs in Wi-Fi, command protocols, and hardware-software integration.",
            skills: "Python, Java, JavaScript, React.js, HTML, CSS, Rust, Raspberry Pi, Spring Boot, system testing, embedded systems",
            icon: cuairIcon,
        },
        {
          id: 4,
          position: "Academic Excellence Workshop Facilitator",
          location: "Cornell University College of Engineering",
          date: "August 2024 - Present",
          description: "Led 3 supplemental workshops for CS 2110 (Object-Oriented Programming and Data Structures) and MATH 1920 (Multivariable Calculus for Engineers), delivering short lectures and facilitating collaborative student learning to deepen understanding of core technical concepts, reinforce course material, and foster academic community, reaching 40+ engineering students.",
          skills: "Java, object-oriented programming, data structures, multivariable calculus, teaching, mentoring",
          icon: cornelluniversityIcon,
        },
        {
            id: 5,
            position: "Software Engineer Intern",
            location: "Trillium Trading, LLC",
            date: "July 2022",
            description: "Built and enhanced 6 Java-based trading simulators replicating stock quoting, borrowing, and authentication workflows, enabling safe, cost-free testing on a production server used by 100+ equity traders. Developed reusable tools to streamline broker-dealer API interactions, improving modularity and efficiency in network communication and JSON protocols.",
            skills: "Java, REST API, JSON, network communication",
            icon: trilliumtradingIcon,
        },
    ];

    return (
        <section className="experience-section" id="experience">
            <Container classname="experience-timeline">
                <div className="vertical-timeline-wrapper">
                    <h2 className="section-title">Experience</h2>
                    <VerticalTimeline className="vertical-timeline">
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                            key={experience.id}
                            date={experience.date}
                            dateClassName="date"
                            iconStyle={{ background: `url(${experience.icon})`, backgroundSize: "cover", border: "1px solid ", boxShadow: "0 0 0 5px #7aa8f9" }}
                            iconClassName="vertical-timeline-element-icon"
                            className="vertical-timeline-element"
                          >
                            <div className="experience-box">
                              <h3 className="vertical-timeline-element-title">{experience.position}</h3>
                              <h5 className="vertical-timeline-element-subtitle">{experience.location}</h5>
                              <ReactMarkdown
                                components={{
                                  p: ({ node, ...props }) => (
                                    <p className="vertical-timeline-element-description" {...props} />
                                  ),
                                  a: ({ node, ...props }) => (
                                    <a target="_blank" rel="noopener noreferrer" {...props} />
                                  ),
                                }}
                              >
                                {experience.description}
                              </ReactMarkdown>
                              <p className="vertical-timeline-element-skills">{experience.skills}</p>
                            </div>
                          </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </Container>
        </section>
    )
    
}