import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas shadows camera={{ position: [-15, 15, 17], fov: 70 }}>
    <Experience />
  </Canvas>
);
