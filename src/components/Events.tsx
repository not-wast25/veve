import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const Events: React.FC = () => {
  return (
    <ParallaxLayer offset={1} speed={0}>
      <Box
        sx={{
          backgroundColor: "rgba(6, 6, 6, 1)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            backgroundColor: "#1f2a36",
            boxShadow: 4,
            p: 4,
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          {/* Bild */}
          <Box
            component="img"
            src="https://cdn.pixabay.com/photo/2020/01/15/17/35/concert-4768496_1280.jpg"
            alt="Event"
            sx={{
              width: { xs: "100%", md: "50%" },
              objectFit: "cover",
            }}
          />

          {/* Beschreibung */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Afro House Night
            </Typography>
            <Typography variant="body1" color="grey.300" paragraph>
              Erlebe einen unvergesslichen Abend mit pulsierenden Beats und
              internationalen DJs. Lass dich vom Rhythmus treiben!
            </Typography>
            <Typography variant="subtitle1" color="grey.400" gutterBottom>
              📍 Berlin, Club XYZ
              <br />
              📅 Samstag, 26. Juli 2025 – 22:00 Uhr
            </Typography>
            <Button
              color="primary"
              sx={{
                color: "#fff",
                fontSize: "1rem",
                textTransform: "none",
                fontFamily: "'Quicksand', sans-serif",
                letterSpacing: "5px",
                mt: "20px",
                mx: 1,
                alignSelf: "start",
              }}
              href="#tickets"
            >
              Tickets kaufen
            </Button>
          </Box>
        </Box>
      </Box>
    </ParallaxLayer>
  );
};

export default Events;
