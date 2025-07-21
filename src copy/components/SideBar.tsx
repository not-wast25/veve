import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger-Icon importieren
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const SideBar: React.FC = () => {
  // State, um den Zustand der Sidebar zu steuern
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarButtonColor, setSidebarButtonColor] = useState("#FFF");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    isSidebarOpen
      ? setSidebarButtonColor("#FFF")
      : setSidebarButtonColor("#5F8BE6");
  };
  const listItems = ["home", "events", "gallery", "contact"];
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        zIndex: 3,
      }}
    >
      {/* Hamburger Button */}
      <Box
        sx={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 2,
        }}
      >
        <IconButton>
          <ShoppingBagIcon
            sx={{
              fontSize: "1.5rem",
              color: sidebarButtonColor,
              transition: "color 0.5s ease",
            }}
          />
        </IconButton>
        <IconButton sx={{ mr: "70px" }}>
          <InstagramIcon
            sx={{
              fontSize: "1.5rem",
              color: sidebarButtonColor,
              transition: "color 0.5s ease",
            }}
          />
        </IconButton>
        <IconButton
          onClick={toggleSidebar}
          sx={{ padding: 1 }}
          aria-label="menu"
        >
          <MenuIcon
            sx={{
              fontSize: "3rem",
              color: sidebarButtonColor,
              transition: "color 0.5s ease",
            }}
          />{" "}
          {/* Hamburger Icon */}
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: isSidebarOpen ? 0 : "-250px",
          width: "250px",
          height: "100%",
          backgroundColor: "#FFF",
          color: "white",
          transition: "right 0.5s ease-out",
          zIndex: 1,
          pt: "100px",
        }}
      >
        <List
          sx={{
            "& .MuiListItemButton-root": {
              color: "black",
              padding: "10px",
            },
          }}
        >
          {listItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2rem",
                    //color: "#5F8BE6",
                    "&:hover": { color: "#feb47b" },
                  }}
                >
                  {item}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
