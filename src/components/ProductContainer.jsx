import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React from "react";

export default function ProductContainer() {
  return (
    <Box
      sx={{
        mr: 2,
        ml: 2,
        mt: { xs: -28, sm: -44, md: -44, lg: -44, xl: -75 },
      }}
    >
      <Grid container>
        <Grid item md={6}>
          <Grid container justifyContent="center">
            <Grid item>
              <img
                src="https://www.transparentpng.com/thumb/fashion/fashion-free-download-transparent-6.png"
                alt="fashion free download transparent @transparentpng.com"
                height={300}
                width={250}
              />
            </Grid>
            <Grid item sx={{ mt: { xs: 0, md: 0, lg: 0, xl: 22 }, mb: 2 }}>
              <Typography variant="h4">Girl Shopping Bag</Typography>
              <Typography variant="subtitle2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography
                variant="h5"
                color="navy"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                $ 600
              </Typography>
              <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Rating
                  name="simple-controlled"
                  value={2}
                  readOnly
                  precision={0.5}
                />
              </Typography>
              <Button
                variant="outlined"
                color="error"
                sx={{ width: { xs: "100%", xl: "40%" } }}
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid container justifyContent="center">
            <Grid item>
              <img
                src="https://www.transparentpng.com/thumb/dress/dress-free-download-transparent-12.png"
                alt="dress free download transparent @transparentpng.com"
                height={300}
                width={250}
              />
            </Grid>
            <Grid item sx={{ mt: { xs: 0, md: 0, lg: 0, xl: 22 }, mb: 2 }}>
              <Typography variant="h4">Princess Dress</Typography>
              <Typography variant="subtitle2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography
                variant="h5"
                color="navy"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                $ 450
              </Typography>
              <Typography sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Rating
                  name="simple-controlled"
                  value={3.5}
                  readOnly
                  precision={0.5}
                />
              </Typography>
              <Button
                variant="outlined"
                color="error"
                sx={{ width: { xs: "100%", xl: "40%" } }}
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
