import React from "react";
import { Box, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

const TextTwo: React.FC = () => (
  <Box
    sx={{
      color: "white",
      fontSize: "3rem",
      fontWeight: "bold",
    }}
  >
    <Parallax
      scale={[0, 16]}
      opacity={[1, 0]}
      startScroll={1000}
      endScroll={2000}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Typography>Text 2: Scroll weiter</Typography>
    </Parallax>
  </Box>
);

export default TextTwo;
