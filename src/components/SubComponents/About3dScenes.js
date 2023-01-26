import React from "react";
import { Canvas } from "@react-three/fiber";

const About3dScenes = ({ cameraPos, children }) => {
  return (
    <Canvas camera={{ position: cameraPos }} gl={{ antialias: true }}>
      {children}
    </Canvas>
  );
};

export default About3dScenes;
