import React from "react";
import { Element } from 'react-scroll'

const Skills = () => {
    return(
    
        <Element name="skills" className="skills section-bg">
        <div className="container">
            <div className="section-title">
            <h2>Skills</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
            </div>
            <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                <span className="skill">HTML 
                {/* <i className="val">100%</i> */}
                </span>
                {/* <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                </div>
                <div className="progress">
                <span className="skill">CSS 
                {/* <i className="val">90%</i> */}
                </span>
                {/* <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                </div>
                <div className="progress">
                <span className="skill">JavaScript
                 {/* <i className="val">75%</i> */}
                 </span>
                {/* <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="progress">
                <span className="skill">Python 
                {/* <i className="val">80%</i> */}
                </span>
                {/* <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                </div>
                <div className="progress">
                <span className="skill">Flask 
                {/* <i className="val">90%</i> */}
                </span>
                {/* <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                </div>
                <div className="progress">
                <span className="skill">Git
                 {/* <i className="bi-github">55%</i> */}
                 </span>
                {/* <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                </div>
            </div>
            </div>
        </div>
        </Element>

    )

}

export default Skills