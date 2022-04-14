/* eslint-disable @next/next/no-title-in-document-head */

import * as React from 'react';
import Image from 'next/image'
import type { GetStaticProps, NextPage } from 'next'
import { getAll, getAllBlog, getAllBlogs, getBrands, getCareer, getCompany, getContact, getDevlopmnt, getFooter, getheadtwo, getInvestor, getJoinUS, getPdf, getPressrom, getResponsibil, getSubfooter, witoutcard } from './lib/api';
import { Button, IconButton, Link, Paper, styled, Typography } from '@mui/material';
import CardItems from './components/carditms';
import HrCards from './components/hrcards';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import imageLoader from '../imageLoader';
import DataOne from './components/withoutcard';
import { Brands } from './components/footer/brands';
import { Careers } from './components/footer/Careers';
import Company from './components/footer/Company';
import Contact from './components/footer/Contact';
import { Developments } from './components/footer/Developments';
import { Investors } from './components/footer/Investors';
import { PressRooms } from './components/footer/PressRooms';
import { Responsibility } from './components/footer/Responsibility';
import { Subfooter } from './components/footer/subfooter';
import { JoinUs } from './components/footer/joinUs';
import { FooterDown } from './components/footer/footerimg';
import RowAndColumnSpacing from './components/pdfgrid';
import CardLogic from './components/carditemlogic';
import SearchData from "../Data.json";
import SearchAppBar from './components/searchBar';
import Head from 'next/head';

import SamplePage from './components/loginpge';
import BasicModal from './components/modalPopup';
import DropdownAppBar from './components/dropdown';
import { display } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({

    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    border: 'none'
}));


const useStyles = makeStyles((theme) => ({
    navbar: {
        background: "linear-gradient(45deg, #FEB8B 30%, #FF853 90%)",
        height: "120px,",
    },
    blogtitle: {
        fontWeight: 800,
        left: 110,
    }
}))

const Home: NextPage = ({ blogs, cards, banner, bordernone, brands, company, investor, devlopmnt, responsibil, career, pressroom, contact, subfooter, joinus, footerdwn, datapdf }: any) => {
    const classes = useStyles();
    return (
        <>

            <Head>
                <title>
                    IHCLtatapage
                </title>
                <meta name='descripition' content='An ihcltata webapplication' />
                <meta http-httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                <meta name='viewport'
                    content='width=device-width, intial-scale=1' />
            </Head>

            <div>
                <Typography sx={{ bgcolor: '#e7e7e7' }}>
                    <Typography sx={{ bgcolor: 'white', display: 'Flex' }}>
                        <DropdownAppBar />
                        <Typography sx={{ marginLeft: '75%' }}>
                            <IconButton >
                                <BasicModal />
                            </IconButton>
                        </Typography>
                    </Typography>
                    {banner.map((banners: any) => {
                        return (
                            <>
                                <Typography >
                                    <Typography className='imagedesign'>
                                        <Image src={banners.image} loader={imageLoader} alt={banners.alt} height={442} width="1349" />
                                    </Typography>
                                    <Typography className='imagetext'>
                                        {banners.slug}
                                        <Typography sx={{ marginLeft: '10%', marginTop: '80%' }}>
                                            <SearchAppBar data={SearchData} />
                                        </Typography>
                                    </Typography>

                                </Typography>
                            </>
                        )
                    })}

                  

                    {bordernone.map((borderones: any) => {
                        return (
                            <>
                                <div key={borderones.index}>
                                    <DataOne
                                        title={borderones.title}
                                        descripition={borderones.descripition} />
                                </div>
                            </>
                        )
                    })}

                    <Typography>
                        <CardLogic datalogic={blogs} />
                    </Typography>

                    <Box p={10}>
                        <Typography sx={{ marginBottom: 3, display: 'flex', justifyContent: 'space-between' }} variant='h5'>
                            <Box sx={{ color: '#012f4e', borderBottom: 4, marginTop: 3 }} >
                                Initiatives and Impact
                            </Box>
                            <Box sx={{ color: '#012f4e', borderBottom: 1, fontSize: 15, marginTop: 5, marginRight: 3 }}>
                                <a href='#'> <b> VIEW ALL</b></a>
                            </Box>
                        </Typography>
                        <Grid container spacing={6}>

                            {cards.map((cardss: { index: React.Key | null | undefined; title: string; text: string; text1: string; text2: string; }) => {
                                return (
                                    <Grid key={cardss.index} item>
                                        <HrCards
                                            title={cardss.title}
                                            descripition={cardss.text}
                                            textOne={cardss.text1}
                                            textTwo={cardss.text2} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                    <br />

                    <br />
                    <br />

                    <Grid sx={{
                        maxWidth: 1200,
                        margin: "auto",
                    }}>
                        <Grid
                            sx={{
                                maxWidth: 1200,
                                margin: "auto",

                            }} container spacing={3} columnSpacing={{ xs: 3, sm: 2, md: 1 }}>
                            {datapdf.map((datapdfs: { index: React.Key | null | undefined; yeardata: any; download: any; }) => {
                                debugger
                                return (
                                    <div key={datapdfs.index}>
                                        <RowAndColumnSpacing
                                            yeardata={datapdfs.yeardata}
                                            download={datapdfs.download} />

                                    </div>
                                );
                            })}
                        </Grid>
                    </Grid>


                    <br /><br />

                    <footer className="containers " >
                        <Grid >
                            <Typography sx={{ fontSize: 12, display: 'flex', justifyContent: 'space-around', marginLeft: 8, width: '90%', padding: 10 }}   >
                                <Typography sx={{ fontSize: 12 }}>
                                    Home
                                </Typography>
                                <Grid >
                                    <Brands data={brands} />
                                </Grid>
                                <Typography >
                                    <Careers data={career} />
                                </Typography>
                                <Typography>
                                    <Company data={company} />
                                </Typography>
                                <Typography>
                                    <Contact data={contact} />
                                </Typography>
                                <Typography>
                                    <Developments data={devlopmnt} />
                                </Typography>
                                <Typography>
                                    <Investors data={investor} />
                                </Typography>
                                <Typography>
                                    <PressRooms data={pressroom} />
                                </Typography>
                                <Typography>
                                    <Responsibility data={responsibil} />
                                </Typography>
                            </Typography>
                        </Grid >

                        <Subfooter data={subfooter} />

                        <JoinUs data={joinus} />

                        <FooterDown data={footerdwn} />
                    </footer>
                </Typography>
            </div>
        </>
    )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
    const blogs = await getAllBlogs();
    const cards = await getAllBlog();
    const banner = await getAll();
    const lastdt = await getFooter();
    const bordernone = await witoutcard();
    const headtwo = await getheadtwo();
    const brands = await getBrands();
    const company = await getCompany();
    const investor = await getInvestor();
    const devlopmnt = await getDevlopmnt();
    const responsibil = await getResponsibil();
    const career = await getCareer();
    const pressroom = await getPressrom();
    const contact = await getContact();
    const subfooter = await getSubfooter();
    const joinus = await getJoinUS();
    const footerdwn = await getFooter();
    const datapdf = await getPdf();

    return {
        props: {
            blogs,
            cards,
            banner,
            lastdt,
            bordernone,
            headtwo,
            brands,
            company,
            investor,
            devlopmnt,
            responsibil,
            career,
            pressroom,
            contact,
            subfooter,
            joinus,
            footerdwn,
            datapdf

        }
    }
}

