import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

export default function UpdateBackgroundMusic({
  game, gameIframe, setData, data
}) {
  const [loading, setLoading] = useState(false);
  const [music, setMusic] = useState('');

  const handleMusic = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    // Check if file type is valid
    const fileType = file.type;

    if (fileType
      !== 'audio/mpeg'
      && fileType
      !== 'audio/mp4'
      && fileType
      !== 'audio/m4a'
      && fileType
      !== 'audio/wav' && fileType
      !== 'video/mpeg') {
      toast.error('Please upload an MP3 or MP4  and M4A  or wav file.');
      return;
    }
    setMusic(file);
  };

  useEffect(() => {
  }, [music]);

  const formik = useFormik({
    initialValues: {
      bgMusic: '',
      submit: null
    },
    validationSchema: Yup.object({
      bgMusic: Yup
        .mixed().required('please select music file')
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      try {
        const formData = new FormData();
        const userId = window.localStorage.getItem('tempUserId');
        formData.append('bgMusic', music);
        formData.append('slug', game);
        formData.append('userId', userId);

        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

        const response = await axios.post(API_BASE_URL
          + '/api/temporary-user/upload-bgMusic',

          formData
          ,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );
        console.log('response of music', response);
        const bgMusic = API_BASE_URL + '/' + response.data.data.backgroundMusic;
        setData({ ...data, backgroundMusic: bgMusic });
        gameIframe.current.gameInstance.SendMessage('JavascriptWrapper',
          'GetAudioSource',
          bgMusic);

        setMusic('');
        toast.success('Music file uploaded successfully');
        setLoading(false);
        formik.resetForm();
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      }
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ overflow: 'hidden' }}>
          <TextField
            required
            type="file"
            accept=".mp3, .mp4, .wav , .m4a"
            id="bgMusic"
            variant="standard"
            error={Boolean(formik.touched.bgMusic && formik.errors.bgMusic)}
            helperText={formik.touched.bgMusic && formik.errors.bgMusic}
            onBlur={formik.handleBlur}
            onChange={(event) => {
              handleMusic(event);
              formik.handleChange(event);
            }}
            value={formik.values.bgMusic}
          />
        </div>
        <Button
          type="submit"
          variant="outlined"
          disabled={formik.isSubmitting}
          sx={{
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            width: 'fit-content'
          }}
        >
          Save
        </Button>
      </form>
    </>
  );
}


