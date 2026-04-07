'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, MeshDistortMaterial } from '@react-three/drei';

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full pointer-events-none">
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#a1ffc2" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#d575ff" />

      <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2, 0, -2]}>
          <octahedronGeometry args={[1.5, 0]} />
          <MeshDistortMaterial color="#0e0e13" emissive="#d575ff" emissiveIntensity={0.2} wireframe />
        </mesh>
      </Float>

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
