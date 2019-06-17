import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.scss'
import '../../devicons/css/devicons.css'

function Skills(props) {
    return (
        <div className="skills">
            <h1>SKILLS</h1>
            <Container className="skills-icons">
                <Row>
                    <Col sm={2}>
                        <span className="devicons devicons-linux" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-windows" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-apple" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-terminal" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-git" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-vim" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <span className="devicons devicons-javascript" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-react" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-nodejs" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-jquery" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-coffeescript" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-ruby" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <span className="devicons devicons-ruby_on_rails" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-python" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-django" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-mysql" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-postgresql" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-sqllite" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <span className="devicons devicons-html5" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-css3" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-bootstrap" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-sass" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-less" />
                    </Col>
                    <Col sm={2}>
                        <span className="devicons devicons-markdown" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;