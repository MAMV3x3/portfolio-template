import React from 'react';
import "./About.css"
import About3d from '../SubComponents/About3d';

const About = (props) => {
  return (
    <section className="about container section" id="about">
      <div className="tags top-tags">&lt;h2&gt;</div>
      <h2 className="section__title">About me</h2>
      <div className="tags bottom-tags">&lt;/h2&gt;</div>

      <div className="about__container grid">
        {/* <img src={Avatar} alt="avatar" className="about__img"/> */}

        <div className="about__img">
          <About3d />
        </div>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              {props.history}
            </p>
            <a href='MAMV_CV.pdf' className="btn" download>Download CV</a>
          </div>
          <div className="about__skils grid">
          {
            props.statistics.map((val)=>{
              let widhtBar = {
                bar:{
                  width: `${val.porcent}%`
                }
              }
              return(
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">{val.title}</h3>
                  <span className="skills__number">{val.porcent}%</span>
                </div>

                <div className="skills__bar">
                  <span className="skills__percentage bar" style={widhtBar.bar}></span>
                </div>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>  
    </section>
  )
}

export default About