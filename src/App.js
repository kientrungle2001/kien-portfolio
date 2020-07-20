import React, { useState } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import config from './config';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App(props) {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Overview} />
        </Switch>

        <main id="main" className="site-main">
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/skill" exact component={Skills} />
            <Route path="/service" exact component={Service} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
          <Stats />
          <Contact />

        </main>
        <Footer />
        <ProjectModal {...props.currentProject} />
      </Router>
    </>
  );
}



export default function (props) {
  let [currentProject, setCurrentProject] = useState(null);
  config.subscribeCurrentProject(function (project) {
    setCurrentProject(project);
  });
  let newProps = { ...props };
  newProps.currentProject = currentProject;
  return (
    <App {...newProps} />
  );
};
