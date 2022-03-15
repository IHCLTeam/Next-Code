import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({

    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    border: 'none'
}));

export default function RowAndColumnSpacing() {
    return (
        <Grid sx={{
            maxWidth: 1200,
            margin: "auto",
        }}>
            <Grid
                sx={{
                    maxWidth: 1200,
                    margin: "auto",

                }} container spacing={3} columnSpacing={{ xs: 3, sm: 2, md: 1 }}>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}> IHCL Sustainability Report 2020-21
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={4} >
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2012-13
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button></Item>
                </Grid>
                <Grid sx={{ borderRadius: 0 }} item xs={4} >
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL-Sustainability-Report-2019-20
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button></Item>
                </Grid>
                <Grid item xs={4} >
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2018-19
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button></Item>
                </Grid>
                <Grid item xs={4} >
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2009-10
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button></Item>
                </Grid>
                <Grid item xs={4} >
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2010-11
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2004-05
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2013-14
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2005-06
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2004-05
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2004-05
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>Safety & Security
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 68, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2006-07
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item sx={{ fontSize: 12, boxShadow: 'none' }}>IHCL Sustainability Report 2014-15
                        <Button size='small' className='pdfbutton' sx={{ marginTop: 3, left: 10, border: 'none', fontSize: 11, boxShadow: 'none' }} href="#contained-buttons">
                            DOWNLOAD PDF
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Grid>
    );
}