import React, { useEffect, useRef, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Landing: React.FC<{ parallaxRef: React.RefObject<IParallax> }> = ({
  parallaxRef,
}) => {
  const layerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    //objectFit: "cover",
    objectPosition: "center",
  };
  useEffect(() => {
    console.log(parallaxRef.current);
  }, [parallaxRef.current]);
  return (
    <>
      <ParallaxLayer offset={0} speed={-1}>
        <img
          src="vevebg\MOSHED-2025-7-15-20-2-30.gif"
          alt="Hintergrund"
          style={{
            ...layerStyle,
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            filter: "brightness(0.8) blur(3px)",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.9}>
        <Box
          sx={{
            ...layerStyle,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            m: "0 150px 150px 0",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255, 255, 255)",
              fontSize: { xs: "1.5rem", sm: "3rem", md: "4rem" },
              fontFamily: "'Quicksand', sans-serif",
              letterSpacing: "10px",
            }}
          >
            VEVE IS YOUR SANCTUARY OF MUSIC
          </Typography>
        </Box>
      </ParallaxLayer>
      {/* <ParallaxLayer offset={0} speed={-1.4}>
        <Box
          sx={{
            ...layerStyle,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <img
            src="/logo_veve_final_konigsblau.png"
            alt="Logo"
            style={{
              width: "700px",
              filter: "invert(1) brightness(100)",
              animation: "float 4s ease-in-out infinite",
            }}
          />
        </Box>
      </ParallaxLayer> */}
      <ParallaxLayer offset={0} speed={-0.7}>
        <img
          src="/vevebg/ebene8.png"
          alt="Ebene 8 (ganz hinten)"
          style={{ ...layerStyle, filter: "brightness(0.5) blur(3px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.6}>
        <img
          src="/vevebg/ebene7.png"
          alt="Ebene 7"
          style={{ ...layerStyle, filter: "brightness(0.5) blur(3px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.5}>
        <img
          src="/vevebg/ebene6.png"
          alt="Ebene 6"
          style={{ ...layerStyle, filter: "brightness(0.5) blur(3px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.4}>
        <img
          src="/vevebg/ebene5.png"
          alt="Ebene 5"
          style={{ ...layerStyle, filter: "brightness(0.5) blur(3px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.3}>
        <img
          src="/vevebg/ebene4.png"
          alt="Ebene 4"
          style={{ ...layerStyle, filter: "brightness(0.5) blur(3px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.2}>
        <img
          src="/vevebg/ebene3.png"
          alt="Ebene 3"
          style={{ ...layerStyle, filter: "brightness(0.5) blur(3px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1}>
        <img
          src="/vevebg/ebene2.png"
          alt="Ebene 2"
          style={{ ...layerStyle, filter: "brightness(0.5) blur(3px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <img
          src="/vevebg/ebene1.png"
          alt="Ebene 1 (ganz vorne)"
          style={{ ...layerStyle, filter: "brightness(0.5) blur(3px)" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <IconButton
          onClick={() => parallaxRef.current?.scrollTo(1)}
          sx={{
            color: "#fff",
            fontSize: 60,
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 0, // macht Ecken eckig
          }}
          aria-label="Scroll down"
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem" },
              fontFamily: "'Quicksand', sans-serif",
              letterSpacing: "10px",
            }} // etwas kleiner und Abstand
          >
            get your tickets
          </Typography>
          <KeyboardArrowDownIcon sx={{ fontSize: 60 }} />
        </IconButton>
      </ParallaxLayer>
      <style>{`
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-6px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    `}</style>
    </>
  );
};

export default Landing;
