import Head from 'next/head';
import {
  Card,
  CardContent,
  Container,
  Typography, Tab, IconButton, Menu, CircularProgress,
  Grid, Box, useMediaQuery, useTheme, Button, MenuItem, Select
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import LandingNav from '../../layouts/landing-nav/landingLayout';
import { useRouter } from 'next/router';
import { useLoginModal } from '../../contexts/loginContext';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
import NextLink from 'next/link';
import QRCodeGenerator from '../../components/qrCode';

const Editor = () => {
    const { openLogin } = useLoginModal();
    const [isUnityReady, setIsUnityReady] = useState(false);
    const theme = useTheme();
    const router = useRouter();
    const { id } = router.query;
    const gameIframe = useRef(null);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const hasCalledRef = useRef(false);
    const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
    const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

    const [data, setData] = useState(null);

    const [showQr, setShowQr] = useState(false);
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [userTemplateData, setUserTemplateData] = useState(null);
    const [content, setContent] = useState(`${WEB_URL}/upload-ar-content/${userTemplateData?.userId}`);

    useEffect(() => {
      if (!userTemplateData) {
        return;
      } // wait until id is available
      setContent(`${WEB_URL}/upload-ar-content/${userTemplateData?.userId}`);
    }, [userTemplateData]);

    const getFrontCardDetail = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/api/cards/get/data/game/${id}`);
        setData(res.data.data);

        localStorage.setItem('cardId', res?.data?.data?.uuid);
        const userId = localStorage.getItem(`userId-${id}`);

        if (!userId) {
          await createTemplateData();
          // userId = localStorage.getItem(`userId-${id}`); // get the updated value
        }
        await getUserTemplateDesignData();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      if (!id) {
        return;
      }
      getFrontCardDetail();
    }, [id]);

    const getUserTemplateDesignData = async () => {
      const userId = localStorage.getItem(`userId-${id}`);
      try {
        const res = await axios.get(`${BASE_URL}/api/cards/get/user/${userId}`);
        setUserTemplateData(res?.data?.data);
      } catch (error) {
        console.log('error in get user design template data =======>', error);

      }
    };

    console.log('userTemplateData', userTemplateData);
    // console.log('gameIframe', gameIframe.current?.contentWindow);

    const createTemplateData = async () => {
      try {
        const res = await axios.post(`${BASE_URL}/api/cards/upload-card-id`, {
          uuid: id
        });
        setCardData(res.data.data);
        localStorage.setItem(`userId-${id}`, res?.data?.data?.userId);

      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      window.UnityLoaded = async () => {
        console.log('Unity is loaded and ready from web');
        await getUserTemplateDesignData();
        setIsUnityReady(true);
        // gameOnLoad();

      };
    }, [data]);

    useEffect(() => {
      if (isUnityReady && userTemplateData && data) {
        gameOnLoad();
      }
    }, [isUnityReady, userTemplateData, data]);

    const gameOnLoad = () => {
      const instance = gameIframe.current?.contentWindow?.gameInstance;

      console.log('instance----', instance);
      console.log('data---', data);

      if (instance && data) {

        console.log('✅ Unity gameInstance loaded:', instance);
        console.log('✅userTemplateData', userTemplateData);

        instance.SendMessage(
          'JsonDataHandlerAndParser',
          'LoadJsonData',
          JSON.stringify(data)
        );

        instance.SendMessage(
          'JsonDataHandlerAndParser',
          'LoadSavedData',
          JSON.stringify(userTemplateData)
        );

        gameIframe.current.contentWindow.unityLoadSignal = async (status) => {
          console.log('msg recieveing from unity is---------------------- ', status);
          setShowQr(true);

        };

        gameIframe.current.contentWindow.saveImage = async (array = [], int, index) => {
          console.log('🖼️ Received array:', array);
          console.log('index', index);

          const userId = localStorage.getItem(`userId-${id}`);
          setIsUnityReady(false);
          try {
            // Convert the input array to Uint8Array
            const uint8Array = new Uint8Array(array);

            // Convert Uint8Array to a Blob (binary data)
            const blob = new Blob([uint8Array], { type: 'image/png' }); // adjust MIME type if needed

            // Create FormData to send the image as a file
            const formData = new FormData();
            formData.append('userId', userId);
            formData.append('index', index);
            formData.append('image', blob, 'image.png'); // 'image.png' is filename

            // Send POST request with multipart/form-data
            const response = await axios.post(
              `${BASE_URL}/api/cards/upload-image`,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            );
            const imagePath = response?.data?.data?.url;

            // const userTemplateId = response?.data?.data?.card?.userId;
            // setUserTemplateId(userTemplateId);
            // localStorage.setItem('userTemplateId', userTemplateId);

            // Construct full image URL with index as a query param
            // const imageUrl = `${BASE_URL}/${imagePath}?index=${index}`;
            setImage(imagePath);
            setUserTemplateData(response?.data?.data?.card);
            console.log('imagePath', imagePath);
            instance.SendMessage(
              'JsonDataHandlerAndParser',
              'LoadImage',
              JSON.stringify(imagePath)
            );
            console.log('✅ Image uploaded successfully:', response);
          } catch (error) {
            console.error('❌ Error uploading image:', error);
          }
        };

        gameIframe.current.contentWindow.UploadVideo = async (gameObjectName, methodName, url) => {
          console.log('gameObjectName', gameObjectName);
          console.log('url', url);
          console.log('methodName', methodName);

          setIsUnityReady(false);
          const userId = localStorage.getItem(`userId-${id}`);
          try {
            const blobResponse = await fetch(url);
            const blob = await blobResponse.blob();

            // 2. Convert blob to a File object (you can give a meaningful filename)
            const file = new File([blob], 'recorded-video.mp4', {
              type: blob.type || 'video/mp4'
            });

            const formData = new FormData();
            formData.append('userId', userId);
            formData.append('video', file);

            // Send POST request with multipart/form-data
            const response = await axios.post(
              `${BASE_URL}/api/cards/upload-template-video`,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            );
            const videoPath = response?.data?.data?.url;
            setVideo(videoPath);

            instance.SendMessage(
              'JsonDataHandlerAndParser',
              'LoadVideo',
              JSON.stringify(videoPath)
            );

            console.log('videoPath save into db', videoPath);

            setUserTemplateData(response?.data?.data?.card);
            // console.log('✅ Image uploaded successfully:', response);
          } catch (error) {
            console.error('❌ Error uploading video:', error);
          }
        };

        //unity developer call this function to send data to me  not in instance this function is call in window
        gameIframe.current.contentWindow.saveData = async (json) => {

          const userId = localStorage.getItem(`userId-${id}`);
          console.log(`Edited Data of ${userId}:`, json);
          localStorage.setItem(`savedData-${userId}`, JSON.stringify({ data: json }));

          try {
            const saveData = localStorage.getItem(`savedData-${userId}`);
            const parsed = JSON.parse(saveData); // First parse the full object
            const dataOnly = JSON.parse(parsed.data); // Then parse the `data` string inside

            console.log('✅ Parsed data:', dataOnly);

            // console.log("json", json)

            const response = await axios.post(
              `${BASE_URL}/api/cards/upload-ar-data`,
              {
                userId: userId,
                data: dataOnly
              },
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            );
            console.log('response of save data===>', response);
            setUserTemplateData(response?.data?.data);
          } catch (error) {
            console.log('error in save data', error);
          }
          openLogin();
        };

      }

    };

    return (
      <>
        <Head>
          <title>Card Editor | {APP_NAME}</title>
        </Head>

        <Box sx={{
          position: 'relative',
          width: '100%',
          height: '100vh !important',
          overflowY: 'hidden ',
          // overflowX:'hidden',
          // overflowY: 'hidden',
          // minHeight: '100vh !important',
          backgroundImage: {
            xs: `url(${WEB_URL}/portrate.png)`,
            md: `url(${WEB_URL}/bg1.png)`
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'

        }}>
          <LandingNav/>
          <Box sx={{ width: '100%', height: '100%' }}>
            {/*<iframe*/}
            {/*  ref={gameIframe}*/}
            {/*  onLoad={() => {*/}
            {/*    console.log('iframe loaded');*/}
            {/*    if (window.UnityLoaded) {*/}
            {/*      window.UnityLoaded(); // called manually if iframe is ready*/}
            {/*    }*/}
            {/*  }}*/}
            {/*  src={`${WEB_URL}/editor/index.html`}*/}
            {/*  frameBorder="0"*/}
            {/*  style={{*/}
            {/*    width: '100%',*/}
            {/*    height: '100%'*/}
            {/*  }}*/}
            {/*></iframe>*/}
            {
              showQr && (
                <Box sx={{
                  position: 'absolute',
                  right: 20,
                  top: { lg: '20%', xs: '40%', ipad: '35%' },
                  display: { lg: 'block', xs: 'none' }
                }}>
                  <QRCodeGenerator value={content} size={100}/>
                </Box>
              )
            }

            <iframe
              // onLoad={gameIframe}
              ref={gameIframe}
              onLoad={() => {
                console.log('iframe loaded');
                if (window.UnityLoaded) {
                  window.UnityLoaded();
                }
              }}
              // src={`${WEB_URL}/editor/index.html`}
              src='https://greetings-card-website-dev.vercel.app'
              // src={`${WEB_URL}/editor/index.html?uuid=${id}`}
              // title={data.title}
              frameBorder="0"
              style={{
                width: '100%',
                height: '100%'
              }}
            ></iframe>


          </Box>

        </Box>

      </>
    );
  }
;
export default Editor;