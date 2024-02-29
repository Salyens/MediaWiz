"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "next/link";
import "./customnavbar.css";
import { Grid } from "@mui/material";

const pages = [
  "РAЗРАБОТКА САЙТА",
  "КОНТЕКСТНАЯ РЕКЛАМА",
  "ВЕДЕНИЕ СОЦСЕТЕЙ",
  "ТАРГЕТИРОВАННАЯ РЕКЛАМА",
];
const paths = ["/web", "/webAd", "/smm", "/smmAds"];
const socialLinks = ["FB", "IG", "TG", "VK"];

function CustomNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderSocialLinks = (socialLinks) => {
    return socialLinks.map((link) => (
      <Link key={link} href="#">
        <img
          src={`/social_icons/${link}.png`}
          width={40}
          height={40}
          alt={link}
        />
      </Link>
    ));
  };

  const renderNavLinks = (pages) => {
    return pages.map((page, index) => (
      <Link  href={paths[index]} key={page}>
        <Typography
          sx={{
            fontSize: 18,
            fontFamily: "Play, sans-serif",
            borderBottom: "2px solid transparent",
            transition: "border-bottom 1s ease, color 1s ease",
            "&:hover": {
              borderBottom: "2px solid rgba(151, 71, 255, 1)",
            },
          }}
          variant="text"
        >
          {page}
        </Typography>
      </Link>
    ));
  };

  return (
    <AppBar
      sx={{
        height: "102px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        background: "rgba(180, 58, 237, 0.2)",
        position: "fixed",
        zIndex: 2,
      }}
      position="static"
    >
      <Container className="nav-container">
        <Toolbar disableGutters>
          <Grid
            container
            // spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={1}>
              <Link href="/" className="logo">
                <img alt="Logo" width={100} height={100} src="/logo.png" />
              </Link>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{
                  // flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-around",
                }}
              >
                {renderNavLinks(pages)}
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {renderSocialLinks(socialLinks)}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {renderNavLinks(pages)}
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomNavBar;
