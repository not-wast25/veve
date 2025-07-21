import React from "react";
import { Box, Button, Typography } from "@mui/material";
const Event: React.FC = () => {
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          backgroundColor: "rgb(241, 248, 255)",
          // border: "3px solid rgb(139, 139, 139)",
        }}
      >
        Stallenoim nur no geil
      </Typography>
      <Box
        sx={{
          backgroundImage: `url("https://www.stallenalm.com/wp-content/uploads/2017/12/Winterpanorama_Steinplatte.jpg")`,
          backgroundSize: "cover", // Das Bild wird so skaliert, dass es den gesamten Bereich abdeckt.
          backgroundPosition: "center", // Das Bild wird zentriert.
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            padding: "0 15% 0 15%",
            background: `linear-gradient(to bottom, rgb(241, 248, 255, 1) 0%, rgba(241, 248, 255, 0.5) 100%)`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "rgb(241, 248, 255, .7) ",
            }}
          >
            <Box
              sx={{
                display: "flex",
                p: "40px",
                justifyContent: "center",
              }}
            >
              <img
                src="src\assets\img\image.png"
                alt="Placeholder"
                style={{ borderRadius: "8px", maxWidth: "100%" }}
              />
            </Box>
            <Box sx={{ color: "#000", mt: "100px", p: "40px" }}>
              <Typography>
                17.01 Stallenalm - Waidring 1160, 6384 Waidring, Österreich.{" "}
                <br />
                <br />
                Open doors: 2pm - 10pm. <br />
                <br />
                We love to see you in the mountains for a sunset session.
                <br />
                <br />
                Finest Housemusic by 4 Djs. <br />
                <br />
                Headliner tba. <br />
                <br />
                YE Special Show. <br />
                <br />
                Finest Drinks & Food.
                <br />
                Unique panorama over the mountains. <br />
                <br />
                Bus Shuttle Service from Munich centre to the venue and back.
              </Typography>
              <Button
                sx={{
                  m: "15px",
                  width: "120px",
                  height: "50px",
                  backgroundColor: "rgb(101, 145, 255)",
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: "rgb(84, 119, 208)",
                  },
                }}
              >
                Ticket
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Event;
