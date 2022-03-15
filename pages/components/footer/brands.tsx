import React from "react";
import { Grid, Typography } from "@mui/material";

interface arrayBrands {
  header: string;
  cOne: string;
  cTwo: string;
  cThree: string;
  cFour: string;
  cFive: string;
}

interface dataTypeBrands {
  data: arrayBrands[];
}


// const Typography :{

// }

export function Brands({ data }: dataTypeBrands) {
  return (
    <Grid>
      <Typography >{data[0]?.header}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cOne}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cTwo}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cThree}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cFour}</Typography>
      <Typography sx={{ fontSize: 12 }}>{data[0]?.cFive}</Typography>
    </Grid>
  );
}
