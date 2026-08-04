'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

function SardineSchool() {
  const group = useRef<THREE.Group>(null);
  const fish = useMemo(() => Array.from({ length: 35 }, (_, i) => {
    const angle = (i / 35) * Math.PI * 2;
    return {
      angle,
      radius: 3.6 + (i % 7) * 0.16,
      height: -0.2 + ((i % 5) - 2) * 0.16,
      speed: 0.08 + (i % 6) * 0.006,
      scale: 0.15 + (i % 4) * 0.012,
    };
  }), []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const f = fish[i];
      const a = f.angle + t * f.speed;
      const x = Math.cos(a) * f.radius;
      const z = -2 + Math.sin(a) * (f.radius * 0.55);
      const y = f.height + Math.sin(t * 0.9 + i) * 0.08;
      child.position.set(x, y, z);
      child.rotation.set(0, -a + Math.PI / 2, Math.sin(t + i) * 0.08);
    });
  });

  return (
    <group ref={group} position={[1.2, 0.8, -1.2]}>
      {fish.map((f, i) => (
        <group key={i} scale={f.scale}>
          <mesh>
            <sphereGeometry args={[1.25, 12, 8]} />
            <meshStandardMaterial color="#9ac7cf" roughness={0.6} metalness={0.12} />
          </mesh>
          <mesh position={[-1.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <coneGeometry args={[0.6, 1.2, 3]} />
            <meshStandardMaterial color="#7ca9b2" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Jellyfish({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.45 + position[0]) * 0.3;
    ref.current.rotation.y = Math.sin(t * 0.25) * 0.25;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[0.52, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#5ef3f5" emissive="#1cc8d0" emissiveIntensity={2.4} transparent opacity={0.54} />
      </mesh>
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * 0.34, -0.72, Math.sin(a) * 0.34]}>
            <cylinderGeometry args={[0.012, 0.02, 1.4 + (i % 3) * 0.25, 6]} />
            <meshStandardMaterial color="#70ffff" emissive="#23dce0" emissiveIntensity={1.4} transparent opacity={0.45} />
          </mesh>
        );
      })}
      <pointLight color="#43f1f5" intensity={1.7} distance={4} />
    </group>
  );
}

function Kelp({ x, z, h = 2.4 }: { x: number; z: number; h?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.55 + x) * 0.08;
  });
  return (
    <group ref={ref} position={[x, -2.28, z]}>
      <mesh position={[0, h / 2, 0]}>
        <cylinderGeometry args={[0.055, 0.1, h, 8]} />
        <meshStandardMaterial color="#1e6b60" roughness={0.9} />
      </mesh>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[i % 2 ? 0.18 : -0.18, 0.45 + i * 0.38, 0]} rotation={[0, 0, i % 2 ? -0.5 : 0.5]}>
          <planeGeometry args={[0.32, 0.95]} />
          <meshStandardMaterial color="#2e8c74" side={THREE.DoubleSide} transparent opacity={0.82} />
        </mesh>
      ))}
    </group>
  );
}

function RoboticArm() {
  const joint = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (joint.current) joint.current.rotation.z = -0.35 + Math.sin(clock.elapsedTime * 0.35) * 0.22;
  });
  return (
    <group position={[2.25, -1.92, -0.7]}>
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.45, 0.55, 0.3, 20]} />
        <meshStandardMaterial color="#8fa9b7" metalness={0.8} roughness={0.28} />
      </mesh>
      <group ref={joint} position={[0, 0.42, 0]} rotation={[0, 0, -0.45]}>
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.32, 1.5, 0.34]} />
          <meshStandardMaterial color="#b9d4dc" metalness={0.82} roughness={0.22} />
        </mesh>
        <mesh position={[0.65, 1.45, 0]} rotation={[0, 0, Math.PI / 2.8]}>
          <boxGeometry args={[0.25, 1.25, 0.3]} />
          <meshStandardMaterial color="#aec9d2" metalness={0.8} roughness={0.24} />
        </mesh>
      </group>
    </group>
  );
}

function Bioreactor() {
  return (
    <group position={[3.6, -1.5, -1.2]}>
      <mesh>
        <cylinderGeometry args={[0.58, 0.58, 1.8, 30]} />
        <meshPhysicalMaterial color="#84f7f3" transparent opacity={0.26} roughness={0.08} transmission={0.68} thickness={0.5} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.42, 0.42, 1.45, 24]} />
        <meshStandardMaterial color="#2de4e0" emissive="#13bfc2" emissiveIntensity={1.7} transparent opacity={0.36} />
      </mesh>
      <pointLight color="#3af2f0" intensity={2} distance={5} />
    </group>
  );
}

function Holograms() {
  return (
    <group position={[3.4, 0.45, -1.4]} rotation={[0, -0.22, 0]}>
      {[0, 0.72].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <planeGeometry args={[1.6, 0.55]} />
          <meshBasicMaterial color="#42edf0" transparent opacity={0.18 + i * 0.06} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));
  useFrame((state) => {
    const px = state.pointer.x * 0.5;
    const py = state.pointer.y * 0.24;
    state.camera.position.x += (px - state.camera.position.x) * 0.025;
    state.camera.position.y += (0.25 + py - state.camera.position.y) * 0.025;
    state.camera.lookAt(cameraTarget.current);
  });

  return (
    <>
      <color attach="background" args={['#04111e']} />
      <fog attach="fog" args={['#061a2b', 8, 25]} />
      <ambientLight intensity={0.35} color="#5f9ab0" />
      <directionalLight position={[0, 8, 4]} intensity={1.5} color="#67dbef" />
      <pointLight position={[3, 0, 2]} intensity={1.3} distance={10} color="#2ce5df" />

      <mesh position={[0, -2.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40, 80, 80]} />
        <meshStandardMaterial color="#28505c" roughness={1} />
      </mesh>

      {[-5,-3.6,-2.2,1.2,4.5,5.5,6.5].map((x, i) => <Kelp key={i} x={x} z={-3 - (i % 3)} h={2 + (i % 4) * 0.38} />)}
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh key={i} position={[-5 + i * 1.7, -2.2, -1.8 + (i % 2)]} scale={[0.6 + (i % 3)*0.25, 0.35, 0.55]}>
          <dodecahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#213b45" roughness={1} />
        </mesh>
      ))}

      <SardineSchool />
      <Jellyfish position={[-3.8, 0.5, -3.5]} scale={1.1} />
      <Jellyfish position={[4.8, 1.5, -5]} scale={0.8} />
      <Jellyfish position={[-0.2, 2.2, -7]} scale={0.65} />

      <RoboticArm />
      <Bioreactor />
      <Holograms />

      <Float speed={0.7} rotationIntensity={0.2} floatIntensity={0.4} position={[1.8, -0.1, 0.8]}>
        <mesh>
          <sphereGeometry args={[0.22, 16, 12]} />
          <meshStandardMaterial color="#a9c9d2" metalness={0.7} roughness={0.25} />
        </mesh>
      </Float>

      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.7} intensity={1.4} />
      </EffectComposer>
      <Environment preset="night" />
    </>
  );
}

export default function OceanScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.25, 8.8], fov: 48 }} gl={{ antialias: true }}>
      <Scene />
    </Canvas>
  );
}
