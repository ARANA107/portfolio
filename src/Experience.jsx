import React, { Suspense } from "react";
import { useGLTF, OrbitControls, Html, useProgress } from "@react-three/drei";
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "white", fontSize: "1.5em" }}>
        {Math.floor(progress)}% Loading...
      </div>
    </Html>
  );
}
function Model() {
  const { scene } = useGLTF("./portfolio.gltf"); // Adjust the path to your model
  return <primitive object={scene} />;
}

export default function Experience() {
  const handleLampClick = () => {
    window.open("./AISHWARYA_RANA_RESUME.pdf", "_blank");
  };

  return (
    <>
      <spotLight
        position={[0, 18, 2]}
        intensity={500}
        penumbra={0.5}
        castShadow
        color="white"
      />

      <mesh
        position={[2.5, 5.3, -0.2]}
        scale={[0.33, 0.33, 0.33]}
        onClick={handleLampClick}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <circleGeometry args={[4, 100]} />
        <meshBasicMaterial opacity={0} transparent />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <OrbitControls />
    </>
  );
}
