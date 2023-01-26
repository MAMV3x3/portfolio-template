import React from "react";
import "./Resume.css";
import Card from "./Card";

const Resume = (props) => {
  return (
    <section className="resume container section" id="resume">
      <div className="tags top-tags">&lt;h2&gt;</div>
      <h2 className="section__title">Resume</h2>
      <div className="tags bottom-tags">&lt;/h2&gt;</div>

      <div className="resume__container grid">
        <div className="timeline grid">
          {props.education.map((val, id) => {
            return (
              <Card
                key={id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                institution={val.institution}
                desc={val.desc}
              />
            );
          })}
        </div>

        <div className="timeline grid">
          {props.experience.map((val, index) => {
            return (
              <Card
                key={index}
                icon={val.icon}
                title={val.title}
                year={val.year}
                institution={val.institution}
                desc={val.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
