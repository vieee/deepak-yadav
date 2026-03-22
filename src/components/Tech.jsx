import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { useInView } from "framer-motion";

import { Ball } from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CanvasLoader from "./Loader";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div ref={ref} className='w-full h-[500px] flex justify-center items-center'>
      <Canvas
        frameloop={isInView ? 'always' : 'demand'}
        dpr={[1, 2]}
        camera={{ position: [0, 0, isMobile ? 30 : 20], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} />
          <OrbitControls enableZoom={false} autoRotate={isInView} autoRotateSpeed={0.8} />
          
          <group scale={isMobile ? 0.8 : 1}>
            {technologies.map((technology, index) => {
              // Distribute points evenly on a sphere using Fibonacci sphere algorithm
              const phi = Math.acos(1 - 2 * (index + 0.5) / technologies.length);
              const theta = Math.PI * (1 + Math.sqrt(5)) * index;
              const radius = 6.5;
              
              const x = radius * Math.cos(theta) * Math.sin(phi);
              const y = radius * Math.sin(theta) * Math.sin(phi);
              const z = radius * Math.cos(phi);

              return (
                <Ball 
                  key={technology.name} 
                  imgUrl={technology.icon} 
                  position={[x, y, z]} 
                />
              );
            })}
          </group>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, "");
