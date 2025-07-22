import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function UpdateButtonColor({
  game, gameIframe, setData, data
}) {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      color: ''
    },
    validationSchema: Yup.object({
      color: Yup
        .string()
        .max(255)
        .required('Color is required')
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // toast.error('Please login in order to customize the game');
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const userId = window.localStorage.getItem('tempUserId');

        const response = await axios.post(`${API_BASE_URL}/api/temporary-user/update-button`,
          {
            userId,
            color: values.color,
            slug: game
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        console.log('response of color', response);
        setData({ ...data, buttonCode: values.color });
        gameIframe.current.gameInstance.SendMessage('JavascriptWrapper',
          'GetButtonColor',
          values.color);
        toast.success('Color updated successfully');
        setLoading(false);
        formik.resetForm(); // Reset the form immediately

      } catch (error) {
        console.error(error);
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
        name="color"
        label="Color"
        type="color"
        fullWidth
        variant="standard"
        error={Boolean(formik.touched.color && formik.errors.color)}
        helperText={formik.touched.color && formik.errors.color}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.color}

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
