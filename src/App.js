import React from 'react';
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

function App() {
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
    <ProjectModal />
    </>
  );
}

export default App;
