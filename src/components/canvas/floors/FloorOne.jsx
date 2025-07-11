//  import { PlaneGeometry } from "three"





export const FloorOne = ({ level, width, depth, height  }) => {


  const safeWidth = typeof width === 'undefined'   ? 5     : width;
  const safeHeight = typeof height === 'undefined' ? 3.8 : height;
  
  const safeDepth = typeof depth === 'undefined' ? 5  : depth;

  console.log({ safeWidth, safeHeight, safeDepth, level });

  return (
    <mesh position={[safeWidth / 2, safeHeight / 2 + (level - 1) * safeHeight, safeDepth / 2]}>
      <boxGeometry args={[safeWidth, safeHeight, safeDepth]} />
      <meshStandardMaterial color={level % 2 === 0 ? 'orange' : 'skyblue'} />
    </mesh>
  );
};





// export default FloorOne ;