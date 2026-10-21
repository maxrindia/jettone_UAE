import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import "./GlobalOrbit.css";

const CITIES = [
  { name: "NEW YORK", subtitle: "Global Markets", lat: 40.7128, lon: -74.006, color: "#ffd45a" },
  { name: "LONDON", subtitle: "Financial Centre", lat: 51.5072, lon: -0.1276, color: "#54e7ed" },
  { name: "TOKYO", subtitle: "Trading Technology", lat: 35.6762, lon: 139.6503, color: "#ffd45a" },
];

const R = 1.45;

// Converts real-world latitude/longitude to a point on a sphere.
// The longitude orientation is chosen to make the city points visually spread around the front.
function latLonToVector(lat, lon, radius = R) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function createStylizedEarthTexture() {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const w = canvas.width, h = canvas.height;

  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#06352f");
  bg.addColorStop(0.5, "#061c25");
  bg.addColorStop(1, "#031a20");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Longitudinal / latitudinal grid.
  ctx.strokeStyle = "rgba(79, 224, 225, 0.22)";
  ctx.lineWidth = 2;
  for (let x = 0; x <= w; x += w / 24) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += h / 12) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Stylized continent silhouettes (illustrative only; use a licensed Earth map texture for geographic accuracy).
  const land = "#d7bd68";
  const shapes = [
    [[160, 190], [270, 120], [400, 150], [460, 220], [410, 280], [350, 330], [320, 420], [260, 385], [220, 300]],
    [[380, 410], [460, 440], [500, 540], [470, 680], [420, 800], [365, 690], [350, 560]],
    [[800, 160], [910, 140], [970, 200], [950, 270], [870, 285], [820, 230]],
    [[870, 290], [970, 310], [1010, 430], [970, 570], [920, 700], [880, 570], [845, 420]],
    [[1060, 180], [1210, 130], [1370, 165], [1450, 230], [1390, 300], [1280, 285], [1210, 350], [1120, 285]],
    [[1230, 360], [1350, 340], [1420, 430], [1390, 520], [1320, 560], [1260, 490]],
    [[1510, 610], [1590, 580], [1670, 625], [1640, 700], [1560, 690]],
  ];
  ctx.fillStyle = land;
  for (const shape of shapes) {
    ctx.beginPath();
    shape.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
    ctx.fill();
  }

  // Tiny luminous market hubs.
  for (const [x, y] of [[330, 285], [920, 250], [1300, 255], [1330, 445], [1590, 650], [420, 560]]) {
    ctx.beginPath();
    ctx.fillStyle = "#fff3b3";
    ctx.shadowColor = "#ffd45a";
    ctx.shadowBlur = 20;
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function CityMarker({ city, point }) {
  const pulse = useRef(null);
  useFrame(({ clock }) => {
    if (pulse.current) {
      const scale = 1 + (Math.sin(clock.elapsedTime * 2.6 + city.lat) + 1) * 0.22;
      pulse.current.scale.setScalar(scale);
    }
  });
  return (
    <group position={point}>
      <mesh>
        <sphereGeometry args={[0.045, 20, 20]} />
        <meshBasicMaterial color={city.color} />
      </mesh>
      <mesh ref={pulse}>
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshBasicMaterial color={city.color} transparent opacity={0.18} depthWrite={false} />
      </mesh>
    </group>
  );
}

function ConnectionArc({ from, to, color, phase }) {
  const dot = useRef(null);
  const curve = useMemo(() => {
    const mid = from.clone().add(to).multiplyScalar(0.5).normalize().multiplyScalar(R * 1.48);
    return new THREE.QuadraticBezierCurve3(from, mid, to);
  }, [from, to]);
  const points = useMemo(() => curve.getPoints(100), [curve]);

  useFrame(({ clock }) => {
    if (!dot.current) return;
    const t = (clock.elapsedTime * 0.16 + phase) % 1;
    dot.current.position.copy(curve.getPoint(t));
  });

  return (
    <>
      <Line points={points} color={color} lineWidth={1.4} transparent opacity={0.88} />
      <mesh ref={dot}>
        <sphereGeometry args={[0.027, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={from}>
        <sphereGeometry args={[0.022, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={to}>
        <sphereGeometry args={[0.022, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  );
}

function GlobeScene() {
  const earth = useRef(null);
  const texture = useMemo(() => (typeof document === "undefined" ? null : createStylizedEarthTexture()), []);
  const cityPoints = useMemo(
    () => CITIES.map((city) => latLonToVector(city.lat, city.lon)),
    []
  );

  useFrame((_, delta) => {
    if (earth.current) earth.current.rotation.y += delta * 0.12;
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 2, 4]} intensity={18} color="#8df7ec" />
      <pointLight position={[-3, -1, -2]} intensity={9} color="#ffd45a" />

      {/* Rotate Earth, cities, and endpoints together. Orbit rings stay independently animated. */}
      <group ref={earth}>
        <mesh>
          <sphereGeometry args={[R, 96, 96]} />
          <meshStandardMaterial
            map={texture ?? undefined}
            color={texture ? "#ffffff" : "#0a594e"}
            roughness={0.7}
            metalness={0.25}
            emissive="#052d2b"
            emissiveIntensity={0.28}
          />
        </mesh>
        <mesh scale={1.012}>
          <sphereGeometry args={[R, 64, 64]} />
          <meshBasicMaterial color="#4fe0e1" wireframe transparent opacity={0.12} />
        </mesh>

        {CITIES.map((city, i) => (
          <CityMarker key={city.name} city={city} point={cityPoints[i]} />
        ))}

        {/* Every city is connected to the other two. */}
        <ConnectionArc from={cityPoints[0]} to={cityPoints[1]} color="#ffd45a" phase={0.08} />
        <ConnectionArc from={cityPoints[1]} to={cityPoints[2]} color="#54e7ed" phase={0.42} />
        <ConnectionArc from={cityPoints[2]} to={cityPoints[0]} color="#ffd45a" phase={0.72} />
      </group>

      <Stars radius={6} depth={3} count={240} factor={1.6} saturation={0} fade speed={0.25} />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
    </>
  );
}

export default function GlobalOrbit() {
  return (
    <div className="global-orbit" role="img" aria-label="Rotating Earth connecting New York, London, and Tokyo with animated financial routes">
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 4.8], fov: 42 }} gl={{ alpha: true, antialias: true }}>
        <GlobeScene />
      </Canvas>
      <div className="orbit-caption orbit-caption--newyork">
        <i /> <b>NEW YORK</b>
        <small>Global Markets</small>
      </div>
      <div className="orbit-caption orbit-caption--london">
        <i /> <b>LONDON</b>
        <small>Financial Centre</small>
      </div>
      <div className="orbit-caption orbit-caption--tokyo">
        <i /> <b>TOKYO</b>
        <small>Trading Technology</small>
      </div>
      <div className="orbit-hub">
        <span />JETTONE GLOBAL NETWORK
      </div>
    </div>
  );
}
