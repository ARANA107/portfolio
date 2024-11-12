import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html, useProgress } from "@react-three/drei";
import { Environment } from "@react-three/drei";

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
  const { scene } = useGLTF("./forest.gltf");
  return <primitive object={scene} />;
}

export default function Experience() {
  const handleLampClick = () => {
    window.open("./AISHWARYA_RANA_RESUME.pdf", "_blank");
  };

  return (
    <>
      <mesh
        position={[-5, 9, -3]}
        scale={[2.3, 2.3, 2.3]}
        onClick={handleLampClick}
        rotation={[6, 5.6, -Math.PI / 2]}
      >
        <circleGeometry args={[4, 100]} />
        <meshBasicMaterial opacity={0} transparent />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Environment
          background
          files="./whipple_creek_regional_park_04_4k.hdr" // Ensure the path is correct
        />
        <Model />
      </Suspense>
      <OrbitControls />
    </>
  );
}
