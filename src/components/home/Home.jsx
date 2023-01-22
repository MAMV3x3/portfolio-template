import React from 'react';
import "./Home.css";
import SocialsHeader from "./SocialsHeader";
import ScrollDown from "./ScrollDown";
import Avatar from "../../assets/logo.svg"
import Window3d from "../SubComponents/Window3d"

const Home = (props) => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        {/* <img src={Avatar} alt="avatar" className="home__img" /> */}
        <div className='home__img'>
          <Window3d item="inesZamba.gbl"/>
        </div>
        <h1 className="home__name">Hi 👋, I'm<br />{props.devName}</h1>
        <span className="home__education">{props.devCarrer}</span>

        <SocialsHeader />

        <a href="#contact" className="btn">Contact me</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home