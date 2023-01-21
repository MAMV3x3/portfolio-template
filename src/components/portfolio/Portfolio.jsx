import React from 'react';
import HoriziontalList from './HoriziontalList';
import "./Portfolio.css"

const Portfolio = (props) => {
  return (
    <section className="portfolio container section" id="resume">
      <h2 className="section__title">Proyects</h2>
      <div className="portfolio__container">
        <HoriziontalList/>
      </div>
    </section>
  )
}

export default Portfolio