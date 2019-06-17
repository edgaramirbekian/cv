import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.scss";

function Experience(props) {
    return (
        <div className="experience">
            <h1>EXPERIENCE</h1>
            <Container>
                <Row>
                    <Col className="experience-info" sm={8}>
                        {props.data.jobs.map(work => {
                            return (
                                <div className="work-data">
                                    <h3>{work.position}</h3>
                                    <h6> Writing REST-ful Ruby on Rails APIs and user interfaces  with ReactJS,
                                        unit and integration test with RSpec and Jest.
                                        Working closely with professional full-stack team.
                                    </h6>
                                </div>
                            )
                        })}
                    </Col>
                    <Col className="experience-info" sm={4}>
                        {props.data.jobs.map(work => {
                            return (
                                <em>{work.started} - {work.finished}</em>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Experience;