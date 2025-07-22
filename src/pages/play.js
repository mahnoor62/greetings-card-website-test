import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useFormik } from 'formik';
import Slide from '@mui/material/Slide';
import { Box, Card, CardContent, Stack, Typography, CardHeader } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/use-auth';

const BASE_URL = process.env.NEXT_PUBLIC_WEB_URL;

const Play = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const { game: gameSlug } = router.query;
  // data of user store in it
  const [data, setData] = useState({});
  const gameIframe = useRef(null);
  // when player created data of player store in it
  const [player, setPlayer] = useState('');
  const [open, setOpen] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const handleClickOpen = () => {
    setOpen(true);
  };
  // console.log("game", gameSlug);
  const handleClose = () => {
    setOpen(false);
  };
  const fetchData = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await axios.get(
        `${API_BASE_URL}/api/user/game/published/${gameSlug}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
          }
        }
      );
      const data = response.data.data;

      data.backgroundImage = data.backgroundImage && API_BASE_URL + '/' + data.backgroundImage;
      data.logoImage = data.logoImage && API_BASE_URL + '/' + data.logoImage;
      data.slug = gameSlug;
      data.mode = 'public';

      setData(data);

      if (data && data.isPaid === false) {
        router.push('/404');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    if (data.isPaid === true) {
      handleClickOpen();
    }
  }, [data.isPaid]);
  useEffect(() => {
    gameOnLoad();
  }, [data, player]);

  const gameOnLoad = () => {
    if (window.frames[0] && window.frames[0].gameInstance) {
      gameIframe.current = window.frames[0];
      gameIframe.current.gameInstance.SendMessage(
        'JavascriptWrapper',
        'ResponseOf_GameDataString',
        JSON.stringify(data)
      );
      //update score function
      gameIframe.current.updateScore = async (score) => {

        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const token = window.localStorage.getItem('token');
        const playerId = player._id;

        const response = await axios.post(API_BASE_URL
          + '/api/user/player/update-score',
          {
            playerId,
            slug: gameSlug,
            score: score

          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
            }
          }
        );
      };
    }
  };

  //modal api:
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      submit: null
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .max(255)
        .required('Name id is required'),
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      phoneNumber: Yup.string()
                      // .matches(/^[0-9]{11}$/, 'Phone number is not valid')
                      .required('Phone number is required')
    }),
    onSubmit: async (values, helpers) => {
      try {

        const token = window.localStorage.getItem('token');
        const response = await axios.post(API_BASE_URL
          + '/api/user/player/create-player',
          {
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
            slug: gameSlug
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
            }
          }
        );
        setPlayer(response.data.data);
        // toast.success('Player created successfully');
        setOpen(false);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      }
    }
  });
  return (
    <>
      <Head>
        <title>
          Publish | {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
      </Head>
      {
        data.isPaid === true && (
          <React.Fragment>
            <Dialog
              fullScreen
              open={open}
              // onClose={handleClose}
              // TransitionComponent={Transition}
            >
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  flex: '1 1 auto',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    maxWidth: 550,
                    px: 3,
                    py: '100px',
                    width: '100%'
                  }}
                >
                  <div>
                    <Card>
                      <CardHeader title="Sign Up"
                                  subheader="Please enter the details to create player">

                      </CardHeader>
                      <CardContent>
                        <form
                          noValidate
                          onSubmit={formik.handleSubmit}
                        >
                          <Stack spacing={3}>
                            <TextField
                              error={!!(formik.touched.name && formik.errors.name)}
                              fullWidth
                              helperText={formik.touched.name && formik.errors.name}
                              label="Name"
                              name="name"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              type="text"
                              value={formik.values.name}
                            />
                            <TextField
                              error={!!(formik.touched.email && formik.errors.email)}
                              fullWidth
                              helperText={formik.touched.email && formik.errors.email}
                              label="Email Address"
                              name="email"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              type="email"
                              value={formik.values.email}
                            />
                            <TextField
                              error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                              fullWidth
                              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                              label="Phone Number"
                              name="phoneNumber"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              type="text"
                              value={formik.values.phoneNumber}
                            />
                          </Stack>
                          <Button type="submit"
                                  variant="contained"
                                  disabled={formik.isSubmitting}
                                  sx={{
                                    display: 'flex',
                                    alignSelf: 'flex-end',
                                    marginTop: '20px',
                                    marginLeft: 'auto'
                                  }}
                          >Submit</Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </Box>
              </Box>
            </Dialog>
          </React.Fragment>
        )
      }
      {data.isPaid === true && (
        <Box
          sx={{ height: '100vh', display: 'flex', alignItems: 'stretch' }}>
          <iframe
            onLoad={gameOnLoad}
            src={`${BASE_URL}/game/index.html`}
            frameBorder="0"
            style={{
              flex: '1',
              width: '100%',
              height: '100%'
            }}
          ></iframe>
        </Box>
      )
      }
    </>
  );
};

export default Play;
