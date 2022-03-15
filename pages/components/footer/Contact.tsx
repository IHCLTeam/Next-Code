import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface typeContact {
  header: string;
  cOne: string;
}

interface dataTypeContact {
  data: typeContact[];
}

const useStyles = makeStyles((theme) => ({
  Typo: {
      background: "linear-gradient(45deg, #FEB8B 30%, #FF853 90%)",
      height: "120px,",
  },
  blogtitle: {
      fontWeight: 800,
      left: 110,
  }
}))

export default function Contact({ data }: dataTypeContact) {
  return (
    <Grid>
      <Typography>
        {data[0]?.header}
      </Typography>
      <Typography fontSize={12}> <a href="#"> {data[0]?.cOne}</a></Typography>
    </Grid>
  );
}
