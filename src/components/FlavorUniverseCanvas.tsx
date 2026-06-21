import { Html, Line, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { universeNodes, UniverseNode } from '../data/universe';
import { useArchiveStore } from '../store/useArchiveStore';

type NodeProps = {
  node: UniverseNode;
};

function UniverseNodeMesh({ node }: NodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const ambientMode = useArchiveStore((state) => state.ambientMode);
  const setSelectedUniverseNodeId = useArchiveStore((state) => state.setSelectedUniverseNodeId);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const speed = ambientMode ? 0.18 : 0.55;
    meshRef.current.position.y = node.position[1] + Math.sin(clock.elapsedTime * speed + node.position[0]) * 0.08;
  });

  const handlePointer = (event: ThreeEvent<PointerEvent>, value: boolean) => {
    event.stopPropagation();
    setHovered(value);
    document.body.style.cursor = value ? 'pointer' : 'default';
  };

  return (
    <group position={node.position}>
      <mesh
        ref={meshRef}
        onPointerOver={(event) => handlePointer(event, true)}
        onPointerOut={(event) => handlePointer(event, false)}
        onClick={(event) => {
          event.stopPropagation();
          setSelectedUniverseNodeId(node.id);
        }}
      >
        <sphereGeometry args={[node.type === 'Cocktail' ? 0.12 : 0.085, 32, 32]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered ? 2.1 : 0.85}
          roughness={0.38}
        />
      </mesh>
      {hovered && (
        <Html center distanceFactor={7}>
          <div className="pointer-events-none whitespace-nowrap border border-electric/40 bg-black/80 px-3 py-2 text-xs text-white shadow-glow">
            {node.name}
          </div>
        </Html>
      )}
    </group>
  );
}

function ConnectionLines() {
  const lines = useMemo(() => {
    const nodeMap = new Map(universeNodes.map((node) => [node.id, node]));
    return universeNodes.flatMap((node) =>
      node.connections
        .map((connectionId) => {
          const target = nodeMap.get(connectionId);
          if (!target) return null;
          return [new THREE.Vector3(...node.position), new THREE.Vector3(...target.position)];
        })
        .filter(Boolean),
    );
  }, []);

  return (
    <>
      {lines.map((line, index) => {
        if (!line) return null;
        return (
          <Line key={index} points={line} color="#2f7dff" transparent opacity={0.22} lineWidth={1} />
        );
      })}
    </>
  );
}

function FlavorUniverseCanvas() {
  const ambientMode = useArchiveStore((state) => state.ambientMode);

  return (
    <Canvas camera={{ position: [0, 0, 6.2], fov: 54 }} dpr={[1, 1.7]}>
      <color attach="background" args={[ambientMode ? '#010102' : '#030405']} />
      <fog attach="fog" args={[ambientMode ? '#010102' : '#030405', 6, 13]} />
      <ambientLight intensity={0.42} />
      <pointLight position={[3, 3, 4]} intensity={3.2} color="#2f7dff" />
      <pointLight position={[-5, -2, -3]} intensity={1.3} color="#42b7a9" />
      <Stars radius={50} depth={22} count={ambientMode ? 800 : 1500} factor={3} fade speed={ambientMode ? 0.18 : 0.7} />
      <ConnectionLines />
      {universeNodes.map((node) => (
        <UniverseNodeMesh key={node.id} node={node} />
      ))}
      <OrbitControls enablePan={false} autoRotate autoRotateSpeed={ambientMode ? 0.18 : 0.55} />
    </Canvas>
  );
}

export default FlavorUniverseCanvas;
