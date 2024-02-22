import React from "react";
import { Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          m: 2,
        }}
      >
        MediaWiz - мы занимаемся продвижением в интернете
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 1,
        }}
      >
        О нас
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
        voluptates cupiditate quidem ipsa laborum doloremque veritatis, quas
        odio sunt, aliquam, mollitia repellat reiciendis placeat? Nesciunt
        eligendi sed neque omnis aspernatur?
      </Typography>
    </div>
  );
};

export default AboutUs;
