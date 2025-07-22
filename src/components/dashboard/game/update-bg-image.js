import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/use-auth';
import { useState, useEffect } from 'react';
import { Layout as AuthLayout } from '../../../layouts/auth/layout';
import TextField from '@mui/material/TextField';

export default function UpdateBackgroundImage({
  game, gameIframe, setData, data
}) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileSize = file.size <= 1.5 * 1024 * 1024;
    if(!fileSize){
      toast.error('Cover size should be less than 1.5 MB.',  {
        duration: 5000
      });
      return;
    }
    setImage(file);
  };

  useEffect(() => {
  }, [image]);

  const formik = useFormik({
    initialValues: {
      backgroundImage: '',
      submit: null
    },
    validationSchema: Yup.object({
      backgroundImage: Yup
        .mixed().required('please select bg image')
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      try {
        // toast.error("Please login in order to customize the game");
        const formData = new FormData();

        formData.append('backgroundImage', image);
        formData.append('slug', game);

        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const token = window.localStorage.getItem('token');

        const response = await axios.post(API_BASE_URL
          + '/api/game-customization/update-background-image',

          formData
          ,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'x-access-token': token
            }
          }
        );
        const bgImage = API_BASE_URL + '/' + response.data.data.backgroundImage;
        setData({ ...data, backgroundImage: bgImage });
        gameIframe.current.gameInstance.SendMessage('JavascriptWrapper',
          'GetCoverImage',
          bgImage);

        setImage('');
        toast.success('Background uploaded successfully');
        setLoading(false);
        formik.resetForm(); // Reset the form immediately
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
            accept="image/*"
            id="backgroundImage"
            variant="standard"
            error={Boolean(formik.touched.backgroundImage && formik.errors.backgroundImage)}
            helperText={formik.touched.backgroundImage && formik.errors.backgroundImage}
            onBlur={formik.handleBlur}
            onChange={(event) => {
              handleImage(event);
              formik.handleChange(event);
            }}
            value={formik.values.backgroundImage}
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

UpdateBackgroundImage.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);
// export default UpdateTitle;
