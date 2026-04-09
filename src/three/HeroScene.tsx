'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function InteractiveBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Smoothly follow the mouse pointer
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouseX * 0.1, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseY * 0.1, 0.05);

    // Rotate the blob based on mouse too
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouseY * 0.2, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX * 0.2, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, -2]}>
        {/* We use an icosahedron to make it look like a low-poly or organic blob */}
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial
          color="#0e0e13"
          emissive="#d575ff"
          emissiveIntensity={0.4}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full pointer-events-none">
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#a1ffc2" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#d575ff" />

      <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />

      {/* The main interactive blob character */}
      <InteractiveBlob />

      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-2, 1, -1]}>
          <torusGeometry args={[1.2, 0.3, 16, 32]} />
          <meshStandardMaterial color="#00fc9a" wireframe opacity={0.15} transparent />
        </mesh>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
