import React, {useEffect} from 'react';
import config from '../config.js';
function Skills(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
}, []);
  return (
    <section className="site-section section-skills">
        <div className="container">
            <div className="text-center">
                <h3>{config.mySkills}</h3>
                <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
            </div>
            <div className="row">

                  {config.skills && config.chunk(config.skills, 2).map((chunk, chunkIndex) => {
                    return (
                      <div className="col-md-4" key={chunkIndex}>
                        {chunk.map((skill, skillIndex) => {
                          return (
                            <div className="skill" key={skillIndex}>
                                <h4>{skill.name}</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-transitiongoal={skill.value}></div>
                                </div>
                            </div>
                          );
                        })}

                      </div>
                    )
                  })}


            </div>
        </div>
    </section>
  )
};

export default Skills;
