"use client";
import "./header.css";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FeedbackModal from "../../modals/FeedbackModal";



const Header = ({ page }) => {
  
  const { main } = page.en;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <Box>
        <video
          className="video_media"
          sx={{ width: "100%", height: "100vh", objectFit: "cover" }}
          src="/main-video-back.mp4"
          autoPlay
          muted
          loop
        ></video>

        <Grid
          container
          maxWidth='xl'
          spacing={2}
          sx={{
            position: "absolute",
            zIndex: 2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            item
            xs={7}
          >
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  spacing: 2,
                }}
              >
                <Typography
                  sx={{
                    WebkitTextStroke: "2px rgba(224, 42, 114, 1)",
                    fontFamily: "Play",
                    fontSize: 48,
                    fontWeight: 700,
                    lineHeight: 67,
                    fontFamily: "Play",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  className="header-text"
                  variant="h4"
                >
                  {main["header-1"]}
                </Typography>
                <Typography
                  sx={{
                    WebkitTextStroke: "2px rgba(67, 42, 224, 1)",
                    fontSize: 48,
                    fontWeight: 700,
                    lineHeight: 67,
                    fontFamily: "Play",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  className="header-text"
                  variant="h4"
                >
                  {main["header-2"]}
                </Typography>
                <Typography sx={{ mb: 1 }} variant="p">
                  {main["description-1"]}
                </Typography>
                <Typography variant="p">{main["description-2"]}</Typography>
                <FeedbackModal/>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={4}>
            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <img className="img" src="/logo.png" alt="logo" />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
