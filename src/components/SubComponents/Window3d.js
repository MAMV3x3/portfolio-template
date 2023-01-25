import React, {Suspense} from 'react'
// import AnimatedCharacter from './animatedCharacters/AnimatedCharacter'
import AnimatedCharacter from './animatedCharacters/AnimatedCharacterM'
import Window3dScenes from './Window3dScenes'
import {OrbitControls} from '@react-three/drei';
import './Window3d.css'

function Window3d(props) {
  return (
    <div className='Window3d'>
        <Window3dScenes className="Window3dScene" cameraPos={[0, 0, -8]}>
            {/* <color attach="background" args={['#555']}/> */}
            <Suspense fallback={null}>
                <AnimatedCharacter/>
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={2} minDistance={7} maxDistance={9} enablePan={false}/>
            <ambientLight intensity={0.7} />
            <pointLight color="orange" intensity={1}  position={[10, 10, 20]} />
        </Window3dScenes>
    </div>
  )
}

export default Window3d