import React from 'react';
import './styles.scss';
import logo from './logo.svg';

function About() {
    return (
        <div className="about">
            <div className="hello">
                <h1>
                    <span className="iam">Hi! I am</span>
                    <br/>
                    <span className="name"> EDGAR </span>
                    <br/>
                    <span className="surname"> AMIRBEKYAN </span>
                </h1>
            </div>
            <br/>
            <div className="info">
                <p className="letter">
                    Organized and motivated software developer seeking to work closely with
                    a team of experienced engineers to create a products which have an impact,
                    skilled in Web Development(Ruby on Rails, NodeJS, ReactJS, Django, Flask).
                </p>
                <div className="contact">
                    <h4>CONTACT ME</h4>
                    <h6 className="contact-info">
                        <span className="contact-icon fas fa-map-marker-alt"><span className="contact-text">  YEREVAN, ARMENIA  </span></span>
                        <br/>
                        <span className="contact-icon fas fa-phone-volume"><span className="contact-text">  +374 96 071577  </span></span>
                        <br/>
                        <a className="contact-icon fas fa-envelope" href='mailto:amirbekyanedgar@gmail.com'><span className="contact-text">  amirbekyanedgar@gmail.com  </span></a>
                        <br/>
                        <a className="contact-icon fab fa-github" href='https://github.com/edgaramirbekian'><span className="contact-text">  edgaramirbekian  </span></a>
                        <br/>
                        <a className="contact-icon fas fa-file-pdf" href='https://github.com/edgaramirbekian/cv/blob/master/src/Info/resume.pdf'><span className="contact-text">  Get PDF  </span></a>
                    </h6>
                </div>
                <h6 className="made-with">
                    Made with
                    <img src={logo} className="logo_style" alt="React-logo" />
                </h6>
            </div>
        </div>
    );
}

export default About;