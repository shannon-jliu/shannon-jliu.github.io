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
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
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
                        <div id="about"></div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={bannerIcon} alt=""/>
                    </Col>
                </Row>
            </Container>
            <section >
                <h2 class="about">About</h2>
                <h4>
                    I'm a computer science student at Cornell Engineering curious about all things tech, from robotics and AI to cybersecurity. 
                    I enjoy building software that solves real problems and makes a difference.
                    {/* I'm a junior studying computer science at Cornell University's College of Engineering.
                    <br></br><br></br>
                    I'm passionate about creating technological innovations to improve the lives of humans
                    by applying skills, knowledge, and collaboration to research and impactful projects. */}
                </h4>
                <h5>
                    Aside from programming and learning technical skills, I enjoy building 3D puzzles, 
                    photography and videography, flying my drone, lifting weights, and any adventurous activites- rock climbing, hiking, skiing, kayaking, and traveling.
                </h5>
            </section>
        </section>
    )
}