import React from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Real-time Investment
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Streaming cypto currency prices
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
