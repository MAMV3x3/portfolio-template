import React from 'react';
import "./About.css"
import Avatar from "../../assets/logo.svg"

const About = () => {
  return (
    <section className="about container section" id="about">
      <div className="tags top-tags">&lt;h2&gt;</div>
      <h2 className="section__title">About me</h2>
      <div className="tags bottom-tags">&lt;/h2&gt;</div>

      <div className="about__container grid">
        <img src={Avatar} alt="avatar" className="about__img"/>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skils grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__ux"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Softskills</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage softskills"></span>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default About