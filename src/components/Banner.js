import {Container, Row, Col} from "react-bootstrap";
import {useState, useEffect} from "react";
import {ReactTyped} from "react-typed";
import bannerIcon from '../assets/banner-icon.png';
import {Link, animateScroll as scroll} from "react-scroll";

export const Banner = () => {
    const characteristics = ["software engineer", "ai/ml/hri researcher", "cybersecurity engineer", "drone pilot", "photographer"];

    const scrollToFooter = () => {
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <section className="banner" id="home">
            <Container fluid className="banner-container">
                <div className="banner-inner">
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <h1>{"hi, i'm shannon\n"}<br/></h1>
                            <h2>&#62; <span className="wrap"><ReactTyped
                                strings={characteristics}
                                typeSpeed={100}
                                loop
                                backSpeed={75}
                                cursorChar="|"
                                showCursor={true}/>
                                </span></h2>
                            <br/>
                            <h3>feel free to browse!</h3>
                            <div class="button-container">
                                <button onClick={scrollToAbout}>About</button>
                                <button onClick={scrollToFooter}>Let's connect!</button>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src={bannerIcon} alt=""/>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div id="about"></div>
            <section>
                <div className="about-container">
                    <h2 class="about">About</h2>
                    <h4>
                        I'm a computer science student at Cornell Engineering curious about all things tech, from robotics and AI to cybersecurity. 
                        I enjoy building software that solves real problems and makes a difference.
                    </h4>
                    <h5>
                        Some might say my experience is all over the place, but I see it as a reflection of my <strong>open-mindedness</strong> and <strong>eagerness to learn</strong>. I’m always looking for new challenges and opportunities to grow in the tech field. Whether it’s <strong>software engineering</strong>, <strong>machine learning</strong>, <strong>security</strong>, <strong>cloud,</strong> or <strong>robotics</strong>, I’m passionate about building innovative solutions that make a real impact :D.
                    </h5>
                    <h5>
                        Beyond programming and learning technical skills, I enjoy building 3D puzzles, photography and videography, flying my drone, lifting weights, and just about any adventure- rock climbing, hiking, skiing, kayaking, and traveling! 
                    </h5>
                </div>
            </section>
        </section>
    )
}