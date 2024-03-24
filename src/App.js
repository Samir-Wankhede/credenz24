import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MainModel from "./components/mainModel";
import Landing from "./pages/landing/Landing";


function App() {
  const orbitRef=useRef()
  return (
    <>
    <Landing/>
    </>
  );
}

export default App;
