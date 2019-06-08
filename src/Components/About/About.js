import React from 'react';
import './styles.css';
import logo from './logo.svg';

function About() {
    return (
        <div>
            <h1>
                <span> EDGAR </span>
                <br/>
                <span> AMIRBEKYAN </span>
            </h1>
            <br/>
                <div>
                    <span> Armenia, Yerevan </span>
                    <span> +374 96 071577 </span>
                    <p> Organized and motivated software developer seeking to work closely with <br/>
                        a team of experienced engineers to create a products which have an impact, <br/>
                        skilled in Web Development(Ruby on Rails, NodeJS, ReactJS, Django, Flask).
                    </p>
                    <h6>
                        Made with
                        <img src={logo} className="logo_style" alt="React-logo" />
                    </h6>
                </div>

        </div>
    );
}

export default About;