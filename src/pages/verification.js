import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CircularProgress, Link } from '@mui/material';
import toast from 'react-hot-toast';
import NextLink from 'next/link';
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function Page() {

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { token } = router.query;

  const verify = async () => {

    try {
      if (token) {

        const response = await axios.post(API_BASE_URL + '/api/user/verify',
          {
            token
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

      }

      toast.success('Your account is successfully verified');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!token) return; // wait until token is defined

    verify();
  }, [token]);


  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        // overflowX:'hidden',
        overflowY: 'hidden',
        // minHeight: '100vh !important',
        backgroundImage: {
          xs: `url(${WEB_URL}/portrate.png)`,
          md: `url(${WEB_URL}/bg1.png)`
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Box sx={{ minWidth: 300 }}>
        <Card sx={{
          boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)'
        }}>
          <CardContent>
            <Box
              href="/"
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <img src="/logo3.png" alt="Logo"
                   style={{ height: 50 }}/>
            </Box>
            <Typography variant="h5" component="div"
                        sx={{ display: 'flex', justifyContent: 'center', mt:3, mb:2 }}>
              {
                loading ? 'Verification In Process...' : 'Account Verified'
              }
            </Typography>
            {
              loading && <Box sx={{ textAlign: 'center', mt: 5 }}><CircularProgress/></Box>
            }
          </CardContent>
          {/*<CardActions sx={{ display: 'flex', justifyContent: 'center' , mb:5}}>*/}
          {/*  <NextLink href={'/login'}>*/}
          {/*    <Button variant="contained" disabled={loading} sx={{*/}
          {/*      // backgroundColor: '#c165a0',*/}
          {/*      '&:hover': {*/}
          {/*        // borderColor: '#dcdbdb', // Keeps same color on hover*/}
          {/*        backgroundColor: '#c165a0' // Optional subtle hover*/}
          {/*      }*/}
          {/*    }} fullWidth>Login</Button>*/}
          {/*  </NextLink>*/}

          {/*</CardActions>*/}
        </Card>
      </Box>
    </Box>
  );
}

