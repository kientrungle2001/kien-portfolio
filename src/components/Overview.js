import React, {useEffect} from 'react';
import config from '../config.js';
import { Link } from 'react-router-dom';
function Overview(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
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
                            <Link to="/projects" className="btn btn-border">{config.exploreMore}</Link>
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
