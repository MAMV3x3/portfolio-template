import React from 'react';
import Data from './Data';
import Proyect from './Proyect'
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <section className="portfolio container section" id="resume">
      <h2 className="section__title">Proyects</h2>

      <div className="portfolio__container">
          <Proyect name=" space-apps-challenge-2022" description="The ISS tracker and collision avoidance web app by Dagon, is an open-source web app, where the user can know the actual location of the International Space Station, check for real coalitions alerts with space trash and space debris, satellites and space bodies detected and located with the Satellite.js library, in a 3D space, which simulates the world" image="https://user-images.githubusercontent.com/84602829/212249521-765e6854-8e4c-41c8-b9a8-9e28f1c2955f.png"/>
      </div>
    </section>
  )
}

export default Portfolio