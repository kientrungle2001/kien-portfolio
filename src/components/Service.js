import React, {useEffect} from 'react';
import config from '../config.js';
function Service(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <section id="service" className="site-section section-services overlay text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>{config.serviceTitle}</h3>
                        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                    </div>
                    {config.services && config.services.map((service, index) => {
                        return (
                            <div className="col-sm-4" key={index}>
                                <div className="service">
                                    <img src={service.img} alt={service.imgCaption} />
                                    <h4>{service.title}</h4>
                                    <p>{service.content}</p>
                                </div>
                            </div>
                        );
                    })}


                </div>
            </div>
        </section>
    );
}

export default Service;
