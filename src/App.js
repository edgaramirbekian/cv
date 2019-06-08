import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Widget from './Components/Widget/Widget';
import About from './Components/About/About';

function App() {
  return (
    <Container>
        <Row>
            <Col sm={4}>
                <Widget />
            </Col>
            <Col sm={8}>
                <About />
            </Col>
        </Row>
    </Container>
  );
}

export default App;
