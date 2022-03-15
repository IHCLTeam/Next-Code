import React from "react";
import { Grid, Typography } from "@mui/material";

interface dataCompany {
  header: string;
  cOne: string;
  cTwo: string;
  cThree: string;
  cFour: string;
}

interface dataTypeCompany {
  data: dataCompany[];
}

export default function Company({ data }: dataTypeCompany) {
  return (
    <Grid>
      <Typography >{data[0]?.header}</Typography>
      <Typography fontSize={12}>{data[0]?.cOne}</Typography>
      <Typography fontSize={12}>{data[0]?.cTwo}</Typography>
      <Typography fontSize={12}>{data[0]?.cThree}</Typography>
      <Typography fontSize={12}> {data[0]?.cFour}</Typography>
    </Grid>
  );
}
