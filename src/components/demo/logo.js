import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function UpdateLogo({ game, gameIframe, data, setData }) {

  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const handleImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    } // Exit if no file is selected

    const isValidSize = file.size <= 1 * 1024 * 1024; // 1MB in bytes

    if (!isValidSize) {
      toast.error('Image size should be less than 1 MB.', {
        duration: 5000
      });
      return;
    }
    setImage(file);
  };

  const formik = useFormik({
    initialValues: {
      logoImage: '',
      submit: null
    },
    validationSchema: Yup.object({
      logoImage: Yup
        .mixed().required('please select a logo image')
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      try {
        const userId = window.localStorage.getItem('tempUserId');
        const formData = new FormData();

        formData.append('logoImage', image);
        formData.append('slug', game);
        formData.append('userId', userId);
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

        const response = await axios.post(API_BASE_URL
          + '/api/temporary-user/upload-logoImage',

          formData,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );
        console.log('response of logo', response);
        const logoImage = API_BASE_URL + '/' + response.data.data.logoImage;
        setData({ ...data, logoImage: logoImage });
        gameIframe.current.gameInstance.SendMessage('JavascriptWrapper',
          'GetLogoImage',
          logoImage);
        toast.success('Logo uploaded successfully');
        setImage(null);
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
            // accept=".jpg, .jpeg, .png, .webp"
            accept="image/*"
            id="logoImage"
            variant="standard"
            error={Boolean(formik.touched.logoImage && formik.errors.logoImage)}
            helperText={formik.touched.logoImage && formik.errors.logoImage}
            onBlur={formik.handleBlur}
            onChange={(event) => {
              handleImage(event);
              formik.handleChange(event);
            }}
            value={formik.values.logoImage}
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

