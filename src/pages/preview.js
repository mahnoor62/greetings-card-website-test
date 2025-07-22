import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Slide from '@mui/material/Slide';
import { Box, Typography } from '@mui/material';
import { useAuth } from '../hooks/use-auth';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import toast from 'react-hot-toast';

const BASE_URL = process.env.NEXT_PUBLIC_WEB_URL;

const Page = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const { game: gameSlug } = router.query;

  const [data, setData] = useState({});
  const gameIframe = useRef(null);

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
      data.backgroundColor = data.backgroundColor;
      data.backgroundMusic = data.backgroundMusic && API_BASE_URL + '/' + data.backgroundMusic;
      data.title = data.title ? data.title : gameSlug;
      data.mode = 'public';

      setData(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    gameOnLoad();
  }, [data]);

  const gameOnLoad = () => {
    setTimeout(() => {
      if (window.frames[0] && window.frames[0].gameInstance) {
        gameIframe.current = window.frames[0];

        gameIframe.current.gameInstance.SendMessage(
          'JavascriptWrapper',
          'ResponseOf_GameDataString',
          JSON.stringify(data)
        );

        gameIframe.current.updateScore = async (score) => {
          toast.error('Cannot save progress in preview mode.');
        };
      }
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>
          Preview | {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
      </Head>
      <Box
        sx={{ height: '100vh', display: 'flex', alignItems: 'stretch', position: 'relative' }}>

        <Box sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          p: 2,
          backgroundColor: 'rgba(0,0,0,0.60)'
        }}>
          <Typography color="error">Preview Mode</Typography>
        </Box>

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
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
