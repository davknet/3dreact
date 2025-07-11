import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import Rectangle from "../figures/cubes/Rectangle";
import { AmbientLight } from "three";








 const BoxViewer = () => {




  return (
     <>
          <Canvas>

          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 2, 2]} />
          
          <OrbitControls position={[3, 2, 2]} />


          <Rectangle position={[ 2   , 2  , 0  ]}  sizes={[3  , 0 , -3 ]} color={"green"}  />
         
           <mesh position={[ -2  , -1  , 1  ]} >
               <boxGeometry   />
               <meshStandardMaterial color={ "#4287f5" } />
               
           </mesh>

             <mesh position={[ 2    , -1   , 1   ]} >
               <boxGeometry   />
               <meshStandardMaterial color={ "orange" } />    
            </mesh>

             <mesh position={[ 0    , -1  , 1   ]} >
               
                 <boxGeometry   />
               <meshStandardMaterial color={ "orange" } />    
            </mesh>

          </Canvas>

          
     </>

  )

}


export default BoxViewer ;