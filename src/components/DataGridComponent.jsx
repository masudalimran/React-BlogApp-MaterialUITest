import { Box, Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useNavigate } from "react-router-dom";

const cols = [
  {
    field: "studentName",
    headerName: "Student Name",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "studentScore",
    headerName: "Student Score",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "studentAge",
    headerName: "Student Age",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
];

const rows = [
  { id: 1, studentName: "Masud Al Imran", studentScore: 50, studentAge: 46 },
  { id: 2, studentName: "Shafiqul Islam", studentScore: 20, studentAge: 36 },
  { id: 3, studentName: "Saidul Islam", studentScore: 60, studentAge: 65 },
  { id: 4, studentName: "Rafiq Ahmed", studentScore: 59, studentAge: 12 },
  { id: 5, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 6, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 7, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 8, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 9, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 10, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 11, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 12, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 13, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 14, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 15, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 16, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 17, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 18, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 19, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 20, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 21, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 22, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 23, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 24, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 25, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
  { id: 26, studentName: "Karim Khan", studentScore: 40, studentAge: 22 },
];

export default function DataGridComponent() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mt: 2 }}
        >
          <Grid item>
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center">
              Data Grid
            </Typography>
          </Grid>
        </Grid>
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={cols}
            density="compact"
            pageSize={10}
            autoHeight
            checkboxSelection
            aria-label="demo Student Table"
          />
        </div>
      </Box>
    </>
  );
}
