import React from "react";
import { Grid, Typography } from "@mui/material";

interface typeResponsibility {
  header: string;
  cOne: string;
  cTwo: string;
}

interface dataTypeResponsibility {
  data: typeResponsibility[];
}

export function Responsibility({ data }: dataTypeResponsibility) {
  return (
    <Grid>
      <Typography>{data[0]?.header}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cOne}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cTwo}</Typography>
    </Grid>
  );
}
