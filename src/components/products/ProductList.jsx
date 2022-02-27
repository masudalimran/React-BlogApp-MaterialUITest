import { Button, Divider, Grid, Rating, Typography } from "@mui/material";
import React from "react";

const catName = [
  "anticreative",
  "sparlike",
  "populaces",
  "phragmoplast",
  "reinjected",
  "doughtier",
  "cayenned",
  "cenotaphs",
  "unbiasedness",
  "tusk",
  "aggravates",
  "pratingly",
];

export default function ProductList() {
  return (
    <>
      <Divider />
      <Typography
        variant="h2"
        color="navy"
        align="center"
        sx={{ textDecoration: "underline" }}
      >
        Our Products
      </Typography>
      <Grid container>
        {[...Array(12)].map((x, i) => (
          <Grid item md={3} xs={12} sx={{ pl: 1 }}>
            <Grid container justifyContent="center">
              <Grid item>
                <img
                  src={`https://picsum.photos/300/300?random=${i + 1}`}
                  alt={catName[i]}
                  style={{ borderRadius: "5%" }}
                />
              </Grid>
              <Grid item sx={{ mb: 2 }}>
                <Typography variant="h4" align="center">
                  {catName[i].toUpperCase()}
                </Typography>
                <Typography variant="subtitle2" align="center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Typography
                  variant="h5"
                  color="navy"
                  sx={{ textAlign: "center" }}
                >
                  $ 600
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                  <Rating
                    name="simple-controlled"
                    value={Math.floor(Math.random() * 4 + 1)}
                    readOnly
                    precision={0.5}
                  />
                </Typography>
                <Button variant="outlined" color="error" fullWidth>
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
