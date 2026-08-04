'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

const FISH_COUNT = 28;

function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame((_, delta) => {
    const targetX = pointer.x * 0.28;
    const targetY = pointer.y * 0.14;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 3.5, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 3.5, delta);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Sardine({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null);
  const seed = useMemo(() => {
    const row = index % 5;
    return {
      x: 5.4 + (index % 7) * 0.48 + Math.random() * 0.7,
      y: 1.7 - row * 0.38 + (Math.random() - 0.5) * 0.28,
      z: -1.8 + (index % 4) * 0.58 + Math.random() * 0.35,
      speed: 0.34 + Math.random() * 0.22,
      scale: 0.22 + Math.random() * 0.16,
      phase: Math.random() * Math.PI * 2,
    };
  }, [index]);

  useFrame((state, delta) => {
    const group = ref.current;
    if (!group) return;
    group.position.x -= seed.speed * delta;
    group.position.y = seed.y + Math.sin(state.clock.elapsedTime * 0.7 + seed.phase) * 0.08;
    group.rotation.z = Math.sin(state.clock.elapsedTime * 1.1 + seed.phase) * 0.05;
    group.rotation.y = Math.sin(state.clock.elapsedTime * 1.5 + seed.phase) * 0.04;
    if (group.position.x < -5.5) group.position.x = 5.7 + Math.random() * 1.5;
  });

  return (
    <group ref={ref} position={[seed.x, seed.y, seed.z]} scale={seed.scale}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.22, 0.8, 5, 10]} />
        <meshStandardMaterial color="#b8dde1" metalness={0.18} roughness={0.38} transparent opacity={0.74} />
      </mesh>
      <mesh position={[0.63, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.25, 0.42, 3]} />
        <meshStandardMaterial color="#62a9b5" transparent opacity={0.58} />
      </mesh>
      <mesh position={[-0.45, 0.09, 0.17]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color="#eaffff" />
      </mesh>
    </group>
  );
}

function FishSchool() {
  return <group>{Array.from({ length: FISH_COUNT }, (_, index) => <Sardine key={index} index={index} />)}</group>;
}

function Jellyfish({ position, scale = 1, phase = 0 }: { position: [number, number, number]; scale?: number; phase?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    const group = ref.current;
    if (!group) return;
    const t = state.clock.elapsedTime + phase;
    group.position.y = position[1] + Math.sin(t * 0.45) * 0.16;
    group.rotation.z = Math.sin(t * 0.28) * 0.06;
    const pulse = 1 + Math.sin(t * 1.35) * 0.045;
    group.scale.setScalar(scale * pulse);
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[0.45, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial color="#5aeef0" emissive="#1ab9bf" emissiveIntensity={1.2} transmission={0.35} transparent opacity={0.34} roughness={0.18} thickness={0.3} />
      </mesh>
      {[-0.26, -0.09, 0.09, 0.26].map((x) => (
        <mesh key={x} position={[x, -0.62, 0]}>
          <cylinderGeometry args={[0.012, 0.004, 1.25, 6]} />
          <meshBasicMaterial color="#6ff5f5" transparent opacity={0.3} />
        </mesh>
      ))}
      <pointLight color="#57f3f5" intensity={0.7} distance={2.8} decay={2} />
    </group>
  );
}

function MarineParticles() {
  const positions = useMemo(() => {
    const values = new Float32Array(360 * 3);
    for (let i = 0; i < 360; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * 12;
      values[i * 3 + 1] = (Math.random() - 0.5) * 7;
      values[i * 3 + 2] = -0.5 - Math.random() * 5;
    }
    return values;
  }, []);

  return (
    <Points positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#8beef0" size={0.016} sizeAttenuation depthWrite={false} opacity={0.28} />
    </Points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} color="#84d8e2" />
      <directionalLight position={[2, 4, 3]} intensity={1.15} color="#b8fbff" />
      <pointLight position={[3, 1, 0]} intensity={0.85} color="#39e2e7" distance={7} />
      <fog attach="fog" args={["#05233a", 4.5, 13]} />
      <Float speed={0.35} rotationIntensity={0.08} floatIntensity={0.12}>
        <FishSchool />
      </Float>
      <Jellyfish position={[3.15, 1.55, -1.2]} scale={0.85} />
      <Jellyfish position={[1.2, 0.45, -2.4]} scale={0.5} phase={2.1} />
      <MarineParticles />
      <CameraRig />
    </>
  );
}

export default function OceanHero3D() {
  return (
    <div className="ocean-hero-3d" aria-hidden="true">
      <div className="ocean-hero-background" />
      <Canvas
        className="ocean-hero-canvas"
        camera={{ position: [0, 0, 6.2], fov: 44 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <div className="ocean-hero-depth" />
    </div>
  );
}
