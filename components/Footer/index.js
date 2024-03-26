import { Box, Typography } from "@mui/material";
import React from "react";
import "./footer.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    { name: "Telegram", src: "/TG" },
    { name: "VKontakte", src: "/VK" },
    { name: "Instagram", src: "/IG" },
    { name: "Facebook", src: "/FB" },
  ];

  const renderSocialLinks = () => {
    return socialIcons.map((item) => (
      <Link href="#" key={item.name + item.src}>
        <Typography
          sx={{ fontSize: 16, display: "flex", alignItems: "center", mr: 1 }}
          variant="text"
        >
          <img src={`/social_icons${item.src}.png`} width={40} height={40} />{" "}
          {item.name}
        </Typography>
      </Link>
    ));
  };

  return (
    <Box className="footer-wrapper">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          p: 1,
        }}
      >
        {renderSocialLinks()}
      </Box>
      <Box sx={{ p: 1 }}>89033750261</Box>
      <Box sx={{ p: 1 }}>Политика конфеденциальности</Box>
    </Box>
  );
};

export default Footer;
