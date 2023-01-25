import React from 'react';
import ProyectGallery from './CardGallery/ProyectGallery';
import ProjectModal from './ProjectModal';
import "./Portfolio.css"


const Portfolio = (props) => {

  return (    
    <section className="portfolio container section" id="portfolio">
      {/* <ProjectModal/> */}
      <div className="portfolio__container">
        <div className="tags top-tags">&lt;h2&gt;</div>
          <h2 className="section__title">Projects</h2>
        <div className="tags bottom-tags">&lt;/h2&gt;</div>
        <ProyectGallery proyects={props.proyects}/>
      </div>
    </section>
  )
}

export default Portfolio