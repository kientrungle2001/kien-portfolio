import React, {useEffect} from 'react';
import config from '../config.js';

function About(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
}, []);
  return (
    <section id="about" className="site-section section-about text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>{config.about}</h2>
                    <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                    <p>Xin chào! Tôi là {config.fullName}, một {config.jobTitle}, một người đam mê PHP và một anh chàng hơi bị ám ảnh bởi chất lượng mã.
                    Tôi cũng là người đồng sáng lập của kienlt.com. Tôi hiện đang sẵn sàng làm công việc tự do.
                    Nếu bạn có một dự án mà bạn muốn bắt đầu hoặc nghĩ rằng bạn cần sự giúp đỡ của tôi với một cái gì đó, thì hãy liên lạc.</p>
                    <a href="http:.grad.illinois.edu/sites/default/files/pdfs/cvsamples.pdf" className="btn btn-fill" target="_blank" rel="noopener noreferrer" download>{config.downloadMyCV}</a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
