//Command: npx gltfjsx@6.1.3 lookOverShoulderInes.glb

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/animatedCharacters/animatedCharacterTalk.glb"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.Talk.play();
  });
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[Math.PI / 2.2, 2.8, 0]}
          scale={350}
          position={[0, 0, -3.5]}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="unamed"
            geometry={nodes.unamed.geometry}
            material={materials.palettemat}
            skeleton={nodes.unamed.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/animatedCharacters/animatedCharacterTalk.glb");
