import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import imageLoader from '../../imageLoader';
import { makeStyles } from '@material-ui/styles';

interface Props {
  image: string;
  title: string;
  text: string;
}
const useStyles = makeStyles((theme) => ({
  custom: {
    border: "none",
    boxShadow: "none",

  }
}))

const CardItems = ({ image, title, text }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Paper
        sx={{
          margin: 'auto',
          maxWidth: 1100,
          flexGrow: 2,
          marginTop: 3,
          mariginRight: 5,
          border: 'none',
          boxShadow: 'none',
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >

        <Grid container spacing={3}>
          <Image src={image} loader={imageLoader}
            alt="Not Found" width='350%' height='220%' />

          <Grid item xs={12} sm container >
            <Grid item xs container direction="column" spacing={4} >
              <Grid item sx={{ marginBottom: 2 }}>
                <Typography gutterBottom variant="subtitle1" component="h2" >
                  {title}
                </Typography>
                <Typography sx={{ fontSize: 12 }} variant="subtitle1">
                  {text}
                </Typography>

              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Paper>
      <br />

    </>
  );
}

export default CardItems
