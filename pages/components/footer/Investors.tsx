import React from "react";
import { Grid, Typography } from "@mui/material";

interface typeInvestors {
  header: string;
  cOne: string;
  cTwo: string;
}
interface dataTypeInvestors {
  data: typeInvestors[];
}
export function Investors({ data }: dataTypeInvestors) {
  return (
    <Grid>
      <Typography>{data[0]?.header}</Typography>
      <Typography fontSize={12}>{data[0]?.cOne}</Typography>
      <Typography fontSize={12}>{data[0]?.cTwo}</Typography>
    </Grid>
  );
}
