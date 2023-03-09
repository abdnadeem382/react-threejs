import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function BubbleCanvas() {
  return (
    <Canvas>
      <OrbitControls enablePan={false} enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
          color={"#3d0b63"}
          attach={"material"}
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
}

export default BubbleCanvas;
