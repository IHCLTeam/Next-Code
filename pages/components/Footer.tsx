import { Grid } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
    home: string;
    brands: string;
    company: string;
    inestors: string;
    development: string;
    responssibillity: string;
    career: string;
    pressroom: string;
    contact: string;
}

export default function Footer({ home, brands, company, inestors, development, responssibillity, career, pressroom, contact }: Props) {
    return (

        <Grid sx={{ display: 'flex' }}>
            <Grid xs={3} >
                <Box borderBottom={1} >{home}</Box>
            </Grid>
            <Grid item xs={2} >
                <Box >{brands}</Box>
            </Grid>
            <Grid item xs={2}>
                <Box>{company}</Box>
            </Grid>
            <Grid item xs={2} >
                <Box>{inestors}</Box>
            </Grid>
            <Grid item xs={2} >
                <Box>{development}</Box>
            </Grid>
            <Grid item xs={2} >
                <Box>{responssibillity}</Box>
            </Grid>
            <Grid item xs={2} >
                <Box>{career}</Box>
            </Grid>
            <Grid item xs={2} >
                <Box>{pressroom}</Box>
            </Grid>
            <Grid item xs={2} >
                <Box>{contact}</Box>
            </Grid>
        </Grid>


    );
}