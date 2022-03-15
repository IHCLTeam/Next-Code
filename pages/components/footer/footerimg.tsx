import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import Image from 'next/image'
import imageLoader from "../../../imageLoader";
import Paper from '@mui/material/Paper';
import Link from "next/link";

interface arrayfooter {
    logo: string;
    brands: string;
    content: string;
    TajIcon: string;
    seleqtionsBrandIcon: string;
    vivantaIcon: string;
    gingerIcon: string;
    expressionsIcon: string;
    tajSatsIcon: string;
}

interface dataTypefooter {
    data: arrayfooter[];
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function FooterDown({ data }: dataTypefooter) {

    return (
        <Grid sx={{ display: 'flex', marginLeft: 13, justifyContent: 'space-between', width: '85%', borderTop: 1, padding: '1%' }}>
            <Grid>
                <Image
                    loader={imageLoader}
                    src={data[0]?.logo}
                    alt='img delt'
                    height={56}
                    width={90} />
                <Typography>
                    {data[0]?.content}
                </Typography>
            </Grid>

            <Grid>
                <Typography>
                    {data[0]?.brands}
                </Typography>
                <Image
                    loader={imageLoader}
                    src={data[0]?.TajIcon}
                    alt='img delt'
                    height={30}
                    width={80} />

                <Image
                    loader={imageLoader}
                    src={data[0]?.seleqtionsBrandIcon}
                    alt='img delt'
                    height={20}
                    width={80} />

                <Image loader={imageLoader}
                    src={data[0]?.vivantaIcon}
                    alt='img delt'
                    height={16}
                    width={80} />

                <Image loader={imageLoader}
                    src={data[0]?.gingerIcon}
                    alt='img delt'
                    height={20}
                    width={80} />


                <Image loader={imageLoader}
                    src={data[0]?.expressionsIcon}
                    alt='img delt'
                    height={25}
                    width={80} />


                <Image loader={imageLoader}
                    src={data[0]?.tajSatsIcon}
                    alt='img delt'
                    height={30}
                    width={80} />
            </Grid>
        </Grid>
    );
}
