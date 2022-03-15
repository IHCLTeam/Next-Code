import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

interface Props {
    title: string;
    descripition: string;
    textOne: string;
    textTwo: string;
}

const HrCards = ({ title, descripition, textOne, textTwo }: Props) => {
    return (
        <>
            <Card sx={{ marginBottom: 2, maxWidth: 340, height: 468, border: 'none', boxShadow: 'none', marginLeft: 1 }} >
                <CardContent className='hrcard' sx={{ bgcolor: '#012f4e', height: 100 }}>
                    <Typography color="secondary" component="h3"
                        sx={{ paddingLeft: 8, paddingTop: 1, color: 'white', fontSize: 22 }} >
                        {title}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {descripition}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                        {textOne}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {textTwo}
                    </Typography>
                </CardContent>
            </Card>
            <br />
        </>
    );
}
export default HrCards
