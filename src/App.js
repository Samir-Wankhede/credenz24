import { useRef } from "react";
import Landing from "./pages/landing/Landing";
import { BrowserRouter,Route,Routes } from "react-router-dom";


function App() {
  const orbitRef=useRef()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
