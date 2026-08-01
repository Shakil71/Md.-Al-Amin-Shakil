"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei";
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
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.x += delta * 0.004;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#5c88ec"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function CoreShape() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.03;
      groupRef.current.rotation.y += pointer.x * delta * 0.25;
      groupRef.current.rotation.x += -pointer.y * delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <Icosahedron args={[1.7, 1]}>
        <meshStandardMaterial
          color="#0d121c"
          emissive="#3468e0"
          emissiveIntensity={0.3}
          roughness={0.25}
          metalness={0.5}
          wireframe
        />
      </Icosahedron>
      <Icosahedron args={[1.15, 0]}>
        <meshStandardMaterial
          color="#5c88ec"
          emissive="#5c88ec"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.3}
          transparent
          opacity={0.1}
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
      <ambientLight intensity={0.55} />
      <pointLight position={[5, 4, 5]} intensity={30} color="#3468e0" />
      <pointLight position={[-5, -3, -4]} intensity={18} color="#5c88ec" />

      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.8}>
        <CoreShape />
      </Float>

      <ParticleField />
    </Canvas>
  );
}
