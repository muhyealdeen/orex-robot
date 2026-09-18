import React from 'react';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

export function RobotModel(props) {
  const gltf = useGLTF('/robot_assembled_final.glb');
  
  return (
    <Stage environment="city" intensity={0.3} contactShadow={{ opacity: 0.8, blur: 2 }}>
      <primitive object={gltf.scene} {...props} />
    </Stage>
  );
}

useGLTF.preload('/robot_assembled_final.glb');
