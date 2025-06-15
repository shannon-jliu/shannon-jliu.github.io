import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {Container} from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import cuairIcon from "../assets/cuair-icon.jpeg";
import factsetIcon from "../assets/factset-icon.jpeg"
import cornelltechIcon from "../assets/cornell-tech-icon.jpeg";
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
            description: `
            \n Worked on the Security Automation and Analytics team to build scalable, cloud-native security solutions and improve security tooling infrastructure
            \nDeployed the OpenCTI threat intelligence platform in FactSet’s EKS (Elastic Kubernetes Service) environment using Helm, GitHub Actions, and AWS Secrets Manager, improving internal threat visibility and automation of intelligence workflows
            \nCollaborated closely with engineers, security analysts, and infrastructure teams through daily standups and town hall meetings to align automation with compliance, threat detection, and operational security goals
            `,
            skills: "Python, Kubernetes, Helm, Github Actions, AWS, automation",
            icon: factsetIcon
        },
        {
            id: 2,
            position: "Research Intern",
            location: "Interaction Research Lab (IRL) @ Cornell Tech",
            date: "June 2024 - Present",
            description: `
            \nContributed to the Bystander Affect Detection (BAD) Robots project to study how robots can detect and respond to repeated failures in human-robot conversations and improve robot communication
            \nAnalyzed visual, audio, and motion data from 30+ human-robot interaction videos involving successive wizarded robot failures; extracted 66 features across 28K+ datapoints using Python and open-source libraries
            \nBuilt, trained, and evaluated multimodal time-series models (RNNs, transformers, linear classifiers) in TensorFlow and PyTorch using early, intermediate, and late fusion techniques for error granularity detection; achieved 90% intraparticipant and 70% interparticipant accuracy
            \nPublished a peer-reviewed paper and presented at the 20th IEEE/ACM International Conference on Human-Robot Interaction, titled [“I'm Done”: Describing Human Reactions to Successive Robot Failure](https://dl.acm.org/doi/abs/10.5555/3721488.3721699)
            `,
            skills: "Python, Tensorflow, PyTorch, NumPy, Pandas, Matplotlib, machine learning, feature extraction, data analysis, data processing, qualitative analysis",
            icon: cornelltechIcon,
        },
        {
            id: 3,
            position: "Imaging Systems Software Engineer",
            location: "Cornell University Unmanned Air Systems",
            date: "October 2023 - Present",
            description: `
            \nDesigned and built the “Plane System,” a Python/Rust-based Raspberry Pi application for GoPro image capture and settings control and real-time telemetry transmission; actively used by 60+ engineers on an autonomous aircraft for search and rescue competitions
            \nDeveloped the “Logs Page,” a full-stack web application using Java, JavaScript, HTML, and CSS to record and analyze test flight data, integrating real-time telemetry, imagery, and user input via APIs
            \nLed 10+ system tests, including unit, integration, and end-to-end validations; identified and resolved critical bugs in Wi-Fi setup, command communication, and hardware-software integration
            `,
            skills: "Python, Java, JavaScript, React.js, HTML, CSS, Rust, Raspberry Pi, Spring Boot, system testing, embedded systems",
            icon: cuairIcon,
        },
        {
            id: 5,
            position: "Software Engineer Intern",
            location: "Trillium Trading, LLC",
            date: "July 2022",
            description: `
            \nBuilt and enhanced 6 Java-based trading simulators replicating stock quoting, borrowing, and authentication workflows, enabling safe, cost-free testing and supporting a production server used by 100+ equity traders
            \nDeveloped reusable tools and utilities to streamline request/response handling with broker-dealer APIs in a high-frequency trading environment, improving code modularity and deepening expertise in socket programming, network communication, and JSON-based protocols`,
            skills: "Java, REST API",
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