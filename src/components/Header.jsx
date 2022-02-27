import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          minHeight: {
            xs: "65vh",
            md: "90vh",
          },
          background: "url(https://jooinn.com/images/grunge-blue-banner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "100% 30vh",
            sm: "100% 30vh",
            md: "100% 30vh",
            lg: "100% 45vh",
            xl: "100% 45vh",
          },
        }}
      >
        <Grid container>
          <Grid item md={8}>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              height="30vh"
              sx={{ pl: 3 }}
            >
              <Grid item>
                <Typography variant="h4" color="white">
                  Find Your New Favorite
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="white">
                  Collection In Winter
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="white">
                  SALE 2022
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} sm={0}>
            <Grid container justifyContent="flex-end">
              <Grid
                item
                sx={{
                  mr: 0,
                  display: { xs: "none", lg: "block" },
                }}
              >
                <img
                  src="https://www.transparentpng.com/thumb/kids/FdW2aB-young-kids-image.png"
                  alt="young kids @transparentpng.com"
                  height="300"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
