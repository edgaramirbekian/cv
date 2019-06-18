import React from 'react';
import { HashRouter, Route, NavLink } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Nav} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
import './App.scss';

const routes = [
    { path: '/', name: 'About', Component: About},
    { path: '/edu', name: 'Education', Component: Education, Data: EducationData },
    { path: '/experience', name: 'Experience', Component: Experience, Data: ExperienceData },
    { path: '/skills', name: 'Skills', Component: Skills, Data: SkillsData },
    { path: '/interests', name: 'Interests', Component: Interests },
    { path: '/awards', name: 'Awards', Component: Awards, Data: AwardsData }
];

function App() {
  return (
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Container id="main-cont">
              <Row>
                  <Col sm={4} className="desktop-sidebar">
                      <div className="sidebar">
                          <nav className="nav">
                              <ul>
                                  {routes.map(route => (
                                      <React.Fragment>
                                          <li>
                                              <Nav.Link
                                                  key={route.path}
                                                  as={NavLink}
                                                  to={route.path}
                                                  activeClassName="active"
                                                  exact
                                              >
                                                  {route.name}
                                              </Nav.Link>
                                          </li>
                                      </React.Fragment>
                                  ))}
                              </ul>
                          </nav>
                      </div>
                  </Col>
                  <div className="mobile-nav">
                      <Nav variant="pills" defaultActiveKey="/">
                          {routes.map(route => (
                              <Nav.Item>
                                  <Nav.Link
                                      key={route.path}
                                      as={NavLink}
                                      to={route.path}
                                      activeClassName="active"
                                      exact
                                  >
                                      {route.name}
                                  </Nav.Link>
                              </Nav.Item>
                            ))}
                      </Nav>
                  </div>
                  <Col sm={8} >
                      {routes.map(({ path, Component, Data }) => (
                          <Route key={path} exact path={path}>
                              {({ match }) => (
                                  <CSSTransition
                                      in={match != null}
                                      timeout={300}
                                      classNames="page"
                                      unmountOnExit
                                  >
                                      <div className="page">
                                          <Component data={Data!==undefined ? Data : null}/>
                                      </div>
                                  </CSSTransition>
                              )}
                          </Route>
                      ))}
                  </Col>
            </Row>
        </Container>
      </HashRouter>

  );
}

export default App;
