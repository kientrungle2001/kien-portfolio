import React from 'react';
import config from '../config.js';
function Introduction(props) {
    return (
        <section id="service" className="site-section section-services overlay text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>{config.introductionTitle}</h3>
                        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                    </div>
                    {config.introductions && config.introductions.map((introduction, index) => {
                        return (
                            <div className="col-sm-4" key={index}>
                                <div className="service">
                                    <img src={introduction.img} alt={introduction.imgCaption} />
                                    <h4>{introduction.title}</h4>
                                    <p>{introduction.content}</p>
                                </div>
                            </div>
                        );
                    })}


                </div>
            </div>
        </section>
    );
}

export default Introduction;
