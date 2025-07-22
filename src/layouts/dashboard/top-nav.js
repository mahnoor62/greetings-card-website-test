import PropTypes from 'prop-types';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';

import {
  Avatar,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
  Container,
  Collapse
} from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Button from '@mui/material/Button';
import { usePopover } from 'src/hooks/use-popover';
import { AccountPopover } from '../../pages/account-popover';
import NextLink from 'next/link';
import * as React from 'react';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import { Layout as AuthLayout } from '../auth/layout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
import { useRouter } from 'next/router';

export const TopNav = (props) => {
  const router = useRouter();
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();
  const popoverId = accountPopover.open ? 'simple-popover' : undefined;
  const [open, setOpen] = React.useState(false);




  return (
    <>
      <Box
        // position="relative"
        component="header"
        sx={{
          // backdropFilter: 'blur(6px)',
          backgroundColor: '#1a1d25 !important',
          width: '100% !important',
          position: 'fixed',
          pt: 0,
          top: 0
          // position: 'sticky',
          // top: 0,
          // paddingTop: 2,
          // paddingBottom: 2,
          // zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Box sx={{pl:'3%', pr:'3%'}}>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            // spacing={1}
            sx={{
              minHeight: TOP_NAV_HEIGHT,
              // px: 1,
              width: '100%'
            }}
          >
            {/*<Button*/}
            {/*  startIcon={*/}
            {/*    <SvgIcon>*/}
            {/*      <ArrowBackIcon/>*/}
            {/*    </SvgIcon>*/}
            {/*  }*/}
            {/*  onClick={() => router.back()}*/}
            {/*  sx={{ position: 'absolute', left:0 }}*/}
            {/*></Button>*/}
            {/*<img src={`${WEB_URL}/logo3.png`} alt="Logo" style={{ height: 80, paddingBottom: 5 }}/>*/}
            {lgUp ? (
              <>
                <NextLink href='/'>
                <img src={`${WEB_URL}/logo3.png`} alt="Logo"
                     style={{ height: 50, paddingBottom: 5 }}/>
                </NextLink>
                {/*</NextLink>*/}
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  {/*<Avatar*/}
                  {/*  onClick={accountPopover.handleOpen}*/}
                  {/*  ref={accountPopover.anchorRef}*/}
                  {/*  sx={{*/}
                  {/*    cursor: 'pointer',*/}
                  {/*    height: 40,*/}
                  {/*    width: 40*/}
                  {/*  }}*/}
                  {/*  src={`${WEB_URL}/blank-profile.webp`}*/}
                  {/*/>*/}
                  {/*<AccountPopover*/}
                  {/*  anchorEl={accountPopover.anchorRef.current}*/}
                  {/*  open={accountPopover.open}*/}
                  {/*  onClose={accountPopover.handleClose}*/}
                  {/*/>*/}
                  <Avatar
                    id={popoverId}
                    ref={accountPopover.anchorRef}
                    onClick={accountPopover.handleOpen}
                    sx={{
                      cursor: 'pointer',
                      height: 40,
                      width: 40
                    }}
                    src={`${WEB_URL}/blank-profile.webp`}
                  />

                  <AccountPopover
                    anchorEl={accountPopover.anchorRef.current}
                    open={accountPopover.open}
                    onClose={accountPopover.handleClose}
                  />

                </Stack>
              </>
            ) : (
              <Box
                sx={{
                  // backgroundColor: '#2f2f2f',
                  display: 'flex',
                  alignItems: 'center', // Center items vertically
                  justifyContent: 'flex-end', // Center items horizontally
                  width: '100%'
                }}
              >
                <IconButton onClick={() => setOpen(!open)} sx={{ p: 0 }}>
                  <SvgIcon fontSize="large">
                    <Bars3Icon/>
                  </SvgIcon>
                </IconButton>
              </Box>
            )}
          </Stack>
        </Box>
      </Box>
      <Collapse in={!lgUp && open}>
        <>
          <Box
            sx={{
              // backgroundColor: '#2f2f2f',
              display: 'flex',
              alignItems: 'center', // Center items vertically
              width: '100%'
            }}
          >
            {/*<Button*/}
            {/*  startIcon={*/}
            {/*    <SvgIcon>*/}
            {/*      <ArrowBackIcon/>*/}
            {/*    </SvgIcon>*/}
            {/*  }*/}
            {/*  onClick={() => router.back()}*/}
            {/*  // style={{justifyContent: 'flex-start'}}*/}
            {/*></Button>*/}
            <NextLink href='/'>
            <img src={`${WEB_URL}/logo3.png`} alt="Logo"
                 style={{ height: '50px', marginLeft: 'auto' }}/></NextLink>
          </Box>
          <Box
            sx={{
              backgroundColor: '#1a1d25 !important',
              padding: '10px',
              textAlign: 'right'
            }}
          >
            {/*<NextLink href="/dashboard">*/}
            {/*  <Button*/}
            {/*    startIcon={*/}
            {/*      <SvgIcon>*/}
            {/*        <ChartBarIcon/>*/}
            {/*      </SvgIcon>*/}
            {/*    }*/}
            {/*  >*/}
            {/*    Dashboard*/}
            {/*  </Button>*/}
            {/*</NextLink>*/}
            {/*<NextLink href="/players">*/}
            {/*  <Button*/}
            {/*    startIcon={*/}
            {/*      <SvgIcon>*/}
            {/*        <AccessibilityIcon/>*/}
            {/*      </SvgIcon>*/}
            {/*    }*/}
            {/*  >*/}
            {/*    Players*/}
            {/*  </Button>*/}
            {/*</NextLink>*/}
            {/*<NextLink href="/account">*/}
            {/*  <Button*/}
            {/*    startIcon={*/}
            {/*      <SvgIcon>*/}
            {/*        <UserIcon/>*/}
            {/*      </SvgIcon>*/}
            {/*    }*/}
            {/*  >*/}
            {/*    Account*/}
            {/*  </Button>*/}
            {/*</NextLink>*/}
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: 'pointer',
                height: 25,
                width: 25,
                marginLeft: 'auto',
              }}
              src={`${WEB_URL}/blank-profile.webp`}
            />
            <AccountPopover
              anchorEl={accountPopover.anchorRef.current}
              open={accountPopover.open}
              onClose={accountPopover.handleClose}
            />
          </Box>
        </>
      </Collapse>
      {/*<AccountPopover*/}
      {/*  anchorEl={accountPopover.anchorRef.current}*/}
      {/*  open={accountPopover.open}*/}
      {/*  onClose={accountPopover.handleClose}*/}
      {/*/>*/}
    </>
  );
};

TopNav.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};