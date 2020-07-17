import React from 'react';
import config from '../config.js';
function Projects(props) {
  return (
    <section id="portfolio" className="site-section section-portfolio">
        <div className="container">
            <div className="text-center">
                <h3>My recent Works</h3>
                <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
            </div>
            <div className="row">
                <div className="col-md-4 col-xs-6">
                    <div className="portfolio-item">
                        <img src="assets/img/portfolio-1.jpg" className="img-res" alt="" />
                        <div className="portfolio-item-info">
                            <h4>Project Title</h4>
                            <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span className="glyphicon glyphicon-eye-open"></span></a>
                            <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6">
                    <div className="portfolio-item">
                        <img src="assets/img/portfolio-2.jpg" className="img-res" alt="" />
                        <div className="portfolio-item-info">
                            <h4>Project Title</h4>
                            <a href="#" data-toggle="modal" data-target="#portfolioItem2"><span className="glyphicon glyphicon-eye-open"></span></a>
                            <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6">
                    <div className="portfolio-item">
                        <img src="assets/img/portfolio-3.jpg" className="img-res" alt="" />
                        <div className="portfolio-item-info">
                            <h4>Project Title</h4>
                            <a href="#" data-toggle="modal" data-target="#portfolioItem3"><span className="glyphicon glyphicon-eye-open"></span></a>
                            <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6">
                    <div className="portfolio-item">
                        <img src="assets/img/portfolio-4.jpg" className="img-res" alt="" />
                        <div className="portfolio-item-info">
                            <h4>Project Title</h4>
                            <a href="#" data-toggle="modal" data-target="#portfolioItem4"><span className="glyphicon glyphicon-eye-open"></span></a>
                            <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6">
                    <div className="portfolio-item">
                        <img src="assets/img/portfolio-5.jpg" className="img-res" alt="" />
                        <div className="portfolio-item-info">
                            <h4>Project Title</h4>
                            <a href="#" data-toggle="modal" data-target="#portfolioItem5"><span className="glyphicon glyphicon-eye-open"></span></a>
                            <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6">
                    <div className="portfolio-item">
                        <img src="assets/img/portfolio-6.jpg" className="img-res" alt="" />
                        <div className="portfolio-item-info">
                            <h4>Project Title</h4>
                            <a href="#" data-toggle="modal" data-target="#portfolioItem6"><span className="glyphicon glyphicon-eye-open"></span></a>
                            <a href="#"><span className="glyphicon glyphicon-link"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects;
