import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';

interface arrayjoin {
  content: string;
  btn: string;
}

interface dataTypeBrands {
  data: arrayjoin[];
}

export function JoinUs({ data }: dataTypeBrands) {
  return (
    <Grid sx={{ margin: '4%', marginLeft: 13, width: '89%', padding: '0%' }}>
      <Typography fontSize={13}>{data[0]?.content}</Typography>
      <Typography>
        <Button variant="contained" className='hrcard' size="small">{data[0]?.btn}</Button>
      </Typography>
    </Grid>
  );
}
