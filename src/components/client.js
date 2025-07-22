import Head from 'next/head';
import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid, Box, useMediaQuery, useTheme
} from '@mui/material';
import { useEffect, useState } from 'react';
import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Clients = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
  const testimonials = [
    {
      name: 'Client 1',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
    },
    {
      name: 'Client 2',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
    },
    {
      name: 'Client 3',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
    },
    {
      name: 'Client 4',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
    },
    {
      name: 'Client 5',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
    },
    {
      name: 'Client 6',
      review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
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
          overflowY: 'hidden',
          // pl:'20%', pr:'20%',
          // bgcolor:'red',
          height: '100%',
          // bgcolor:'red',
          // height: {md: '100vh', xs:'100%' },
          // minHeight: '100vh',
          // bgcolor:"black",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          // backgroundImage: `url(${WEB_URL}/bg1.png)`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat'
        }}
      >
        <Container
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-easing="ease-in"
          sx={{
            pt: {md: 5, xs:0 },
            pb: {md: 5, xs:0 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Typography
            // gutterBottom
            // variant="h3"
            padding="10px"
            sx={{
              textAlign: 'center',
              fontWeight: 900,
              color: { xs: '#c165a0', md: '#1A1D25' },
              fontSize: { md: '45px',xs: '25px'}
            }}
          >
            Our Happy Clients
          </Typography>
          <Swiper
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            className="mySwiper"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1400: { slidesPerView: 1 },
              2000: { slidesPerView: 1 }
            }}
            pagination={{
              clickable: true,
              type: 'bullets',
              bulletClass: 'swiper-pagination-bullet',
              renderBullet: (index, className) => {
                return `<span class="${className}" style="width: 15px; height: 15px;"></span>`;
              }
            }}
          >
            {(isSmallScreen
                ? testimonials.map((testimonial) => [testimonial]) // 1 per slide
                : Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, i) =>
                  testimonials.slice(i * 2, i * 2 + 2)
                ) // 2 per slide
            ).map((group, index) => (
              <SwiperSlide key={index}>
                <Grid container spacing={3} sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: '100%',
                  my: {md: 10, xs:5 }
                }}>
                  {group.map((client, i) => (
                    <Grid item xs={12} md={6} lg={6} key={i}>
                      <Card sx={{ p: 3 }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          // padding="10px"
                          sx={{ fontWeight: 900, textAlign: 'left' }}
                        >
                          {client.name}
                          <span style={{ color: '#ff002e' }}> ★</span>
                        </Typography>
                        <Box sx={{ display: 'flex', mb: 1 }}>
                          {[...Array(5)].map((_, j) => (
                            <StarIcon key={j} sx={{ color: '#e79552' }}/>
                          ))}
                        </Box>
                        <Typography sx={{ textAlign: 'justify', mt: 3, mb: 3,  fontSize:{xs:'13px', md:'16px'},fontWeight: 900 }}>
                          {client.review}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>

        </Container>
      </Box>

    </>
  );
};
export default Clients;