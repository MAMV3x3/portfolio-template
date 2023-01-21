import React from 'react'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

const Bici = () => {
    const materials = useLoader(MTLLoader, 'yo.mtl')
    const object = useLoader(OBJLoader, 'meVoxel_ines.obj', loader => {
    materials.preload()
    loader.setMaterials(materials)
    })
    //const object = useLoader(OBJLoader, 'yo.obj')
    return (
        <group rotation={[0, 0, -Math.PI/2]}>
            <primitive object={object} scale={2} rotation={[Math.PI, 0, Math.PI/2]} position={[4, 0, 0]} />
        </group>
    );
  };

export default Bici
