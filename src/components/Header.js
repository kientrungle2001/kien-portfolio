import React from 'react';
import config from '../config.js';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <header id="masthead" className="site-header" data-anchor-target=".hero" data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);" data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
        <nav id="primary-navigation" className="site-navigation">
            <div className="container">
                <div className="navbar-header page-scroll">

                    <button type="button" className="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <a href="#hero" className="site-logo"><img src="assets/img/logo.png" alt="logo" /></a>

                </div>

                <div className="main-menu" id="portfolio-perfect-collapse">

                    <ul className="nav navbar-nav navbar-right">

                        <li className="page-scroll"><Link to="/">{config.home}</Link></li>
                        <li className="page-scroll"><Link to="/about">{config.about}</Link></li>
                        <li className="page-scroll"><Link to="/skill">{config.mySkills}</Link></li>
                        <li className="page-scroll"><Link to="/service">{config.service}</Link></li>
                        <li className="page-scroll"><Link to="/projects">{config.projectsTitle}</Link></li>
                        <li className="page-scroll"><a href="#contact">{config.contact}</a></li>

                    </ul>

                </div>

            </div>
        </nav>
    </header>
  );
}

export default Header;
