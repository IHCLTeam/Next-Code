import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/material';


interface Props {
    title: string;
    descripition: string;
}

const useStyles = makeStyles((theme) => ({
    Grid: {
        border: "none",
        boxShadow: "none",
        backgroundColor: "transparent"
    }
}));

const DataOne = ({ title, descripition }: Props) => {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.Grid}
                sx={{
                    margin: 'auto',
                    maxWidth: 1100,
                    flexGrow: 2,
                    marginTop: 5,
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={5} >
                    <Grid item xs={14} sm container spacing={5} >
                        <Grid item >
                            <Box component='h2' sx={{ color: '#012f4e', borderBottom: 4, marginTop: 2, width: '9%' }} >
                                {title}
                            </Box>
                            <Typography fontSize={13} variant="body2">
                                {descripition}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <br />
        </>
    );
}
export default DataOne
