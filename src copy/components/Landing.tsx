import React, { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SideBar from "./SideBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Landing: React.FC = () => {
  const [text1] = useTypewriter({
    words: ["we bring house music to the alps.", "Nur no geil"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const [upcomingOpacity, setUpcomingOpacity] = useState(0.9);

  const handleUpcomingClick = (isEnter: boolean) => {
    isEnter ? setUpcomingOpacity(1) : setUpcomingOpacity(0.9);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          zIndex: 2,
        }}
      >
        <Box
          component="img"
          src="src/assets/logo_veve_final_konigsblau.png"
          alt="Icon"
          style={{
            position: "fixed",
            top: "-23px",
            width: "150px",
            height: "auto",
            marginLeft: "40px",
          }}
        />
        <SideBar />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "75%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "40%",
          }}
        >
          <Typography
            sx={{
              display: "flex", // Flexbox aktivieren
              justifyContent: "center", // Horizontale Zentrierung
              alignItems: "center", // Vertikale Zentrierung
              fontSize: "4rem",
              color: "#FFF",
              p: "0 40px 0 40px",
              height: "55%",
              fontWeight: 600,
            }}
          >
            {text1}
            {/* @ts-ignore */}
            <Cursor />
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "45%",
              pb: "160px",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 400,
                color: "#FFF",
                p: "0 40px 0 40px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              17.01 Stallenalm Steinplatte x YE{" "}
            </Typography>
            <Button
              sx={{
                m: "15px",
                width: "120px",
                height: "50px",
                backgroundColor: "#FFF",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#5F8BE6",
                  color: "#FFF",
                },
              }}
            >
              Tickets
            </Button>
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
      <Box
        sx={{
          //position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          // mt: "170px",
          //pt: "100px",
          height: "25%",

          transition: "background 0.5s ease",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            //position: "absolute", // Positioniert die Box absolut innerhalb der äußeren Box
            //bottom: 0, // Die Box bleibt am unteren Rand der äußeren Box
            padding: "20px", // Ein wenig Abstand nach innen
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              opacity: upcomingOpacity,
              color: "#FFF",
              fontWeight: 100,
              position: "relative", // Ermöglicht die Verwendung von Pseudo-Elementen
              display: "inline-block", // Damit die Linien die Breite des Textes umrahmen
              textAlign: "center",
              "&::before, &::after": {
                content: '""', // Pseudo-Elemente ohne Textinhalt
                position: "absolute",
                top: "55%", // Vertikale Mitte
                width: "150px", // Länge der Linie
                height: "2px", // Dicke der Linie
                backgroundColor: "#FFF", // Farbe der Linie
              },
              "&::before": {
                left: "-160px", // Position links vom Text
              },
              "&::after": {
                right: "-160px", // Position rechts vom Text
              },
            }}
          >
            upcoming
          </Typography>
          {/* <Typography
              sx={{
                padding: "0 20px 0 20px",
                fontSize: "2rem",
                fontWeight: "200",
                backgroundColor: "#000",
                color: "#FFF",
                opacity: upcomingOpacity,
                mt: "20px",
              }}
            >
              17.01 Stallenalm Steinplatte x YE
            </Typography> */}
          <IconButton sx={{ p: 0 }}>
            <ExpandMoreIcon
              onMouseEnter={() => {
                handleUpcomingClick(true);
              }}
              onMouseLeave={() => {
                handleUpcomingClick(false);
              }}
              sx={{
                color: "#FFF",
                fontSize: "5rem", // Größe des Icons
                opacity: upcomingOpacity, // Etwas transparent
                p: 0,
                m: 0,
                display: "block",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
