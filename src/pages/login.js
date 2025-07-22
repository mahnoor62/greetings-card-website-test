import { useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { CircularProgress } from '@mui/material';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import toast from 'react-hot-toast';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { useMounted } from '../hooks/use-mounted';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


import * as React from 'react';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signIn, user, isAuthenticated } = useAuth();
  const isMounted = useMounted();

  // const [open, setOpen] = React.useState(false);
  //
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  //
  //
  // const handleRegisterClick = () => {
  //   router.push('/register?dialog=true'); // Yeh query use karenge login page me
  // };


  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //     submit: null
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup
  //       .string()
  //       .email('Must be a valid email')
  //       .max(255)
  //       .required('Email is required'),
  //     password: Yup
  //       .string()
  //       .max(255)
  //       .required('Password is required')
  //   }),
  //   onSubmit: async (values, helpers) => {
  //     const loading = toast.loading('login in process...');
  //     setLoading(true);
  //     try {
  //       await signIn({ email: values.email, password: values.password });
  //       toast.success('Login successfully');
  //       formik.resetForm(); // Reset the form immediately
  //     } catch (err) {
  //       toast.error(err.message);
  //       formik.resetForm();
  //       helpers.setStatus({ success: false });
  //       helpers.setErrors({ submit: err.message });
  //       helpers.setSubmitting(false);
  //
  //     }
  //     toast.dismiss(loading);
  //     setLoading(false);
  //   }
  //
  // });
  //
  // useEffect(() => {
  //   if (router.query.dialog === 'true') {
  //     setOpen(true);
  //     router.replace('/login', undefined, { shallow: true }); // URL saaf karne ke liye
  //   }
  // }, [router.query]);



  return (
    <>
      <Head>
        <title>
          Login | {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
      </Head>
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    backgroundColor: 'background.paper',*/}
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
      {/*          Login*/}
      {/*        </Typography>*/}
      {/*        <Typography*/}
      {/*          color="text.secondary"*/}
      {/*          variant="body2"*/}
      {/*        >*/}
      {/*          Log in to your account*/}
      {/*          /!*<NextLink*!/*/}
      {/*          /!*  component={NextLink}*!/*/}
      {/*          /!*  href="/register"*!/*/}
      {/*          /!*  underline="hover"*!/*/}
      {/*          /!*  variant="subtitle2"*!/*/}
      {/*          /!*  style={{color: '#add540'}}*!/*/}
      {/*          /!*>*!/*/}
      {/*          /!*  Register*!/*/}
      {/*          /!*</NextLink>*!/*/}
      {/*        </Typography>*/}
      {/*        <Typography*/}
      {/*          color="text.secondary"*/}
      {/*          variant="body2"*/}
      {/*        >*/}
      {/*          Don&apos;t have an account?*/}
      {/*          &nbsp;*/}
      {/*          <NextLink*/}
      {/*            component={NextLink}*/}
      {/*            href="/register"*/}
      {/*            underline="hover"*/}
      {/*            variant="subtitle2"*/}
      {/*            style={{color: '#c165a0'}}*/}
      {/*          >*/}
      {/*            Register*/}
      {/*          </NextLink>*/}
      {/*        </Typography>*/}
      {/*      </Stack>*/}
      {/*      <form*/}
      {/*        noValidate*/}
      {/*        onSubmit={formik.handleSubmit}*/}
      {/*      >*/}
      {/*        <Stack spacing={3}>*/}
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
      {/*        {*/}
      {/*          loading && <Box sx={{ textAlign: 'center', mt: 5 }}><CircularProgress/></Box>*/}
      {/*        }*/}
      {/*        /!*{formik.errors.submit && (*!/*/}
      {/*        /!*  <Typography*!/*/}
      {/*        /!*    color="error"*!/*/}
      {/*        /!*    sx={{ mt: 3 }}*!/*/}
      {/*        /!*    variant="body2"*!/*/}
      {/*        /!*  >*!/*/}
      {/*        /!*    {formik.errors.submit}*!/*/}
      {/*        /!*  </Typography>*!/*/}
      {/*        /!*)}*!/*/}
      {/*        /!*<NextLink href={'/forget'} style={{*!/*/}
      {/*        /!*  display: 'flex',*!/*/}
      {/*        /!*  justifyContent: 'right',*!/*/}
      {/*        /!*  alignItems: 'right',*!/*/}
      {/*        /!*  marginTop: '10px',*!/*/}
      {/*        /!*  color: '#add540'*!/*/}
      {/*        /!*}}>forget password?</NextLink>*!/*/}
      {/*        <Button*/}
      {/*          fullWidth*/}
      {/*          size="large"*/}
      {/*          sx={{ mt: 3 ,'&:hover': {*/}
      {/*              // borderColor: '#dcdbdb', // Keeps same color on hover*/}
      {/*              backgroundColor: '#c165a0' // Optional subtle hover*/}
      {/*            }}}*/}
      {/*          type="submit"*/}
      {/*          variant="contained"*/}
      {/*          disabled={formik.isSubmitting}*/}
      {/*        >*/}
      {/*          Login*/}
      {/*        </Button>*/}
      {/*      </form>*/}
      {/*    </div>*/}
      {/*  </Box>*/}
      {/*</Box>*/}

      {/*<React.Fragment>*/}
      {/*  <BootstrapDialog*/}
      {/*    onClose={handleClose}*/}
      {/*    aria-labelledby="customized-dialog-title"*/}
      {/*    open={open}*/}
      {/*  >*/}
      {/*    <DialogTitle sx={{ m: 0, p: 2  , pb:'0 !important'}} id="customized-dialog-title">*/}
      {/*      Login<br/>*/}
      {/*      <Box sx={{ display: 'flex', width: '100%'}}>*/}
      {/*        <Typography color="text.secondary" variant="body2">*/}
      {/*          Don&apos;t have an account?&nbsp;*/}
      {/*          <Box*/}
      {/*            onClick={handleRegisterClick}*/}
      {/*            component="span"*/}
      {/*            sx={{ color: '#c165a0', cursor: 'pointer', display: 'inline' }}*/}
      {/*          >*/}
      {/*            Register*/}
      {/*          </Box>*/}
      {/*        </Typography>*/}
      {/*      </Box>*/}
      {/*    </DialogTitle>*/}
      {/*    <IconButton*/}
      {/*      aria-label="close"*/}
      {/*      onClick={handleClose}*/}
      {/*      sx={(theme) => ({*/}
      {/*        position: 'absolute',*/}
      {/*        right: 8,*/}
      {/*        top: 8,*/}
      {/*        color: theme.palette.grey[500],*/}
      {/*      })}*/}
      {/*    >*/}
      {/*      <CloseIcon />*/}
      {/*    </IconButton>*/}
      {/*    <form*/}
      {/*      noValidate*/}
      {/*      onSubmit={formik.handleSubmit}*/}
      {/*    >*/}
      {/*    <DialogContent dividers sx={{pb:'0 !important', pt:'0 !important'}}>*/}
      {/*          <TextField*/}
      {/*            sx={{mt:1}}*/}
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
      {/*            sx={{mt:2}}*/}
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
      {/*        {*/}
      {/*          loading && <Box sx={{ textAlign: 'center', mt: 3 }}><CircularProgress/></Box>*/}
      {/*        }*/}
      {/*    </DialogContent>*/}
      {/*    <DialogActions >*/}
      {/*      /!*<Button autoFocus onClick={handleClose}>*!/*/}
      {/*        <Button*/}
      {/*          // fullWidth*/}
      {/*          size="large"*/}
      {/*          sx={{ '&:hover': {*/}
      {/*              // borderColor: '#dcdbdb', // Keeps same color on hover*/}
      {/*              backgroundColor: '#c165a0' // Optional subtle hover*/}
      {/*            }}}*/}
      {/*          type="submit"*/}
      {/*          variant="contained"*/}
      {/*          disabled={formik.isSubmitting}*/}
      {/*        >*/}
      {/*          Login*/}
      {/*        </Button>*/}
      {/*      /!*</Button>*!/*/}
      {/*    </DialogActions>*/}
      {/*  </form>*/}
      {/*  </BootstrapDialog>*/}
      {/*</React.Fragment>*/}


    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
