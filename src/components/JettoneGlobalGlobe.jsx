import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './JettoneGlobalGlobe.css';

// Primary financial hubs with authentic geographic coordinates
const CITIES = [
  { name: 'NEW YORK', lat: 40.7128, lon: -74.006 },
  { name: 'LONDON', lat: 51.5074, lon: -0.1278 },
  { name: 'TOKYO', lat: 35.6762, lon: 139.6503 },
  { name: 'DUBAI DIFC', lat: 25.2048, lon: 55.2708 }
];

const R = 1.48; // Radius of 3D Holographic Globe

/**
 * Converts real geographic latitude and longitude into 3D spherical coordinates.
 */
function latLonToVector3(lat, lon, radius = R) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.cos(phi),
    radius * Math.sin(theta) * Math.sin(phi)
  );
}

/**
 * Generates an elliptical 3D space orbit loop matching the reference image.
 */
function createEllipticalLoop(rx, ry, tiltX, tiltY, tiltZ, numPoints = 120) {
  const points = [];
  const rotMatrix = new THREE.Matrix4().makeRotationFromEuler(
    new THREE.Euler(tiltX, tiltY, tiltZ, 'XYZ')
  );
  for (let i = 0; i <= numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    const v = new THREE.Vector3(
      Math.cos(angle) * rx,
      0,
      Math.sin(angle) * ry
    ).applyMatrix4(rotMatrix);
    points.push(v);
  }
  return { points, rx, ry, rotMatrix };
}

/**
 * Computes a point on the tilted 3D elliptical loop at progress t (0..1).
 */
function getPointOnLoop(loop, t) {
  const angle = t * Math.PI * 2;
  return new THREE.Vector3(
    Math.cos(angle) * loop.rx,
    0,
    Math.sin(angle) * loop.ry
  ).applyMatrix4(loop.rotMatrix);
}

/**
 * Generates curved flight arcs connecting cities over the spherical surface.
 */
function createCurvedConnectionPath(pointA, pointB, radius, numPoints = 64) {
  const angle = pointA.angleTo(pointB);
  const arcHeight = Math.max(0.12, angle * 0.17);
  const points = [];
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const v = new THREE.Vector3().lerpVectors(pointA, pointB, t).normalize();
    const altitude = Math.sin(t * Math.PI) * arcHeight;
    points.push(v.multiplyScalar(radius + altitude));
  }
  return { points, arcHeight };
}

function getPointOnArc(pointA, pointB, radius, arcHeight, t) {
  const v = new THREE.Vector3().lerpVectors(pointA, pointB, t).normalize();
  const altitude = Math.sin(t * Math.PI) * arcHeight;
  return v.multiplyScalar(radius + altitude);
}

/**
 * Creates the high-resolution holographic cyber-Earth texture with:
 * - Electric cyan coordinate grid (latitude & longitude)
 * - Detailed golden wireframe continents with geometric triangular mesh
 * - Radiant golden financial hub nodes
 */
function createHolographicCyberEarthTexture() {
  if (typeof document === 'undefined') return null;

  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const w = canvas.width;
  const h = canvas.height;

  // 1. Deep Obsidian / Dark Teal Glassy Base
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#020b08');
  bg.addColorStop(0.5, '#041612');
  bg.addColorStop(1, '#020b08');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // 2. Electric Cyan Coordinate Grid Lines (Parallels & Meridians)
  ctx.save();
  ctx.strokeStyle = 'rgba(79, 224, 225, 0.38)';
  ctx.lineWidth = 1.8;
  ctx.shadowColor = '#00E676';
  ctx.shadowBlur = 6;

  // Longitudinal meridians (every 15 degrees)
  for (let x = 0; x <= w; x += w / 24) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }

  // Latitudinal parallels (every 15 degrees)
  for (let y = 0; y <= h; y += h / 12) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Highlight Equator & Prime Meridian
  ctx.strokeStyle = 'rgba(0, 230, 118, 0.65)';
  ctx.lineWidth = 2.4;
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w / 2, 0);
  ctx.lineTo(w / 2, h);
  ctx.stroke();
  ctx.restore();

  // 3. Detailed Continental Polygons (Equirectangular Projections)
  const continents = [
    // North America
    [
      [180, 160], [270, 120], [390, 110], [530, 130], [620, 180], [600, 290],
      [570, 390], [510, 390], [440, 480], [380, 340], [320, 250], [180, 160]
    ],
    // South America
    [
      [470, 470], [550, 460], [650, 520], [720, 590], [680, 710], [620, 850],
      [580, 940], [550, 850], [500, 650], [470, 470]
    ],
    // Europe
    [
      [970, 200], [1050, 140], [1140, 130], [1250, 160], [1280, 270], [1210, 310],
      [1120, 300], [1000, 320], [960, 280], [970, 200]
    ],
    // Africa
    [
      [960, 340], [1060, 330], [1200, 320], [1280, 340], [1370, 440], [1420, 480],
      [1380, 580], [1310, 780], [1240, 850], [1160, 750], [1050, 550], [940, 430], [960, 340]
    ],
    // Asia
    [
      [1280, 170], [1450, 130], [1650, 120], [1850, 160], [1800, 240], [1730, 280],
      [1670, 380], [1520, 440], [1440, 420], [1330, 380], [1280, 270], [1280, 170]
    ],
    // Japan
    [
      [1810, 290], [1840, 290], [1850, 330], [1820, 340], [1810, 290]
    ],
    // Australia
    [
      [1700, 720], [1780, 680], [1870, 700], [1880, 810], [1810, 850], [1720, 810], [1700, 720]
    ]
  ];

  // Draw Continents with Glowing Gold Wireframe & Internal Topological Meshes
  continents.forEach((poly) => {
    // Fill with translucent gold
    ctx.save();
    ctx.fillStyle = 'rgba(245, 211, 39, 0.08)';
    ctx.strokeStyle = '#ffd45a';
    ctx.lineWidth = 2.8;
    ctx.shadowColor = '#ffd45a';
    ctx.shadowBlur = 14;

    ctx.beginPath();
    poly.forEach(([x, y], idx) => {
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Internal Topological Network Triangles / Geometric Circuits
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(255, 220, 90, 0.32)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < poly.length - 1; i += 2) {
      const p1 = poly[i];
      const p2 = poly[(i + 3) % poly.length];
      const p3 = poly[(i + 5) % poly.length];
      ctx.beginPath();
      ctx.moveTo(p1[0], p1[1]);
      ctx.lineTo(p2[0], p2[1]);
      ctx.lineTo(p3[0], p3[1]);
      ctx.stroke();
    }
    ctx.restore();
  });

  // 4. Radiant Financial Hub Nodes with Multi-Tier Golden Glow Coronas
  const hubs = [
    { x: 603, y: 280, name: 'NY' },
    { x: 1023, y: 219, name: 'LON' },
    { x: 1818, y: 309, name: 'TYO' },
    { x: 1338, y: 368, name: 'DXB' },
    { x: 1614, y: 504, name: 'SGP' },
    { x: 1073, y: 227, name: 'FRA' },
    { x: 1673, y: 385, name: 'HKG' }
  ];

  hubs.forEach((hub) => {
    // Outer golden radiant aura
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#fff4b8';
    ctx.shadowColor = '#ffd45a';
    ctx.shadowBlur = 22;
    ctx.arc(hub.x, hub.y, 6.5, 0, Math.PI * 2);
    ctx.fill();

    // Concentric micro ring
    ctx.strokeStyle = 'rgba(255, 212, 90, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(hub.x, hub.y, 11, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * 3D City Marker with bright golden core, pulsing corona, and camera-facing HTML badge.
 */
function CityMarker({ city, position }) {
  const haloRef = useRef(null);
  const labelRef = useRef(null);
  const groupRef = useRef(null);
  const tempVec = useMemo(() => new THREE.Vector3(), []);
  const normalVec = useMemo(() => new THREE.Vector3(), []);
  const toCamVec = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock, camera }) => {
    if (haloRef.current) {
      const s = 1 + (Math.sin(clock.elapsedTime * 2.8 + city.lat) + 1) * 0.28;
      haloRef.current.scale.setScalar(s);
    }
    if (groupRef.current && labelRef.current) {
      groupRef.current.getWorldPosition(tempVec);
      normalVec.copy(tempVec).normalize();
      toCamVec.copy(camera.position).sub(tempVec).normalize();
      const dot = normalVec.dot(toCamVec);
      const opacity = THREE.MathUtils.clamp((dot - 0.05) / 0.25, 0, 1);
      labelRef.current.style.opacity = `${opacity}`;
      labelRef.current.style.transform = `scale(${0.78 + opacity * 0.22})`;
      labelRef.current.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.038, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.052, 16, 16]} />
        <meshBasicMaterial color="#F5D327" />
      </mesh>
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.098, 16, 16]} />
        <meshBasicMaterial color="#F5D327" transparent opacity={0.28} depthWrite={false} />
      </mesh>
      <Html position={[0, 0.09, 0]} center distanceFactor={5.2}>
        <div ref={labelRef} className="city-globe-label">
          <span className="city-globe-label-dot" />
          <span className="city-globe-name">{city.name}</span>
        </div>
      </Html>
    </group>
  );
}

/**
 * Animated light particle traveling on continuous orbital loops.
 */
function OrbitingLoopParticle({ loop, color, speed = 0.14, phase = 0 }) {
  const particleRef = useRef(null);
  useFrame(({ clock }) => {
    if (!particleRef.current) return;
    const t = (clock.elapsedTime * speed + phase) % 1;
    particleRef.current.position.copy(getPointOnLoop(loop, t));
  });

  return (
    <group ref={particleRef}>
      <mesh>
        <sphereGeometry args={[0.026, 12, 12]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.052, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.85} depthWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} depthWrite={false} />
      </mesh>
    </group>
  );
}

/**
 * Animated flight particle traveling along inter-city flight arcs.
 */
function InterCityArcParticle({ from, to, arcHeight, color, speed = 0.16, phase = 0 }) {
  const particleRef = useRef(null);
  useFrame(({ clock }) => {
    if (!particleRef.current) return;
    const t = (clock.elapsedTime * speed + phase) % 1;
    particleRef.current.position.copy(getPointOnArc(from, to, R, arcHeight, t));
  });

  return (
    <group ref={particleRef}>
      <mesh>
        <sphereGeometry args={[0.024, 12, 12]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.046, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} depthWrite={false} />
      </mesh>
    </group>
  );
}

/**
 * Futuristic Holographic Glass Pedestal matching the reference image.
 * Features beveled glass panels, technical circuits, and glowing emitter ring.
 */
function HolographicGlassPedestal() {
  const emitterGlowRef = useRef(null);

  useFrame(({ clock }) => {
    if (emitterGlowRef.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 2.5) * 0.05;
      emitterGlowRef.current.scale.set(s, s, 1);
    }
  });

  // Base platform height
  const baseY = -1.74;

  return (
    <group position={[0, baseY, 0]}>
      {/* 1. Main Center Hologram Glass Panel */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[2.8, 2.8]} />
        <meshStandardMaterial
          color="#07221b"
          roughness={0.12}
          metalness={0.85}
          transparent
          opacity={0.55}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Center Glass Border Frame (Cyan Neon) */}
      <Line
        points={[
          new THREE.Vector3(-1.4, 0.005, -1.4),
          new THREE.Vector3(1.4, 0.005, -1.4),
          new THREE.Vector3(1.4, 0.005, 1.4),
          new THREE.Vector3(-1.4, 0.005, 1.4),
          new THREE.Vector3(-1.4, 0.005, -1.4)
        ]}
        color="#4fe0e1"
        lineWidth={1.8}
        transparent
        opacity={0.8}
      />

      {/* Internal Technical Grid Traces */}
      <Line
        points={[
          new THREE.Vector3(-1.4, 0.005, 0),
          new THREE.Vector3(1.4, 0.005, 0)
        ]}
        color="#4fe0e1"
        lineWidth={0.8}
        transparent
        opacity={0.35}
      />
      <Line
        points={[
          new THREE.Vector3(0, 0.005, -1.4),
          new THREE.Vector3(0, 0.005, 1.4)
        ]}
        color="#4fe0e1"
        lineWidth={0.8}
        transparent
        opacity={0.35}
      />

      {/* 2. Holographic Circular Emitter Ring right below the South Pole */}
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 0]}>
        <mesh ref={emitterGlowRef}>
          <ringGeometry args={[0.55, 0.76, 64]} />
          <meshBasicMaterial color="#ffd45a" transparent opacity={0.65} side={THREE.DoubleSide} />
        </mesh>
        <mesh>
          <ringGeometry args={[0.78, 0.88, 64]} />
          <meshBasicMaterial color="#4fe0e1" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* 3. Soft Upward Hologram Beam Column */}
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.68, 0.38, 0.84, 32, 1, true]} />
        <meshBasicMaterial
          color="#4fe0e1"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* 4. Stepped Left Glass Slab */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-1.5, -0.12, 0.35]}>
        <planeGeometry args={[1.2, 1.2]} />
        <meshStandardMaterial
          color="#061c15"
          roughness={0.15}
          metalness={0.8}
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Line
        points={[
          new THREE.Vector3(-2.1, -0.115, -0.25),
          new THREE.Vector3(-0.9, -0.115, -0.25),
          new THREE.Vector3(-0.9, -0.115, 0.95),
          new THREE.Vector3(-2.1, -0.115, 0.95),
          new THREE.Vector3(-2.1, -0.115, -0.25)
        ]}
        color="#00E676"
        lineWidth={1.4}
        transparent
        opacity={0.65}
      />

      {/* 5. Stepped Right Glass Slab */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[1.5, -0.16, -0.25]}>
        <planeGeometry args={[1.2, 1.2]} />
        <meshStandardMaterial
          color="#061c15"
          roughness={0.15}
          metalness={0.8}
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Line
        points={[
          new THREE.Vector3(0.9, -0.155, -0.85),
          new THREE.Vector3(2.1, -0.155, -0.85),
          new THREE.Vector3(2.1, -0.155, 0.35),
          new THREE.Vector3(0.9, -0.155, 0.35),
          new THREE.Vector3(0.9, -0.155, -0.85)
        ]}
        color="#4fe0e1"
        lineWidth={1.4}
        transparent
        opacity={0.65}
      />

      {/* 6. Technical Corner Brackets / Data Points */}
      <mesh position={[-1.38, 0.02, -1.38]}>
        <boxGeometry args={[0.08, 0.04, 0.08]} />
        <meshBasicMaterial color="#ffd45a" />
      </mesh>
      <mesh position={[1.38, 0.02, -1.38]}>
        <boxGeometry args={[0.08, 0.04, 0.08]} />
        <meshBasicMaterial color="#ffd45a" />
      </mesh>
      <mesh position={[1.38, 0.02, 1.38]}>
        <boxGeometry args={[0.08, 0.04, 0.08]} />
        <meshBasicMaterial color="#ffd45a" />
      </mesh>
      <mesh position={[-1.38, 0.02, 1.38]}>
        <boxGeometry args={[0.08, 0.04, 0.08]} />
        <meshBasicMaterial color="#ffd45a" />
      </mesh>
    </group>
  );
}

const FLECK_POINTS = Array.from({ length: 48 }, (_, i) => {
  const theta = (i * 137.5 * Math.PI) / 180;
  const phi = Math.acos(1 - (2 * (i + 0.5)) / 48);
  const rad = R * 1.08 + ((i * 17) % 10) * 0.09;
  const yOffset = (((i * 31) % 10) - 5) * 0.05;
  return new THREE.Vector3(
    rad * Math.sin(phi) * Math.cos(theta),
    rad * Math.cos(phi) - 0.2 + yOffset,
    rad * Math.sin(phi) * Math.sin(theta)
  );
});

/**
 * Ambient Floating Glowing Data Flecks matching the cinematic atmosphere of the image.
 */
function FloatingDataFlecks() {
  const groupRef = useRef(null);
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.025;
    }
  });

  return (
    <group ref={groupRef}>
      {FLECK_POINTS.map((pt, i) => (
        <mesh key={i} position={pt}>
          <sphereGeometry args={[i % 3 === 0 ? 0.018 : 0.012, 8, 8]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#ffd45a' : '#4fe0e1'}
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * Complete Holographic Earth & Cyber Platform Scene
 */
function CyberGlobeScene() {
  const rotatingEarthRef = useRef(null);

  // Generate procedural holographic Earth texture
  const cyberTexture = useMemo(
    () => (typeof document === 'undefined' ? null : createHolographicCyberEarthTexture()),
    []
  );

  // City spherical coordinate vectors
  const cityVectors = useMemo(
    () => CITIES.map((c) => latLonToVector3(c.lat, c.lon, R)),
    []
  );

  // Inter-city flight arcs
  const cityArcs = useMemo(() => {
    const ny = cityVectors[0];
    const lon = cityVectors[1];
    const tyo = cityVectors[2];
    const dxb = cityVectors[3];

    return [
      { from: ny, to: lon, color: '#ffd45a', ...createCurvedConnectionPath(ny, lon, R), phase: 0.05 },
      { from: lon, to: tyo, color: '#4fe0e1', ...createCurvedConnectionPath(lon, tyo, R), phase: 0.38 },
      { from: tyo, to: ny, color: '#ffd45a', ...createCurvedConnectionPath(tyo, ny, R), phase: 0.72 },
      { from: lon, to: dxb, color: '#00E676', ...createCurvedConnectionPath(lon, dxb, R), phase: 0.22 }
    ];
  }, [cityVectors]);

  // Sweeping 3D Orbital Loops matching the image
  const sweepingLoops = useMemo(() => [
    // Loop 1: High Warm Golden Arc (inclined ~40°)
    {
      loop: createEllipticalLoop(R * 1.35, R * 1.15, 0.7, 0.3, -0.4),
      color: '#ffd45a',
      speed: 0.15,
      phase: 0.1
    },
    // Loop 2: Electric Cyan Equatorial Arc (inclined ~-26°)
    {
      loop: createEllipticalLoop(R * 1.38, R * 1.22, -0.45, 0.2, 0.5),
      color: '#4fe0e1',
      speed: 0.13,
      phase: 0.45
    },
    // Loop 3: Golden Trans-Polar Sweep (inclined ~72°)
    {
      loop: createEllipticalLoop(R * 1.42, R * 1.18, 1.25, -0.4, 0.3),
      color: '#F5D327',
      speed: 0.14,
      phase: 0.8
    }
  ], []);

  // Continuous smooth Earth rotation
  useFrame((_, delta) => {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion && rotatingEarthRef.current) {
      rotatingEarthRef.current.rotation.y += delta * 0.085;
    }
  });

  return (
    <>
      {/* Cinematic Lighting: Restrained Cyan Key + Warm Golden Fill + Emerald Rim */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 3, 5]} intensity={2.6} color="#7fe3d7" />
      <directionalLight position={[-4, -1, -3]} intensity={1.3} color="#ffd45a" />
      <directionalLight position={[0, 4, -4]} intensity={1.6} color="#00E676" />
      <pointLight position={[0, -1.5, 0]} intensity={4.5} color="#ffd45a" distance={3.5} />

      {/* Floating Holographic Glass Pedestal below the globe */}
      <HolographicGlassPedestal />

      {/* Floating Ambient Data Flecks */}
      <FloatingDataFlecks count={48} />

      {/* Sweeping 3D Orbital Loop Trails around the globe */}
      {sweepingLoops.map((item, idx) => (
        <React.Fragment key={idx}>
          <Line
            points={item.loop.points}
            color={item.color}
            lineWidth={1.6}
            transparent
            opacity={0.78}
          />
          <OrbitingLoopParticle
            loop={item.loop}
            color={item.color}
            speed={item.speed}
            phase={item.phase}
          />
        </React.Fragment>
      ))}

      {/* Rotating Cyber-Earth Group with tilt */}
      <group rotation={[0.22, 0, 0.12]}>
        <group ref={rotatingEarthRef}>
          {/* 1. Inner Depth Core Sphere */}
          <mesh>
            <sphereGeometry args={[R * 0.985, 48, 48]} />
            <meshBasicMaterial color="#02110d" transparent opacity={0.88} />
          </mesh>

          {/* 2. Main Holographic Cyber-Earth with Golden Wireframe Continents */}
          <mesh>
            <sphereGeometry args={[R, 96, 96]} />
            <meshStandardMaterial
              map={cyberTexture ?? undefined}
              emissiveMap={cyberTexture ?? undefined}
              emissive="#ffd45a"
              emissiveIntensity={1.4}
              color="#071d18"
              roughness={0.25}
              metalness={0.5}
              transparent
              opacity={0.96}
            />
          </mesh>

          {/* 3. Outer Electric Cyan Coordinate Wireframe Grid */}
          <mesh scale={1.008}>
            <sphereGeometry args={[R, 48, 48]} />
            <meshBasicMaterial
              color="#4fe0e1"
              wireframe
              transparent
              opacity={0.16}
            />
          </mesh>

          {/* 4. Atmospheric Rim Glow */}
          <mesh scale={1.026}>
            <sphereGeometry args={[R, 48, 48]} />
            <meshBasicMaterial
              color="#00E676"
              transparent
              opacity={0.11}
              side={THREE.BackSide}
            />
          </mesh>

          {/* 5. Geographic Financial Hub City Markers */}
          {CITIES.map((city, idx) => (
            <CityMarker key={city.name} city={city} position={cityVectors[idx]} />
          ))}

          {/* 6. Inter-City Curved Flight Arcs & Traveling Data Pulses */}
          {cityArcs.map((arc, idx) => (
            <React.Fragment key={idx}>
              <Line
                points={arc.points}
                color={arc.color}
                lineWidth={1.5}
                transparent
                opacity={0.8}
              />
              <InterCityArcParticle
                from={arc.from}
                to={arc.to}
                arcHeight={arc.arcHeight}
                color={arc.color}
                speed={0.18}
                phase={arc.phase}
              />
            </React.Fragment>
          ))}
        </group>
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI * 0.72}
      />
    </>
  );
}

/**
 * Reusable JETTONE Global Globe Component
 */
export default function JettoneGlobalGlobe() {
  return (
    <div
      className="jettone-globe-container"
      role="img"
      aria-label="Futuristic holographic Earth with golden wireframe continents and floating glass pedestal"
    >
      <div className="jettone-globe-floor-glow" />
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.15, 4.4], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <CyberGlobeScene />
      </Canvas>
    </div>
  );
}
