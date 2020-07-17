import React from 'react';
import config from '../config.js';
function Introduction(props) {
  return (
    <section id="service" className="site-section section-services overlay text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>What i do</h3>
                    <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                </div>
                <div className="col-sm-4">
                    <div className="service">
                        <img src="assets/img/front-end.svg" alt="Front End Developer" />
                        <h4>Front-end</h4>
                        <p>As a javascript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced javascript MVC frameworks such as angular</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="service">
                        <img src="assets/img/back-end.svg" alt="Back End Developer" />
                        <h4>Back-end</h4>
                        <p>Utilising php frameworks such as Zend or creating bespoke code, I've written services supporting thousands of users, including REST APIs, e-learning applications and more.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="service">
                        <img src="assets/img/consultancy.svg" alt="Coding" />
                        <h4>Consultancy</h4>
                        <p>As well as providing development services, I can also help you decide strategic roadmaps via consultancy services.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Introduction;
