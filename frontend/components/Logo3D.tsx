"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/rnotsky-logo.glb");

  const model = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      /*
       * Improve material quality without changing
       * the original model's appearance too aggressively.
       */
      if (child.material) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((material) => {
          material.needsUpdate = true;

          if ("roughness" in material) {
            material.roughness = Math.min(
              material.roughness ?? 0.5,
              0.48
            );
          }

          if ("metalness" in material) {
            material.metalness = Math.max(
              material.metalness ?? 0,
              0.35
            );
          }
        });
      }
    });

    return cloned;
  }, [scene]);

  const ref = useRef<THREE.Group>(null);

  const { viewport } = useThree();

  /*
   * Responsive model scale.
   *
   * The model does NOT zoom when scrolling.
   * The scale only changes based on viewport size.
   */
  const isSmall = viewport.width < 5.5;
  const isMedium =
    viewport.width >= 5.5 && viewport.width < 8;

  const scale = isSmall
    ? 1.42
    : isMedium
      ? 1.72
      : 1.98;

  const position: [number, number, number] = isSmall
    ? [-0.05, 0.08, 0]
    : isMedium
      ? [0.08, 0.14, 0]
      : [0.18, 0.20, 0];

  /*
   * Rotate the model smoothly.
   *
   * No scroll animation.
   * No popup animation.
   * No hover animation.
   */
  useFrame((_, delta) => {
    if (!ref.current) return;

    /*
     * Prevent huge rotation jumps after
     * tab switching / browser throttling.
     */
    const safeDelta = Math.min(delta, 0.05);

    ref.current.rotation.y -= safeDelta * 0.20;

    /*
     * Extremely subtle natural movement.
     * This is intentionally tiny so the logo
     * still feels stable.
     */
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      0,
      safeDelta * 2
    );

    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      0,
      safeDelta * 2
    );
  });

  return (
    <primitive
      ref={ref}
      object={model}
      scale={scale}
      position={position}
    />
  );
}

function Loader() {
  return null;
}

function Scene() {
  const { gl } = useThree();

  /*
   * Keep the renderer optimized for a dark,
   * high-contrast hero scene.
   */
  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.15;
    gl.outputColorSpace = THREE.SRGBColorSpace;

    gl.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.75)
    );
  }, [gl]);

  return (
    <>
      {/* =====================================================
          BASE AMBIENT
      ===================================================== */}
      <ambientLight intensity={0.18} />

      {/* =====================================================
          MAIN WHITE KEY LIGHT

          Gives the logo its premium metallic highlights.
      ===================================================== */}
      <directionalLight
        position={[5, 6, 6]}
        intensity={3.2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-bias={-0.0002}
      />

      {/* =====================================================
          SOFT FRONT FILL
      ===================================================== */}
      <directionalLight
        position={[-4, 2, 5]}
        intensity={1.15}
        color="#e4e4e7"
      />

      {/* =====================================================
          PURPLE KEY / SIDE LIGHT
      ===================================================== */}
      <pointLight
        position={[4, 1.5, 3]}
        intensity={13}
        distance={10}
        decay={2}
        color="#8b5cf6"
      />

      {/* =====================================================
          PURPLE RIM LIGHT

          Helps separate the logo from the black background.
      ===================================================== */}
      <pointLight
        position={[-4, 2.5, -2]}
        intensity={11}
        distance={10}
        decay={2}
        color="#7c3aed"
      />

      {/* =====================================================
          TOP WHITE HIGHLIGHT
      ===================================================== */}
      <pointLight
        position={[0, 5, 2]}
        intensity={7}
        distance={10}
        decay={2}
        color="#ffffff"
      />

      {/* =====================================================
          LOWER SOFT FILL
      ===================================================== */}
      <pointLight
        position={[0, -3, 3]}
        intensity={3}
        distance={8}
        decay={2}
        color="#c4b5fd"
      />

      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </>
  );
}

export default function Logo3D() {
  return (
    <div
      className="
        relative
        mx-auto
        w-full

        h-[320px]
        max-w-[320px]

        sm:h-[420px]
        sm:max-w-[420px]

        md:h-[520px]
        md:max-w-[520px]

        lg:h-[600px]
        lg:max-w-[600px]

        xl:h-[680px]
        xl:max-w-[680px]
      "
    >
      {/* =====================================================
          VERY SUBTLE PURPLE ATMOSPHERE

          This replaces the old strong white glow.
      ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/[0.055]
          blur-[110px]
        "
      />

      {/* Secondary purple glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[55%]
          top-[45%]
          h-[150px]
          w-[150px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/[0.045]
          blur-[80px]
        "
      />

      {/* =====================================================
          THREE.JS CANVAS
      ===================================================== */}
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{
          position: [0, 0, 5.2],
          fov: 40,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/rnotsky-logo.glb");