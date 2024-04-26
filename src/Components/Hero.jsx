import React from "react";
import { Box, Typography } from "@mui/material";

import HeroBannerImage from "../assets/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "50px", xs: "100px" }, ml: { sm: "25px" } }}
    position="relative"
    zIndex={-1000}
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "34px", xs: "40px" } }}
      mb="23px"
      mt="30px"
      color="#FFFFFF"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Typography
      color="#FF2625"
      fontWeight="600"
      fontSize="200px"
      sx={{ position: "absolute", right: 540, top: 200 }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{
        position: "absolute",
        right: -10,
        bottom: -250,
        width: "400px",
        height: "550px",
      }}
    />
    {/* <button className="btn btn-primary">Primary</button> */}
  </Box>
);

export default HeroBanner;
