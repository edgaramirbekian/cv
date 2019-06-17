import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.scss';

function Education(props) {
    return (
        <div className="edu">
            <h1>EDUCATION</h1>
            <Container>
                <Row>
                    <Col className="degree-info" sm={8}>
                        {props.data.universities.map(uni => {
                            return (
                                <div className="institution">
                                    <h3>{uni.institution}</h3>
                                    <h6>{uni.degree} of Computer Science</h6>
                                    <h6>Faculty of {uni.faculty}</h6>
                                </div>
                            )
                        })}
                    </Col>
                    <Col className="degree-info" sm={4}>
                        {props.data.universities.map(uni => {
                            return (
                                <em>{uni.started} - {uni.finished}</em>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Education;