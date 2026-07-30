"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function createSpherePositions(count: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 4.5 + Math.random() * 3.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = radius * Math.cos(phi);
  }
  return arr;
}

const PARTICLE_POSITIONS = createSpherePositions(700);

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = PARTICLE_POSITIONS;

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.006;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7c5cff"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

function CoreShape() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x += delta * 0.05;
      groupRef.current.rotation.y += pointer.x * delta * 0.4;
      groupRef.current.rotation.x += -pointer.y * delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Icosahedron args={[1.7, 1]}>
        <meshStandardMaterial
          color="#0b0e17"
          emissive="#7c5cff"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.6}
          wireframe
        />
      </Icosahedron>
      <Icosahedron args={[1.15, 0]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.4}
          transparent
          opacity={0.16}
        />
      </Icosahedron>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 4, 5]} intensity={40} color="#7c5cff" />
      <pointLight position={[-5, -3, -4]} intensity={25} color="#22d3ee" />

      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.1}>
        <CoreShape />
      </Float>

      <ParticleField />
      <Sparkles count={40} scale={7} size={2.2} speed={0.25} color="#ff5fae" opacity={0.5} />
    </Canvas>
  );
}
