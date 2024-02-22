import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography } from "@mui/material";
import './whereyoufindus.css'
import FacebookIcon from '@mui/icons-material/Facebook';

const WhereYouFindUs = () => {
  return (
    <div className="social-icons">
      <Typography>
        Где вы можете нас найти
      </Typography>
      <div>
        <InstagramIcon sx={{ fontSize: 60, m:1 }} />
        <FacebookIcon sx={{ fontSize: 60, m:1 }} />
      </div>
    </div>
  );
};

export default WhereYouFindUs;
