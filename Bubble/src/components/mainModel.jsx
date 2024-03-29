import { useGLTF } from "@react-three/drei";


function MainModel(){
    const gltf=useGLTF('/models/credenz_subKeBina.glb')
    return <primitive object={gltf.scene} dispose={null}/>
}

export default MainModel

