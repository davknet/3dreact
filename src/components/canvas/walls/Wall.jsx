
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './style/area-two-style.css' ;
// import { building } from  './building' ;




const Wall = ( { startPoint, endPoint, heightMeters } ) => {


    if (! startPoint  || !endPoint ) {

    console.warn('Missing start or end point:', { endPoint , startPoint  });
    return null ;
  }

       const length  = Math.hypot( endPoint.x - endPoint.x ,endPoint.y -  endPoint.y ) ;
       const centerX = ( startPoint.x + endPoint.x ) / 2 ;
       const centerY = ( startPoint.y + endPoint.y ) / 2 ; 


       const position = [centerX , heightMeters / 2 ,  centerY ] ;
       const sizes    = [length , heightMeters , 0.2  ] ;

       console.log(position) ;

       return (
          
          <mesh position={position}>
                 <boxGeometry args={ sizes } /> 
                 <meshStandardMaterial color="gray" />
          </mesh>

       )
};

export default Wall;
