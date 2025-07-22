import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthConsumer, AuthProvider } from 'src/contexts/auth-context';
import { useNProgress } from 'src/hooks/use-nprogress';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import 'simplebar-react/dist/simplebar.min.css';
import { Toaster } from 'react-hot-toast';
import '../../public/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';

const clientSideEmotionCache = createEmotionCache();
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
import { LoginModalProvider } from '../contexts/loginContext';
import { LoginVerifyProvider } from '../contexts/verifyContext';
import { ResetProvider } from '../contexts/reset-context';
import { RegisterModalProvider } from '../contexts/register-context';
import { ZindexProvider } from '../contexts/zindex-control';

import Box from '@mui/material/Box';

const SplashScreen = () => null;

const App = (props) => {
  // const {LoginModalProvider } = LoginModalProvider();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  useEffect(
    () => {
      AOS.init({});
    }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SessionProvider session={pageProps.session}>
          <ZindexProvider>
          <RegisterModalProvider>
            <LoginModalProvider>
              <ResetProvider>
                <LoginVerifyProvider>
                  <AuthProvider>
                    <Toaster/>
                    <ThemeProvider theme={theme}>
                      <CssBaseline/>

                      <AuthConsumer>

                        {
                          (auth) => auth.isLoading
                            ? <SplashScreen/>
                            : getLayout(<Component {...pageProps} />)
                        }

                      </AuthConsumer>

                      {/*<AuthConsumer>*/}
                      {/*  {(auth) =>*/}
                      {/*    auth.isLoading ? (*/}
                      {/*      <SplashScreen />*/}
                      {/*    ) : (*/}
                      {/*      <Box*/}
                      {/*        sx={{*/}
                      {/*          width: '100%',*/}
                      {/*          minHeight: '100vh',*/}
                      {/*          backgroundImage: {*/}
                      {/*            xs: `url(${WEB_URL}/portrate.png)`,*/}
                      {/*            md: `url(${WEB_URL}/bg1.png)`,*/}
                      {/*          },*/}
                      {/*          backgroundSize: 'cover',*/}
                      {/*          backgroundPosition: 'center',*/}
                      {/*          backgroundRepeat: 'no-repeat',*/}
                      {/*        }}*/}
                      {/*      >*/}
                      {/*        {getLayout(<Component {...pageProps} />)}*/}
                      {/*      </Box>*/}
                      {/*    )*/}
                      {/*  }*/}
                      {/*</AuthConsumer>*/}

                    </ThemeProvider>
                  </AuthProvider>
                </LoginVerifyProvider>
              </ResetProvider>
            </LoginModalProvider>
          </RegisterModalProvider>
          </ZindexProvider>
        </SessionProvider>
      </LocalizationProvider>
    </CacheProvider>
);
};

export default App;

// NEXT_PUBLIC_APP_NAME="Greetings Card"
// NEXT_PUBLIC_API_BASE_URL=https://greetings-card-apis.tecshield.net
// NEXT_PUBLIC_WEB_URL=https://greetings-card-website.tecshield.net
//
// GOOGLE_CLIENT_ID=531912909211-9bk2n6siufmo5en11r3davjdjlkhhs5h.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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
// NEXTAUTH_SECRET=4bd96bd39813a2152d34a92319356dd1
// NEXTAUTH_URL=https://greetings-card-website.tecshield.net





{/*<Stack spacing={2}>*/}
{/*  <Pagination*/}
{/*    // count={totalPages}*/}
{/*    count={totalPages}*/}
{/*    page={currentPage}*/}
{/*    onChange={handlePageChange}*/}
{/*    shape="rounded"*/}
{/*    variant="outlined"*/}
{/*    // siblingCount={0}           // 🔥 0 siblings around current page*/}
{/*    // boundaryCount={1}          // 🔥 1 page at start & end*/}
{/*    showPrevButton*/}
{/*    showNextButton*/}
{/*    sx={{*/}
{/*      '& .MuiPaginationItem-root': {*/}
{/*        color: 'black',*/}
{/*        borderRadius: '4px',*/}
{/*        backgroundColor: 'transparent',*/}
{/*        overflow: 'hidden',*/}
{/*        '&::before': {*/}
{/*          content: '""',*/}
{/*          position: 'absolute',*/}
{/*          inset: 0,*/}
{/*          padding: '2px',*/}
{/*          background: '#bd669f',*/}
{/*          mask: 'linear-gradient(black 0 0) content-box, linear-gradient(black 0 0)',*/}
{/*          maskComposite: 'exclude',*/}
{/*        }*/}
{/*      },*/}
{/*      '& .MuiPaginationItem-root.Mui-selected': {*/}
{/*        background: '#bd669f',*/}
{/*        color: 'white',*/}
{/*        fontWeight: 700,*/}
{/*        fontSize: '16px',*/}
{/*      }*/}
{/*    }}*/}
{/*  />*/}
{/*</Stack>*/}



{/*<Menu*/}
{/*  class="menu"*/}
{/*  anchorEl={anchorEls[tab.value]}*/}
{/*  open={Boolean(anchorEls[tab.value])}*/}
{/*  onClose={() => handleClose(tab.value)}*/}
{/*  anchorOrigin={{*/}
{/*    vertical: 'bottom',*/}
{/*    horizontal: 'left'*/}
{/*  }}*/}
{/*  transformOrigin={{*/}
{/*    vertical: 'top',*/}
{/*    horizontal: 'left'*/}
{/*  }}*/}
{/*  PaperProps={{*/}
{/*    sx: {*/}

{/*      width: { md: 200, xs: 170 },*/}
{/*      backgroundColor: 'rgba(232, 207,222, 0.3)',*/}
{/*      // backgroundColor: 'pink',*/}
{/*      color: 'black',*/}
{/*      maxHeight: tab.label === 'Category' ? 300 : 'auto',*/}
{/*      overflowY: tab.label === 'Category' ? 'auto' : 'visible',*/}
{/*      '& .MuiList-root': {*/}
{/*        paddingTop: 0,*/}
{/*        paddingBottom: 0*/}
{/*      },*/}
{/*      '&::-webkit-scrollbar': {*/}
{/*        width: '4px'*/}
{/*      },*/}
{/*      '&::-webkit-scrollbar-track': {*/}
{/*        background: 'rgba(232, 207,222, 0.8)'*/}
{/*      },*/}
{/*      '&::-webkit-scrollbar-thumb': {*/}
{/*        backgroundColor: '#c165a0',*/}
{/*        borderRadius: '4px'*/}
{/*      }*/}
{/*    }*/}
{/*  }}*/}
{/*>*/}
{/*  {tab.label === 'Category' && tab.options.length === 0 ? (*/}
{/*    <Box sx={{*/}
{/*      width: 200,*/}
{/*      display: 'flex',*/}
{/*      justifyContent: 'center',*/}
{/*      alignItems: 'center',*/}
{/*      p: 2*/}
{/*    }}>*/}
{/*      <CircularProgress/>*/}
{/*    </Box>*/}
{/*  ) : (*/}
{/*    tab.options.map((option, i) => (*/}
{/*      <MenuItem*/}
{/*        key={i}*/}
{/*        sx={{*/}
{/*          bgcolor: 'rgba(232, 207,222, 0.8 )',*/}
{/*          color: 'black',*/}
{/*          '&:hover': {*/}
{/*            backgroundColor: '#eee3ea',*/}
{/*            color: 'black !important'*/}
{/*          }*/}
{/*        }}*/}
{/*        onClick={() => handleCardType(tab.value, option)}*/}
{/*      >*/}
{/*        {option}*/}
{/*      </MenuItem>*/}
{/*    ))*/}
{/*  )}*/}
{/*</Menu>*/}




// GOOGLE_CLIENT_ID=531912909211-9bk2n6siufmo5en11r3davjdjlkhhs5h.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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
//
// NEXTAUTH_SECRET=4bd96bd39813a2152d34a92319356dd1
// NEXTAUTH_URL=http://localhost:3000
//
//
// NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_51PabdTEbNxN25jyhsSd1jl9Fte0eLkmb15SfY74Lxf3NQfURoqeRqKvUM4LEyhzIutyd54x5lAlD11e0SUTjM7JR0058LW5tn8
// NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51PabdTEbNxN25jyhWjqQQaRwaOBWnzwFe3VXx732BUN79Pyt6GKTayWLEYWZMsLHLa9CuOIWBn4CSRHpxCXIISeo006F6tkO9y