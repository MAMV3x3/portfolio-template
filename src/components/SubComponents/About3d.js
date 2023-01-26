import React, { Suspense } from "react";
import About3dScenes from "./About3dScenes";
import { OrbitControls } from "@react-three/drei";
import "./Window3d.css";
// import AnimatedCharacter from './animatedCharacters/AnimatedCharacterWave'
import AnimatedCharacter from "./animatedCharacters/AnimatedCharacterTalk";

function About3d() {
  return (
    <div className="Window3d">
      <About3dScenes className="Window3dScene" cameraPos={[0, 0, 7]}>
        <Suspense fallback={null}>
          <AnimatedCharacter />
        </Suspense>
        <OrbitControls minDistance={8.2} maxDistance={9} enablePan={false} />
        <ambientLight intensity={0.7} />
        <pointLight color="orange" intensity={1} position={[10, 10, 20]} />
      </About3dScenes>
    </div>
  );
}

export default About3d;
