import React from 'react';
import config from '../config.js';
function Footer(props) {
  return (

<footer id="colophon" className="site-footer">
    <div className="container">
        <div className="row">
            <div className="col-sm-4 col-xs-12">
                <a className="icon facebook-bg" href={config.social.facebook}><i className="icon-facebook"></i></a>
                <a className="icon twitter-bg" href={config.social.twitter}><i className="icon-twitter"></i></a>
                <a className="icon gplus-bg" href={config.social.linkedin}><i className="icon-linkedin"></i></a>
                <a className="icon linkedin-bg" href={config.social.gplus}><i className="icon-gplus"></i></a>
            </div>
            <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3"><p className="copyright">2017. All Rights Reserved</p></div>
            <div className="col-sm-4 col-xs-3">
                <div className="text-right page-scroll">
                    <a className="icon icon-up-bg" href="#hero"><i className="icon-up"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>

)
}
export default Footer;
