import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { RobotModel } from './RobotModel';
import { OrbitControls, Loader } from '@react-three/drei';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* UI Overlay */}
      <header className="header glass-panel">
        <h1 className="logo">OREX</h1>
        <p className="subtitle">Sumo Robotics</p>
      </header>

      {/* 3D Canvas */}
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, 150], fov: 50 }}>
          <color attach="background" args={['#0f172a']} />
          <ambientLight intensity={0.2} />
          

          <Suspense fallback={null}>
            <RobotModel />
          </Suspense>
          
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1}
          />
        </Canvas>
        <Loader />
      </div>
      
      {/* Mobile-friendly instructions overlay */}
      <div className="instructions glass-panel">
        <p>Touch & drag to interact</p>
      </div>
    </div>
  );
}

export default App;
