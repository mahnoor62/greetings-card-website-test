import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
  Container,
  Collapse,
  Typography,
  Drawer,
  TextField,
  CircularProgress,
  Avatar,
  Popover,
  Divider,
  MenuList,
  MenuItem
} from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Link from 'next/link';
import * as React from 'react';
import { useRef } from 'react';
import { useFormik } from 'formik';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import GavelIcon from '@mui/icons-material/Gavel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import LoginIcon from '@mui/icons-material/Login';
import PhoneIcon from '@mui/icons-material/Phone';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useLoginModal } from '../../contexts/loginContext';
import { useVerifyModal } from '../../contexts/verifyContext';
import { useResetModal } from '../../contexts/reset-context';
import { useRegisterModal } from '../../contexts/register-context';
import { useZindexModal } from '../../contexts/zindex-control';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { signIn, signOut, useSession } from 'next-auth/react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Layout as AuthLayout } from '../auth/layout';
import { TopNav } from '../dashboard/top-nav';
import { Layout } from './layout';

const TOP_NAV_HEIGHT = 64;
let WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export const LandingNav = () => {
  const { data: session, status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showResetConfirmPassword, setShowResetConfirmPassword] = useState(false);

  const hasCalledRef = useRef(false);
  const googleClickedRef = useRef(false);

  const hasCalledSignUpRef = useRef(false);
  const googleClickedSignUpRef = useRef(false);

  const auth = useAuth();
  const router = useRouter();
  const calledOnce = useRef(false);
  const [value, setValue] = React.useState('1');

  const pathname = router.pathname;
  const isContact = pathname === '#contact';
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const [toggle, setToggle] = useState(false);

  const [loading, setLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const isMounted = useMounted();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickAvatar = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAnchorEl(null);
  };

  const openAvatar = Boolean(anchorEl);
  const id = openAvatar ? 'simple-popover' : undefined;

  const { open, closeLogin: handleClose, openLogin: handleClickOpen, setOpen } = useLoginModal();
  const { gifZIndex, setGifZIndex } = useZindexModal();
  const {
    openRegister, handleRegisterOpen, handleRegisterClose, setOpenRegister
  } = useRegisterModal();

  const {
    verifyOpen,
    openVerify,
    handleVerifyClose: closeVerify,
    verifyToken, setVerifyOpen
  } = useVerifyModal();

  const { resetOpen, handleOpenReset, handleCloseReset, setResetOpen } = useResetModal();
  const {
    SignIn, user, isAuthenticated, signUp, loginUserData,
    setLoginUserData,
    googleSignInDone,
    signUpUserData,
    setSignUpUserData,
    setGoogleSignInDone
  } = useAuth();

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const toggleDrawer = (state) => () => {
    setToggle(state);
  };

  const handleVerifyClose = () => {
    setVerifyOpen(false);
    forgetFormik.resetForm();
    setOpen(false);
    // setResetOpen(true);
  };

  const handleSignOut = useCallback(
    () => {
      handleCloseAvatar?.();
      auth.SignOut();
      // window.location.reload();
      router.push('/');
      hasCalledRef.current = false;
      hasCalledSignUpRef.current = false;
    },
    [handleCloseAvatar, auth, router]
  );

  let webUrl = '#';
  let WEB_URL = '';
  if (pathname !== '/') {
    webUrl = '/';
    WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;

  }

  // const phoneRegExp = /^(\+?\d{1,3})?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;
  const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const registerFormik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      submit: null
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Email is invalid').required('Email is required'),
      password: Yup.string()
                   .matches(
                     passwordRules,
                     'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
                   )
                   .required('Password is required'),

      confirmPassword: Yup.string()
                          .oneOf([Yup.ref('password'), null], 'Passwords must match')
                          .required('Confirm password is required')
      // phoneNumber: Yup.string()
      //                 .matches(phoneRegExp, 'Phone number is not valid')
      //                 .required('Phone number is required'),
      // address: Yup.string().required('Address is required'),
      // deliveryAddress: Yup.string().required('Delivery address is required')
    }),

    onSubmit: async (values, helpers) => {
      const loading = toast.loading('Registration in process...', { duration: 5000 });
      setLoading(true);
      try {
        await signUp({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          // phoneNumber: values.phoneNumber,
          password: values.password,
          confirmPassword: values.confirmPassword
          // address: values.address,
          // deliveryAddress: values.deliveryAddress

        });
        toast.success('Please check your email for verification', { duration: 5000 });
        // setRegisterOpen(false);
        registerFormik.resetForm(); // Reset the form immediately
        handleRegisterClose();
        handleClickOpen();
      } catch (err) {
        toast.error(err.message, { duration: 5000 });
        // setRegisterOpen(false)
        registerFormik.resetForm();
        console.error(err);
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
      toast.dismiss(loading);
      setLoading(false);
      // setOpen(false);

    }
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string()
                   .min(6, 'Password must be at least 6 characters')
                   .required('Password is required')

    }),
    onSubmit: async (values, helpers) => {
      const loading = toast.loading(
        'Login is in process......',
        { duration: 15000 });
      // const loading = toast.loading('login in process...');
      setLoading(true);
      try {
        await SignIn({ email: values.email, password: values.password });

        formik.resetForm(); // Reset the form immediately
        // handleVerifyClose();
        handleClose();
      } catch (err) {
        console.log('err', err);
        toast.error(err.message, { duration: 5000 });
        formik.resetForm();
        // setOpen(false);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);

      }
      toast.dismiss(loading);
      setLoading(false);
    }

  });

  const forgetFormik = useFormik({
    initialValues: {
      email: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required')
    }),
    onSubmit: async (values, helpers) => {
      // const loading = toast.loading('Verification in process...');

      setPasswordLoading(true);
      try {

        const response = await axios.post(API_BASE_URL + '/api/user/forget',
          {
            email: values.email
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        toast.success(
          'Reset password verification code send to your email.please check your inbox! ');
        forgetFormik.resetForm();
        handleOpenReset();
        setPasswordLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
        forgetFormik.resetForm();
        setPasswordLoading(false);
      }
    }
  });

  // // reset password
  const resetFormik = useFormik({
    initialValues: {
      code: '',
      password: '',
      confirmPassword: '',
      submit: null
    },
    validationSchema: Yup.object({
      code: Yup.string().required('Reset password code is required'),
      password: Yup.string()
                   .matches(
                     passwordRules,
                     'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
                   )
                   .required('Password is required'),

      confirmPassword: Yup.string()
                          .oneOf([Yup.ref('password'), null], 'Passwords must match')
                          .required('Confirm password is required')
    }),
    onSubmit: async (values, helpers) => {
      // const loading = toast.loading('Verification in process...');

      setPasswordLoading(true);
      try {

        const response = await axios.post(API_BASE_URL + '/api/user/reset',
          {
            code: values.code,
            password: values.password,
            confirmPassword: values.confirmPassword
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        toast.success('Password Reset Successfully....');
        resetFormik.resetForm();
        handleVerifyClose();
        handleCloseReset();
        // localStorage.setItem('token', response.data.data.token);
        setPasswordLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
        resetFormik.resetForm();
        setPasswordLoading(false);
      }
    }
  });

  useEffect(() => {
    if (status !== 'authenticated') {
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch('/api/secure-data');
        const data = await res.json();
        // setSignUpUserData(data.user);
        setLoginUserData(data.user);
      } catch (error) {
        console.log('Error fetching secure data', error);
      }
    };

    fetchUser();
  }, [status]);

  // useEffect(() => {
  //   const googleSignClicked = localStorage.getItem('googleSignUpClicked');
  //   const hasCalledSign = localStorage.getItem('hasCalledSignUp');
  //
  //   if (
  //     status !== 'authenticated' ||
  //     !loginUserData?.email ||
  //     googleSignClicked !== 'true' ||
  //     hasCalledSign === 'true'
  //   ) {
  //     return;
  //   }
  //   const callBackendAfterSignUp = async () => {
  //     try {
  //       const response = await axios.post(`${API_BASE_URL}/api/user/google-signup`, {
  //         name: loginUserData.name,
  //         email: loginUserData.email
  //       });
  //
  //       const token = response.data.data.token;
  //       localStorage.setItem('token', token);
  //
  //       console.log('response', response);
  //
  //       localStorage.setItem('hasCalledSignUp', 'true');
  //       localStorage.removeItem('googleSignUpClicked');
  //       await router.push('/');
  //       window.location.reload();
  //       // toast.success('Sign up successfully');
  //     } catch (error) {
  //       // toast.error(error?.response?.data?.msg)
  //       console.log('Error in Google sign-up', error.response.data.msg);
  //     }
  //   };
  //
  //   callBackendAfterSignUp();
  // }, [signUpUserData, status]);

  useEffect(() => {
    const googleClicked = localStorage.getItem('googleClicked');
    const hasCalled = localStorage.getItem('hasCalled');

    if (
      status !== 'authenticated' ||
      !loginUserData?.email ||
      googleClicked !== 'true' ||
      hasCalled === 'true'
    ) {
      return;
    }

    const callBackendAfterLogin = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/user/google-signin`, {
          name: loginUserData.name,
          email: loginUserData.email
        });

        const token = response.data.data.token;
        localStorage.setItem('token', token);

        // ✅ Block future calls and clear click flag
        localStorage.setItem('hasCalled', 'true');
        localStorage.removeItem('googleClicked');
        await router.push('/');
        window.location.reload();
        // toast.success('Sign in successfully');
      } catch (error) {
        // toast.error(error?.response?.data?.msg)
        console.log('Error in Google sign-in', error.response.data.msg);
      }
    };

    callBackendAfterLogin();
  }, [loginUserData, status]);

  const handleMyCards = () => {

    handleCloseAvatar();
    router.push('/');
  };

  // useEffect(() => {
  //   const dropdown = document.getElementById('userDropdownBtn');
  //
  //   dropdown.addEventListener('show.bs.dropdown', () => setGifZIndex(800));
  //   dropdown.addEventListener('hide.bs.dropdown', () => setGifZIndex(1300));
  //
  //   return () => {
  //     dropdown.removeEventListener('show.bs.dropdown', () => setGifZIndex(800));
  //     dropdown.removeEventListener('hide.bs.dropdown', () => setGifZIndex(1300));
  //   };
  // }, []);

  useEffect(() => {
    const dropdown = document.getElementById('userDropdownBtn');
    if (!dropdown) return;

    const showHandler = () => setGifZIndex(800);
    const hideHandler = () => setGifZIndex(1300);

    dropdown.addEventListener('show.bs.dropdown', showHandler);
    dropdown.addEventListener('hide.bs.dropdown', hideHandler);

    return () => {
      dropdown.removeEventListener('show.bs.dropdown', showHandler);
      dropdown.removeEventListener('hide.bs.dropdown', hideHandler);
    };
  }, []);


  return (
    <>
      <Box
        // component="header"
        sx={{
          // display:isContact ? 'none':'block',
          // bgcolor:'#d8c0ca',
          backgroundColor: '#1a1d25 !important',
          // boxShadow: 'none',
          zIndex: 1000,
          // zIndex: (theme) => theme.zIndex.appBar,
          width: '100% !important',
          position: 'fixed'
          // pt: 0,
          // top: 0
        }}
      >
        {lgUp ? (
          <Box sx={{ width: '100% !important', zIndex: 1000, bgcolor: 'white' }}>
            <Box
              sx={{
                // bgcolor: 'white',
                display: 'flex',
                pl: '3%',
                pr: '3%',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100% !important',
                backgroundColor: '#1a1d25 !important'
              }}
            >
              <NextLink href="/" passHref legacyBehavior>
                <Box sx={{ width: 350, height: '1005', display: 'flex', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src={`${WEB_URL}/logo3.png`}
                    alt="logo"
                    sx={{
                      // bgcolor: 'yellow',
                      width: '35%',
                      pb: 2,
                      height: 'auto'
                    }}
                  /></Box>
              </NextLink>
              <Typography
                gutterBottom
                variant="h3"
                // padding="10px"
                sx={{
                  // fontFamily: 'Calibri !important',
                  // bgcolor: 'red',
                  // textAlign: 'center',
                  fontSize: { md: '45px', xs: '20px' },
                  fontWeight: 'bolder',
                  pt: 1,
                  // ml: 10,
                  color: '#c09b9b'
                }}
              >
                Greetings Card
              </Typography>
              <Box sx={{
                width: 350,
                // bgcolor: 'yellow',
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center',
                zIndex: 1000
              }}>
                <Link href={`${webUrl}contact`} passHref scroll={true}>
                  <Button
                    variant="outlined"
                    sx={{
                      // width:100,
                      borderRadius: '20px !important',
                      borderColor: '#333333 !important',
                      color: '#dcdbdb', // Optional: button text color same as border
                      '&:hover': {
                        borderColor: '#dcdbdb', // Keeps same color on hover
                        backgroundColor: 'rgba(220, 219, 219, 0.1)' // Optional subtle hover
                      }
                    }}
                  >
                    Contact Us
                  </Button>

                </Link>
                {
                  !isAuthenticated && (
                    <>
                      <Button
                        variant="contained"
                        onClick={handleRegisterOpen}
                        sx={{
                          // px: 3,
                          width: 100,
                          borderRadius: '20px !important',
                          backgroundColor: '#c165a0',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#c165a0',
                            color: 'white'
                          }
                        }}
                      >
                        Sign Up
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleClickOpen}
                        sx={{
                          width: 100,
                          // px: 3,
                          borderRadius: '20px !important',
                          backgroundColor: '#c165a0',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#c165a0',
                            color: 'white'
                          }
                        }}
                      >
                        Log In
                      </Button>
                    </>
                  )
                }

                {
                  isAuthenticated && (
                    <>

                      <Button
                        id="userDropdownBtn"
                        className="btn btn-dark dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        sx={{
                          width: 100,
                          borderRadius: '20px !important',
                          backgroundColor: '#c165a0',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#c165a0',
                            color: 'white'
                          },
                          '&.show': {
                            backgroundColor: '#c165a0 !important',
                            color: 'white !important'
                          },
                          '&:focus': {
                            backgroundColor: '#c165a0 !important',
                            color: 'white !important',
                            boxShadow: 'none'
                          },
                          '&:active': {
                            backgroundColor: '#c165a0 !important',
                            color: 'white !important'
                            // boxShadow: 'none'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                          }}
                        >
                          <Box
                            sx={{
                              maxWidth: 60,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}
                          >
                            {auth.user && auth.user.firstName}
                          </Box>
                          {/*<ArrowDropDownIcon sx={{ color: 'white' }} />*/}
                        </Box>
                      </Button>

                      <ul className="dropdown-menu" aria-labelledby="userDropdownBtn">
                        <li>
                          <button className="dropdown-item" onClick={handleMyCards}>
                            My Cards
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item">
                            My Account
                          </button>
                        </li>
                        {/*<li><hr className="dropdown-divider" /></li>*/}
                        <li>
                          <button className="dropdown-item" onClick={handleSignOut}>
                            Logout
                          </button>
                        </li>
                      </ul>

                    </>
                  )
                }


              </Box>
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', px: 2 , height:{test:70, xs:50} }}>

            {/* User Dropdown on the LEFT */}
            {isAuthenticated && (
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <Button
                  onClick={() => setGifZIndex(800)}
                  onBlur={() => setGifZIndex(1300)}
                  id="userDropdownBtn"
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  sx={{
                    p: 0.5,
                    width: 100,
                    borderRadius: '20px !important',
                    backgroundColor: '#c165a0',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#c165a0',
                      color: 'white'
                    },
                    '&.show': {
                      backgroundColor: '#c165a0 !important',
                      color: 'white !important'
                    },
                    '&:focus': {
                      backgroundColor: '#c165a0 !important',
                      color: 'white !important',
                      boxShadow: 'none'
                    },
                    '&:active': {
                      backgroundColor: '#c165a0 !important',
                      color: 'white !important'
                    }
                    // , zIndex: 1500, position:'absolute'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        maxWidth: 60,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {auth.user && auth.user.firstName}
                    </Box>
                  </Box>
                </Button>

                {/* Dropdown menu */}
                <ul className="dropdown-menu" aria-labelledby="userDropdownBtn">
                  <li><button className="dropdown-item" onClick={handleMyCards}>My Cards</button></li>
                  <li><button className="dropdown-item">My Account</button></li>
                  <li><button className="dropdown-item" onClick={handleSignOut}>Logout</button></li>
                </ul>
              </Box>
            )}

            {/* Menu Icon - Always on Right */}
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ color: 'white', ml: 'auto' }}  // 👈 This pushes it to the right
            >
              <SvgIcon fontSize="large">
                <Bars3Icon />
              </SvgIcon>
            </IconButton>

          </Box>

        )}
        <Drawer
          anchor="right"
          sx={{
            zIndex: 1400,
            '& .MuiDrawer-paper': {
              // bgcolor: '#d8c0ca',
              backgroundColor: '#1a1d25 !important'
              // zIndex:5000
            }
          }}
          open={toggle}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: {xs: 250, test:350 , md:250}, p: 2 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <NextLink href="/" passHref legacyBehavior>
              <img src={`${WEB_URL}/logo3.png`} alt="Logo"
                   style={{ height: 50, marginTop: '20px' }}/></NextLink>
            <Box
              sx={{
                mt: 5,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexDirection: 'column'
              }}
            >

              {
                !isAuthenticated && (
                  <>
                    <Button
                      onClick={handleRegisterOpen}
                      sx={{
                        px: 3,
                        borderRadius: '20px !important',
                        backgroundColor: '#c165a0',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#c165a0',
                          color: 'white'
                        }
                      }}
                    >
                      Sign Up
                    </Button>
                    <Button
                      onClick={handleClickOpen}
                      sx={{
                        px: 3,
                        borderRadius: '20px !important',
                        backgroundColor: '#c165a0',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#c165a0',
                          color: 'white'
                        }
                      }}
                    >
                      Log In
                    </Button>
                  </>
                )
              }
              <Link href={`${webUrl}contact`} passHref scroll={true}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '100%',
                    borderRadius: '20px !important',
                    borderColor: '#333333 !important',
                    color: '#dcdbdb', // Optional: button text color same as border
                    '&:hover': {
                      borderColor: '#dcdbdb', // Keeps same color on hover
                      backgroundColor: 'rgba(220, 219, 219, 0.1)' // Optional subtle hover
                    }
                  }}
                >
                  Contact Us
                </Button>

              </Link>


            </Box>
          </Box>
        </Drawer>
      </Box>
      {/*//register*/}

      <React.Fragment>
        <BootstrapDialog
          onClose={handleRegisterClose}
          aria-labelledby="customized-dialog-title"
          open={openRegister}
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: '500px' // Adjust to preferred fixed width
            }
          }}

        >
          <DialogTitle sx={{ m: 0, p: 2, pb: '0 !important', pt: '0 !important' }}
                       id="customized-dialog-title">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <IconButton
                aria-label="close"
                onClick={handleRegisterClose}
                sx={(theme) => ({
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  color: theme.palette.grey[500]
                })}
              >
                <CloseIcon/>
              </IconButton>
              <form
                noValidate
                onSubmit={registerFormik.handleSubmit}
              >
                <DialogContent sx={{
                  mt: 1, mb: 1,
                  pt: '0 !important',
                  pb: '0 !important',
                  pl: '0 !important',
                  pr: '0 !important',
                  width: '100%'
                }}>
                  <Typography variant="h6" sx={{ mb: 2, color: '#6C737F', pl: 0.3 }}>Sign
                    Up</Typography>
                  <Typography color="text.secondary" variant="body2" sx={{ pl: 0.3 }}>
                    {/* Please provide sign up details. */}
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    mt: 1,
                    flexDirection: { md: 'row', xs: 'column' },
                    // justifyContent: 'center',
                    gap: 1,
                    // alignItems: 'center',
                    width: '100%'
                  }}>

                    <TextField
                      sx={{ p: 0.3 }}
                      error={!!(registerFormik.touched.firstName
                        && registerFormik.errors.firstName)}
                      fullWidth
                      helperText={registerFormik.touched.firstName
                        && registerFormik.errors.firstName}
                      label="First Name"
                      name="firstName"
                      onBlur={registerFormik.handleBlur}
                      onChange={registerFormik.handleChange}
                      value={registerFormik.values.firstName}
                    />
                    <TextField
                      sx={{ p: 0.3 }}
                      error={!!(registerFormik.touched.lastName
                        && registerFormik.errors.lastName)}
                      fullWidth
                      helperText={registerFormik.touched.lastName
                        && registerFormik.errors.lastName}
                      label="Last Name"
                      name="lastName"
                      onBlur={registerFormik.handleBlur}
                      onChange={registerFormik.handleChange}
                      value={registerFormik.values.lastName}
                    />
                  < /Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                    // justifyContent: 'center',
                    gap: 1,
                    mt: 1,
                    // alignItems: 'center',
                    width: '100%'
                  }}>

                    <TextField
                      sx={{ p: 0.3 }}
                      error={!!(registerFormik.touched.email && registerFormik.errors.email)}
                      fullWidth
                      helperText={registerFormik.touched.email && registerFormik.errors.email}
                      label="Email Address"
                      name="email"
                      onBlur={registerFormik.handleBlur}
                      onChange={registerFormik.handleChange}
                      type="email"
                      value={registerFormik.values.email}
                    />
                  < /Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                    // justifyContent: 'center',
                    gap: 1,
                    mt: 1,
                    // alignItems: 'center',
                    width: '100%'
                  }}>

                    <TextField
                      sx={{ p: 0.3 }}
                      error={!!(registerFormik.touched.password
                        && registerFormik.errors.password)}
                      fullWidth
                      helperText={registerFormik.touched.password
                        && registerFormik.errors.password}
                      label="Password"
                      name="password"
                      onBlur={registerFormik.handleBlur}
                      onChange={registerFormik.handleChange}
                      type={showPassword ? 'text' : 'password'}
                      value={registerFormik.values.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword((prev) => !prev)}
                              edge="end"
                            >
                              {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                    <TextField
                      sx={{ p: 0.3 }}
                      error={!!(registerFormik.touched.confirmPassword
                        && registerFormik.errors.confirmPassword)}
                      fullWidth
                      helperText={registerFormik.touched.confirmPassword
                        && registerFormik.errors.confirmPassword}
                      label="Confirm Password"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      onBlur={registerFormik.handleBlur}
                      onChange={registerFormik.handleChange}
                      value={registerFormik.values.confirmPassword}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowConfirmPassword((prev) => !prev)}
                              edge="end"
                            >
                              {showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  < /Box>
                </DialogContent>
                <DialogActions sx={{
                  pr: '0 !important',
                  pl: '0 !important'
                }}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                  }}>
                    <Button
                      fullWidth
                      size="large"
                      // sx={{ mt: 3 }}
                      type="submit"
                      //disabled button
                      disabled={registerFormik.isSubmitting}
                      variant="contained"
                    >
                      Sign Up
                    </Button>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mt: 2,
                      ml: '0 !important',
                      width: '100%'
                    }}>
                      <Box sx={{
                        flex: 1,
                        height: '1px',
                        backgroundColor: 'rgba(0,0,0,0.3)'
                      }}/>
                      <Typography sx={{ mx: 2, color: 'text.secondary' }}>or</Typography>
                      <Box sx={{
                        flex: 1,
                        height: '1px',
                        backgroundColor: 'rgba(0,0,0,0.3)'
                      }}/>
                    </Box>

                    <Button
                      // fullWidth
                      // size="large"
                      onClick={() => {
                        localStorage.setItem('googleClicked', 'true'); // ✅ survives reload
                        localStorage.removeItem('hasCalled'); // reset call flag
                        signIn('google');
                      }}
                      // onClick={() => {
                      //   localStorage.setItem('googleSignUpClicked', 'true'); // ✅ survives reload
                      //   localStorage.removeItem('hasCalledSignUp'); // reset call flag
                      //   signIn('google');
                      // }}

                      variant="outlined"
                      // onClick={handleLogin}
                      // type="submit"
                      sx={{
                        ml: '0 !important',
                        mt: 2,
                        mb: 2,
                        padding: '8px 20px',
                        // border: '1px solid #AD2F91',
                        color: '#AD2F91',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: { md: 3, xs: 1 },
                        '&:hover': {
                          // backgroundColor: 'transparent',
                          // border: '1px solid #AD2F91',
                          color: '#AD2F91'
                        }
                      }}
                      // disabled={googleButtonDisabled}
                      // onClick={() => handleGoogleSignIn()}
                    >
                      <img src={`${WEB_URL}/google.png`} width="30px"/>
                      <Typography>Sign Up With Google</Typography>
                    </Button>

                  </Box>
                </DialogActions>
              </form>
            </Box>

          </DialogTitle>


        </BootstrapDialog>
      </React.Fragment>


      {/*login*/
      }

      <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: '500px' // Adjust to preferred fixed width
            }
          }}

        >
          <DialogTitle sx={{ m: 0, p: 2, pb: '0 !important', pt: '0 !important' }}
                       id="customized-dialog-title">

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Box sx={{
                display: 'flex', width: '100%', justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography variant="h6" sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#6C737F', pl: 0.3
                }}>Sign In</Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={(theme) => ({
                    // position: 'absolute',
                    // right: 0,
                    // top: 3,
                    color: theme.palette.grey[500]
                  })}
                >
                  <CloseIcon/>
                </IconButton>
              </Box>
              {/* <Typography color="text.secondary" variant="body2" sx={{ pl: 0.3 }}>
               Please provide your email to sign in.
               </Typography> */}
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Box dividers sx={{
                  mt: 1, mb: 1,
                  pb: '1 !important',
                  pt: '1 !important',
                  pl: '0 !important',
                  pr: '0 !important',
                  width: '100%',
                  overflowY: 'hidden'
                }}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column', width: '100%', gap: 1 }
                  }}>
                    <TextField
                      sx={{ p: 0.3 }}
                      error={!!(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="Email Address"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                      InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                      sx={{ p: 0.3, mt: { xs: 1, md: 0 } }}
                      error={!!(formik.touched.password && formik.errors.password)}
                      fullWidth
                      helperText={formik.touched.password && formik.errors.password}
                      label="Password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type={showLoginPassword ? 'text' : 'password'}
                      value={formik.values.password}
                      InputLabelProps={{ shrink: true }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowLoginPassword((prev) => !prev)}
                              edge="end"
                            >
                              {showLoginPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    /></Box>
                  <Typography variant="body2" sx={{
                    p: 0.3,
                    textAlign: 'right',
                    cursor: 'pointer',
                    color: '#6C737F'
                  }} onClick={() => {
                    setVerifyOpen(true);
                    handleClose();
                  }}>Forget Password?</Typography>
                  {
                    loading && <Box
                      sx={{ textAlign: 'center', mt: 3 }}><CircularProgress/></Box>
                  }
                </Box>
                <Box sx={{
                  pr: '0 !important',
                  pl: '0 !important',
                  display: 'flex',
                  flexDirection: 'column'
                  // mb: 1
                }}>
                  {/*<Button autoFocus onClick={handleClose}>*/}
                  {/*<Box sx={{*/}
                  {/*  display: 'flex',*/}
                  {/*  justifyContent: 'flex-end',*/}
                  {/*  alignItems: 'center',*/}
                  {/*  width: '100%'*/}
                  {/*}}>*/}
                  <Button
                    fullWidth
                    size="large"
                    sx={{
                      '&:hover': {
                        // borderColor: '#dcdbdb', // Keeps same color on hover
                        backgroundColor: '#c165a0' // Optional subtle hover
                      }
                    }}
                    type="submit"
                    variant="contained"
                    disabled={formik.isSubmitting}
                  >
                    Sign In
                  </Button>
                  {/*</Box>*/}
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 2,
                    ml: '0 !important',
                    width: '100%'
                  }}>
                    <Box sx={{
                      flex: 1,
                      height: '1px',
                      backgroundColor: 'rgba(0,0,0,0.3)'
                    }}/>
                    <Typography sx={{ mx: 2, color: 'text.secondary' }}>or</Typography>
                    <Box sx={{
                      flex: 1,
                      height: '1px',
                      backgroundColor: 'rgba(0,0,0,0.3)'
                    }}/>
                  </Box>

                  <Button
                    // fullWidth
                    // size="large"
                    onClick={() => {
                      localStorage.setItem('googleClicked', 'true'); // ✅ survives reload
                      localStorage.removeItem('hasCalled'); // reset call flag
                      signIn('google');
                    }}

                    variant="outlined"
                    // onClick={handleLogin}
                    // type="submit"
                    sx={{
                      ml: '0 !important',
                      mt: 2,
                      mb: 2,
                      padding: '8px 20px',
                      // border: '1px solid #AD2F91',
                      color: '#AD2F91',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: { md: 3, xs: 1 },
                      '&:hover': {
                        // backgroundColor: 'transparent',
                        // border: '1px solid #AD2F91',
                        color: '#AD2F91'
                      }
                    }}
                    // disabled={googleButtonDisabled}
                    // onClick={() => handleGoogleSignIn()}
                  >
                    <img src={`${WEB_URL}/google.png`} width="30px"/>
                    <Typography>Sign In With Google</Typography>
                  </Button>

                </Box>
              </form>

            </Box>

          </DialogTitle>


        </BootstrapDialog>
      </React.Fragment>


      {/*froget password */
      }
      <React.Fragment>
        <BootstrapDialog
          onClose={handleVerifyClose}
          aria-labelledby="customized-dialog-title"
          open={verifyOpen}
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: '500px' // Adjust to preferred fixed width
            }
          }}
        >
          <DialogTitle sx={{ m: 0, p: 2, pb: '0 !important' }} id="customized-dialog-title">
            <Typography variant="h6" sx={{ mb: 1, color: '#6C737F' }}>Forget Password</Typography>

            <Typography
              color="text.secondary"
              variant="body2"
            >
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{
                  mb: 1,
                  width: '100%',
                  // bgcolor:'red',
                  whiteSpace: { md: 'nowrap', xs: 'wrap' },   // prevent wrapping
                  // overflow: 'hidden',     // hide overflow
                  textOverflow: 'ellipsis', // optional: add ... if text is too long
                  pl: 0
                }}
              >
                Please enter the email to send reset password link.
              </Typography>

            </Typography>
          </DialogTitle>

          <form
            noValidate
            onSubmit={forgetFormik.handleSubmit}
          >
            <DialogContent dividers sx={{ pb: '0 !important', pt: '0 !important' }}>
              <TextField
                sx={{ mt: 1, mb: 1 }}
                error={!!(forgetFormik.touched.email && forgetFormik.errors.email)}
                fullWidth
                helperText={forgetFormik.touched.email && forgetFormik.errors.email}
                label="Email Address"
                name="email"
                onBlur={forgetFormik.handleBlur}
                onChange={forgetFormik.handleChange}
                type="email"
                value={forgetFormik.values.email}
                InputLabelProps={{ shrink: true }}
              />
              {
                passwordLoading && <Box
                  sx={{ textAlign: 'center', mt: 5 }}><CircularProgress/></Box>
              }
              {forgetFormik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 }}
                  variant="body2"
                >
                  {forgetFormik.errors.submit}
                </Typography>
              )}
              <DialogActions>
                <Button
                  size="large"
                  sx={{
                    '&:hover': {
                      // borderColor: '#dcdbdb', // Keeps same color on hover
                      backgroundColor: '#c165a0' // Optional subtle hover
                    }
                  }}
                  type="submit"
                  variant="contained"
                  disabled={forgetFormik.isSubmitting}
                >
                  Send password reset link
                </Button>
              </DialogActions>
            </DialogContent>
          </form>
        </BootstrapDialog>
      </React.Fragment>


      {/*reset password */
      }
      <React.Fragment>
        <BootstrapDialog
          onClose={handleCloseReset}
          aria-labelledby="customized-dialog-title"
          open={resetOpen}
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: '500px' // Adjust to preferred fixed width
            }
          }}
        >
          <DialogTitle sx={{ m: 0, p: 2, pb: '0 !important' }} id="customized-dialog-title">
            <Typography variant="h6" sx={{ mb: 1, color: '#6C737F' }}>Reset Password</Typography>

            <Typography
              color="text.secondary"
              variant="body2"
            >
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{
                  mb: 1,
                  width: '100%',
                  // bgcolor:'red',
                  whiteSpace: { md: 'nowrap', xs: 'wrap' },   // prevent wrapping
                  // overflow: 'hidden',     // hide overflow
                  textOverflow: 'ellipsis', // optional: add ... if text is too long
                  pl: 0
                }}
              >
                Please reset your password.
              </Typography>

            </Typography>
          </DialogTitle>

          <form
            noValidate
            onSubmit={resetFormik.handleSubmit}
          >
            <DialogContent dividers sx={{ pb: '0 !important', pt: '0 !important' }}>
              <TextField
                sx={{ mt: 2 }}
                error={!!(resetFormik.touched.code && resetFormik.errors.code)}
                fullWidth
                helperText={resetFormik.touched.code && resetFormik.errors.code}
                label="Enter Reset Password Code"
                name="code"
                onBlur={resetFormik.handleBlur}
                onChange={resetFormik.handleChange}
                type="text"
                value={resetFormik.values.code}
                InputLabelProps={{ shrink: true }}
              />
              <Box sx={{
                display: 'flex', flexDirection: { md: 'row', xs: 'column' }, gap: 1, mt: 2, mb: 2
              }}>
                <TextField
                  // sx={{ mt: 2 }}
                  error={!!(resetFormik.touched.password && resetFormik.errors.password)}
                  fullWidth
                  helperText={resetFormik.touched.password && resetFormik.errors.password}
                  label="Enter Password"
                  name="password"
                  onBlur={resetFormik.handleBlur}
                  onChange={resetFormik.handleChange}
                  type={showResetPassword ? 'text' : 'password'}
                  value={resetFormik.values.password}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowResetPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showResetPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  // sx={{ mt: 2 }}
                  error={!!(resetFormik.touched.confirmPassword
                    && resetFormik.errors.confirmPassword)}
                  fullWidth
                  helperText={resetFormik.touched.confirmPassword
                    && resetFormik.errors.confirmPassword}
                  label="Enter Confirm Password"
                  name="confirmPassword"
                  onBlur={resetFormik.handleBlur}
                  onChange={resetFormik.handleChange}
                  type={showResetConfirmPassword ? 'text' : 'password'}
                  value={resetFormik.values.confirmPassword}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowResetConfirmPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showResetConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

              </Box>
              {
                passwordLoading && <Box
                  sx={{ textAlign: 'center', mt: 5 }}><CircularProgress/></Box>
              }
              {resetFormik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 }}
                  variant="body2"
                >
                  {resetFormik.errors.submit}
                </Typography>
              )}
              <DialogActions>
                <Button
                  size="large"
                  sx={{
                    '&:hover': {
                      // borderColor: '#dcdbdb', // Keeps same color on hover
                      backgroundColor: '#c165a0' // Optional subtle hover
                    }
                  }}
                  type="submit"
                  variant="contained"
                  disabled={resetFormik.isSubmitting}
                >
                  Reset Password
                </Button>
              </DialogActions>
            </DialogContent>
          </form>
        </BootstrapDialog>
      </React.Fragment>


      {/*authenticated avatar pop up*/}


    </>
  );
};
// LandingNav.getLayout = (page) => (
//   <Layout>
//     {page}
//   </Layout>
// );

export default LandingNav;


