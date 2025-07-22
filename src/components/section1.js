// import Head from 'next/head';
// import {
//   Card,
//   CardContent,
//   Container,
//   Typography,
//   Grid, Box, useTheme, useMediaQuery
// } from '@mui/material';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import * as React from 'react';
// import NextLink from 'next/link';
// import CardActions from '@mui/material/CardActions';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
//
// import jwt from 'jsonwebtoken';
//
// import { sign } from 'jsonwebtoken';
// import Footer from '../components/footer';
// import { useAuth } from '../hooks/use-auth';
//
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
//
// const Page = () => {
//   const theme = useTheme();
//
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('mobile'));
//   const islargeLaptop = useMediaQuery((theme) => theme.breakpoints.only('largeLaptop'));
//   // const isIpadScreen = useMediaQuery((theme) => theme.breakpoints.between('ipad', 'ipadPro'));
//   // const isIpadScreen = useMediaQuery((theme) => theme.breakpoints.only('ipad'));
//   const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('large'));
//   const isSmallLap = useMediaQuery((theme) => theme.breakpoints.only('smallLaptop'));
//   const isLaptopScreen = useMediaQuery((theme) => theme.breakpoints.up('laptop'));
//   const isLaptopScreenUp = useMediaQuery((theme) => theme.breakpoints.up('large'));
//
//   const allLaptop = useMediaQuery((theme) => theme.breakpoints.between('smallLaptop', 'large'));
//
//   const isXXlUp = useMediaQuery((theme) => theme.breakpoints.up('xxl'));
//   const is4KUp = useMediaQuery((theme) => theme.breakpoints.up('4k'));
//   // const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xxl'));
//   // const isIpadPro = useMediaQuery(theme.breakpoints.only('ipadPro'));  // const largeScreen = useMediaQuery(theme.breakpoints.up('xl'));
//   const extraLargeScreen = useMediaQuery(theme.breakpoints.up('xxl'));
//
//   // const extraLargeQuery = useMediaQuery(theme.breakpoints.between('xxl', 2048));
//   // const ultraLargeQuery = useMediaQuery(theme.breakpoints.up(2049));
//   const laptop = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
//   const largeScreen = useMediaQuery(theme.breakpoints.up('xl'));
//
//   const isIpadScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isIpadPro = useMediaQuery(theme.breakpoints.up('md'));
//
//   const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
//   const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
//
//   console.log(' width:', window.screen.width);
//   console.log(' height:', window.screen.height);
//   console.log('Screen width:', window.screen.width * window.devicePixelRatio);
//   console.log('Screen height:', window.screen.height * window.devicePixelRatio);
//   console.log('Inner width:', window.innerWidth);
//   console.log('Inner height:', window.innerHeight);
//
//   console.log("allLaptop", allLaptop);
//   console.log("isLaptopScreenUp", isLaptopScreenUp);
//
//   return (
//     <>
//       <Head>
//         <title>Homepage | {APP_NAME}</title>
//       </Head>
//       <Box
//         sx={{
//           // overflowX: 'hidden',
//           // overflowY: 'hidden',
//           position: 'relative',
//           // bgcolor:'black',
//           width: '100%',
//           // height:'100%',
//           // bgcolor:'red',
//           height: {
//             md: '50vh',
//             xs: '40vh',
//
//             lg:'100vh',
//             xl: '100vh',
//             ipad: '50vh',
//             // ipadPro:'50vh',
//             smallLaptop: '700px',
//              // laptop: '750px'
//           },
//           // minHeight: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center'
//           // overflow: 'hidden',
//           // px: 2,
//         }}
//       >
//         <Container
//           // data-aos="zoom-in"
//           // data-aos-duration="600"
//           // data-aos-easing="ease-in"
//           sx={{ position: 'relative', width: '100%', height: '100%' }}>
//
//           {/*<Box*/}
//           {/*  component="img"*/}
//           {/*  src={`${WEB_URL}/laptop2.png`}*/}
//           {/*  alt="laptop"*/}
//           {/*  sx={{*/}
//           {/*    width: {md:'100%', xs: '70%', ipadPro: '70%' },*/}
//
//           {/*    // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},*/}
//           {/*    // display: 'block',*/}
//           {/*    position: 'absolute',*/}
//           {/*    // height:'100%',*/}
//           {/*    top: '50%',*/}
//           {/*    left: '50%',*/}
//           {/*    transform: 'translate(-50%, -50%)',*/}
//           {/*    zIndex: 9*/}
//           {/*  }}*/}
//           {/*/>*/}
//
//
//           {/*<Box*/}
//           {/*  sx={{*/}
//           {/*    position: 'relative',*/}
//           {/*    width: { xl: '80%', lg: '70%', xs: '56%', ipad: '48%', ipadPro: '65%' },*/}
//           {/*    // mx: 'auto',*/}
//           {/*    top: '50%',*/}
//           {/*    left: '50%',*/}
//           {/*    transform: 'translate(-50%, -50%)'*/}
//           {/*  }}*/}
//           {/*>*/}
//           {/*  <Box*/}
//           {/*    component="iframe"*/}
//           {/*    src="https://www.youtube.com/embed/w0HuAGCryIw?autoplay=1&mute=1&loop=1&playlist=w0HuAGCryIw"*/}
//           {/*    title="YouTube video player"*/}
//           {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
//           {/*    allowFullScreen*/}
//           {/*    sx={{*/}
//           {/*      position: 'absolute',*/}
//           {/*      top: '50%',*/}
//           {/*      left: '50%',*/}
//           {/*      transform: 'translate(-50%, -50%)',*/}
//           {/*      width: '100%',*/}
//           {/*      height: '100%',*/}
//           {/*      border: 'none',*/}
//           {/*      zIndex: 10,*/}
//           {/*    }}*/}
//           {/*  />*/}
//           {/*</Box>*/}
//
//           {/*<iframe width="70%" height="450"*/}
//           {/*        src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"*/}
//           {/*        title="YouTube video player" frameBorder="0"*/}
//           {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
//           {/*        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>*/}
//
//
//           {/*{*/}
//           {/*  isMobile && !isXXlUp && (*/}
//           {/*    <>*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/laptop2.png`}*/}
//           {/*        alt="laptop"*/}
//           {/*        sx={{*/}
//           {/*          width: {*/}
//           {/*            // md: '100%',*/}
//           {/*            xs: '70%',*/}
//           {/*            // ipadPro: '70%', large: '100%'*/}
//           {/*          },*/}
//
//           {/*          // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},*/}
//           {/*          // display: 'block',*/}
//           {/*          position: 'absolute',*/}
//           {/*          // height:'100%',*/}
//           {/*          top: '50%',*/}
//           {/*          left: '50%',*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          zIndex: 9*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/butterfly.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          // bgcolor:'red',*/}
//           {/*          position: 'absolute',*/}
//           {/*          right: {*/}
//           {/*            // md: '-22%', lg: '-25%'*/}
//           {/*            xs: '-20%'*/}
//           {/*            // large: '-30%'*/}
//           {/*          },*/}
//           {/*          top: {*/}
//           {/*            // md: '25%', lg: '20%',*/}
//           {/*            xs: '25%'*/}
//           {/*            // , large: '20%',*/}
//           {/*            },*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          width: {*/}
//           {/*            // md: '45%',*/}
//           {/*            xs: '45%'*/}
//           {/*          },*/}
//           {/*          // width: { md: '45%', xs: '30%' },*/}
//           {/*          zIndex: 1300,*/}
//           {/*          pointerEvents: 'none'*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/hearts.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          // bgcolor:'red',*/}
//           {/*          left: {*/}
//           {/*            // md: '22%', large: '15%',*/}
//           {/*            xs: '23%' },*/}
//           {/*          top: {*/}
//           {/*            // md: '25%',*/}
//           {/*            xs: '28%'*/}
//           {/*            // , large: '20%'*/}
//           {/*          },*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          // width: { md: '28%', xs: '30%' },*/}
//           {/*          width: {*/}
//           {/*            // md: '33%', lg: '35%',*/}
//           {/*            xs: '40%' },*/}
//           {/*          // width: { md: '33%',lg:'35%',  xs: '40%' },*/}
//           {/*          zIndex: 1300,*/}
//           {/*          pointerEvents: 'none'*/}
//           {/*          // zIndex: 11,*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="iframe"*/}
//           {/*        src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"*/}
//           {/*        allow="autoplay; encrypted-media"*/}
//           {/*        allowFullScreen*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          borderRadius: '10px',*/}
//           {/*          left: {*/}
//           {/*            // md: '50.1%', large: '50.2%',*/}
//           {/*            xs: '50%' },*/}
//           {/*          top: {*/}
//           {/*            // md: '49%',*/}
//           {/*            // large: '48.5%',*/}
//           {/*            xs: '50%'*/}
//           {/*          },*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          width: {*/}
//           {/*            // lg: '56%',*/}
//           {/*            xs: '55%'*/}
//           {/*            // ,large: '80%'*/}
//           {/*          },*/}
//           {/*          // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'*/}
//           {/*          height: {*/}
//           {/*            xs: '130px'*/}
//           {/*            // , sm: '400px', lg: '440px', large: '610px'*/}
//           {/*          }, // ✅ custom heights*/}
//           {/*          zIndex: 10,*/}
//
//           {/*          border: 'none'*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//           {/*       /!* Bottom Right - Mac *!/*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/mack.png`}*/}
//           {/*        alt="mac side"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: {*/}
//           {/*            // md: '38%', lg: '42%',*/}
//           {/*            xs: '44%'*/}
//           {/*            // , laptop: '48%', large: '45%'*/}
//           {/*          },*/}
//           {/*          right: {*/}
//           {/*            // md: '-10%', lg: '-10%', large: '-21%',*/}
//           {/*            xs: '4%'*/}
//           {/*            // , laptop: '-1.5%'*/}
//
//           {/*          },*/}
//           {/*          width: {*/}
//           {/*            // md: '27%',*/}
//           {/*            xs: '20%'*/}
//           {/*            // , large: '35%'*/}
//           {/*          },*/}
//           {/*          transform: 'translateY(100%)',*/}
//           {/*          zIndex: 5*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/mobile.png`}*/}
//           {/*        alt="mobile side"*/}
//           {/*        sx={{*/}
//           {/*          display: isLargeScreen ? 'none' : 'block',*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: {*/}
//           {/*            xs: '25%'*/}
//           {/*            // ,md: '2%',*/}
//           {/*            // lg: '14%', //1200*/}
//           {/*            // laptop: '13%', //1280*/}
//           {/*            // large: '16%'   //1540*/}
//           {/*          },*/}
//           {/*          right: {*/}
//           {/*            xs: '3%'*/}
//
//           {/*            // ,md: '-10%',*/}
//           {/*            // lg: '-10%',*/}
//           {/*            // laptop: '-2%', // 👈 for normal laptops*/}
//           {/*            // large: '-11%'*/}
//           {/*          },*/}
//           {/*          width: {*/}
//           {/*            xs: '13%'*/}
//           {/*            // ,*/}
//           {/*            // md: '15%',*/}
//           {/*            // lg: '15%',*/}
//           {/*            //*/}
//           {/*            // laptop: '16%' // 👈 a bit bigger for laptops*/}
//           {/*          },*/}
//           {/*          transform: 'translateY(10%)',*/}
//           {/*          zIndex: 5*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/card.png`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: {*/}
//           {/*            // md: '40%', xl: '50%',*/}
//           {/*            xs: '47%'*/}
//           {/*            // , ipadPro: '50%', large: '44%'*/}
//           {/*          },*/}
//           {/*          left: {*/}
//           {/*            // md: '-9%', xl: '-18%',*/}
//           {/*            xs: '1%'*/}
//           {/*            // , ipadPro: '0.1%', large: '-17%'*/}
//           {/*          },*/}
//           {/*          width: {*/}
//           {/*            // md: '25%',*/}
//           {/*            xs: '24%'*/}
//           {/*            // , large: '30%'*/}
//           {/*            //*/}
//           {/*            // , ipadPro: '25%'*/}
//           {/*          },*/}
//           {/*          transform: 'translateY(86%)',*/}
//           {/*          zIndex: 4*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/cardBaloons.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: { xs: '49%'*/}
//           {/*            // , md: '52%', large: '45%'*/}
//           {/*          },*/}
//           {/*          left: {*/}
//           {/*            // md: '-1%',*/}
//           {/*            xs: '1%'*/}
//           {/*            // , large: '-17%'*/}
//           {/*          },*/}
//           {/*          width: { xs: '23%'*/}
//           {/*            // , md: '22%', large: '25%'*/}
//           {/*          },*/}
//           {/*          transform: 'translateY(86%)',*/}
//           {/*          zIndex: 4*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//
//           {/*    </>*/}
//           {/*  )*/}
//           {/*}*/}
//
//
//           {/*{*/}
//           {/*  allLaptop && !isXXlUp && (*/}
//           {/*    <>*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/laptop2.png`}*/}
//           {/*        alt="laptop"*/}
//           {/*        sx={{*/}
//           {/*          width: { md: '100%', xs: '70%', ipadPro: '70%', large: '100%' },*/}
//           {/*          position: 'absolute',*/}
//           {/*          // height:'100%',*/}
//           {/*          top: '50%',*/}
//           {/*          left: '50%',*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          zIndex: 9*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/butterfly.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          // bgcolor:'red',*/}
//           {/*          position: 'absolute',*/}
//           {/*          right: { md: '-22%', lg: '-25%', xs: '-20%', large: '-30%' },*/}
//           {/*          top: { md: '25%', lg: '20%', xs: '25%', large: '20%' },*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          width: { md: '45%', xs: '45%' },*/}
//           {/*          // width: { md: '45%', xs: '30%' },*/}
//           {/*          zIndex: 1300,*/}
//           {/*          pointerEvents: 'none'*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/hearts.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          // bgcolor:'red',*/}
//           {/*          left: { md: '22%', large: '15%', xs: '23%' },*/}
//           {/*          top: { md: '25%', xs: '28%', large: '20%' },*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          // width: { md: '28%', xs: '30%' },*/}
//           {/*          width: { md: '33%', lg: '35%', xs: '40%' },*/}
//           {/*          // width: { md: '33%',lg:'35%',  xs: '40%' },*/}
//           {/*          zIndex: 1300,*/}
//           {/*          pointerEvents: 'none'*/}
//           {/*          // zIndex: 11,*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="iframe"*/}
//           {/*        src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"*/}
//           {/*        allow="autoplay; encrypted-media"*/}
//           {/*        allowFullScreen*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          borderRadius: '10px',*/}
//           {/*          left: { md: '50.1%', large: '50.2%', xs: '50%' },*/}
//           {/*          top: {*/}
//           {/*            md: '49%',*/}
//           {/*            large: '48.5%',*/}
//           {/*            // xl: '49.5%',*/}
//           {/*            xs: '50%'*/}
//           {/*          },*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          width: {*/}
//           {/*            // xl: '70%',*/}
//           {/*            lg: '56%', xs: '55%', large: '80%'*/}
//           {/*            // , ipad: '55%', ipadPro: '55%'*/}
//           {/*          },*/}
//           {/*          // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'*/}
//           {/*          height: {*/}
//           {/*            xs: '130px', sm: '400px', lg: '440px', large: '610px'*/}
//           {/*            // lg: '440px'*/}
//           {/*            // , xl: '570px'*/}
//           {/*            // , ipad:'270px', ipadPro:'360px'*/}
//           {/*          }, // ✅ custom heights*/}
//           {/*          zIndex: 10,*/}
//
//           {/*          border: 'none'*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/mack.png`}*/}
//           {/*        alt="mac side"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: {*/}
//           {/*            md: '38%', lg: '42%'*/}
//           {/*            // , xl: '49%'*/}
//           {/*            , xs: '44%', laptop: '48%', large: '45%'*/}
//           {/*            // , ipadPro:'47%'*/}
//           {/*          },*/}
//           {/*          right: {*/}
//           {/*            md: '-10%', lg: '-10%', large: '-21%',*/}
//           {/*            // , xl: '-16%',*/}
//           {/*            xs: '4%', laptop: '-1.5%'*/}
//           {/*            // , ipadPro:'4.5%'*/}
//
//           {/*          },*/}
//           {/*          width: {*/}
//           {/*            md: '27%',*/}
//           {/*            // , xl: '35%',*/}
//           {/*            xs: '20%',*/}
//           {/*            large: '35%'*/}
//           {/*            // , ipadPro:'20%'*/}
//           {/*            // , ipad:'23%', ipadPro:'25%', surfacePro:'22%'*/}
//           {/*          },*/}
//           {/*          transform: 'translateY(100%)',*/}
//           {/*          zIndex: 5*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/mobile.png`}*/}
//           {/*        alt="mobile side"*/}
//           {/*        sx={{*/}
//           {/*          display: isLargeScreen ? 'none' : 'block',*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: {*/}
//           {/*            xs: '25%',*/}
//           {/*            md: '2%',*/}
//           {/*            lg: '14%', //1200*/}
//           {/*            // ipadPro:'34%',*/}
//           {/*            // ipad:'33%',*/}
//           {/*            // isIpadScreen:'100%',*/}
//           {/*            laptop: '13%', //1280*/}
//           {/*            large: '16%'   //1540*/}
//           {/*            // xl: '33%'*/}
//           {/*          },*/}
//           {/*          right: {*/}
//           {/*            xs: '3%',*/}
//           {/*            md: '-10%',*/}
//           {/*            lg: '-10%',*/}
//           {/*            // ipad:'3%',*/}
//           {/*            // ipadPro:'3%',*/}
//           {/*            laptop: '-2%', // 👈 for normal laptops*/}
//           {/*            large: '-11%'*/}
//           {/*            // xl: '-18%'*/}
//           {/*          },*/}
//           {/*          width: {*/}
//           {/*            xs: '13%',*/}
//           {/*            md: '15%',*/}
//           {/*            lg: '15%',*/}
//           {/*            // ipadPro:'15%',*/}
//           {/*            laptop: '16%' // 👈 a bit bigger for laptops*/}
//           {/*            // xl: '25%'*/}
//           {/*          },*/}
//           {/*          transform: 'translateY(10%)',*/}
//           {/*          zIndex: 5*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/card.png`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: { md: '40%', xl: '50%', xs: '47%', ipadPro: '50%', large: '44%' },*/}
//           {/*          left: {*/}
//           {/*            md: '-9%', xl: '-18%', xs: '1%', ipadPro: '0.1%', large: '-17%'*/}
//           {/*            // , ipad:'5%', ipadPro:'1%' , surfacePro:'6%'*/}
//           {/*          },*/}
//           {/*          width: {*/}
//           {/*            md: '25%', xs: '24%', large: '30%'*/}
//           {/*            // , xl: '37%'*/}
//           {/*            , ipadPro: '25%'*/}
//           {/*            // , ipad:'24%', ipadPro:'26%' , surfacePro:'23%'*/}
//           {/*          },*/}
//           {/*          transform: 'translateY(86%)',*/}
//           {/*          zIndex: 4*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/cardBaloons.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: { xs: '49%', md: '52%', large: '45%' },*/}
//           {/*          left: { md: '-1%', xs: '1%', large: '-17%' },*/}
//           {/*          // width: '18%',*/}
//           {/*          width: { xs: '23%', md: '22%', large: '25%' },*/}
//           {/*          transform: 'translateY(86%)',*/}
//           {/*          zIndex: 4*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//
//           {/*    </>*/}
//           {/*  )*/}
//           {/*}*/}
//
//
//
//
//
//           {
//             (isMobile || isLaptopScreen || isLaptopScreenUp) && !isXXlUp && (
//               <>
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/laptop2.png`}
//                   alt="laptop"
//                   sx={{
//                     width: { md: '100%', xs: '70%', ipadPro: '70%', large: '100%' },
//
//                     // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
//                     // display: 'block',
//                     position: 'absolute',
//                     // height:'100%',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     zIndex: 9
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/butterfly.gif`}
//                   alt="card"
//                   sx={{
//                     // bgcolor:'red',
//                     position: 'absolute',
//                     right: { md: '-22%', lg: '-25%', xs: '-20%', large: '-30%' },
//                     top: { md: '25%', lg: '20%', xs: '25%', large: '20%' },
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: { md: '45%', xs: '45%' },
//                     // width: { md: '45%', xs: '30%' },
//                     zIndex: 1300,
//                     pointerEvents: 'none'
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/hearts.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     // bgcolor:'red',
//                     left: { md: '22%', large: '15%', xs: '23%' },
//                     top: { md: '25%', xs: '28%', large: '20%' },
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     // width: { md: '28%', xs: '30%' },
//                     width: { md: '33%', lg: '35%', xs: '40%' },
//                     // width: { md: '33%',lg:'35%',  xs: '40%' },
//                     zIndex: 1300,
//                     pointerEvents: 'none'
//                     // zIndex: 11,
//                   }}
//                 />
//                 <Box
//                   component="iframe"
//                   src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                   sx={{
//                     position: 'absolute',
//                     borderRadius: '10px',
//                     left: { md: '50.1%', large: '50.2%', xs: '50%' },
//                     top: {
//                       md: '49%',
//                       large: '48.5%',
//                       // xl: '49.5%',
//                       xs: '50%'
//                     },
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: {
//                       // xl: '70%',
//                       lg: '56%', xs: '55%', large: '80%'
//                       // , ipad: '55%', ipadPro: '55%'
//                     },
//                     // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
//                     height: {
//                       xs: '130px', sm: '400px', lg: '440px', large: '610px'
//                       // lg: '440px'
//                       // , xl: '570px'
//                       // , ipad:'270px', ipadPro:'360px'
//                     }, // ✅ custom heights
//                     zIndex: 10,
//
//                     border: 'none'
//                   }}
//                 />
//
//
//                 {/*<Box*/}
//                 {/*  component="video"*/}
//                 {/*  src={`${WEB_URL}/laptopVideo.mp4`}*/}
//                 {/*  autoPlay*/}
//                 {/*  muted*/}
//                 {/*  loop*/}
//                 {/*  sx={{*/}
//                 {/*    position: 'absolute',*/}
//                 {/*    left:  '50%',*/}
//                 {/*    top:  '50%',*/}
//                 {/*    // height:'550px',*/}
//                 {/*    transform: 'translate(-50%, -50%)',*/}
//                 {/*    // width:'72.5%',*/}
//
//                 {/*    width: { xl: '80%', lg: '70%', xs:'56%' , ipad:'48%', ipadPro:'65%'},*/}
//                 {/*    // width: { md: '56%', xs: '56%', ipad:'56%' , xl:'100%'},*/}
//                 {/*    // width: '56%',*/}
//                 {/*    // height:'100%',*/}
//                 {/*    zIndex: 10,*/}
//                 {/*    // borderRadius: '20px',*/}
//                 {/*    // boxShadow: 3,*/}
//                 {/*  }} */}
//                 {/* /> /
//
//                  {/* Bottom Right - Mac */}
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mack.png`}
//                   alt="mac side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: {
//                       md: '38%', lg: '42%'
//                       // , xl: '49%'
//                       , xs: '44%', laptop: '48%', large: '45%'
//                       // , ipadPro:'47%'
//                     },
//                     right: {
//                       md: '-10%', lg: '-10%', large: '-21%',
//                       // , xl: '-16%',
//                       xs: '4%', laptop: '-1.5%'
//                       // , ipadPro:'4.5%'
//
//                     },
//                     width: {
//                       md: '27%',
//                       // , xl: '35%',
//                       xs: '20%',
//                       large: '35%'
//                       // , ipadPro:'20%'
//                       // , ipad:'23%', ipadPro:'25%', surfacePro:'22%'
//                     },
//                     transform: 'translateY(100%)',
//                     zIndex: 5
//                   }}
//                 />
//
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mobile.png`}
//                   alt="mobile side"
//                   sx={{
//                     display: isLargeScreen ? 'none' : 'block',
//                     position: 'absolute',
//                     bottom: {
//                       xs: '25%',
//                       md: '2%',
//                       lg: '14%', //1200
//                       // ipadPro:'34%',
//                       // ipad:'33%',
//                       // isIpadScreen:'100%',
//                       laptop: '13%', //1280
//                       large: '16%'   //1540
//                       // xl: '33%'
//                     },
//                     right: {
//                       xs: '3%',
//                       md: '-10%',
//                       lg: '-10%',
//                       // ipad:'3%',
//                       // ipadPro:'3%',
//                       laptop: '-2%', // 👈 for normal laptops
//                       large: '-11%'
//                       // xl: '-18%'
//                     },
//                     width: {
//                       xs: '13%',
//                       md: '15%',
//                       lg: '15%',
//                       // ipadPro:'15%',
//                       laptop: '16%' // 👈 a bit bigger for laptops
//                       // xl: '25%'
//                     },
//                     transform: 'translateY(10%)',
//                     zIndex: 5
//                   }}
//                 />
//
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/card.png`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: { md: '40%', xl: '50%', xs: '47%', ipadPro: '50%', large: '44%' },
//                     left: {
//                       md: '-9%', xl: '-18%', xs: '1%', ipadPro: '0.1%', large: '-17%'
//                       // , ipad:'5%', ipadPro:'1%' , surfacePro:'6%'
//                     },
//                     width: {
//                       md: '25%', xs: '24%', large: '30%'
//                       // , xl: '37%'
//                       , ipadPro: '25%'
//                       // , ipad:'24%', ipadPro:'26%' , surfacePro:'23%'
//                     },
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/cardBaloons.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: { xs: '49%', md: '52%', large: '45%' },
//                     left: { md: '-1%', xs: '1%', large: '-17%' },
//                     // width: '18%',
//                     width: { xs: '23%', md: '22%', large: '25%' },
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//
//
//               </>
//             )
//           }
//
//
//
//
//
//           {/*//small laptop*/}
//
//           {/*{*/}
//           {/*  !isIpadPro && isSmallLap && (*/}
//           {/*    <>*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/laptop2.png`}*/}
//           {/*        alt="laptop"*/}
//           {/*        sx={{*/}
//           {/*          width: '70%',*/}
//           {/*          position: 'absolute',*/}
//           {/*          height: '50%',*/}
//           {/*          top: '50%',*/}
//           {/*          left: '50%',*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          zIndex: 9*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="iframe"*/}
//           {/*        src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"*/}
//           {/*        allow="autoplay; encrypted-media"*/}
//           {/*        allowFullScreen*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          borderRadius: '10px',*/}
//           {/*          left: '50%',*/}
//           {/*          top: '49%',*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          width: '30%',*/}
//           {/*          // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'*/}
//           {/*          height: '900px', // ✅ custom heights*/}
//           {/*          zIndex: 10,*/}
//           {/*          border: 'none'*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/butterfly.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          right: '-85%',*/}
//           {/*          top: '20%',*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          width: '80%',*/}
//           {/*          zIndex: 1300,*/}
//           {/*          pointerEvents: 'none'*/}
//           {/*          // zIndex: 11,*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/hearts.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          left: '5%',*/}
//           {/*          top: '20%',*/}
//           {/*          transform: 'translate(-50%, -50%)',*/}
//           {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
//           {/*          width: '55%',*/}
//           {/*          zIndex: 1300*/}
//           {/*          // zIndex: 11,*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      /!* Bottom Right - Mac *!/*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/mack.png`}*/}
//           {/*        alt="mac side"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: '41%',*/}
//           {/*          right: '-43%',*/}
//           {/*          width: '40%',*/}
//           {/*          transform: 'translateY(100%)',*/}
//           {/*          zIndex: 5*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/mobile.png`}*/}
//           {/*        alt="mobile side"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: '25%',*/}
//           {/*          right: '-45%',*/}
//           {/*          width: '23%',*/}
//           {/*          transform: 'translateY(90%)',*/}
//           {/*          // transform: 'translateY(10%)',*/}
//           {/*          zIndex: 5*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/card.png`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: '47%',*/}
//           {/*          left: '-48%',*/}
//           {/*          width: '45%',*/}
//           {/*          transform: 'translateY(86%)',*/}
//           {/*          zIndex: 4*/}
//           {/*        }}*/}
//           {/*      />*/}
//           {/*      <Box*/}
//           {/*        component="img"*/}
//           {/*        src={`${WEB_URL}/cardBaloons.gif`}*/}
//           {/*        alt="card"*/}
//           {/*        sx={{*/}
//           {/*          position: 'absolute',*/}
//           {/*          bottom: '51%',*/}
//           {/*          left: '-53%',*/}
//           {/*          width: '45%',*/}
//           {/*          transform: 'translateY(86%)',*/}
//           {/*          zIndex: 4*/}
//           {/*        }}*/}
//           {/*      />*/}
//
//           {/*    </>*/}
//           {/*  )*/}
//           {/*}*/}
//
//
//           {
//             isLaptopScreenUp && !isXXlUp && (
//
//               <Box
//                 component="img"
//                 src={`${WEB_URL}/mobile.png`}
//                 alt="mobile side"
//                 sx={{
//                   position: 'absolute',
//                   // bottom: islargeLaptop? '23%': '20%' ,
//                   bottom: '10%',
//                   right: '-21%',
//                   width: '20%',
//                   transform: 'translateY(10%)',
//                   zIndex: 5
//                 }}
//               />
//             )
//           }
//
//
//           {
//             isIpadScreen && !isSmallLap && (<>
//
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/laptop2.png`}
//                   alt="laptop"
//                   sx={{
//                     width: { md: '100%', xs: '70%', ipadPro: '70%' },
//
//                     // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
//                     // display: 'block',
//                     position: 'absolute',
//                     // height:'100%',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     zIndex: 9
//                   }}
//                 />
//                 <Box
//                   component="iframe"
//                   src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                   sx={{
//                     position: 'absolute',
//                     borderRadius: '10px',
//                     left: '50%',
//                     top: '49%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: {
//                       ipad: '55%'
//                     },
//                     // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
//                     height: {
//                       ipad: '270px'
//                     },
//                     zIndex: 10,
//                     border: 'none'
//                   }}
//                 />
//
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/butterfly.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     right: '-20%',
//                     top: '20%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '40%',
//                     zIndex: 1300,
//                     pointerEvents: 'none'
//                     // zIndex: 11,
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/hearts.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     left: '22%',
//                     top: '25%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '35%',
//                     zIndex: 1300
//                     // zIndex: 11,
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mack.png`}
//                   alt="mac side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '44%',
//                     right: '4%',
//                     width: '20%',
//                     transform: 'translateY(100%)',
//                     zIndex: 5
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mobile.png`}
//                   alt="mobile side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '19%',
//                     right: '3%',
//                     width: '13%',
//                     transform: 'translateY(10%)',
//                     zIndex: 5
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/card.png`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '46%',
//                     left: '2%',
//                     width: '23%',
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/cardBaloons.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '49%',
//                     left: '2%',
//                     width: '20%',
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//
//               </>
//             )
//           }
//           {
//             isIpadPro && !isLaptopScreen && (<>
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/laptop2.png`}
//                   alt="laptop"
//                   sx={{
//                     width: '70%',
//
//                     // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
//                     // display: 'block',
//                     position: 'absolute',
//                     // height:'100%',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     zIndex: 9
//                   }}
//                 />
//                 <Box
//                   component="iframe"
//                   src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                   sx={{
//                     position: 'absolute',
//                     borderRadius: '10px',
//                     left: '50%',
//                     top: '49%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '55%',
//                     // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
//                     height: '300px',
//                     zIndex: 10,
//                     border: 'none'
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/butterfly.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     right: '-22%',
//                     top: '30%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '45%',
//                     zIndex: 1300,
//                     pointerEvents: 'none'
//                     // zIndex: 11,
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/hearts.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     left: '25%',
//                     top: '30%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '35%',
//                     zIndex: 1300,
//                     pointerEvents: 'none'
//                     // zIndex: 11,
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mack.png`}
//                   alt="mac side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '44%',
//                     right: '4%',
//                     width: '20%',
//                     transform: 'translateY(100%)',
//                     zIndex: 5
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mobile.png`}
//                   alt="mobile side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '20%',
//                     right: '3%',
//                     width: '14%',
//                     transform: 'translateY(10%)',
//                     zIndex: 5
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/card.png`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '45%',
//                     left: '2%',
//                     width: '23%',
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/cardBaloons.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '49%',
//                     left: '2%',
//                     width: '20%',
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//
//               </>
//             )
//           }
//
//
//           {
//             isXXlUp && !is4KUp && (
//               <>
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/laptop3.png`}
//                   alt="laptop"
//                   sx={{
//                     // width: {md:'100%', xs: '70%', ipadPro: '70%' },
//                     // width: '100%',
//                     // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
//                     // display: 'block',
//                     position: 'absolute',
//                     // height:'100%',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     zIndex: 9
//                   }}
//                 />
//                 <Box
//                   component="iframe"
//                   src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                   sx={{
//                     position: 'absolute',
//                     borderRadius: '10px',
//                     left: '50%',
//                     top: '49%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '115%',
//                     // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
//                     height: '900px', // ✅ custom heights
//                     zIndex: 10,
//                     border: 'none'
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/butterfly.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     right: '-85%',
//                     top: '20%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '80%',
//                     zIndex: 1300,
//                     pointerEvents: 'none'
//                     // zIndex: 11,
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/hearts.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     left: '5%',
//                     top: '20%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '55%',
//                     zIndex: 1300
//                     // zIndex: 11,
//                   }}
//                 />
//                 {/* Bottom Right - Mac */}
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mack.png`}
//                   alt="mac side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '41%',
//                     right: '-43%',
//                     width: '40%',
//                     transform: 'translateY(100%)',
//                     zIndex: 5
//                   }}
//                 />
//
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mobile.png`}
//                   alt="mobile side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '25%',
//                     right: '-45%',
//                     width: '23%',
//                     transform: 'translateY(90%)',
//                     // transform: 'translateY(10%)',
//                     zIndex: 5
//                   }}
//                 />
//
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/card.png`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '47%',
//                     left: '-48%',
//                     width: '45%',
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/cardBaloons.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '51%',
//                     left: '-53%',
//                     width: '45%',
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//
//               </>
//             )
//           }
//
//
//           {
//             is4KUp && (
//               <>
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/laptop4.png`}
//                   alt="laptop"
//                   sx={{
//                     // width: {md:'100%', xs: '70%', ipadPro: '70%' },
//                     // width: '100%',
//                     // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
//                     // display: 'block',
//                     position: 'absolute',
//                     // height:'100%',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     zIndex: 9
//                   }}
//                 />
//                 <Box
//                   component="iframe"
//                   src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                   sx={{
//                     position: 'absolute',
//                     borderRadius: '10px',
//                     left: '49.5%',
//                     top: '49%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '148%',
//                     // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
//                     height: '1100px', // ✅ custom heights
//                     zIndex: 10,
//                     border: 'none'
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/butterfly.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     right: '-130%',
//                     top: '20%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '110%',
//                     zIndex: 1300,
//                     pointerEvents: 'none'
//                     // zIndex: 11,
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/hearts.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     left: '-10%',
//                     top: '20%',
//                     transform: 'translate(-50%, -50%)',
//                     // width: { xl: '70%', lg: '71%', xs: '55%'
//                     width: '80%',
//                     zIndex: 1300
//                   }}
//                 />
//                 {/* Bottom Right - Mac */}
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mack.png`}
//                   alt="mac side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '45%',
//                     right: '-76%',
//                     width: '60%',
//                     transform: 'translateY(100%)',
//                     zIndex: 5
//                   }}
//                 />
//
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/mobile.png`}
//                   alt="mobile side"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '17%',
//                     right: '-80%',
//                     width: '40%',
//                     // transform: 'translateY(90%)',
//                     transform: 'translateY(10%)',
//                     zIndex: 5
//                   }}
//                 />
//
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/card.png`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '49%',
//                     left: '-82%',
//                     width: '65%',
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//                 <Box
//                   component="img"
//                   src={`${WEB_URL}/cardBaloons.gif`}
//                   alt="card"
//                   sx={{
//                     position: 'absolute',
//                     bottom: '54%',
//                     left: '-87%',
//                     width: '65%',
//                     transform: 'translateY(86%)',
//                     zIndex: 4
//                   }}
//                 />
//
//               </>
//             )
//           }
//
//         </Container>
//       </Box>
//
//     </>
//   )
//     ;
// };
// export default Page;
//

import Head from 'next/head';
import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid, Box, useTheme, useMediaQuery
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import * as React from 'react';
import NextLink from 'next/link';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import jwt from 'jsonwebtoken';

import { sign } from 'jsonwebtoken';
import Footer from '../components/footer';
import { useAuth } from '../hooks/use-auth';
import { useZindexModal } from '../contexts/zindex-control';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = () => {
  const theme = useTheme();
  const { gifZIndex } = useZindexModal();
  // const [info, setInfo] = useState({
  //   innerWidth: 0,
  //   innerHeight: 0,
  //   screenWidth: 0,
  //   screenHeight: 0,
  //   devicePixelRatio: 0,
  // });

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('mobile'));
  const islargeLaptop = useMediaQuery((theme) => theme.breakpoints.only('largeLaptop'));
  // const isIpadScreen = useMediaQuery((theme) => theme.breakpoints.between('ipad', 'ipadPro'));
  // const isIpadScreen = useMediaQuery((theme) => theme.breakpoints.only('ipad'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('large'));
  const isSmallLap = useMediaQuery((theme) => theme.breakpoints.only('smallLaptop'));
  const isHDLap = useMediaQuery((theme) => theme.breakpoints.only('HD'));
  const isLaptopScreen = useMediaQuery((theme) => theme.breakpoints.up('laptop'));
  const isLaptopScreenUp = useMediaQuery((theme) => theme.breakpoints.up('large'));

  const allLaptop = useMediaQuery((theme) => theme.breakpoints.between('smallLaptop', 'large'));

  const isXXlUp = useMediaQuery((theme) => theme.breakpoints.up('xxl'));
  const is4KUp = useMediaQuery((theme) => theme.breakpoints.up('4k'));
  // const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xxl'));
  // const isIpadPro = useMediaQuery(theme.breakpoints.only('ipadPro'));  // const largeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const extraLargeScreen = useMediaQuery(theme.breakpoints.up('xxl'));

  // const extraLargeQuery = useMediaQuery(theme.breakpoints.between('xxl', 2048));
  // const ultraLargeQuery = useMediaQuery(theme.breakpoints.up(2049));
  const laptop = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const largeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  const isIpadScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isIpadPro = useMediaQuery(theme.breakpoints.up('md'));

  const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

  // console.log(' width:', window.screen.width);
  // console.log(' height:', window.screen.height);
  // console.log('Screen width:', window.screen.width * window.devicePixelRatio);
  // console.log('Screen height:', window.screen.height * window.devicePixelRatio);
  // console.log('Inner width:', window.innerWidth);
  // console.log('Inner height:', window.innerHeight);

  // console.log("allLaptop", allLaptop);
  // console.log("isLaptopScreenUp", isLaptopScreenUp);

  // useEffect(() => {
  //   const updateInfo = () => {

  //     setInfo({
  //       innerWidth: window.innerWidth,
  //       innerHeight: window.innerHeight,
  //       screenWidth: window.screen.width,
  //       screenHeight: window.screen.height,
  //       devicePixelRatio: window.devicePixelRatio,
  //     });
  //   };
  //
  //   updateInfo(); // initial load
  //   window.addEventListener('resize', updateInfo); // update on resize
  //
  //   return () => window.removeEventListener('resize', updateInfo);
  // }, []);

  console.log('innerWidth', window.innerWidth);
  console.log('innerHeight', window.innerHeight);
  console.log('screenWidth', window.screen.width);
  console.log('screenHeight', window.screen.height);
  console.log('devicePixelRatio', window.devicePixelRatio);
  console.log('isHDLap', isHDLap);

  return (
    <>
      <Head>
        <title>Homepage | {APP_NAME}</title>
      </Head>
      {/*<div style={{ padding: '20px', fontFamily: 'monospace' }}>*/}
      {/*  <h3>📱 Screen Info</h3>*/}
      {/*  <pre>*/}
      {/*  {JSON.stringify(info, null, 2)}*/}
      {/*</pre>*/}
      {/*</div>*/}
      <Box
        sx={{
          // overflowX: 'hidden',
          // overflowY: 'hidden',
          position: 'relative',
          // bgcolor:'black',
          width: '100%',
          // height:'100%',
          // bgcolor:'red',
          height: {
            md: '50vh',
            xs: '40vh',
            test: '35vh',
            lg: '100vh',
            xl: '100vh',
            ipad: '50vh',
            // ipadPro:'50vh',
            smallLaptop: '700px'
            // laptop: '750px'
          },
          // minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          // overflow: 'hidden',
          // px: 2,
        }}
      >

        <Container
          // data-aos="zoom-in"
          // data-aos-duration="600"
          // data-aos-easing="ease-in"
          sx={{ position: 'relative', width: '100%', height: '100%' }}>

          {/*<Box*/}
          {/*  component="img"*/}
          {/*  src={`${WEB_URL}/laptop2.png`}*/}
          {/*  alt="laptop"*/}
          {/*  sx={{*/}
          {/*    width: {md:'100%', xs: '70%', ipadPro: '70%' },*/}

          {/*    // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},*/}
          {/*    // display: 'block',*/}
          {/*    position: 'absolute',*/}
          {/*    // height:'100%',*/}
          {/*    top: '50%',*/}
          {/*    left: '50%',*/}
          {/*    transform: 'translate(-50%, -50%)',*/}
          {/*    zIndex: 9*/}
          {/*  }}*/}
          {/*/>*/}


          {/*<Box*/}
          {/*  sx={{*/}
          {/*    position: 'relative',*/}
          {/*    width: { xl: '80%', lg: '70%', xs: '56%', ipad: '48%', ipadPro: '65%' },*/}
          {/*    // mx: 'auto',*/}
          {/*    top: '50%',*/}
          {/*    left: '50%',*/}
          {/*    transform: 'translate(-50%, -50%)'*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Box*/}
          {/*    component="iframe"*/}
          {/*    src="https://www.youtube.com/embed/w0HuAGCryIw?autoplay=1&mute=1&loop=1&playlist=w0HuAGCryIw"*/}
          {/*    title="YouTube video player"*/}
          {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
          {/*    allowFullScreen*/}
          {/*    sx={{*/}
          {/*      position: 'absolute',*/}
          {/*      top: '50%',*/}
          {/*      left: '50%',*/}
          {/*      transform: 'translate(-50%, -50%)',*/}
          {/*      width: '100%',*/}
          {/*      height: '100%',*/}
          {/*      border: 'none',*/}
          {/*      zIndex: 10,*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</Box>*/}

          {/*<iframe width="70%" height="450"*/}
          {/*        src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"*/}
          {/*        title="YouTube video player" frameBorder="0"*/}
          {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
          {/*        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>*/}


          {/*{*/}
          {/*  isMobile && !isXXlUp && (*/}
          {/*    <>*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/laptop2.png`}*/}
          {/*        alt="laptop"*/}
          {/*        sx={{*/}
          {/*          width: {*/}
          {/*            // md: '100%',*/}
          {/*            xs: '70%',*/}
          {/*            // ipadPro: '70%', large: '100%'*/}
          {/*          },*/}

          {/*          // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},*/}
          {/*          // display: 'block',*/}
          {/*          position: 'absolute',*/}
          {/*          // height:'100%',*/}
          {/*          top: '50%',*/}
          {/*          left: '50%',*/}
          {/*          transform: 'translate(-50%, -50%)',*/}
          {/*          zIndex: 9*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/butterfly.gif`}*/}
          {/*        alt="card"*/}
          {/*        sx={{*/}
          {/*          // bgcolor:'red',*/}
          {/*          position: 'absolute',*/}
          {/*          right: {*/}
          {/*            // md: '-22%', lg: '-25%'*/}
          {/*            xs: '-20%'*/}
          {/*            // large: '-30%'*/}
          {/*          },*/}
          {/*          top: {*/}
          {/*            // md: '25%', lg: '20%',*/}
          {/*            xs: '25%'*/}
          {/*            // , large: '20%',*/}
          {/*            },*/}
          {/*          transform: 'translate(-50%, -50%)',*/}
          {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
          {/*          width: {*/}
          {/*            // md: '45%',*/}
          {/*            xs: '45%'*/}
          {/*          },*/}
          {/*          // width: { md: '45%', xs: '30%' },*/}
          {/*          zIndex: 1300,*/}
          {/*          pointerEvents: 'none'*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/hearts.gif`}*/}
          {/*        alt="card"*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          // bgcolor:'red',*/}
          {/*          left: {*/}
          {/*            // md: '22%', large: '15%',*/}
          {/*            xs: '23%' },*/}
          {/*          top: {*/}
          {/*            // md: '25%',*/}
          {/*            xs: '28%'*/}
          {/*            // , large: '20%'*/}
          {/*          },*/}
          {/*          transform: 'translate(-50%, -50%)',*/}
          {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
          {/*          // width: { md: '28%', xs: '30%' },*/}
          {/*          width: {*/}
          {/*            // md: '33%', lg: '35%',*/}
          {/*            xs: '40%' },*/}
          {/*          // width: { md: '33%',lg:'35%',  xs: '40%' },*/}
          {/*          zIndex: 1300,*/}
          {/*          pointerEvents: 'none'*/}
          {/*          // zIndex: 11,*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="iframe"*/}
          {/*        src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"*/}
          {/*        allow="autoplay; encrypted-media"*/}
          {/*        allowFullScreen*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          borderRadius: '10px',*/}
          {/*          left: {*/}
          {/*            // md: '50.1%', large: '50.2%',*/}
          {/*            xs: '50%' },*/}
          {/*          top: {*/}
          {/*            // md: '49%',*/}
          {/*            // large: '48.5%',*/}
          {/*            xs: '50%'*/}
          {/*          },*/}
          {/*          transform: 'translate(-50%, -50%)',*/}
          {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
          {/*          width: {*/}
          {/*            // lg: '56%',*/}
          {/*            xs: '55%'*/}
          {/*            // ,large: '80%'*/}
          {/*          },*/}
          {/*          // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'*/}
          {/*          height: {*/}
          {/*            xs: '130px'*/}
          {/*            // , sm: '400px', lg: '440px', large: '610px'*/}
          {/*          }, // ✅ custom heights*/}
          {/*          zIndex: 10,*/}

          {/*          border: 'none'*/}
          {/*        }}*/}
          {/*      />*/}

          {/*       /!* Bottom Right - Mac *!/*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/mack.png`}*/}
          {/*        alt="mac side"*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          bottom: {*/}
          {/*            // md: '38%', lg: '42%',*/}
          {/*            xs: '44%'*/}
          {/*            // , laptop: '48%', large: '45%'*/}
          {/*          },*/}
          {/*          right: {*/}
          {/*            // md: '-10%', lg: '-10%', large: '-21%',*/}
          {/*            xs: '4%'*/}
          {/*            // , laptop: '-1.5%'*/}

          {/*          },*/}
          {/*          width: {*/}
          {/*            // md: '27%',*/}
          {/*            xs: '20%'*/}
          {/*            // , large: '35%'*/}
          {/*          },*/}
          {/*          transform: 'translateY(100%)',*/}
          {/*          zIndex: 5*/}
          {/*        }}*/}
          {/*      />*/}

          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/mobile.png`}*/}
          {/*        alt="mobile side"*/}
          {/*        sx={{*/}
          {/*          display: isLargeScreen ? 'none' : 'block',*/}
          {/*          position: 'absolute',*/}
          {/*          bottom: {*/}
          {/*            xs: '25%'*/}
          {/*            // ,md: '2%',*/}
          {/*            // lg: '14%', //1200*/}
          {/*            // laptop: '13%', //1280*/}
          {/*            // large: '16%'   //1540*/}
          {/*          },*/}
          {/*          right: {*/}
          {/*            xs: '3%'*/}

          {/*            // ,md: '-10%',*/}
          {/*            // lg: '-10%',*/}
          {/*            // laptop: '-2%', // 👈 for normal laptops*/}
          {/*            // large: '-11%'*/}
          {/*          },*/}
          {/*          width: {*/}
          {/*            xs: '13%'*/}
          {/*            // ,*/}
          {/*            // md: '15%',*/}
          {/*            // lg: '15%',*/}
          {/*            //*/}
          {/*            // laptop: '16%' // 👈 a bit bigger for laptops*/}
          {/*          },*/}
          {/*          transform: 'translateY(10%)',*/}
          {/*          zIndex: 5*/}
          {/*        }}*/}
          {/*      />*/}

          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/card.png`}*/}
          {/*        alt="card"*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          bottom: {*/}
          {/*            // md: '40%', xl: '50%',*/}
          {/*            xs: '47%'*/}
          {/*            // , ipadPro: '50%', large: '44%'*/}
          {/*          },*/}
          {/*          left: {*/}
          {/*            // md: '-9%', xl: '-18%',*/}
          {/*            xs: '1%'*/}
          {/*            // , ipadPro: '0.1%', large: '-17%'*/}
          {/*          },*/}
          {/*          width: {*/}
          {/*            // md: '25%',*/}
          {/*            xs: '24%'*/}
          {/*            // , large: '30%'*/}
          {/*            //*/}
          {/*            // , ipadPro: '25%'*/}
          {/*          },*/}
          {/*          transform: 'translateY(86%)',*/}
          {/*          zIndex: 4*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/cardBaloons.gif`}*/}
          {/*        alt="card"*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          bottom: { xs: '49%'*/}
          {/*            // , md: '52%', large: '45%'*/}
          {/*          },*/}
          {/*          left: {*/}
          {/*            // md: '-1%',*/}
          {/*            xs: '1%'*/}
          {/*            // , large: '-17%'*/}
          {/*          },*/}
          {/*          width: { xs: '23%'*/}
          {/*            // , md: '22%', large: '25%'*/}
          {/*          },*/}
          {/*          transform: 'translateY(86%)',*/}
          {/*          zIndex: 4*/}
          {/*        }}*/}
          {/*      />*/}


          {/*    </>*/}
          {/*  )*/}
          {/*}*/}


          {/*{*/}
          {/*  allLaptop && !isXXlUp && (*/}
          {/*    <>*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/laptop2.png`}*/}
          {/*        alt="laptop"*/}
          {/*        sx={{*/}
          {/*          width: { md: '100%', xs: '70%', ipadPro: '70%', large: '100%' },*/}
          {/*          position: 'absolute',*/}
          {/*          // height:'100%',*/}
          {/*          top: '50%',*/}
          {/*          left: '50%',*/}
          {/*          transform: 'translate(-50%, -50%)',*/}
          {/*          zIndex: 9*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/butterfly.gif`}*/}
          {/*        alt="card"*/}
          {/*        sx={{*/}
          {/*          // bgcolor:'red',*/}
          {/*          position: 'absolute',*/}
          {/*          right: { md: '-22%', lg: '-25%', xs: '-20%', large: '-30%' },*/}
          {/*          top: { md: '25%', lg: '20%', xs: '25%', large: '20%' },*/}
          {/*          transform: 'translate(-50%, -50%)',*/}
          {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
          {/*          width: { md: '45%', xs: '45%' },*/}
          {/*          // width: { md: '45%', xs: '30%' },*/}
          {/*          zIndex: 1300,*/}
          {/*          pointerEvents: 'none'*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/hearts.gif`}*/}
          {/*        alt="card"*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          // bgcolor:'red',*/}
          {/*          left: { md: '22%', large: '15%', xs: '23%' },*/}
          {/*          top: { md: '25%', xs: '28%', large: '20%' },*/}
          {/*          transform: 'translate(-50%, -50%)',*/}
          {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
          {/*          // width: { md: '28%', xs: '30%' },*/}
          {/*          width: { md: '33%', lg: '35%', xs: '40%' },*/}
          {/*          // width: { md: '33%',lg:'35%',  xs: '40%' },*/}
          {/*          zIndex: 1300,*/}
          {/*          pointerEvents: 'none'*/}
          {/*          // zIndex: 11,*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="iframe"*/}
          {/*        src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"*/}
          {/*        allow="autoplay; encrypted-media"*/}
          {/*        allowFullScreen*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          borderRadius: '10px',*/}
          {/*          left: { md: '50.1%', large: '50.2%', xs: '50%' },*/}
          {/*          top: {*/}
          {/*            md: '49%',*/}
          {/*            large: '48.5%',*/}
          {/*            // xl: '49.5%',*/}
          {/*            xs: '50%'*/}
          {/*          },*/}
          {/*          transform: 'translate(-50%, -50%)',*/}
          {/*          // width: { xl: '70%', lg: '71%', xs: '55%'*/}
          {/*          width: {*/}
          {/*            // xl: '70%',*/}
          {/*            lg: '56%', xs: '55%', large: '80%'*/}
          {/*            // , ipad: '55%', ipadPro: '55%'*/}
          {/*          },*/}
          {/*          // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'*/}
          {/*          height: {*/}
          {/*            xs: '130px', sm: '400px', lg: '440px', large: '610px'*/}
          {/*            // lg: '440px'*/}
          {/*            // , xl: '570px'*/}
          {/*            // , ipad:'270px', ipadPro:'360px'*/}
          {/*          }, // ✅ custom heights*/}
          {/*          zIndex: 10,*/}

          {/*          border: 'none'*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/mack.png`}*/}
          {/*        alt="mac side"*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          bottom: {*/}
          {/*            md: '38%', lg: '42%'*/}
          {/*            // , xl: '49%'*/}
          {/*            , xs: '44%', laptop: '48%', large: '45%'*/}
          {/*            // , ipadPro:'47%'*/}
          {/*          },*/}
          {/*          right: {*/}
          {/*            md: '-10%', lg: '-10%', large: '-21%',*/}
          {/*            // , xl: '-16%',*/}
          {/*            xs: '4%', laptop: '-1.5%'*/}
          {/*            // , ipadPro:'4.5%'*/}

          {/*          },*/}
          {/*          width: {*/}
          {/*            md: '27%',*/}
          {/*            // , xl: '35%',*/}
          {/*            xs: '20%',*/}
          {/*            large: '35%'*/}
          {/*            // , ipadPro:'20%'*/}
          {/*            // , ipad:'23%', ipadPro:'25%', surfacePro:'22%'*/}
          {/*          },*/}
          {/*          transform: 'translateY(100%)',*/}
          {/*          zIndex: 5*/}
          {/*        }}*/}
          {/*      />*/}

          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/mobile.png`}*/}
          {/*        alt="mobile side"*/}
          {/*        sx={{*/}
          {/*          display: isLargeScreen ? 'none' : 'block',*/}
          {/*          position: 'absolute',*/}
          {/*          bottom: {*/}
          {/*            xs: '25%',*/}
          {/*            md: '2%',*/}
          {/*            lg: '14%', //1200*/}
          {/*            // ipadPro:'34%',*/}
          {/*            // ipad:'33%',*/}
          {/*            // isIpadScreen:'100%',*/}
          {/*            laptop: '13%', //1280*/}
          {/*            large: '16%'   //1540*/}
          {/*            // xl: '33%'*/}
          {/*          },*/}
          {/*          right: {*/}
          {/*            xs: '3%',*/}
          {/*            md: '-10%',*/}
          {/*            lg: '-10%',*/}
          {/*            // ipad:'3%',*/}
          {/*            // ipadPro:'3%',*/}
          {/*            laptop: '-2%', // 👈 for normal laptops*/}
          {/*            large: '-11%'*/}
          {/*            // xl: '-18%'*/}
          {/*          },*/}
          {/*          width: {*/}
          {/*            xs: '13%',*/}
          {/*            md: '15%',*/}
          {/*            lg: '15%',*/}
          {/*            // ipadPro:'15%',*/}
          {/*            laptop: '16%' // 👈 a bit bigger for laptops*/}
          {/*            // xl: '25%'*/}
          {/*          },*/}
          {/*          transform: 'translateY(10%)',*/}
          {/*          zIndex: 5*/}
          {/*        }}*/}
          {/*      />*/}

          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/card.png`}*/}
          {/*        alt="card"*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          bottom: { md: '40%', xl: '50%', xs: '47%', ipadPro: '50%', large: '44%' },*/}
          {/*          left: {*/}
          {/*            md: '-9%', xl: '-18%', xs: '1%', ipadPro: '0.1%', large: '-17%'*/}
          {/*            // , ipad:'5%', ipadPro:'1%' , surfacePro:'6%'*/}
          {/*          },*/}
          {/*          width: {*/}
          {/*            md: '25%', xs: '24%', large: '30%'*/}
          {/*            // , xl: '37%'*/}
          {/*            , ipadPro: '25%'*/}
          {/*            // , ipad:'24%', ipadPro:'26%' , surfacePro:'23%'*/}
          {/*          },*/}
          {/*          transform: 'translateY(86%)',*/}
          {/*          zIndex: 4*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <Box*/}
          {/*        component="img"*/}
          {/*        src={`${WEB_URL}/cardBaloons.gif`}*/}
          {/*        alt="card"*/}
          {/*        sx={{*/}
          {/*          position: 'absolute',*/}
          {/*          bottom: { xs: '49%', md: '52%', large: '45%' },*/}
          {/*          left: { md: '-1%', xs: '1%', large: '-17%' },*/}
          {/*          // width: '18%',*/}
          {/*          width: { xs: '23%', md: '22%', large: '25%' },*/}
          {/*          transform: 'translateY(86%)',*/}
          {/*          zIndex: 4*/}
          {/*        }}*/}
          {/*      />*/}


          {/*    </>*/}
          {/*  )*/}
          {/*}*/}


          {
            (isMobile || isLaptopScreen || isLaptopScreenUp) && !isXXlUp && !isHDLap && (
              <>
                <Box
                  component="img"
                  src={`${WEB_URL}/laptop2.png`}
                  alt="laptop"
                  sx={{
                    width: {
                      md: '100%', xs: '70%', ipadPro: '70%', large: '100%'
                      // ,HD:'90%'
                    },

                    // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
                    // display: 'block',
                    position: 'absolute',
                    // height:'100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/butterfly.gif`}
                  alt="card"
                  sx={{
                    // bgcolor:'red',
                    position: 'absolute',
                    right: { md: '-22%', lg: '-25%', xs: '-20%', large: '-30%' },
                    top: { md: '25%', lg: '20%', xs: '25%', large: '20%' },
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: { md: '45%', xs: '45%' },
                    // width: { md: '45%', xs: '30%' },
                    zIndex: 1200,
                    pointerEvents: 'none'
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/hearts.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    // bgcolor:'red',
                    left: { md: '22%', large: '15%', xs: '23%' },
                    top: { md: '25%', xs: '28%', large: '20%' },
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    // width: { md: '28%', xs: '30%' },
                    width: { md: '33%', lg: '35%', xs: '40%' },
                    // width: { md: '33%',lg:'35%',  xs: '40%' },
                    // zIndex: 1300,
                    pointerEvents: 'none',
                    zIndex: gifZIndex
                  }}
                />
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  sx={{
                    position: 'absolute',
                    borderRadius: '10px',
                    left: { md: '50.1%', large: '50.2%', xs: '50%' },
                    top: {
                      md: '49%',
                      large: '48.5%',
                      // xl: '49.5%',
                      xs: '50%'
                    },
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: {
                      // xl: '70%',
                      lg: '56%', xs: '55%', large: '80%'
                      // ,HD:'72%'
                      // , ipad: '55%', ipadPro: '55%'
                    },
                    // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
                    height: {
                      xs: '130px', sm: '400px', lg: '440px', large: '610px'
                      // , HD:'550px'
                      // lg: '440px'
                      // , xl: '570px'
                      // , ipad:'270px', ipadPro:'360px'
                    }, // ✅ custom heights
                    zIndex: 10,

                    border: 'none'
                  }}
                />

                <Box
                  component="img"
                  src={`${WEB_URL}/mack.png`}
                  alt="mac side"
                  sx={{
                    position: 'absolute',
                    bottom: {
                      md: '38%', lg: '42%',
                      // , xl: '49%'
                      // HD:'43%'
                      xs: '44%', laptop: '48%', large: '45%'
                      // , ipadPro:'47%'
                    },
                    right: {
                      md: '-10%', lg: '-10%', large: '-21%',
                      // , xl: '-16%',
                      // HD:'-8%',
                      xs: '4%', laptop: '-1.5%'
                      // , ipadPro:'4.5%'

                    },
                    width: {
                      md: '27%',
                      // HD:'25%',
                      // , xl: '35%',
                      xs: '20%',
                      large: '35%'
                      // , ipadPro:'20%'
                      // , ipad:'23%', ipadPro:'25%', surfacePro:'22%'
                    },
                    transform: 'translateY(100%)',
                    zIndex: 5
                  }}
                />

                <Box
                  component="img"
                  src={`${WEB_URL}/mobile.png`}
                  alt="mobile side"
                  sx={{
                    display: isLargeScreen ? 'none' : 'block',
                    position: 'absolute',
                    bottom: {
                      xs: '25%',
                      md: '2%',
                      lg: '14%', //1200
                      // ipadPro:'34%',
                      // ipad:'33%',
                      // isIpadScreen:'100%',
                      laptop: '13%', //1280
                      large: '16%'   //1540
                      // xl: '33%'
                    },
                    right: {
                      xs: '3%',
                      md: '-10%',
                      lg: '-10%',
                      // ipad:'3%',
                      // ipadPro:'3%',
                      laptop: '-2%', // 👈 for normal laptops
                      large: '-11%'
                      // xl: '-18%'
                    },
                    width: {
                      xs: '13%',
                      md: '15%',
                      lg: '15%',

                      // ipadPro:'15%',
                      laptop: '16%' // 👈 a bit bigger for laptops
                      // xl: '25%'
                    },
                    transform: 'translateY(10%)',
                    zIndex: 5
                  }}
                />

                <Box
                  component="img"
                  src={`${WEB_URL}/card.png`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: { md: '40%', xl: '50%', xs: '47%', ipadPro: '50%', large: '44%' },
                    // bottom: { md: '40%', xl: '50%', xs: '47%', ipadPro: '50%', large: '44%', HD:'42%' },
                    // left: { md: '-9%', xl: '-18%', xs: '1%', ipadPro: '0.1%', large: '-17%', HD:'-9%' },
                    left: { md: '-9%', xl: '-18%', xs: '1%', ipadPro: '0.1%', large: '-17%' },
                    // width: { md: '25%', xs: '24%', large: '30%', ipadPro: '25%', HD:'25%' },
                    width: { md: '25%', xs: '24%', large: '30%', ipadPro: '25%' },
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/cardBaloons.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    // bottom: { xs: '49%', md: '52%', large: '45%' , HD:'43%'},
                    bottom: { xs: '49%', md: '52%', large: '45%' },
                    // left: { md: '-1%', xs: '1%', large: '-17%', HD:'-9%' },
                    left: { md: '-1%', xs: '1%', large: '-17%' },
                    // width: '18%',
                    // width: { xs: '23%', md: '22%', large: '25%' , HD:'22%'},
                    width: { xs: '23%', md: '22%', large: '25%' },
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />


              </>
            )
          }


          {
            isLaptopScreenUp && !isXXlUp && !isHDLap && (

              <Box
                component="img"
                src={`${WEB_URL}/mobile.png`}
                alt="mobile side"
                sx={{
                  position: 'absolute',
                  // bottom: islargeLaptop? '23%': '20%' ,
                  bottom: '10%',
                  right: '-21%',
                  width: '20%',
                  // bottom: isHDLap? '17%':'10%',
                  // right: isHDLap ? '-10%' :'-21%',
                  // width: isHDLap?'15%': '20%' ,
                  transform: 'translateY(10%)',
                  zIndex: 5
                }}
              />
            )
          }


          {/*1600*900*/}
          {isHDLap && (
            <>
              <Box
                component="img"
                src={`${WEB_URL}/laptop2.png`}
                alt="laptop"
                sx={{
                  width: {
                    md: '100%', xs: '70%', ipadPro: '70%', large: '100%'
                    , HD: '90%'
                  },

                  // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
                  // display: 'block',
                  position: 'absolute',
                  // height:'100%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 9
                }}
              />
              <Box
                component="img"
                src={`${WEB_URL}/butterfly.gif`}
                alt="card"
                sx={{
                  // bgcolor:'red',
                  position: 'absolute',
                  right: { md: '-22%', lg: '-25%', xs: '-20%', large: '-30%' },
                  top: { md: '25%', lg: '20%', xs: '25%', large: '20%' },
                  transform: 'translate(-50%, -50%)',
                  // width: { xl: '70%', lg: '71%', xs: '55%'
                  width: { md: '45%', xs: '45%' },
                  // width: { md: '45%', xs: '30%' },
                  zIndex: 1300,
                  pointerEvents: 'none'
                }}
              />
              <Box
                component="img"
                src={`${WEB_URL}/hearts.gif`}
                alt="card"
                sx={{
                  position: 'absolute',
                  // bgcolor:'red',
                  left: { md: '22%', large: '15%', xs: '23%' },
                  top: { md: '25%', xs: '28%', large: '20%' },
                  transform: 'translate(-50%, -50%)',
                  // width: { xl: '70%', lg: '71%', xs: '55%'
                  // width: { md: '28%', xs: '30%' },
                  width: { md: '33%', lg: '35%', xs: '40%' },
                  // width: { md: '33%',lg:'35%',  xs: '40%' },
                  zIndex: 1300,
                  pointerEvents: 'none'
                  // zIndex: 11,
                }}
              />
              <Box
                component="iframe"
                src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
                allow="autoplay; encrypted-media"
                allowFullScreen
                sx={{
                  position: 'absolute',
                  borderRadius: '10px',
                  left: { md: '50.1%', large: '50.2%', xs: '50%' },
                  top: {
                    md: '49%',
                    large: '48.5%',
                    // xl: '49.5%',
                    xs: '50%'
                  },
                  transform: 'translate(-50%, -50%)',
                  // width: { xl: '70%', lg: '71%', xs: '55%'
                  width: {
                    // xl: '70%',
                    lg: '56%', xs: '55%', large: '80%'
                    , HD: '72%'
                    // , ipad: '55%', ipadPro: '55%'
                  },
                  // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
                  height: {
                    xs: '130px', sm: '400px', lg: '440px', large: '610px'
                    , HD: '550px'
                    // lg: '440px'
                    // , xl: '570px'
                    // , ipad:'270px', ipadPro:'360px'
                  }, // ✅ custom heights
                  zIndex: 10,

                  border: 'none'
                }}
              />

              <Box
                component="img"
                src={`${WEB_URL}/mack.png`}
                alt="mac side"
                sx={{
                  position: 'absolute',
                  bottom: {
                    md: '38%', lg: '42%',
                    // , xl: '49%'
                    HD: '43%',
                    xs: '44%', laptop: '48%', large: '45%'
                    // , ipadPro:'47%'
                  },
                  right: {
                    md: '-10%', lg: '-10%', large: '-21%',
                    // , xl: '-16%',
                    HD: '-8%',
                    xs: '4%', laptop: '-1.5%'
                    // , ipadPro:'4.5%'

                  },
                  width: {
                    md: '27%',
                    HD: '25%',
                    // , xl: '35%',
                    xs: '20%',
                    large: '35%'
                    // , ipadPro:'20%'
                    // , ipad:'23%', ipadPro:'25%', surfacePro:'22%'
                  },
                  transform: 'translateY(100%)',
                  zIndex: 5
                }}
              />

              <Box
                component="img"
                src={`${WEB_URL}/card.png`}
                alt="card"
                sx={{
                  position: 'absolute',
                  // bottom: { md: '40%', xl: '50%', xs: '47%', ipadPro: '50%', large: '44%' },
                  bottom: {
                    md: '40%',
                    xl: '50%',
                    xs: '47%',
                    ipadPro: '50%',
                    large: '44%',
                    HD: '42%'
                  },
                  left: {
                    md: '-9%',
                    xl: '-18%',
                    xs: '1%',
                    ipadPro: '0.1%',
                    large: '-17%',
                    HD: '-9%'
                  },
                  // left: { md: '-9%', xl: '-18%', xs: '1%', ipadPro: '0.1%', large: '-17%' },
                  width: { md: '25%', xs: '24%', large: '30%', ipadPro: '25%', HD: '25%' },
                  // width: { md: '25%', xs: '24%', large: '30%', ipadPro: '25%' },
                  transform: 'translateY(86%)',
                  zIndex: 4
                }}
              />
              <Box
                component="img"
                src={`${WEB_URL}/cardBaloons.gif`}
                alt="card"
                sx={{
                  position: 'absolute',
                  bottom: { xs: '49%', md: '52%', large: '45%', HD: '43%' },
                  // bottom: { xs: '49%', md: '52%', large: '45%' },
                  left: { md: '-1%', xs: '1%', large: '-17%', HD: '-9%' },
                  // left: { md: '-1%', xs: '1%', large: '-17%' },
                  // width: '18%',
                  width: { xs: '23%', md: '22%', large: '25%', HD: '22%' },
                  // width: { xs: '23%', md: '22%', large: '25%' },
                  transform: 'translateY(86%)',
                  zIndex: 4
                }}
              />


            </>
          )
          }

          {
            isHDLap && (

              <Box
                component="img"
                src={`${WEB_URL}/mobile.png`}
                alt="mobile side"
                sx={{
                  position: 'absolute',
                  bottom: '17%',
                  right: '-10%',
                  width: '15%',
                  transform: 'translateY(10%)',
                  zIndex: 5
                }}
              />
            )
          }


          {
            isIpadScreen && !isSmallLap && (<>

                <Box
                  component="img"
                  src={`${WEB_URL}/laptop2.png`}
                  alt="laptop"
                  sx={{
                    width: { md: '100%', xs: '70%', ipadPro: '70%' },

                    // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
                    // display: 'block',
                    position: 'absolute',
                    // height:'100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9
                  }}
                />
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  sx={{
                    position: 'absolute',
                    borderRadius: '10px',
                    left: '50%',
                    top: '49%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: {
                      ipad: '55%'
                    },
                    // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
                    height: {
                      ipad: '270px'
                    },
                    zIndex: 10,
                    border: 'none'
                  }}
                />

                <Box
                  component="img"
                  src={`${WEB_URL}/butterfly.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    right: '-20%',
                    top: '20%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '40%',
                    zIndex: 1300,

                    pointerEvents: 'none'
                    // zIndex: 11,
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/hearts.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    left: '22%',
                    top: '25%',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '35%',
                    zIndex: gifZIndex,
                    // zIndex: 1300
                    // zIndex: 11,
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/mack.png`}
                  alt="mac side"
                  sx={{
                    position: 'absolute',
                    bottom: '44%',
                    right: '4%',
                    width: '20%',
                    transform: 'translateY(100%)',
                    zIndex: 5
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/mobile.png`}
                  alt="mobile side"
                  sx={{
                    position: 'absolute',
                    bottom: '19%',
                    right: '3%',
                    width: '13%',
                    transform: 'translateY(10%)',
                    zIndex: 5
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/card.png`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: '46%',
                    left: '2%',
                    width: '23%',
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/cardBaloons.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: '49%',
                    left: '2%',
                    width: '20%',
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />

              </>
            )
          }
          {
            isIpadPro && !isLaptopScreen && (<>
                <Box
                  component="img"
                  src={`${WEB_URL}/laptop2.png`}
                  alt="laptop"
                  sx={{
                    width: '70%',

                    // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
                    // display: 'block',
                    position: 'absolute',
                    // height:'100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9
                  }}
                />
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  sx={{
                    position: 'absolute',
                    borderRadius: '10px',
                    left: '50%',
                    top: '49%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '55%',
                    // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
                    height: '300px',
                    zIndex: 10,
                    border: 'none'
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/butterfly.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    right: '-22%',
                    top: '30%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '45%',
                    zIndex: 1300,
                    pointerEvents: 'none'
                    // zIndex: 11,
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/hearts.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    left: '25%',
                    top: '30%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '35%',
                    zIndex:gifZIndex,
                    // zIndex: 1300,
                    pointerEvents: 'none'
                    // zIndex: 11,
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/mack.png`}
                  alt="mac side"
                  sx={{
                    position: 'absolute',
                    bottom: '44%',
                    right: '4%',
                    width: '20%',
                    transform: 'translateY(100%)',
                    zIndex: 5
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/mobile.png`}
                  alt="mobile side"
                  sx={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '3%',
                    width: '14%',
                    transform: 'translateY(10%)',
                    zIndex: 5
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/card.png`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: '45%',
                    left: '2%',
                    width: '23%',
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/cardBaloons.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: '47%',
                    left: '1%',
                    width: '20%',
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />

              </>
            )
          }


          {
            isXXlUp && !is4KUp && (
              <>
                <Box
                  component="img"
                  src={`${WEB_URL}/laptop3.png`}
                  alt="laptop"
                  sx={{
                    // width: {md:'100%', xs: '70%', ipadPro: '70%' },
                    // width: '100%',
                    // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
                    // display: 'block',
                    position: 'absolute',
                    // height:'100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9
                  }}
                />
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  sx={{
                    position: 'absolute',
                    borderRadius: '10px',
                    left: '50%',
                    top: '49%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '115%',
                    // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
                    height: '900px', // ✅ custom heights
                    zIndex: 10,
                    border: 'none'
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/butterfly.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    right: '-85%',
                    top: '20%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '80%',
                    zIndex: 1300,
                    pointerEvents: 'none'
                    // zIndex: 11,
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/hearts.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    left: '5%',
                    top: '20%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '55%',
                    zIndex: 1300
                    // zIndex: 11,
                  }}
                />
                {/* Bottom Right - Mac */}
                <Box
                  component="img"
                  src={`${WEB_URL}/mack.png`}
                  alt="mac side"
                  sx={{
                    position: 'absolute',
                    bottom: '41%',
                    right: '-43%',
                    width: '40%',
                    transform: 'translateY(100%)',
                    zIndex: 5
                  }}
                />

                <Box
                  component="img"
                  src={`${WEB_URL}/mobile.png`}
                  alt="mobile side"
                  sx={{
                    position: 'absolute',
                    bottom: '25%',
                    right: '-45%',
                    width: '23%',
                    transform: 'translateY(90%)',
                    // transform: 'translateY(10%)',
                    zIndex: 5
                  }}
                />

                <Box
                  component="img"
                  src={`${WEB_URL}/card.png`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: '47%',
                    left: '-48%',
                    width: '45%',
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/cardBaloons.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: '51%',
                    left: '-53%',
                    width: '45%',
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />

              </>
            )
          }


          {
            is4KUp && (
              <>
                <Box
                  component="img"
                  src={`${WEB_URL}/laptop4.png`}
                  alt="laptop"
                  sx={{
                    // width: {md:'100%', xs: '70%', ipadPro: '70%' },
                    // width: '100%',
                    // width: { xl: '100%', lg: '70%', xs:'70%' , ipad:'60%', ipadPro:'65%'},
                    // display: 'block',
                    position: 'absolute',
                    // height:'100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9
                  }}
                />
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/w0HuAGCryIw?si=DgIa1dWVbF5FpX8y"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  sx={{
                    position: 'absolute',
                    borderRadius: '10px',
                    left: '49.5%',
                    top: '49%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '148%',
                    // height: { xs: '130px', sm: '400px', md: '571px', xl: '570px'
                    height: '1100px', // ✅ custom heights
                    zIndex: 10,
                    border: 'none'
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/butterfly.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    right: '-130%',
                    top: '20%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '110%',
                    zIndex: 1300,
                    pointerEvents: 'none'
                    // zIndex: 11,
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/hearts.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    left: '-10%',
                    top: '20%',
                    transform: 'translate(-50%, -50%)',
                    // width: { xl: '70%', lg: '71%', xs: '55%'
                    width: '80%',
                    zIndex: 1300
                  }}
                />
                {/* Bottom Right - Mac */}
                <Box
                  component="img"
                  src={`${WEB_URL}/mack.png`}
                  alt="mac side"
                  sx={{
                    position: 'absolute',
                    bottom: '45%',
                    right: '-76%',
                    width: '60%',
                    transform: 'translateY(100%)',
                    zIndex: 5
                  }}
                />

                <Box
                  component="img"
                  src={`${WEB_URL}/mobile.png`}
                  alt="mobile side"
                  sx={{
                    position: 'absolute',
                    bottom: '17%',
                    right: '-80%',
                    width: '40%',
                    // transform: 'translateY(90%)',
                    transform: 'translateY(10%)',
                    zIndex: 5
                  }}
                />

                <Box
                  component="img"
                  src={`${WEB_URL}/card.png`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: '49%',
                    left: '-82%',
                    width: '65%',
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />
                <Box
                  component="img"
                  src={`${WEB_URL}/cardBaloons.gif`}
                  alt="card"
                  sx={{
                    position: 'absolute',
                    bottom: '54%',
                    left: '-87%',
                    width: '65%',
                    transform: 'translateY(86%)',
                    zIndex: 4
                  }}
                />

              </>
            )
          }

        </Container>
      </Box>

    </>
  )
    ;
};
export default Page;

