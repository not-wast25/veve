import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Button,
  useTheme,
  useMediaQuery,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IParallax } from "@react-spring/parallax";

interface NavigationProps {
  parallaxRef: React.RefObject<IParallax>;
}

const Navigation: React.FC<NavigationProps> = ({ parallaxRef }) => {
  const [open, setOpen] = useState(false);
  const [showAppBar, setShowAppBar] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const navItems = [
    "EVENTS",
    "ABOUT",
    "GALLERY",
    "RENTAL EQUIPMENT",
    "CONTACT",
  ];

  const THRESHOLD = 0.02; // minimaler Positionsunterschied

  useEffect(() => {
    if (!parallaxRef.current) return;

    const handleScroll = () => {
      const currentPos = parallaxRef.current!.current;

      if (currentPos - lastScrollPos > THRESHOLD && currentPos > 0.1) {
        // Runterscrollen => ausblenden
        setShowAppBar(false);
      } else if (lastScrollPos - currentPos > THRESHOLD) {
        // Hochschieben => einblenden
        setShowAppBar(true);
      }
      setLastScrollPos(currentPos);
    };

    const interval = setInterval(handleScroll, 100);
    return () => clearInterval(interval);
  }, [lastScrollPos, parallaxRef]);

  return (
    <>
      {/* Desktop Topbar */}
      {!isMobile && (
        <Slide appear={false} direction="down" in={showAppBar}>
          <AppBar
            position="fixed"
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
              backdropFilter: "blur(10px)",
              boxShadow: "none",
              transition: "top 0.3s",
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  onClick={() => parallaxRef.current?.scrollTo(0)}
                  src="/logo_veve_final_konigsblau.png"
                  alt="VEVE Logo"
                  style={{
                    height: "130px",
                    filter: "invert(1) brightness(100)",
                  }}
                />
              </Box>

              <Box>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#fff",
                      fontSize: "1rem",
                      textTransform: "none",
                      fontFamily: "'Quicksand', sans-serif",
                      letterSpacing: "5px",
                      mx: 1,
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </Slide>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer(!open)}
            sx={{
              position: "fixed",
              top: 16,
              left: 25,
              zIndex: 1201,
              color: "#FFF",
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                boxShadow: "none",
                transition: "top 0.3s",
              },
            }}
          >
            <List sx={{ width: "50vw", paddingTop: "64px" }}>
              {navItems.map((item) => (
                <ListItemButton key={item}>
                  <ListItemText
                    sx={{
                      color: "#fff",
                      fontSize: "1rem",
                      textTransform: "none",
                      fontFamily: "'Quicksand', sans-serif",
                      letterSpacing: "5px",
                      mx: 1,
                    }}
                    primary={item}
                  />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Navigation;
