import Head from 'next/head';
import NextLink from 'next/link';
import { useMounted } from '../hooks/use-mounted';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, CircularProgress, Link, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useRouter } from 'next/router';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const Page = () => {
  const router = useRouter();
  const isMounted = useMounted();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const { signUp, user } = useAuth();
  // const [open, setOpen] = React.useState(false);
  //
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //     submit: null
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required('Name is required'),
  //     email: Yup.string().required('Email is required').email('Email is invalid'),
  //     password: Yup.string().required('Password is required')
  //   }),
  //   onSubmit: async (values, helpers) => {
  //     const loading = toast.loading('Registration in process...');
  //     setLoading(true);
  //     try {
  //       await signUp({
  //         name: values.name,
  //         email: values.email,
  //         password: values.password
  //       });
  //       toast.success('Check your email for verification');
  //       formik.resetForm(); // Reset the form immediately
  //     } catch (err) {
  //       toast.error(err.message);
  //       formik.resetForm();
  //       console.error(err);
  //       if (isMounted()) {
  //         helpers.setStatus({ success: false });
  //         helpers.setErrors({ submit: err.message });
  //         helpers.setSubmitting(false);
  //       }
  //     }
  //     toast.dismiss(loading);
  //     setLoading(false);
  //
  //   }
  // });

  // const handleLoginClick = () => {
  //   router.push('/login?dialog=true'); // Yeh query use karenge login page me
  // };
  //
  // useEffect(() => {
  //   if (router.query.dialog === 'true') {
  //     setOpen(true);
  //     router.replace('/register', undefined, { shallow: true }); // URL saaf karne ke liye
  //   }
  // }, [router.query]);

  return (
    <>
      <Head>
        <title>
          Register |{process.env.NEXT_PUBLIC_APP_NAME}
        </title>
      </Head>
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    flex: '1 1 auto',*/}
      {/*    alignItems: 'center',*/}
      {/*    display: 'flex',*/}
      {/*    justifyContent: 'center'*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Box*/}
      {/*    sx={{*/}
      {/*      maxWidth: 550,*/}
      {/*      px: 3,*/}
      {/*      py: '100px',*/}
      {/*      width: '100%'*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <div>*/}
      {/*      <Stack*/}
      {/*        spacing={1}*/}
      {/*        sx={{ mb: 3 }}*/}
      {/*      >*/}
      {/*        <Typography variant="h4">*/}
      {/*          Register*/}
      {/*        </Typography>*/}
      {/*        <Typography*/}
      {/*          color="text.secondary"*/}
      {/*          variant="body2"*/}
      {/*        >*/}
      {/*          Already have an account?*/}
      {/*          &nbsp;*/}
      {/*          <NextLink*/}
      {/*            component={NextLink}*/}
      {/*            href="/login"*/}
      {/*            underline="hover"*/}
      {/*            variant="subtitle2"*/}
      {/*            style={{ color: '#c165a0' }}*/}
      {/*          >*/}
      {/*            Log in*/}
      {/*          </NextLink>*/}
      {/*        </Typography>*/}
      {/*      </Stack>*/}
      {/*      <form*/}
      {/*        noValidate*/}
      {/*        onSubmit={formik.handleSubmit}*/}
      {/*      >*/}
      {/*        <Stack spacing={3}>*/}
      {/*          <TextField*/}
      {/*            error={!!(formik.touched.name && formik.errors.name)}*/}
      {/*            fullWidth*/}
      {/*            helperText={formik.touched.name && formik.errors.name}*/}
      {/*            label="Name"*/}
      {/*            name="name"*/}
      {/*            onBlur={formik.handleBlur}*/}
      {/*            onChange={formik.handleChange}*/}
      {/*            value={formik.values.name}*/}
      {/*          />*/}
      {/*          <TextField*/}
      {/*            error={!!(formik.touched.email && formik.errors.email)}*/}
      {/*            fullWidth*/}
      {/*            helperText={formik.touched.email && formik.errors.email}*/}
      {/*            label="Email Address"*/}
      {/*            name="email"*/}
      {/*            onBlur={formik.handleBlur}*/}
      {/*            onChange={formik.handleChange}*/}
      {/*            type="email"*/}
      {/*            value={formik.values.email}*/}
      {/*          />*/}
      {/*          <TextField*/}
      {/*            error={!!(formik.touched.password && formik.errors.password)}*/}
      {/*            fullWidth*/}
      {/*            helperText={formik.touched.password && formik.errors.password}*/}
      {/*            label="Password"*/}
      {/*            name="password"*/}
      {/*            onBlur={formik.handleBlur}*/}
      {/*            onChange={formik.handleChange}*/}
      {/*            type="password"*/}
      {/*            value={formik.values.password}*/}
      {/*          />*/}
      {/*        </Stack>*/}
      {/*        /!*{formik.errors.submit && (*!/*/}
      {/*        /!*  <Typography*!/*/}
      {/*        /!*    color="error"*!/*/}
      {/*        /!*    sx={{ mt: 3 }}*!/*/}
      {/*        /!*    variant="body2"*!/*/}
      {/*        /!*  >*!/*/}
      {/*        /!*    {formik.errors.submit}*!/*/}
      {/*        /!*  </Typography>*!/*/}
      {/*        /!*)}*!/*/}
      {/*        <Button*/}
      {/*          fullWidth*/}
      {/*          size="large"*/}
      {/*          sx={{ mt: 3 }}*/}
      {/*          type="submit"*/}
      {/*          //disabled button*/}
      {/*          disabled={formik.isSubmitting}*/}
      {/*          variant="contained"*/}
      {/*        >*/}
      {/*          Register*/}
      {/*        </Button>*/}
      {/*      </form>*/}
      {/*    </div>*/}
      {/*  </Box>*/}
      {/*</Box>*/}

      <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 , pb:'0 !important'}} id="customized-dialog-title">
            Register<br/> <Typography
            color="text.secondary"
            variant="body2"
          >
            Already have an account?
            &nbsp;
            <Box
              onClick={handleLoginClick}
              // component={NextLink}
              // href="/login"
              underline="hover"
              variant="subtitle2"
              style={{ color: '#c165a0'  , display:'inline', cursor:'pointer'}}
            >
              Log in
            </Box>
          </Typography>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500]
            })}
          >
            <CloseIcon/>
          </IconButton>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <DialogContent sx={{pt:'0 !important', pb:'0 !important'}}>
              <TextField
                sx={{mt:1}}
                error={!!(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Name"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <TextField
                sx={{mt:2}}
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
                sx={{mt:2}}
                error={!!(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
              />

            </DialogContent>
            <DialogActions>
              {/*<Button autoFocus onClick={handleClose}>*/}
              <Button
                // fullWidth
                size="large"
                // sx={{ mt: 3 }}
                type="submit"
                //disabled button
                disabled={formik.isSubmitting}
                variant="contained"
              >
                Register
              </Button>
              {/*</Button>*/}
            </DialogActions>
          </form>
        </BootstrapDialog>
      </React.Fragment>

    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
