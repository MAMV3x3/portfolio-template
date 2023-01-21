import React from 'react';
import HoriziontalList from './HoriziontalList';
import "./Portfolio.css"

const Portfolio = (props) => {
  return (
    <section className="portfolio container section" id="resume">
      <div className="portfolio__container">
        <div className="tags top-tags">&lt;h2&gt;</div>
          <h2 className="section__title">Proyects</h2>
        <div className="tags bottom-tags">&lt;/h2&gt;</div>
          <HoriziontalList proyects ={props.proyects}/>
      </div>
    </section>
  )
}

export default Portfolio