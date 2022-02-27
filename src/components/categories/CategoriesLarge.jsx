import { Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import CategoriesMobile from "./CategoriesMobile";

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

export default function CategoriesLarge() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Divider />
      <Typography
        variant="h2"
        color="navy"
        align="center"
        sx={{ textDecoration: "underline" }}
      >
        Our Partners
      </Typography>
      {!matches ? (
        <Grid container justifyContent="center">
          {[...Array(11)].map((x, i) => (
            <Grid item key={i} xs={1}>
              <img
                src={`https://picsum.photos/200/300?random=${i + 1}`}
                alt="img_1"
                loading="lazy"
                style={{ borderRadius: "35%" }}
              />
              <Typography
                variant="subtitle2"
                align="center"
                sx={{ textTransform: "uppercase" }}
              >
                {catName[i]}
              </Typography>
            </Grid>
          ))}
        </Grid>
      ) : (
        <CategoriesMobile />
      )}
    </>
  );
}
