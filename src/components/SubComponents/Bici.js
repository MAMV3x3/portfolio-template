import React from 'react'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const Bici = () => {
    const object = useLoader(OBJLoader, 'naranja.obj')
    return (
        <group rotation={[Math.PI/2, 0, 0]}>
            <primitive object={object} scale={0.07} rotation={[Math.PI, 0, Math.PI/2]} />
        </group>
    );
  };

export default Bici
