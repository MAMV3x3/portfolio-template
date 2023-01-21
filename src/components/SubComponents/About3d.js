import React, {Suspense} from 'react'
import Loader from './Loader'
import About3dScenes from './About3dScenes'
import {OrbitControls} from '@react-three/drei';
import './Window3d.css'

function About3d() {
  return (
    <div className='Window3d'>
        <About3dScenes className="Window3dScene" cameraPos={[0, 0, -7]}>
            {/* <color attach="background" args={['#555']}/> */}
            <Suspense fallback={null}>
                <Loader/>
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={5} minDistance={8.2} maxDistance={9} enablePan={false}/>
            {/* <ambientLight intensity={0.015} /> */}
            <ambientLight intensity={0.7} />
            <pointLight color="orange" intensity={3}  position={[10, 10, 20]} />
        </About3dScenes>
    </div>
  )
}

export default About3d