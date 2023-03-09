import { useRef } from "react";
import {
  Text,
  PerspectiveCamera,
  RenderTexture,
  OrbitControls,
} from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";

function Cube() {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach={"map"}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach={"background"} args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={2} color={"#555"}>
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

function CubeCanvas() {
  return (
    <Canvas
      camera={{
        fov: 25,
        position: [5, 5, 5],
      }}
    >
      <OrbitControls enablePan={false} enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Cube />
    </Canvas>
  );
}

export default CubeCanvas;
