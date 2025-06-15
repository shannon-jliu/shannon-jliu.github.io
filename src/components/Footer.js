import {Container, Row, Col} from "react-bootstrap";
import linkedinIcon from '../assets/linkedin-icon.svg'
import githubIcon from '../assets/github-icon.svg'
import youtubeIcon from '../assets/youtube-icon.svg'

export const Footer = () => {
    const resumeFile = "../assets/Shannon-Liu-Resume.pdf";
    return (
        <footer className="footer" id="footer">
            <Container>
                <Row className="align-items-center">
                    <div className="reach-out-footer">
                        <h3>please reach out through <b>email</b> or <b>linkedin!</b></h3>
                    </div>
                </Row>
                <Row>
                    <Col sm={4}>
                        <div className="email">
                            <a href="mailto:sjl356@cornell.edu" target="_blank">
                                <button className="email-button">sjl356@cornell.edu</button>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4}>
                            <div className="social-icon-footer">
                                <a href="https://www.linkedin.com/in/shannonjliu/" target="_blank"><img src={linkedinIcon} alt=""/></a>
                                <a href="https://github.com/shannon-jliu" target="_blank"><img src={githubIcon} alt=""/></a>
                                <a href="https://www.youtube.com/@JerseyDrone" target="_blank"><img src={youtubeIcon} alt=""/></a>
                            </div>
                    </Col>
                    <Col sm={4}>
                    <div className="resume">
                        <a href={resumeFile} download="shannon_liu_resume.pdf">
                            <button className="resume-button">Resume</button>
                        </a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}