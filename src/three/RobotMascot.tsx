'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { useState } from 'react';

// URL for the Soldier GLB from Three.js examples (or Mixamo)
const SOLDIER_GLB_URL = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/Soldier.glb';

function AnimatedCharacter() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(SOLDIER_GLB_URL);
  const { actions, names } = useAnimations(animations, group);
  
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [cyberColor, setCyberColor] = useState<string>("#00fc9a"); // Starts glowing green
  const [pulse, setPulse] = useState(1);

  // Array of cool cyber colors
  const colorPalette = ["#00fc9a", "#d575ff", "#00d0ff", "#ff003c"];

  useEffect(() => {
    // Basic Actions from the file: [0] Idle, [1] Run, [2] T-Pose?, [3] Walk.
    const idleAct = actions[names[0]];
    if (idleAct && !activeAction) {
      idleAct.reset().fadeIn(0.5).play();
      setActiveAction(names[0]);
    }
    
    // Convert the generic beige soldier into a cool glowing cyber-hologram
    scene.traverse((node) => {
      if ((node as THREE.Mesh).isMesh) {
        const mesh = node as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // Ensure material is overridden and responsive to cyberColor
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#0e0e13",
          emissive: cyberColor,
          emissiveIntensity: pulse,
          wireframe: true,
          transparent: true,
          opacity: 0.8,
        });
        mesh.userData.isCyber = true;
      }
    });

    if (group.current) {
        group.current.rotation.y = Math.PI; // 180 degrees
    }
  }, [actions, names, scene, cyberColor, pulse]);

  // Handle crossfading between animation states!
  const crossfadeTo = (newActionName: string, duration = 0.5) => {
    if (activeAction === newActionName) return;
    const prevAction = actions[activeAction!];
    const newAction = actions[newActionName];
    if (prevAction && newAction) {
      newAction.reset().fadeIn(duration).play();
      prevAction.crossFadeTo(newAction, duration, true);
    }
    setActiveAction(newActionName);
  };

  const handleClick = () => {
    // Pick the next color in the palette
    const nextColorIndex = (colorPalette.indexOf(cyberColor) + 1) % colorPalette.length;
    setCyberColor(colorPalette[nextColorIndex]);
    
    // Set intensity high to create a "flash" then taper back down
    setPulse(5);
    setTimeout(() => setPulse(0.5), 150);

    // Make him run!
    crossfadeTo(names[1], 0.2);
  };

  useFrame((state) => {
    if (!group.current) return;
    
    const targetX = (state.pointer.x * state.viewport.width) / 4;
    const targetY = (state.pointer.y * state.viewport.height) / 4;

    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX * 0.2, 0.05);
    // Raise the character up so legs are visible within the canvas
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY * 0.1 - 1, 0.05);
    
    const headTargetRotationX = targetY * 0.5;
    // Base rotation of Math.PI so he faces front, plus the mouse tracking
    const headTargetRotationY = targetX * 1.5 + Math.PI;
    
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -headTargetRotationX, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, headTargetRotationY, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <group 
        ref={group} 
        scale={1.2} 
        position={[0, -1, 0]}
        onPointerOver={() => {
            document.body.style.cursor = 'crosshair'; // Cyber punk cursor style
            crossfadeTo(names[3]); // Walk
            setPulse(1.5);
        }}
        onPointerOut={() => {
            document.body.style.cursor = 'none';
            crossfadeTo(names[0]); // Idle
            setPulse(0.5);
        }}
        onClick={handleClick} // Run & Flash colors
      >
        <primitive object={scene} />

        {/* Custom Ground Pad "Teleporter" */}
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.5, 0.7, 32]} />
          <meshBasicMaterial color={cyberColor} transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Floating Scanner Ring */}
        <mesh position={[0, Math.sin(Date.now() / 500) * 0.5 + 0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.8, 0.85, 32]} />
          <meshBasicMaterial color={cyberColor} transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
}

// Preload the GLTF to avoid loading flicker
useGLTF.preload(SOLDIER_GLB_URL);

export default function RobotMascot() {
  return (
    <div className="w-full h-full relative z-20 pointer-events-auto">
      {/* Pulled the camera back on Z to 6 and raised it on Y to 1.5 */}
      <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }} shadows>
        <ambientLight intensity={0.6} />
        
        {/* Hemisphere Light similar to ThreeJS example */}
        <hemisphereLight args={["#ffffff", "#8d8d8d", 1.5]} position={[0, 20, 0]} />
        
        {/* Directional Lights for dramatic cyber contrast */}
        <directionalLight 
          position={[-3, 10, -10]} 
          intensity={2} 
          castShadow 
          shadow-mapSize={1024}
        />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#a1ffc2" />
        <directionalLight position={[-10, 5, 5]} intensity={1.5} color="#d575ff" />
        
        <Environment preset="city" />
        
        {/* Invisible plane for potential raycasting / shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>

        <AnimatedCharacter />
      </Canvas>
    </div>
  );
}
