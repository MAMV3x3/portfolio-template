import React, {Suspense} from 'react'
import Bici from './Bici'
import Window3dScenes from './Window3dScenes'
import {OrbitControls} from '@react-three/drei';
import './Window3d.css'

function Window3d() {
  return (
    <div className='Window3d'>
        <Window3dScenes className="Window3dScene" cameraPos={[0, 0, -8]}>
            {/* <color attach="background" args={['#555']}/> */}
            <Suspense fallback={null}>
                <Bici/>
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={5} minDistance={5} maxDistance={25} enablePan={false}/>
            {/* <ambientLight intensity={0.015} /> */}
            <ambientLight intensity={0.3} />
            <pointLight color="orange" intensity={1}  position={[10, 10, 20]} />
        </Window3dScenes>
    </div>
  )
}

export default Window3d