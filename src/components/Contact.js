import React from 'react';
import config from '../config.js';
function Contact(props) {
  return (
    <section id="contact" className="site-section section-form text-center">
        <div className="container">

            <h3>{config.contact}</h3>
            <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" name="name" className="form-control mt-x-0" placeholder={config.nameLabel} required />
                    </div>
                    <div className="col-sm-6">
                        <input type="email" name="email" className="form-control" placeholder={config.emailLabel} required />
                    </div>
                    <div className="col-sm-12">
                        <textarea name="message" id="mesaage" className="form-control" placeholder={config.messageLabel} required></textarea>
                    </div>
                </div>
                <button href="#" className="btn btn-border" type="submit">{config.hireMe} <span className="glyphicon glyphicon-send"></span></button>
            </form>
        </div>
    </section>
  )
}

export default Contact;
