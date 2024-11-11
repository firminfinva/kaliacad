import React, { useState } from "react";
import { Box, Grid, IconButton, Typography, Stack } from "@mui/material";
import { Link, navigate } from "gatsby";
import { Menu } from "@mui/icons-material";
import DrawerLaningPage from "../drawer/DrawerLaningPage";
import logo from "../../images/Kali_academy_-_Logo-gris-removebg-preview.png";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: "100%", margin: 0 }}>
      {/* Desktop View */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        display={{ xs: "none", md: "flex" }}
        sx={{
          padding: "1rem",
          paddingLeft: "80px", // Added padding left
          paddingRight: "80px", // Added padding right
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd", // Subtle bottom border
        }}
      >
        {/* Logo */}
        <Box>
          <img
            src={logo}
            alt="Kali Academy Logo"
            style={{
              height: 60,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Nav Links for Desktop */}
        <Stack direction="row" spacing={4} alignItems="center">
          <Typography
            variant="body1"
            color="black"
            component={Link}
            to="/supporters"
            style={{ textDecoration: "none" }}
          >
            Supporters
          </Typography>
          <Typography
            variant="body1"
            color="black"
            component={Link}
            to="/scholarship"
            style={{ textDecoration: "none" }}
          >
            Scholarship
          </Typography>
          <Typography
            variant="body1"
            color="black"
            component={Link}
            to="/tutorials"
            style={{ textDecoration: "none" }}
          >
            Tutorials
          </Typography>
          <Typography
            variant="body1"
            color="black"
            component="a"
            href="https://t.me/c/2179811245/1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Join Us
          </Typography>
        </Stack>
      </Grid>

      {/* Mobile View */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        display={{ xs: "flex", md: "none" }}
        sx={{
          padding: "1rem",
          paddingLeft: "20px", // Added padding left
          paddingRight: "20px", // Added padding right
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd", // Subtle bottom border
        }}
      >
        {/* Logo */}
        <Box>
          <img
            src={logo}
            alt="Kali Academy Logo"
            style={{
              height: 60,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Hamburger Icon for Drawer */}
        <IconButton onClick={toggleDrawer} color="inherit">
          <Menu fontSize="large" style={{ color: "black" }} />
        </IconButton>
      </Grid>

      {/* Drawer Component for Mobile Links */}
      <DrawerLaningPage open={open} setOpen={toggleDrawer}>
        <Stack spacing={3} sx={{ padding: 3 }}>
          <Typography
            variant="body1"
            component={Link}
            to="/supporters"
            style={{ textDecoration: "none", color: "black" }}
          >
            Supporters
          </Typography>
          <Typography
            variant="body1"
            component={Link}
            to="/scholarship"
            style={{ textDecoration: "none", color: "black" }}
          >
            Scholarship
          </Typography>
          <Typography
            variant="body1"
            component={Link}
            to="/tutorials"
            style={{ textDecoration: "none", color: "black" }}
          >
            Tutorials
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="https://t.me/c/2179811245/1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            Join Us
          </Typography>
        </Stack>
      </DrawerLaningPage>
    </div>
  );
}

export default Header;
