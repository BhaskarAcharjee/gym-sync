import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/gym-banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#ff2625"
        fontWeight="600"
        sx={{
          fontSize: { lg: "26px", xs: "20px" },
          mt: { lg: "-130px", xs: "0" },
        }}
      >
        Fitness Hub
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Shine, and <br />
        Keep Pushing
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "22px", xs: "18px" } }}
        lineHeight="30px"
        mb={4}
      >
        Achieve Your Fitness Goals, <br />
        One Workout at a Time
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: "block",
          fontSize: { lg: "200px", md: "120px", xs: "80px" },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
