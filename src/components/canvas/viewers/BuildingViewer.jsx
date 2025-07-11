import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport  } from '@react-three/drei';
// import { building } from './../walls/building';
import { buildingTwo } from '../walls/buildingTwo';
import { FloorOne } from '../floors/FloorOne';

const BuildingViewer = () => {

  const { floors, width, depth, floorHeight } = buildingTwo.dimensions;

    return (
        <Canvas camera={{ position: [40, 30, 40], fov: 50, near: 1 }}>
            <ambientLight />
            <directionalLight position={[0, 10, 0]} />
            <pointLight position={[5, 5, 5]} />
            <OrbitControls />
            <gridHelper args={[100, 100]} />
            <axesHelper args={[10]} />
             <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                  <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
            </GizmoHelper>
            
       {Array.from({ length: floors }, (_, index) => (
        <FloorOne
          key={index}
          level={index + 1}
          width={width}
          depth={depth}
          height={floorHeight }
        />
      ))}
         
        
        </Canvas>
    );
};

export default BuildingViewer;
