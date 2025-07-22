import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Layout as AuthLayout } from '../../../layouts/auth/layout';
import { useState } from 'react';

export default function UpdateTitle({ game, gameIframe, setData, data, name }) {

  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      submit: null
    },
    validationSchema: Yup.object({
      title: Yup
        .string()
        .max(255)
        .required('Title is required')
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const token = window.localStorage.getItem('token');

        const response = await axios.post(API_BASE_URL
          + '/api/game-customization/update-title',
          {
            title: values.title,
            slug: game

          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
            }
          }
        );
        setData({ ...data, title: values.title });
        gameIframe.current.gameInstance.SendMessage('JavascriptWrapper',
          'GetTitle',
          values.title);

        toast.success('Title updated successfully');
        setLoading(false);
        formik.resetForm(); // Reset the form immediately
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        autoFocus
        required
        margin="dense"
        name="title"
        label="Title"
        type="text"
        fullWidth
        variant="standard"
        error={Boolean(formik.touched.title && formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.title}
        inputProps={{ style: { color: '#add540' } }}
      />
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
  );
}

UpdateTitle.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);
// export default UpdateTitle;
