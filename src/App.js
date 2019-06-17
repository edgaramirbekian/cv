import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Widget from './Components/Widget/Widget';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Interests from './Components/Interests/Interests';
import Awards from './Components/Awards/Awards';
import EducationData from './Info/education.json';
import ExperienceData from './Info/experience.json';
import SkillsData from './Info/skills.json';
import AwardsData from './Info/awards.json';
import './App.css';
import CV from './Components/GetCV/CV';

function App() {
  return (
      <Container id="main-cont">
          <Row>
              <Col sm={4}>
                  <Widget />
              </Col>
              <Col sm={8}>
                  <div className="wrap-content">
                      <BrowserRouter>
                          <Switch>
                              <Route exact path="/"
                                 component={About} />
                              <Route path="/experience"
                                 render={(props) => <Experience {...props} data={ExperienceData} />} />
                              <Route path="/edu"
                                 render={(props) => <Education {...props} data={EducationData} />} />
                              <Route path="/skills"
                                 render={(props) => <Skills {...props} data={SkillsData} />} />
                              <Route path="/interests"
                                 component={Interests} />
                              <Route path="/awards"
                                 render={(props) => <Awards {...props} data={AwardsData} />} />
                          </Switch>
                      </BrowserRouter>
                  </div>
              </Col>
        </Row>
    </Container>
  );
}

export default App;
