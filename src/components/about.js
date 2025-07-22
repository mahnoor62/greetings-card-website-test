import Head from 'next/head';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  Link as MuiLink, Card
} from '@mui/material';
import NextLink from 'next/link';

const AboutUs = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('mobile'));
  const isLaptopScreen = useMediaQuery((theme) => theme.breakpoints.up('laptop'));
  const isLargeUp = useMediaQuery((theme) => theme.breakpoints.up('large'));
  const isXXlUp = useMediaQuery((theme) => theme.breakpoints.up('xxl'));
  //  const isIpadPro = useMediaQuery('(min-width:1024px) and (max-width:1366px)'); // const largeScreen = useMediaQuery(theme.breakpoints.up('xl'))

  // const isIpadScreen = useMediaQuery('(min-width:768px) and (max-width:1023px)');
  // const isIpadAir = useMediaQuery('(min-width:820px) and (max-width:1180px)');
  // const isIpadPro = useMediaQuery('(min-width:1024px) and (max-width:1366px)');

  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <>
      <Head>
        <title>About Us | {APP_NAME}</title>
      </Head>
      <Box

        sx={{
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'relative',
          width: '100%',
          height: { md: '100%', xs: '100%' },
          // height: 700,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: {md: 10, xs:5 },
          mb: {md: 10, xs:5 }
        }}
      >

        {/*{*/}
        {/*  (isMobile || isLaptopScreen) && !isLargeUp && (*/}

        {/*    <Card*/}
        {/*      sx={{*/}
        {/*        ml: 2, mr: 2,*/}
        {/*        // width: 500,*/}
        {/*        // width: 600,*/}
        {/*        width: 650,*/}
        {/*        // height:'100%',*/}
        {/*        height: { md: 600, xs: 900 },*/}
        {/*        borderRadius: { md: 15, xs: 7 },*/}
        {/*        position: 'relative',*/}
        {/*        zIndex: 2,*/}
        {/*        overflow: 'visible',*/}
        {/*        // display: 'flex',*/}
        {/*        // alignItems: 'center',*/}
        {/*        // justifyContent: 'center',*/}
        {/*        px: { md: 5, xs: 1 }*/}
        {/*        // px: 5*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <Box*/}

        {/*        data-aos="zoom-in"*/}
        {/*        data-aos-duration="600"*/}
        {/*        data-aos-easing="ease-in"*/}
        {/*        sx={{ mt: 3 }}>*/}
        {/*        <Typography*/}
        {/*          variant="h4"*/}
        {/*          fontWeight="bold"*/}
        {/*          align="center"*/}
        {/*          mb={1}*/}
        {/*        >*/}
        {/*          About Us*/}
        {/*        </Typography>*/}
        {/*        <Typography gutterBottom variant="body1" sx={{*/}
        {/*          textAlign: 'center',*/}
        {/*          color: 'grey'*/}
        {/*        }}>*/}
        {/*          About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
        {/*          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis*/}
        {/*          nostrud exercitation ullamco laboris nisi ut aliquip.*/}
        {/*        </Typography>*/}
        {/*      </Box>*/}
        {/*      /!* Text Half-Outside on Left *!/*/}
        {/*      <Box*/}
        {/*        data-aos="fade-right"*/}
        {/*        data-aos-duration="600"*/}
        {/*        data-aos-easing="ease-in"*/}
        {/*        sx={{*/}
        {/*          position: 'absolute',*/}
        {/*          left: {*/}
        {/*            md: -60, xs: '10%'*/}
        {/*          },*/}
        {/*          top: { md: '31%', xs: '52%' },*/}
        {/*          // top: {md: '30.2%', xs:'60%' },*/}
        {/*          width: { md: 400, xs: '80%' },*/}
        {/*          backgroundColor: '#fff',*/}
        {/*          p: 3,*/}
        {/*          boxShadow: 3,*/}
        {/*          zIndex: 3*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <Typography variant="body1" sx={{ fontWeight: 900, fontSize: { md: '20px' } }}>*/}
        {/*          At{' '}*/}
        {/*          <MuiLink component={NextLink} href="#" underline="hover" color="primary">*/}
        {/*            Greeting Cards*/}
        {/*          </MuiLink>*/}
        {/*          , we believe in the power of heartfelt connections. Our mission is to bring joy,*/}
        {/*          love,*/}
        {/*          and warmth through beautifully crafted greeting cards for every occasion.*/}
        {/*          Whether you&apos;re celebrating a birthday, anniversary, or simply want to*/}
        {/*          say &quot;thank*/}
        {/*          you&quot;, our designs speak from the heart. Each card is thoughtfully created with*/}
        {/*          unique artwork and meaningful messages. We value creativity, quality, and personal*/}
        {/*          touch.*/}
        {/*        </Typography>*/}
        {/*      </Box>*/}

        {/*      /!* Baby Image Half-Outside on Right *!/*/}
        {/*      <Box*/}
        {/*        data-aos="fade-left"*/}
        {/*        data-aos-duration="600"*/}
        {/*        data-aos-easing="ease-in"*/}
        {/*        component="img"*/}
        {/*        src={`${WEB_URL}/babe.png`}*/}
        {/*        alt="baby image"*/}
        {/*        sx={{*/}
        {/*          position: 'absolute',*/}
        {/*          right: {*/}
        {/*            md: -70, xs: 20*/}
        {/*          },*/}
        {/*          top: { md: '29%', xs: '23%' },*/}
        {/*          width: {*/}
        {/*            md: '65%',*/}
        {/*            xs: '90%'*/}
        {/*          },*/}
        {/*          zIndex: 2*/}
        {/*        }}*/}
        {/*      />*/}
        {/*      <Box*/}
        {/*        data-aos="zoom-in-down"*/}
        {/*        data-aos-duration="600"*/}
        {/*        data-aos-easing="ease-in"*/}
        {/*        component="img"*/}
        {/*        src={`${WEB_URL}/trb.gif`}*/}
        {/*        alt="top right balloon"*/}
        {/*        // sx={{ position: 'absolute', top: {md: '25%', xs:'25%' }, right: {md: - 150, xs:-30 }, width: {md: '30%', xs:'50%' }, zIndex: 4 }}*/}
        {/*        sx={{*/}
        {/*          position: 'absolute',*/}
        {/*          top: { md: '35%', xs: '27%', lg: '34%' },*/}
        {/*          right: { md: 50, xs: 120 },*/}
        {/*          width: { md: '30%', xs: '40%' },*/}
        {/*          zIndex: 4*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </Card>*/}

        {/*  )*/}
        {/*}*/}


        {
          (isMobile || isLaptopScreen) && !isLargeUp && (

            <Card
              sx={{
                ml: 2, mr: 2,
                // width: 500,
                // width: 600,
                width: 650,
                // height:'100%',
                height: { md: 600, xs: 720 },
                borderRadius: { md: 15, xs: 7 },
                position: 'relative',
                zIndex: 2,
                overflow: 'visible',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                px: { md: 5, xs: 1 }
                // px: 5
              }}
            >
              <Box

                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                sx={{ mt: 3 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  align="center"
                  mb={1}
                >
                  About Us
                </Typography>
                <Typography gutterBottom variant="body1" sx={{
                  textAlign: 'center',
                  color: 'grey',
                  fontSize:{xs:'13px', md:'16px'}
                }}>
                  About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip.
                </Typography>
              </Box>
              {/* Text Half-Outside on Left */}
              <Box
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                sx={{
                  position: 'absolute',
                  left: {
                    md: -60, xs: '10%'
                  },
                  top: { md: '31%', xs: '58%' },
                  // top: {md: '30.2%', xs:'60%' },
                  width: { md: 400, xs: '80%' },
                  backgroundColor: '#fff',
                  p: {md: 3, xs:3 },
                  boxShadow: 3,
                  zIndex: 3
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 900, fontSize: { md: '20px' , xs:'13px'} }}>
                  At{' '}
                  <MuiLink component={NextLink} href="#" underline="hover" color="primary">
                    Greeting Cards
                  </MuiLink>
                  , we believe in the power of heartfelt connections. Our mission is to bring joy,
                  love,
                  and warmth through beautifully crafted greeting cards for every occasion.
                  Whether you&apos;re celebrating a birthday, anniversary, or simply want to
                  say &quot;thank
                  you&quot;, our designs speak from the heart. Each card is thoughtfully created with
                  unique artwork and meaningful messages. We value creativity, quality, and personal
                  touch.
                </Typography>
              </Box>

              {/* Baby Image Half-Outside on Right */}
              <Box
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                component="img"
                src={`${WEB_URL}/babe.png`}
                alt="baby image"
                sx={{
                  position: 'absolute',
                  right: {
                    md: -70, xs: 20
                  },
                  top: { md: '29%', xs: '23%' },
                  width: {
                    md: '65%',
                    xs: '90%'
                  },
                  zIndex: 2
                }}
              />
              <Box
                data-aos="zoom-in-down"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                component="img"
                src={`${WEB_URL}/trb.gif`}
                alt="top right balloon"
                // sx={{ position: 'absolute', top: {md: '25%', xs:'25%' }, right: {md: - 150, xs:-30 }, width: {md: '30%', xs:'50%' }, zIndex: 4 }}
                sx={{
                  position: 'absolute',
                  top: { md: '35%', xs: '32%', lg: '34%' },
                  right: { md: 50, xs: 130 },
                  width: { md: '30%', xs: '30%' },
                  zIndex: 4
                }}
              />
            </Card>

          )
        }


        {
          isLargeUp && (

            <Card
              sx={{
                ml: 2, mr: 2,
                // width: 500,
                // width: 600,
                width: 800,
                // height:'100%',
                height: { md: 800, xs: 900 },
                borderRadius: { md: 15, xs: 7 },
                position: 'relative',
                zIndex: 2,
                overflow: 'visible',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                px: { md: 10, xs: 1 }
                // px: 5
              }}
            >
              <Box

                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                sx={{ mt: 3 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  align="center"
                  mb={1}
                >
                  About Us
                </Typography>
                <Typography gutterBottom variant="body1" sx={{
                  textAlign: 'center',
                  color: 'grey'
                }}>
                  About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip.
                </Typography>
              </Box>
              {/* Text Half-Outside on Left */}
              <Box
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                sx={{
                  position: 'absolute',
                  left: {
                    md: -70, xs: '10%'
                  },
                  top: { md: '30.2%', xs: '52%' },
                  // top: {md: '30.2%', xs:'60%' },
                  width: { md: 400, xs: '80%' },
                  backgroundColor: '#fff',
                  p: 3,
                  boxShadow: 3,
                  zIndex: 3
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 900, fontSize: { md: '23px' } }}>
                  At{' '}
                  <MuiLink component={NextLink} href="#" underline="hover" color="primary">
                    Greeting Cards
                  </MuiLink>
                  , we believe in the power of heartfelt connections. Our mission is to bring joy,
                  love,
                  and warmth through beautifully crafted greeting cards for every occasion.
                  Whether you&apos;re celebrating a birthday, anniversary, or simply want to
                  say &quot;thank
                  you&quot;, our designs speak from the heart. Each card is thoughtfully created with
                  unique artwork and meaningful messages. We value creativity, quality, and personal
                  touch.
                </Typography>
              </Box>

              {/* Baby Image Half-Outside on Right */}
              <Box
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                component="img"
                src={`${WEB_URL}/babe.png`}
                alt="baby image"
                sx={{
                  position: 'absolute',
                  right: {
                    md: -100, xs: 20
                  },
                  top: { md: '23%', xs: '23%' },
                  width: {
                    md: '75%',
                    xs: '90%'
                  },
                  zIndex: 2
                }}
              />

              {/* Balloon Overlays */}
              {/*<Box*/}
              {/*  data-aos="zoom-in-up"*/}
              {/*  data-aos-duration="600"*/}
              {/*  data-aos-easing="ease-in"*/}
              {/*  component="img"*/}
              {/*  src={`${WEB_URL}/tlb.gif`}*/}
              {/*  alt="top left balloon"*/}
              {/*  sx={{ position: 'absolute', bottom: {md: 0, xs:'20%' }, left: {md: '78%', xs:'50%' }, width: {md: '50%', xs:'70%' }, zIndex: 4 }}*/}
              {/*/>*/}
              <Box
                data-aos="zoom-in-down"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                component="img"
                src={`${WEB_URL}/trb.gif`}
                alt="top right balloon"
                // sx={{ position: 'absolute', top: {md: '25%', xs:'25%' }, right: {md: - 150, xs:-30 }, width: {md: '30%', xs:'50%' }, zIndex: 4 }}
                sx={{
                  position: 'absolute',
                  top: { md: '35%', xs: '27%', lg: '34%' },
                  right: { md: 100, xs: 120 },
                  width: { md: '30%', xs: '40%' },
                  zIndex: 4
                }}
              />
              {/*<Box*/}
              {/*  data-aos="zoom-in-up"*/}
              {/*  data-aos-duration="600"*/}
              {/*  data-aos-easing="ease-in"*/}
              {/*  component="img"*/}
              {/*  src={`${WEB_URL}/blb.gif`}*/}
              {/*  alt="bottom left balloon"*/}
              {/*  sx={{ position: 'absolute', bottom: {md: '2%', xs:'20%'}, left: {md: '20%', xs:'-20%' }, width: {md: '50%' , xs:'70%'}, zIndex: 4 }}*/}
              {/*/>*/}
              {/*<Box*/}
              {/*  data-aos="zoom-in-down"*/}
              {/*  data-aos-duration="600"*/}
              {/*  data-aos-easing="ease-in"*/}
              {/*  component="img"*/}
              {/*  src={`${WEB_URL}/brb.gif`}*/}
              {/*  alt="bottom right balloon"*/}
              {/*  sx={{ position: 'absolute', top: {md:'15%', xs:'25%'}, right: {md:'27%', xs:'63%'}, width: {md: '50%' , xs:'50%'}, zIndex: 4 }}*/}
              {/*/>*/}
            </Card>

          )
        }


        {
          isDesktop && !isTablet && !isMobile && !isLaptopScreen && (

            <Card
              sx={{
                ml: 2, mr: 2,
                // width: 500,
                // width: 600,
                width: 600,
                // height:'100%',
                height: 750,
                borderRadius: { md: 15, xs: 7 },
                position: 'relative',
                zIndex: 2,
                overflow: 'visible',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                px: { md: 10, xs: 1 }
                // px: 5
              }}
            >
              <Box

                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                sx={{ mt: 3 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  align="center"
                  mb={1}
                >
                  About Us
                </Typography>
                <Typography gutterBottom variant="body1" sx={{
                  textAlign: 'center',
                  color: 'grey'
                }}>
                  About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              {/* Text Half-Outside on Left */}
              <Box
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                sx={{
                  position: 'absolute',
                  left: '-20%',
                  top: '34%',
                  // top: {md: '30.2%', xs:'60%' },
                  width: '75%',
                  backgroundColor: '#fff',
                  p: 3,
                  boxShadow: 3,
                  zIndex: 3
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 900, fontSize: { md: '23px' } }}>
                  At{' '}
                  <MuiLink component={NextLink} href="#" underline="hover" color="primary">
                    Greeting Cards
                  </MuiLink>
                  , we believe in the power of heartfelt connections. Our mission is to bring joy,
                  love,
                  and warmth through beautifully crafted greeting cards for every occasion.
                  Whether you&apos;re celebrating a birthday, anniversary, or simply want to
                  say &quot;thank
                  you&quot;, our designs speak from the heart. Each card is thoughtfully created with
                  unique artwork and meaningful messages. We value creativity, quality, and personal
                  touch.
                </Typography>
              </Box>

              {/* Baby Image Half-Outside on Right */}
              <Box
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-easing="ease-in"
                component="img"
                src={`${WEB_URL}/babe.png`}
                alt="baby image"
                sx={{
                  position: 'absolute',
                  right: '-20%',
                  top: '32%',
                  width: '80%',
                  zIndex: 2
                }}
              />

              {/* Balloon Overlays */}
              {/*<Box*/}
              {/*  component="img"*/}
              {/*  src={`${WEB_URL}/tlb.gif`}*/}
              {/*  alt="top left balloon"*/}
              {/*  sx={{ position: 'absolute', bottom: '8%', left: '80%', width: '40%', zIndex: 4 }}*/}
              {/*/>*/}

              <Box
                component="img"
                src={`${WEB_URL}/trb.gif`}
                alt="top right balloon"
                sx={{ position: 'absolute', top: '42%', right: '8%', width: '30%', zIndex: 4 }}
              />

              {/*<Box*/}
              {/*  component="img"*/}
              {/*  src={`${WEB_URL}/blb.gif`}*/}
              {/*  alt="bottom left balloon"*/}
              {/*  sx={{ position: 'absolute', bottom: '10%', left: '27%', width: '35%', zIndex: 4 }}*/}
              {/*/>*/}
              {/*<Box*/}
              {/*  component="img"*/}
              {/*  src={`${WEB_URL}/brb.gif`}*/}
              {/*  alt="bottom right balloon"*/}
              {/*  sx={{position: 'absolute', top: '12%', right: '28%', width: '50%', zIndex: 4 }}*/}
              {/*/>*/}

            </Card>

          )
        }


        {(isTablet && !isMobile) && (

          <Card
            sx={{
              ml: 2, mr: 2,
              // width: 500,
              // width: 600,
              width: 550,
              // height:'100%',
              height: 600,
              borderRadius: { md: 15, xs: 7 },
              position: 'relative',
              zIndex: 2,
              overflow: 'visible',
              // display: 'flex',
              // alignItems: 'center',
              // justifyContent: 'center',
              px: { md: 10, xs: 1 }
              // px: 5
            }}
          >
            <Box

              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              sx={{ mt: 3 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                align="center"
                mb={1}
              >
                About Us
              </Typography>
              <Typography gutterBottom variant="body1" sx={{
                textAlign: 'center',
                color: 'grey'
              }}>
                About Us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
            {/* Text Half-Outside on Left */}
            <Box
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              sx={{
                position: 'absolute',
                left: '-5%',
                top: '35%',
                // top: {md: '30.2%', xs:'60%' },
                width: '60%',
                backgroundColor: '#fff',
                p: 3,
                boxShadow: 3,
                zIndex: 3
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 900, fontSize: { md: '23px' } }}>
                At{' '}
                <MuiLink component={NextLink} href="#" underline="hover" color="primary">
                  Greeting Cards
                </MuiLink>
                , we believe in the power of heartfelt connections. Our mission is to bring joy,
                love,
                and warmth through beautifully crafted greeting cards for every occasion.
                Whether you&apos;re celebrating a birthday, anniversary, or simply want to
                say &quot;thank
                you&quot;, our designs speak from the heart. Each card is thoughtfully created with
                unique artwork and meaningful messages. We value creativity, quality, and personal
                touch.
              </Typography>
            </Box>

            {/* Baby Image Half-Outside on Right */}
            <Box
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              component="img"
              src={`${WEB_URL}/babe.png`}
              alt="baby image"
              sx={{
                position: 'absolute',
                right: '-7%',
                top: '32%',
                width: '65%',
                zIndex: 2
              }}
            />

            {/* Balloon Overlays */}
            {/*<Box*/}
            {/*  component="img"*/}
            {/*  src={`${WEB_URL}/tlb.gif`}*/}
            {/*  alt="top left balloon"*/}
            {/*  sx={{ position: 'absolute', bottom: '8%', left: '80%', width: '40%', zIndex: 4 }}*/}
            {/*/>*/}

            <Box
              component="img"
              src={`${WEB_URL}/trb.gif`}
              alt="top right balloon"
              sx={{ position: 'absolute', top: '36%', right: '12%', width: '30%', zIndex: 4 }}
            />

            {/*<Box*/}
            {/*  component="img"*/}
            {/*  src={`${WEB_URL}/blb.gif`}*/}
            {/*  alt="bottom left balloon"*/}
            {/*  sx={{ position: 'absolute', bottom: '10%', left: '27%', width: '35%', zIndex: 4 }}*/}
            {/*/>*/}
            {/*<Box*/}
            {/*  component="img"*/}
            {/*  src={`${WEB_URL}/brb.gif`}*/}
            {/*  alt="bottom right balloon"*/}
            {/*  sx={{position: 'absolute', top: '12%', right: '28%', width: '50%', zIndex: 4 }}*/}
            {/*/>*/}

          </Card>

        )
        }


      </Box>

    </>
  );
};

export default AboutUs;
