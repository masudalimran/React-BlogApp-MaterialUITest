import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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

export default function CategoriesMobile() {
  const [cat, setCat] = React.useState("");

  const handleChange = (event) => {
    setCat(event.target.value);
  };
  return (
    <>
      <Box sx={{ m: 2 }}>
        <FormControl fullWidth variant="standard">
          <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label="Age"
            onChange={handleChange}
          >
            {catName.map((x, i) => (
              <MenuItem value={i}>{x.toUpperCase()}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
