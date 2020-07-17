import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Header />
    <Overview />

    <main id="main" className="site-main">

        <About />
        <Skills />

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

        <section className="site-section section-counters text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="10" data-speed="2000">0</p>
                        <h4>Years Experience</h4>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="120" data-speed="2000">0</p>
                        <h4>Projects Delivered</h4>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <p id="infinity" className="counter" data-from="0" data-to="1" data-speed="1000">0</p>
                        <h4>Seconds on this site!<br />What are you waiting for?</h4>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="site-section section-form text-center">
            <div className="container">

                <h3>Contact</h3>
                <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" name="name" className="form-control mt-x-0" placeholder="Name" required />
                        </div>
                        <div className="col-sm-6">
                            <input type="email" name="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="col-sm-12">
                            <textarea name="message" id="mesaage" className="form-control" placeholder="Message" required></textarea>
                        </div>
                    </div>
                    <button href="#" className="btn btn-border" type="submit">Hire Me <span className="glyphicon glyphicon-send"></span></button>
                </form>
            </div>
        </section>

    </main>

    <footer id="colophon" className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                    <a className="icon facebook-bg" href="#"><i className="icon-facebook"></i></a>
                    <a className="icon twitter-bg" href="#"><i className="icon-twitter"></i></a>
                    <a className="icon gplus-bg" href="#"><i className="icon-linkedin"></i></a>
                    <a className="icon linkedin-bg" href="#"><i className="icon-gplus"></i></a>
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


    <div id="portfolioItem1" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="assets/img/portfolio-1.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Project title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn btn-fill">Visit Page</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem2" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="assets/img/portfolio-2.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Project title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn btn-fill">Visit Page</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem3" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="assets/img/portfolio-3.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Project title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn btn-fill">Visit Page</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem4" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="assets/img/portfolio-4.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Project title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn btn-fill">Visit Page</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem5" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="assets/img/portfolio-5.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Project title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn btn-fill">Visit Page</a>
          </div>
        </div>
      </div>
    </div>

    <div id="portfolioItem6" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a className="close" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></a>
            <img className="img-res" src="assets/img/portfolio-6.jpg" alt="" />
          </div>
          <div className="modal-body">
            <h4 className="modal-title">Project title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn btn-fill">Visit Page</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
