import "./App.css";
import React, { Suspense } from 'react';
import Model from './My_model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <>
      <div className="helloDiv">
        <h1>Hello, this is me in T-Pose!</h1>
        <h2>just messing around with ThreeJS</h2>
      </div>

      <div className="center">
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 12 }}
          style={{
            backgroundColor: "#111a21",
            width: "60vw",
            height: "80vh",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
