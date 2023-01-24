import React from 'react';
import "./Home.css";
import SocialsHeader from "./SocialsHeader";
import ScrollDown from "./ScrollDown";
import Window3d from "../SubComponents/Window3d"
import Shapes from './Shapes';

import { Canvas } from '@react-three/fiber';
import { MouseParallax } from 'react-just-parallax';

const Home = (props) => {
  return (
    <>
    <div className="wrapper">
      <MouseParallax isAbsolutelyPositioned>
        <Shapes />
      </MouseParallax>
    </div>
    <section className="home container" id="home">
      <div className="intro">
        {/* <div className="home__img">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <Blob />
          </Canvas>
        </div> */}
        <div className='home__img'>
          <Window3d item="inesZamba.gbl"/>
        </div>
        <h2 className="home__name__sub">Hi 👋, I'm</h2>
        <h1 className="home__name">{props.devName}</h1>
        <span className="home__education">{props.devCarrer}</span>

        <SocialsHeader />

        <a href="#contact" className="btn">Contact me</a>

        <ScrollDown />
      </div>
    </section>
    </>
  )
}

export default Home