import React, {Suspense, useState, useEffect} from 'react'
import Bici from './Bici'
import Window3dScenes from './Window3dScenes'
import {OrbitControls} from '@react-three/drei';
import './Window3d.css'

function Window3d() {
  return (
    <div className='Window3d'>
        <Window3dScenes className="Window3dScene" cameraPos={[10, 6 , 0]}>
            <color attach="background" args={['#555']}/>
            <Suspense fallback={null}>
                <Bici/>
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={10} minDistance={10} maxDistance={30} enablePan={false}/>
            <ambientLight intensity={0.015} />
            <pointLight color="white" intensity={0.7}  position={[10, 10, 20]} />
        </Window3dScenes>
    </div>
  )
}

export default Window3d