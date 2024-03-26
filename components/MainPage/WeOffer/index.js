"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import OneCard from "./OneCard";
import { motion, useScroll } from "framer-motion";

const WeOffer = ({ weOffer }) => {
  const { title, offerList } = weOffer;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start start"],
  });
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    scrollYProgress.on("change", (e) => setIsAnimate(true));
  }, []);

  const renderOfferList = () => {
    return offerList.map((item) => (
      <Grid key={item.header} item xs={5.7}>
        <OneCard header={item.header} description={item.description} />
      </Grid>
    ));
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ y: 250 }}
        animate={{ y: 550 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `url('/lines-2.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: 600,
        }}
      ></motion.div>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isAnimate && (
            <Box>
              <motion.div
                initial={{ y: 600 }}
                animate={{ y: -600 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    mt: 10,
                    mb: 2,
                    pl: 1,
                    display: "inline-block",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 36,
                      fontWeight: 400,
                      position: "relative",
                    }}
                  >
                    {title}
                  </Typography>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "3px",
                      background: "rgba(233, 58, 237, 1)",
                      width: "auto",
                      boxShadow: `
            0px 2px 5px rgba(124, 58, 237, 1),
            0px 2px 20px rgba(124, 58, 237, 0.5),
            0px 2px 50px rgba(124, 58, 237, 1),
            0px 2px 150px rgba(124, 58, 237, 1)
          `,
                    }}
                  />
                </Box>

                <Grid
                  container
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  {renderOfferList()}
                </Grid>
              </motion.div>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default WeOffer;
