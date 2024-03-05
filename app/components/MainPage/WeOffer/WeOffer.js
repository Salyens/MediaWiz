"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import OneCard from "./OneCard/OneCard";
import { motion, useScroll } from "framer-motion";

const WeOffer = ({ weOffer }) => {
  const { title, offerList } = weOffer;
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
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
        ref={element}
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
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontSize: 36,
                      fontWeight: 400,
                      borderBottom: "2px solid rgba(233, 58, 237, 1)",
                      mt: 10,
                      mb: 7,
                    }}
                  >
                    {title}
                  </Typography>
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
