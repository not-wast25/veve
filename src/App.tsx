import React, { useRef } from "react";
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import Events from "./components/Events";
import { Box } from "@mui/material";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
const App: React.FC = () => {
  const parallaxRef = useRef<IParallax>(null);

  return (
    <>
      <Box height="100vh" sx={{ backgroundColor: "#ff9f63ff" }}>
        <Parallax
          ref={parallaxRef}
          pages={9}
          style={{ top: "0", left: "0" }}
          config={{ mass: 1, tension: 500, friction: 300 }}
        >
          <Landing parallaxRef={parallaxRef} />
          <Events />
        </Parallax>
        <Navigation parallaxRef={parallaxRef} />
      </Box>
    </>
  );
};

export default App;
