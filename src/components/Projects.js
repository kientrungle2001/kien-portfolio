import React, { useState } from 'react';
import config from '../config.js';
function Projects(props) {
    return (
        <>
            <section id="portfolio" className="site-section section-portfolio">
                <div className="container">
                    <div className="text-center">
                        <h3>{config.projectsTitle}</h3>
                        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                    </div>
                    <div className="row">
                        {config.projects && config.projects.map((project, index) => {
                            return (
                                <div className="col-md-4 col-xs-6" key={index}>
                                    <div className="portfolio-item">
                                        <img src={project.img} className="img-res" alt="" />
                                        <div className="portfolio-item-info">
                                            <h4 >{project.title}</h4>
                                            <a href="#" onClick={() => {config.setCurrentProject(project)}} data-toggle="modal" data-target="#portfolioItem1"><span className="glyphicon glyphicon-eye-open"></span></a>
                                            <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;
