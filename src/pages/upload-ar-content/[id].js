import Head from 'next/head';
import {
  Box, useTheme, useMediaQuery, Button, Alert, IconButton, Collapse
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';

import LandingNav from '../../layouts/landing-nav/landingLayout';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
import NextLink from 'next/link';

const Upload = () => {
  const theme = useTheme();
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [galleryImages, setGalleryImages] = useState(true);
  const [galleryVideos, setGalleryVideos] = useState(true);
  const [selectedGalleryImages, setSelectedGalleryImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [previewVideoUrls, setPreviewVideoUrls] = useState([]);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const useStyles = styled((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  }));

  const classes = useStyles();

  //upload gallery images
  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    let validFiles = [];
    let validUrls = [];

    const validations = files.map(file => {
      return new Promise((resolve) => {
        const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);

        if (file.size > 1024 * 1024) {
          toast.error(`File is too large (${sizeInMB} MB). Max allowed size is 1 MB.`);
          return resolve(null);
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            const { width, height } = img;
            if (width < 660 || height < 660) {
              toast.error(`File is too small (${width} x ${height}px). Minimum required is 660 x 660px.`);
              return resolve(null);
            } else {
              // toast.success(`File accepted (${width} x ${height}px, ${sizeInMB} MB)`);
              validFiles.push(file);
              validUrls.push(URL.createObjectURL(file));
              resolve(file);
            }
          };
        };
        reader.readAsDataURL(file);
      });
    });

    await Promise.all(validations);

    if (validFiles.length === 0) return;

    setPreviewUrls(prev => [...prev, ...validUrls]);

    setLoading(true);
    const formData = new FormData();
    formData.append('userId', id);
    validFiles.forEach(file => formData.append('gallery-images', file));

    try {
      const res = await axios.post(`${BASE_URL}/api/user/ar-experience/upload-gallery-images`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Images uploaded successfully.');
    } catch (err) {
      console.error('Error uploading images:', err);
      toast.error('Upload failed!');
    } finally {
      setLoading(false);
    }
  };

  // const handleImageUpload = async (event) => {
  //   const files = Array.from(event.target.files);
  //   if (!files.length) {
  //     return;
  //   }
  //
  //   let validFiles = [];
  //   let validUrls = [];
  //
  //   const validations = files.map(file => {
  //     return new Promise((resolve) => {
  //       if (file.size > 1024 * 1024) {
  //         toast.error('The selected file is too large. Maximum allowed size is 1 MB');
  //         return resolve(null);
  //       }
  //
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         const img = new Image();
  //         img.src = e.target.result;
  //         img.onload = () => {
  //           if (img.width < 660 || img.height < 660) {
  //             toast.error(`${file.name} is smaller than 660x660`);
  //             return resolve(null);
  //           } else {
  //             validFiles.push(file);
  //             validUrls.push(URL.createObjectURL(file));
  //             resolve(file);
  //           }
  //         };
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //   });
  //
  //   await Promise.all(validations);
  //
  //   if (validFiles.length === 0) {
  //     // toast.error("No valid images selected.");
  //     // setPreviewUrls([]);
  //     return;
  //   }
  //   setPreviewUrls(prev => [...prev, ...validUrls]);
  //
  //   // setPreviewUrls(validUrls);
  //
  //   // Upload valid images
  //   setLoading(true);
  //   const formData = new FormData();
  //   formData.append('userId', id);
  //   validFiles.forEach(file => formData.append('gallery-images', file));
  //
  //   try {
  //     const res = await axios.post(`${BASE_URL}/api/user/ar-experience/upload-gallery-images`,
  //       formData,
  //       {
  //         headers: { 'Content-Type': 'multipart/form-data' }
  //       });
  //     const data = res?.data?.data;
  //     // instance.SendMessage(
  //     //   'JsonDataHandlerAndParser',
  //     //   'LoadImage',
  //     //   JSON.stringify(data)
  //     // );
  //     toast.success('Image upload succssfully');
  //   } catch (err) {
  //     console.error('err in upload gallery image', err);
  //     toast.error('Upload failed!');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleVideoUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    let validFiles = [];
    let validUrls = [];

    files.forEach(file => {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);

      if (file.size > 1024 * 1024) {
        toast.error(`File is too large (${sizeInMB} MB). Max allowed size is 1 MB.`);
        return;
      }

      validFiles.push(file);
      validUrls.push(URL.createObjectURL(file));
      // toast.success(`${file.name} accepted (${sizeInMB} MB)`);
    });

    if (validFiles.length === 0) return;

    setPreviewVideoUrls(prev => [...prev, ...validUrls]);

    setVideoLoading(true);
    const formData = new FormData();
    formData.append('userId', id);
    validFiles.forEach(file => formData.append('gallery-videos', file));

    try {
      const res = await axios.post(`${BASE_URL}/api/user/ar-experience/upload-gallery-videos`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Videos uploaded successfully.');
    } catch (err) {
      console.error('Error uploading gallery videos:', err);
      toast.error('Upload failed!');
    } finally {
      setVideoLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Upload Media | {APP_NAME}</title>
      </Head>
      {/*{*/}
      {/*  isSmallScreen && (*/}
          <Box sx={{
            position: 'relative',
            width: '100%',
            height: '100%  !important',
            minHeight:'100vh !important',
            overflowY: 'hidden ',
            backgroundImage: {
              xs: `url(${WEB_URL}/portrate.png)`,
              md: `url(${WEB_URL}/bg1.png)`
            },
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'

          }}>
            <LandingNav/>


            <Box className={classes.root} sx={{
              position: 'absolute', top: '10%', left: '50%',
              transform: 'translateX(-50%)',
              width: { xs: '90%', sm: '70%', md: '50%' }
            }}>
              <Collapse in={open}>
                <Alert
                  // icon={<WarningIcon sx={{ color: 'black
                  //
                  // '}} />}
                  icon={<WarningIcon sx={{ color: 'black', height: '100%' }}/>}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" sx={{
                        stroke: 'black',
                        strokeWidth: 1
                      }}/>
                    </IconButton>
                  }
                  sx={{ bgcolor: 'rgba(232, 207,222, 0.8 )', color: 'black', fontWeight: 700 }}>Please
                  refresh the website on your
                  desktop after uploading the media.</Alert>
              </Collapse>
            </Box>

            <Box sx={{
              // mt:20,
              // position:'absolute',top:'20%',
              width: '100%',
              height: '100vh',
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 2
            }}>
              <Box
                sx={{ display: 'flex', flexWrap: 'wrap',  justifyContent: 'center', p:2 ,gap:1, height:'50vh',mt:20, width:'100%',   overflowY: 'auto'}}>

                {previewUrls.map((url, idx) => (
                  <img key={idx} src={url} width={100} height={100}
                       style={{ objectFit: 'cover', borderRadius: '8px' }}/>
                ))}
              </Box>
              <Button
                sx={{
                  minWidth: { md: 150, xs: 100 },
                  backgroundColor: '#c165a0 !important',
                  color: 'white',
                  // fontWeight: 700,
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor: '#c165a0 !important',
                    color: 'white'
                  }
                }}
                disabled={loading}
                onClick={() => document.getElementById('gallery-images').click()}
              >
                {loading ? 'Uploading...' : 'Upload Gallery Images'}
              </Button>

              <input
                type="file"
                id="gallery-images"
                multiple
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />

              <Button
                disabled={videoLoading}
                onClick={() => document.getElementById('gallery-videos').click()}
                sx={{
                  minWidth: { md: 150, xs: 100 },
                  backgroundColor: '#c165a0 !important',
                  color: 'white',
                  borderRadius: '20px',
                  '&:hover': { backgroundColor: '#c165a0 !important', color: 'white' }
                }}
              >
                {videoLoading ? 'Uploading...' : 'Upload Gallery Videos'}
              </Button>


              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 , p:2 , height:'50vh',mb:10, width:'100%',   overflowY: 'auto'}}>

                {previewVideoUrls.map((url, idx) => (
                  <video key={idx} src={url} width="120" height="100" controls style={{ borderRadius: '8px' }} />
                ))}
              </Box>


              <input
                type="file"
                id="gallery-videos"
                multiple
                accept="video/*"
                style={{ display: 'none' }}
                onChange={handleVideoUpload}
              />

            </Box>

          </Box>
         {/*)*/}
       {/*}*/}

    </>
  );
};
export default Upload;