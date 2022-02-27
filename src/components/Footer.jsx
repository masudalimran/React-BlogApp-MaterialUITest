import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Typography
        variant="subtitle2"
        align="center"
        sx={{ backgroundColor: "navy", color: "white" }}
        position="sticky"
        bottom="0"
      >
        All Rights Reserved || 2022
      </Typography>
    </>
  );
}
