import React from 'react';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

export function RobotModel(props) {
  const modelPath = import.meta.env.BASE_URL + 'robot_assembled_final.glb';
  const gltf = useGLTF(modelPath);
  
  return (
    <Stage environment="city" intensity={0.3} contactShadow={{ opacity: 0.8, blur: 2 }}>
      <primitive object={gltf.scene} {...props} />
    </Stage>
  );
}

useGLTF.preload(import.meta.env.BASE_URL + 'robot_assembled_final.glb');
