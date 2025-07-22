import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function UpdateBackgroundColor({
  game, gameIframe, setData, data
}) {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      backgroundColor: ''
    },
    validationSchema: Yup.object({
      backgroundColor: Yup
        .string()
        .max(255)
        .required('Background Color is required')
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const token = window.localStorage.getItem('token');

        const response = await axios.post(`${API_BASE_URL}/api/game-customization/update-background-color`,
          {
            backgroundColor: values.backgroundColor,
            slug: game
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
            }
          });
        console.log("response of color", response);
        setData({ ...data, backgroundColor: values.backgroundColor });
        gameIframe.current.gameInstance.SendMessage('JavascriptWrapper',
          'GetBackgroundColor',
          values.backgroundColor);
        toast.success('Background color updated successfully');
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
        name="backgroundColor"
        label="Background Color"
        type="color"
        fullWidth
        variant="standard"
        error={Boolean(formik.touched.backgroundColor && formik.errors.backgroundColor)}
        helperText={formik.touched.backgroundColor && formik.errors.backgroundColor}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.backgroundColor}

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
