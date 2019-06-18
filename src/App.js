import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Nav} from 'react-bootstrap';
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
    { path: '', name: 'About', Component: About},
    { path: '/edu', name: 'Education', Component: Education, Data: EducationData },
    { path: '/experience', name: 'Experience', Component: Experience, Data: ExperienceData },
    { path: '/skills', name: 'Skills', Component: Skills, Data: SkillsData },
    { path: '/interests', name: 'Interests', Component: Interests },
    { path: '/awards', name: 'Awards', Component: Awards, Data: AwardsData }
];

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Container id="main-cont">
              <Row>
                  <Col sm={4}>
                      <main className="main">
                          <aside className="sidebar">
                              <nav className="nav">
                                  {routes.map(route => (
                                      <ul>
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
                                      </ul>
                                  ))}
                              </nav>
                          </aside>
                      </main>
                  </Col>
                  <Col sm={8} >
                      {/*<Switch>*/}
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
                      {/*</Switch>*/}
                  </Col>
            </Row>
        </Container>
      </BrowserRouter>

  );
}

export default App;
