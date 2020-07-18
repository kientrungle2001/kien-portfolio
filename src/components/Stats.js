import React from 'react';
import config from '../config.js';
function Stats(props) {
  return (
    <section className="site-section section-counters text-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                    <p className="counter start" data-to={config.yearsExperience} data-speed="2000">0</p>
                    <h4>{config.yearsExperienceTitle}</h4>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <p className="counter start" data-to={config.projectsDelivered} data-speed="2000">0</p>
                    <h4>{config.projectsDeliveredTitle}</h4>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <p id="infinity" className="counter" data-from="0" data-to="1" data-speed="1000">0</p>
                    <h4>Seconds on this site!<br />What are you waiting for?</h4>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Stats;
