import { Typography } from '@mui/material';
import React from 'react'
import { Grid } from '@mui/material';

interface typeCareers {
    header: string;
    cOne: string;
    cTwo: string;
}
interface dataTypeCareers {
    data: typeCareers[];
}
export function Careers({ data }: dataTypeCareers) {
    return (
        <Grid >
            <Typography>
                <Typography>
                    {data[0]?.header}
                </Typography>
                <Typography fontSize={12}>
                    {data[0]?.cOne}
                </Typography>
                <Typography fontSize={12}>
                    {data[0]?.cTwo}
                </Typography>
            </Typography>
        </Grid>
    )
}
