import React from "react";
import { Grid, Typography } from "@mui/material";

interface typeDevelopment {
  header: string;
  cOne: string;
  cTwo: string;
  cThree: string;
  cFour: string;
}

interface dataTypeDevelopment {
  data: typeDevelopment[];
}

export function Developments({ data }: dataTypeDevelopment) {
  return (
    <Grid fontSize={12}>
      <Typography >{data[0].header}</Typography>
      <Typography fontSize={12}>{data[0].cOne}</Typography>
      <Typography fontSize={12}>{data[0].cTwo}</Typography>
      <Typography fontSize={12}>{data[0].cThree}</Typography>
      <Typography fontSize={12}>{data[0].cFour}</Typography>
    </Grid>
  );
}
