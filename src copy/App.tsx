import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Event from "./components/Event";
import Landing from "./components/Landing";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Füge dies hinzu, um grundlegende Stile zu übernehmen */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, #5F8BE6, #feb47b)",
          width: "100%",
          height: "100vh",
          margin: 0,
          padding: 0,
          position: "relative", // Notwendig, um den zIndex richtig anzuwenden
          zIndex: 1, // Hintergrundbox hat einen niedrigen zIndex
        }}
      >
        <Box
          component="img"
          src="src/assets/img/cloud-wobg.png"
          alt="Clouds"
          sx={{
            //filter: "brightness(0.7)",
            position: "fixed",
            bottom: 0,
            left: 0,
            opacity: 0,
            height: "100%",
            width: "100%",
            filter: "blur(5px)",
            objectFit: "cover", // Bild wird skaliert, um den gesamten Bereich abzudecken
            zIndex: -1, // Hintergrundbild liegt unter den anderen Komponenten
            animation: "slideUpC 1s ease-out forwards", // Animation anwenden
            "@keyframes slideUpC": {
              "0%": {
                transform: "translateY(40%)", // Bild startet von außerhalb des Viewports (unterhalb des Bildschirms)
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)", // Bild endet in der gewünschten Position
                opacity: 0.5,
              },
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: -2,
          }}
        >
          <Box
            // component="img"
            // src="src/assets/img/cloud-wobg.png"
            sx={{
              //mt: "110px",
              backgroundColor: "rgba(0, 0, 0, 0.64)",
              //objectFit: "cover", // Bild wird skaliert, um den gesamten Bereich abzudecken

              bottom: 0,
              m: "100px 0 250px 0",
              borderRadius: "15px",
              left: 0,
              //height: "100%",
              width: "40%",
              //filter: "blur(1px)",
            }}
          />
        </Box>
        <Box
          component="img"
          src="src/assets/img/alps-5199414-removebg.png"
          alt="Mountain"
          sx={{
            //filter: "brightness(0.5)",
            position: "fixed",
            bottom: 0,
            left: 0,
            opacity: 0,
            width: "100%", // Bild nutzt die gesamte Breite des Bildschirms
            height: "550px", // Festgelegte Höhe für das Bild
            filter: "blur(3px)",

            objectFit: "cover", // Bild wird skaliert, um den gesamten Bereich abzudecken
            zIndex: -1, // Hintergrundbild liegt unter den anderen Komponenten
            animation: "slideUpM 1s ease-in-out forwards", // Animation anwenden
            "@keyframes slideUpM": {
              "0%": {
                transform: "translateY(20%)", // Bild startet von außerhalb des Viewports (unterhalb des Bildschirms)
                opacity: 0,
              },
              "100%": {
                transform: "translateX(0)", // Bild endet in der gewünschten Position
                opacity: 1,
              },
            },
          }}
        />

        <Landing />
        <Event />
      </Box>
    </ThemeProvider>
  );
};

export default App;
