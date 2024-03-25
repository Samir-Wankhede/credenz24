import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MainModel from "./components/mainModel";
import Landing from "./pages/landing/Landing";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Transition from "./pages/Transition";


function App() {
  const orbitRef=useRef()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/underwater" element={<Transition/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
