import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Shoe } from "../";

function ProductDesign() {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <Shoe />
      </Stage>
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}

export default ProductDesign;
