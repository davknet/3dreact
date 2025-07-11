









export const Door = ({ position , width , height} ) => {


    
  return (

       <mesh position={[  position.x + width /2   ,  height /2 , position.y  ]}>

                 <boxGeometry args={[width, height, 0.2]} />
                 <meshStandardMaterial color="brown" />

       </mesh>

  )
}


