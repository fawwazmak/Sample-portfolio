import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadLinksPreset(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        preset: "links", // 👈 this brings in the connected dots + movement
        background: {
          color: "#000", // dark background
        },
        fullScreen: { enable: true, zIndex: -1 },
      }}
    />
  );
};

export default ParticleBackground;
