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
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./nav.module.css";

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
      <Link style={{ textDecoration: "none" }} href={paths[index]} key={page}>
        <Typography className={styles.navLinks} variant="text">
          {page}
        </Typography>
      </Link>
    ));
  };

  return (
    <AppBar
      sx={{
        height: "102px",
        border: 0,
        boxShadow: 0,
        background: "transparent",
        zIndex: 2,
        m: 0,
        p: 0,
        zIndex: 5,
      }}
      position="fixed"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          background: "rgba(180, 58, 237, 0.2)",
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Container className={styles.container} sx={{ maxWidth: 1512 }}>
          <Toolbar disableGutters sx={{ pl: 0 }}>
            <Grid
              container
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                ml: 0,
              }}
            >
              <Grid item xs={1}>
                <Link href="/" className="logo">
                  <img alt="Logo" width={100} height={100} src="/logo.png" />
                </Link>
              </Grid>
              <Grid item xs={8}>
                <Box
                  sx={{
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
      </motion.div>
    </AppBar>
  );
}
export default CustomNavBar;
