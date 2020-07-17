import React from 'react';
import config from '../config.js';
function Overview(props) {
  return (
    <div id="hero" className="hero">
        <div className="container">
            <div className="row">

                <div className="col-md-6">
                    <h1>{config.fullName}</h1>
                    <div className="page-scroll">
                        <p className="job-title">{config.jobTitle}</p>
                        <a href="#contact" className="btn btn-fill ">{config.hireMe}</a>
                        <div className="clearfix visible-xxs"></div>
                        <a href="#portfolio" className="btn btn-border">{config.exploreMore}</a>
                    </div>
                </div>

                <div className="col-md-6 text-right">
                    <img src="assets/img/alex-vidal.png" alt={config.fullName} />
                </div>

            </div>
        </div>
    </div>
  )
};

export default Overview;
