import { useEffect, useRef } from 'react';

const FirstArea = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

   
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 100);

   
    return () => {
      
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={350}
      style={{ border: '1px solid black' }}
    />
  );
};

export default FirstArea ;
