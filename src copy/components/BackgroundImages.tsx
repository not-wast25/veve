import React from "react";
import { Box } from "@mui/material";
const BackgroundImages: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          width: "300px",
          position: "absolute", // Positioniert die Box relativ zur äußeren Box
          top: "50%", // Abstand von oben
          left: "calc(40% - 150px)", // Abstand von links
          animation: "flyInLeft 1s ease-in-out forwards", // Animation von links
          opacity: 0,
        }}
      >
        <img
          src="src\assets\bgImgs\dj.png"
          alt="Placeholder"
          style={{ borderRadius: "8px", maxWidth: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: "300px",
          position: "absolute", // Positioniert die Box relativ zur äußeren Box
          top: "50%", // Abstand von oben
          left: "calc(60% - 150px)", // Abstand von links
          animation: "flyInRight 1s ease-in-out forwards", // Animation von rechts
          opacity: 0,
        }}
      >
        <img
          src="src\assets\bgImgs\veveFerresKili.png"
          alt="Placeholder"
          style={{ borderRadius: "8px", maxWidth: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: "300px",
          position: "absolute", // Positioniert die Box relativ zur äußeren Box
          top: "50%", // Abstand von oben
          left: "calc(20% - 150px)", // Abstand von links
          animation: "flyInRight 1s ease-in-out forwards", // Animation von links
          opacity: 0,
        }}
      >
        <img
          src="src\assets\bgImgs\veveberg.png"
          alt="Placeholder"
          style={{ borderRadius: "8px", maxWidth: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: "300px",
          position: "absolute", // Positioniert die Box relativ zur äußeren Box
          top: "50%", // Abstand von oben
          left: "calc(80% - 150px)", // Abstand von links
          animation: "flyInLeft 1s ease-in-out forwards", // Animation von rechts
          opacity: 0,
        }}
      >
        <img
          src="src\assets\bgImgs\lindl.png"
          alt="Placeholder"
          style={{ borderRadius: "8px", maxWidth: "100%" }}
        />
      </Box>
      <style>
        {`
                @keyframes flyInLeft {
                  0% {
                    transform: translateX(-20%); /* Start leicht links von der Endposition */
                    opacity: 0; /* Ganz transparent */
                  }
                  100% {
                    transform: translateX(0); /* Endposition */
                    opacity: 1; /* Voll sichtbar */
                  }
                }
                @keyframes flyInRight {
                  0% {
                    transform: translateX(20%); /* Start leicht rechts von der Endposition */
                    opacity: 0; /* Ganz transparent */
                  }
                  100% {
                    transform: translateX(0); /* Endposition */
                    opacity: 1; /* Voll sichtbar */
                  }
                }
              `}
      </style>
    </>
  );
};

export default BackgroundImages;
