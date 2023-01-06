import { Fireworks } from "@fireworks-js/react";

export const FireworksComponent = () => {
  return (
    <Fireworks
      options={{
        rocketsPoint: {
          max: 100,
          min: 0,
        },
      }}
      style={{
        // background: "#23448f",
        height: "50%",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    />
  );
};
