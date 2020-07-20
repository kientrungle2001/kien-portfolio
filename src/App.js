import React, {useState} from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import About from './components/About';
import Skills from './components/Skills';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import config from './config';

function App(props) {
  return (
    <>
      <Header />
      <Overview />

      <main id="main" className="site-main">

        <About />
        <Skills />
        <Introduction />
        <Projects />
        <Stats />
        <Contact />

      </main>
      <Footer />
      <ProjectModal {...props.currentProject} />
    </>
  );
}



export default function (props) {
  let [currentProject, setCurrentProject] = useState(null);
  config.subscribeCurrentProject(function(project) {
    setCurrentProject(project);
  });
  let newProps = {...props};
  newProps.currentProject = currentProject;
  return (
    <App {...newProps} />
  );
};
