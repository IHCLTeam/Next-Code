import React from "react";
import { Grid, Typography } from "@mui/material";

interface typePress {
  header: string;
  cOne: string;
  cTwo: string;
}

interface dataTypePress {
  data: typePress[];
}

export function PressRooms({ data }: dataTypePress) {
  return (
    <Grid >
      <Typography >{data[0]?.header}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cOne}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cTwo}</Typography>
    </Grid>
  );
}
