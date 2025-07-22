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
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
//
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
//
// const PopularCards = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
//   const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
//
//   const imagesOfCards = [
//     {
//       url: `${WEB_URL}/1.png`
//     },
//     {
//       url: `${WEB_URL}/2.png`
//     },
//     {
//       url: `${WEB_URL}/3.png`
//     },
//     {
//       url: `${WEB_URL}/4.png`
//     },
//     {
//       url: `${WEB_URL}/1.png`
//     },
//     {
//       url: `${WEB_URL}/2.png`
//     },
//     {
//       url: `${WEB_URL}/3.png`
//     },
//     {
//       url: `${WEB_URL}/4.png`
//     }
//   ];
//
//   return (
//     <>
//       <Head>
//         <title>Homepage | {APP_NAME}</title>
//       </Head>
//       <Box sx={{
//         width: '100%',
//         // height:'100%',
//         // height: { md: '100vh', xs: '100%' , lg:'100vh', xl:'100vh' },
//         minHeight: '100vh',
//         bgcolor: 'black'
//         // backgroundImage: `url(${WEB_URL}/bg1.png)`,
//         // backgroundSize: 'cover',
//         // backgroundPosition: 'center',
//         // backgroundRepeat: 'no-repeat'
//       }}>
//         <Grid container spacing={3} sx={{
//           display: 'flex',
//           pt: 5,
//           pb: 5,
//           pl: '3%',
//           pr: '3%',
//           width:'100%',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100%'
//         }}>
//           <Grid item xs={12} >
//             <Box sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               mb: 3
//             }}>
//               <Button size='large' sx={{
//                 borderRadius: '30px !important',
//                 backgroundColor: '#c165a0',
//                 color: 'white',
//                 boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
//                 '&:hover': {
//                   backgroundColor: '#c165a0',
//                   boxShadow: '0px 6px 16px white'
//                 }
//               }}>Popular Cards</Button></Box>
//           </Grid>
//           <Grid item xs={12}>
//             <Swiper
//               sx={{height:'100%'}}
//               dir="rtl"
//               direction="horizontal"
//               slidesPerView={1}
//               autoplay={{ delay: 1000 }}
//               loop={true}
//               breakpoints={
//                 {
//                   640: { slidesPerView: 1, spaceBetween: 1 },
//                   768: { slidesPerView: 1, spaceBetween: 1 },
//                   1024: { slidesPerView: 4, spaceBetween: 1 },
//                   2000:{slidesPerView: 4, spaceBetween: 1 }
//                 }
//               }
//               pagination={{
//                 clickable: true,
//                 type: 'bullets',
//                 bulletClass: 'swiper-pagination-bullet',
//                 renderBullet: (index, className) => {
//                   return `<span class="${className}" style="width: 15px; height: 15px;"></span>`;
//                 }
//               }}
//
//               modules={[Pagination, Autoplay]}
//               className="mySwiper"
//             >
//               {imagesOfCards.length > 0 &&
//                 imagesOfCards.map((card, index) => (
//                   <SwiperSlide key={index} sx={{height:'white'}}>
//                     <Box
//                       component="img"
//                       src={`${card.url}`}
//                       alt="card1"
//                       sx={{
//                         width: {
//                           xs: '100%',
//                           md: '70%',
//                           // lg: '100%',
//                           lg:'80%',
//                           xl:'20%'
//                         },
//                         // maxWidth: '100%',
//                         // height: 'auto',
//                         // display: 'block',
//                         // mx: 'auto'
//                       }}
//                     />
//                   </SwiperSlide>
//                 ))}
//             </Swiper>
//
//             {/*<Grid md={6} lg={3} xs={12} sx={{*/}
//             {/*  width: '100%',*/}
//             {/*  display: 'flex',*/}
//             {/*  justifyContent: 'center',*/}
//             {/*  alignItems: 'center'*/}
//             {/*}}>*/}
//             {/*  /!*<img src={`${WEB_URL}/1.png`} style={{width: isSmallScreen ? '80%' : '90%'}} alt='card1'/>*!/*/}
//             {/*  <Box*/}
//             {/*    component="img"*/}
//             {/*    src={`${WEB_URL}/1.png`}*/}
//             {/*    alt="card1"*/}
//             {/*    sx={{*/}
//             {/*      width: {*/}
//             {/*        xs: '80%',*/}
//             {/*        md: '70%',*/}
//             {/*        lg: '100%'*/}
//             {/*      },*/}
//             {/*      maxWidth: '100%',*/}
//             {/*      height: 'auto',*/}
//             {/*      display: 'block',*/}
//             {/*      mx: 'auto' // horizontally center*/}
//             {/*    }}*/}
//             {/*  />*/}
//
//             {/*</Grid>*/}
//             {/*<Grid md={6} lg={3} xs={12} sx={{*/}
//             {/*  width: '100%',*/}
//             {/*  display: 'flex',*/}
//             {/*  justifyContent: 'center',*/}
//             {/*  alignItems: 'center'*/}
//             {/*}}>*/}
//             {/*  <Box*/}
//             {/*    component="img"*/}
//             {/*    src={`${WEB_URL}/2.png`}*/}
//             {/*    alt="card2"*/}
//             {/*    sx={{*/}
//             {/*      width: {*/}
//             {/*        xs: '80%',*/}
//             {/*        md: '70%',*/}
//             {/*        lg: '100%'*/}
//             {/*      },*/}
//             {/*      maxWidth: '100%',*/}
//             {/*      height: 'auto',*/}
//             {/*      display: 'block',*/}
//             {/*      mx: 'auto'*/}
//             {/*    }}*/}
//             {/*  />*/}
//             {/*  /!*<img src={`${WEB_URL}/2.png`}  style={{width: isSmallScreen ? '80%' : '100%'}} alt='card2'/>*!/*/}
//             {/*</Grid>*/}
//             {/*<Grid md={6} lg={3} xs={12} sx={{*/}
//             {/*  width: '100%',*/}
//             {/*  display: 'flex',*/}
//             {/*  justifyContent: 'center',*/}
//             {/*  alignItems: 'center'*/}
//             {/*}}>*/}
//             {/*  <Box*/}
//             {/*    component="img"*/}
//             {/*    src={`${WEB_URL}/3.png`}*/}
//             {/*    alt="card3"*/}
//             {/*    sx={{*/}
//             {/*      width: {*/}
//             {/*        xs: '80%',*/}
//             {/*        md: '70%',*/}
//             {/*        lg: '100%'*/}
//             {/*      },*/}
//             {/*      maxWidth: '100%',*/}
//             {/*      height: 'auto',*/}
//             {/*      display: 'block',*/}
//             {/*      mx: 'auto' // horizontally center*/}
//             {/*    }}*/}
//             {/*  />*/}
//             {/*  /!*<img src={`${WEB_URL}/3.png`} style={{width: isSmallScreen ? '80%' : '100%'}} alt='card3'/>*!/*/}
//             {/*</Grid>*/}
//             {/*<Grid md={6} lg={3} xs={12} sx={{*/}
//             {/*  width: '100%',*/}
//             {/*  display: 'flex',*/}
//             {/*  justifyContent: 'center',*/}
//             {/*  alignItems: 'center'*/}
//             {/*}}>*/}
//             {/*  <Box*/}
//             {/*    component="img"*/}
//             {/*    src={`${WEB_URL}/4.png`}*/}
//             {/*    alt="card4"*/}
//             {/*    sx={{*/}
//             {/*      width: {*/}
//             {/*        xs: '80%',*/}
//             {/*        md: '70%',*/}
//             {/*        lg: '100%'*/}
//             {/*      },*/}
//             {/*      maxWidth: '100%',*/}
//             {/*      height: 'auto',*/}
//             {/*      display: 'block',*/}
//             {/*      mx: 'auto' // horizontally center*/}
//             {/*    }}*/}
//             {/*  />*/}
//             {/*  /!*<img src={`${WEB_URL}/4.png`} style={{width: isSmallScreen ? '80%' : '100%'}} alt='card4'/>*!/*/}
//             {/*</Grid>*/}
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };
// export default PopularCards;
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

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const PopularCards = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

  const imagesOfCards = [
    {
      url: `${WEB_URL}/1.png`
    },
    {
      url: `${WEB_URL}/2.png`
    },
    {
      url: `${WEB_URL}/3.png`
    },
    {
      url: `${WEB_URL}/4.png`
    },
    {
      url: `${WEB_URL}/1.png`
    },
    {
      url: `${WEB_URL}/2.png`
    },
    {
      url: `${WEB_URL}/3.png`
    },
    {
      url: `${WEB_URL}/4.png`
    }
  ];

  return (
    <>
      <Head>
        <title>Homepage | {APP_NAME}</title>
      </Head>

      <Box
        sx={{
          overflowX: 'hidden',
          width: '100%',
          height:'100%',
          // minHeight: '100vh',
          backgroundColor: '#1a1d25 !important',
          pl: '3%',
          pr: '3%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-easing="ease-in"
          sx={{
            pt:5, pb:5,
            width: '100%',
            // bgcolor:'red',
            height:"100%"
            // maxWidth: '1200px',
          }}
        >
          {/* Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // mb: 3,
            }}
          >
            {/*<Button*/}
            {/*  size='large'*/}
            {/*  sx={{*/}
            {/*    mb:5,*/}
            {/*    borderRadius: '30px !important',*/}
            {/*    backgroundColor: '#c165a0',*/}
            {/*    color: 'white',*/}
            {/*    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',*/}
            {/*    '&:hover': {*/}
            {/*      backgroundColor: '#c165a0',*/}
            {/*      boxShadow: '0px 6px 16px white',*/}
            {/*    },*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Popular Cards*/}
            {/*</Button>*/}
            <Box
              // variant='h1'
              sx={{
                color:'#c09b9b',
                // mb: 5,
                // px: 8, // horizontal padding (left and right)
                // py: 2, // vertical padding (top and bottom)
                borderRadius: '30px !important',
                fontSize: { md: '45px', xs: '25px' },
                fontWeight:'bolder',
                // backgroundColor: '#c165a0',
                // color: 'white',
                // boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                // '&:hover': {
                //   backgroundColor: '#c165a0',
                // //   boxShadow: '0px 6px 16px white',
                // },
              }}
            >
              Popular Cards
            </Box>

          </Box>

          {/* Swiper */}
          <Swiper
            dir="rtl"
            direction="horizontal"
            // slidesPerView={2}
            autoplay={{ delay: 1500 }}
            loop={true}
            breakpoints={{
              360:{slidesPerView: 3},
              344:{slidesPerView: 3},
              375:{slidesPerView: 3},
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1400: { slidesPerView: 5 },
              2000:{ slidesPerView: 6},
            }}
            pagination={{
              clickable: true,
              type: 'bullets',
              bulletClass: 'swiper-pagination-bullet',
              renderBullet: (index, className) => {
                return `<span class="${className}" style="width: 15px; height: 15px;"></span>`;
              },
            }}

            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {imagesOfCards.map((card, index) => (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={card.url}
                  alt={`card${index}`}
                  sx={{
                    width: {
                    xs: '100%',
                    md: '70%',
                    lg:'100%',
                    xl:'20%'
                  },
                    // maxWidth: '100%',
                    height: '100%',
                    display: 'block',
                    mx: 'auto',
                    my:5,
                    cursor:'pointer'
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

    </>
  );
};
export default PopularCards;