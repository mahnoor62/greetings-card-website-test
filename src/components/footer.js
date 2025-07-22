import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
  Container,
  Collapse, Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import * as React from 'react';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import GavelIcon from '@mui/icons-material/Gavel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import LoginIcon from '@mui/icons-material/Login';
import PhoneIcon from '@mui/icons-material/Phone';

const BOTTOM_NAV_HEIGHT = 64;
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
export const Footer = () => {

  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box
        component="footer"
        sx={{
          width: "100%",
          bgcolor: '#d8c0ca',
          // position: 'sticky',
          bottom: 0,
          pl:5, pr:5,
          py: 2
        }}
      >
        {/*<Container sx={{width:'100%'}}>*/}
          <Stack
            // sx={{width:'100%'}}
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            // alignItems={{ xs: 'flex-start', md: 'center' }}
            alignItems={{ xs: 'center', md: 'center' }}
            spacing={{ xs: 2, md: 0 }}
          >
            {/* Logo and Copyright */}
            <Box sx={{ display: 'flex', alignItems: 'center',gap: 5 , flexDirection:{md:'row', xs:'column'}}}>
              <img
                src={`${WEB_URL}/footer.png`}
                alt="Logo"
                style={{ height: 50, paddingBottom: 5 }}
              />
              <Typography sx={{ color: 'black', fontWeight: 900 , fontSize:{xs:'15px'}}}>
                &copy;2025 AR Greeting Card All Rights Reserved
              </Typography>
            </Box>

            {/* Links */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ width: {xs: '100%' , md:'auto'}}}
              justifyContent={{ xs: 'center', md: 'flex-end' }}
            >
              <NextLink href="/term" passHref>
                <Typography
                  component="a"
                  sx={{
                    color: 'black',
                    textDecoration: 'underline',
                    textDecorationColor: 'black',
                    fontWeight: 900
                  }}
                >
                  Term & Conditions
                </Typography>
              </NextLink>
              <NextLink href="/term" passHref>
                <Typography
                  component="a"
                  sx={{
                    color: 'black',
                    textDecoration: 'underline',
                    textDecorationColor: 'black',
                    fontWeight: 900
                  }}
                >
                  Privacy Policy
                </Typography>
              </NextLink>
            </Stack>
          </Stack>
        {/*</Container>*/}
      </Box>

    </>
  );
};
export default Footer;
