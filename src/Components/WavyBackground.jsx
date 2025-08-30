
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Wave() {
  const meshRef = useRef();
  const geometryRef = useRef();

  // Create plane geometry once
  const geometry = useMemo(() => new THREE.PlaneGeometry(60, 60, 50, 50), []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] =
        0.5 * Math.sin(x * 2 + time) +
        0.25 * Math.sin(x * 3 + time * 3) +
        0.1* Math.sin(y * 5 + time * 3);
    }

    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <bufferGeometry ref={geometryRef} attach="geometry" {...geometry} />
      <meshStandardMaterial color="#facc15" wireframe />
    </mesh>
  );
}

export default function WavyBackground() {
  return (
    <Canvas
      camera={{ position: [0, 10, 10], fov: 75 }}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Wave />
    </Canvas>
  );
}
