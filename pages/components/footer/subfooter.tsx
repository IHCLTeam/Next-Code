import React from "react";
import { Grid, Typography } from "@mui/material";

interface arraysubfooter {
    headerOne: string;
    headerTwo: string;
    headerThree: string;
    headerFour: string;
    headerFive: string;
}

interface datasubfooter {
    data: arraysubfooter[];
}

export function Subfooter({ data }: datasubfooter) {
    return (
        <Grid sx={{display:'flex', marginTop:'0%',marginLeft:14, justifyContent:'space-between', width:'85%', borderTop:1, borderBottom:1, padding:'1%'}}>
            <Typography fontSize={12}>{data[0]?.headerOne}</Typography>
            <Typography fontSize={12}>{data[0]?.headerTwo}</Typography>
            <Typography fontSize={12}>{data[0]?.headerThree}</Typography>
            <Typography fontSize={12}>{data[0]?.headerFour}</Typography>
            <Typography fontSize={12}>{data[0]?.headerFive}</Typography>
        </Grid>
    );
}
