import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { Button, SvgIcon, useMediaQuery, Collapse, Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import DiamondTwoToneIcon from '@mui/icons-material/DiamondTwoTone';
import GridOnTwoToneIcon from '@mui/icons-material/GridOnTwoTone';
import { useAuth } from '../hooks/use-auth';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import TitleIcon from '@mui/icons-material/Title';
import LandingNav from '../layouts/landing-nav/landingLayout';
import UpdateBackgroundColor from '../components/demo/bgColor';
import UpdateBackgroundImage from '../components/demo/bgImage';
import UpdateButtonColor from '../components/demo/buttoncolor';
import UpdateLogo from '../components/demo/logo';
import UpdateTitle from '../components/demo/title';
import UpdateBackgroundMusic from '../components/demo/music';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_WEB_URL;

export default function Page() {

  const { user } = useAuth();
  const route = useRouter();
  const { game: slug, name } = route.query;
  const router = useRouter();
  const { game } = router.query;
  //data coming from transaction api
  const [data, setData] = useState({});
  // popup stat
  const [open, setOpen] = useState(false);
  const [bar, setBar] = React.useState(false);
  const gameIframe = useRef(null);
  //accordan :
  const [expanded, setExpanded] = useState('false');

  const inputRefPublic = useRef(null);
  const inputRefLeaderboard = useRef(null);
//mdeia query for large screen
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //accordan functions:
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&::before': {
      display: 'none'
    }
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }}/>}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1)
    }
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
  }));

  const temp_user_data = async () => {
    try {
      const userId = window.localStorage.getItem('tempUserId');
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await axios.post(API_BASE_URL
        + `/api/temporary-user/user-customization`,
        {
          userId,
          slug: game
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('response if temp', response);
      const data = response.data.data;
      data.backgroundImage = data.backgroundImage && API_BASE_URL + '/' + data.backgroundImage;
      data.logoImage = data.logoImage && API_BASE_URL + '/' + data.logoImage;
      data.slug = slug;
      data.title = data.title ? data.title : game;
      data.backgroundColor = data.backgroundColor;
      data.backgroundMusic = data.backgroundMusic && API_BASE_URL + '/' + data.backgroundMusic;
      data.mode = 'editor';
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    temp_user_data();
  }, []);

  useEffect(() => {
    gameOnLoad();
  }, [data]);
  const gameOnLoad = () => {
    // to get iframe instance from unity
    setTimeout(() => {
      if (window.frames[0] && window.frames[0].gameInstance) {
        gameIframe.current = window.frames[0];
        gameIframe.current.gameInstance.SendMessage(
          'JavascriptWrapper',
          'ResponseOf_GameDataString',
          JSON.stringify(data)
        );
      }
    }, 2000);
  };

  return (
    <>
      <LandingNav/>
      {
        lgUp ? (

          <Grid container spacing={0} sx={{ height: '100%' }}>
            <Grid item xs={12} md={2} sx={{ padding: '10px', backgroundColor: '#2f2f2f' }}>
              <Grid container sx={{ height: '100%' }}>
                <Grid item xs={12} sx={{ height: 'auto' }}>
                  <Grid container>
                    {
                      !data.isPaid && !data.transactionFound && (
                        <div>
                          <Accordion expanded={expanded === 'panel1'}
                                     onChange={handleChange('panel1')}
                                     sx={{ backgroundColor: '#2f2f2f', border: 0, width: '100%' }}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><ColorLensTwoToneIcon/></SvgIcon>}>
                                Set Button Color
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <UpdateButtonColor gameIframe={gameIframe}
                                                 setData={setData}
                                                 data={data} game={game}/>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel2'}
                                     onChange={handleChange('panel2')}
                                     sx={{ backgroundColor: '#2f2f2f', border: 0, width: '100%' }}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><DiamondTwoToneIcon/></SvgIcon>}>
                                Upload Logo
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <UpdateLogo gameIframe={gameIframe} setData={setData}
                                            data={data} game={game}/>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel3'}
                                     onChange={handleChange('panel3')}
                                     sx={{ backgroundColor: '#2f2f2f', border: 0, width: '100%' }}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><GridOnTwoToneIcon/></SvgIcon>}>
                                Upload Bg
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                  <UpdateBackgroundImage gameIframe={gameIframe} setData={setData}
                                                         data={data} game={game}/>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                  <UpdateBackgroundColor gameIframe={gameIframe} setData={setData}
                                                         data={data} game={game}/>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          </Accordion>

                          <Accordion expanded={expanded === 'panel4'}
                                     onChange={handleChange('panel4')}
                                     sx={{ backgroundColor: '#2f2f2f', border: 0, width: '100%' }}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><TitleIcon/></SvgIcon>}>
                                Update Title
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <UpdateTitle gameIframe={gameIframe} setData={setData}
                                           data={data} game={game}/>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel6'}
                                     onChange={handleChange('panel6')}
                                     sx={{ backgroundColor: '#2f2f2f', border: 0, width: '100%' }}>
                            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><LibraryMusicIcon/></SvgIcon>}>
                                Update Music
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <UpdateBackgroundMusic gameIframe={gameIframe} setData={setData}
                                                     data={data} game={game}/>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      )}

                  </Grid>
                </Grid>

                <Grid item xs={12} md={12}
                      sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'end' }}>
                  <Button
                    fullWidth
                    variant="contained"
                    disabled
                  >
                    Save
                  </Button>
                </Grid>

              </Grid>
            </Grid>

            <Grid item md={10} xs={12}
                  sx={{ height: '100vh%', overflow: 'hidden', width: '100%' }}>
              <iframe
                onLoad={gameOnLoad}
                src={`${BASE_URL}/game/index.html`}
                title={data.title}
                frameBorder="0"
                style={{
                  width: '100%',
                  height: '100vh'
                }}
              ></iframe>
            </Grid>
            <Box
              sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'stretch',
                position: 'relative'
              }}>

              <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                p: 2,
                backgroundColor: 'rgba(0,0,0,0.60)'
              }}>
                <Typography color="error">Demo</Typography>
              </Box>
            </Box>
          </Grid>
        ) : (
          <Grid container spacing={0} sx={{ height: '100%', backgroundColor: '#2f2f2f' }}>
            <Grid item xs={12} md={2} sx={{ padding: '10px', backgroundColor: '#2f2f2f' }}>
              <Grid container sx={{
                height: '100%',
                width: '100%'

              }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => setBar(!bar)}
                  sx={{
                    p: 1,
                    width: '100%',
                    backgroundColor: '#2f2f2f',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}>{!bar ? 'Open Editor' : 'Close Editor'}</Button>

                <Collapse in={!lgUp && bar} style={{ width: '100%' }}>
                  <Grid item xs={12} sx={{ height: 'auto', width: '100%' }}>
                    <Grid container>
                      {!data.isPaid && !data.transactionFound && (
                        <div>
                          <Accordion expanded={expanded === 'panel1'}
                                     onChange={handleChange('panel1')}
                                     sx={{
                                       backgroundColor: '#2f2f2f',
                                       border: 0,
                                       width: '100%'
                                     }}>
                            <AccordionSummary aria-controls="panel1d-content"
                                              id="panel1d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><ColorLensTwoToneIcon/></SvgIcon>}>
                                Set Button Color
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <UpdateButtonColor gameIframe={gameIframe}
                                                 setData={setData}
                                                 data={data} game={game}/>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel2'}
                                     onChange={handleChange('panel2')}
                                     sx={{
                                       backgroundColor: '#2f2f2f',
                                       border: 0,
                                       width: '100%'
                                     }}>
                            <AccordionSummary aria-controls="panel2d-content"
                                              id="panel2d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><DiamondTwoToneIcon/></SvgIcon>}>
                                Upload Logo
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <UpdateLogo gameIframe={gameIframe} setData={setData}
                                            data={data} game={game}/>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel3'}
                                     onChange={handleChange('panel3')}
                                     sx={{
                                       backgroundColor: '#2f2f2f',
                                       border: 0,
                                       width: '100%'
                                     }}
                          >
                            <AccordionSummary aria-controls="panel3d-content"
                                              id="panel3d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><GridOnTwoToneIcon/></SvgIcon>}>
                                Upload Bg Image
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <UpdateBackgroundImage gameIframe={gameIframe} setData={setData}
                                                     data={data} game={game}/>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion expanded={expanded === 'panel4'}
                                     onChange={handleChange('panel4')}
                                     sx={{
                                       backgroundColor: '#2f2f2f',
                                       border: 0,
                                       width: '100%'
                                     }}>
                            <AccordionSummary aria-controls="panel1d-content"
                                              id="panel1d-header">
                              <Button fullWidth sx={{ justifyContent: 'left' }}
                                      startIcon={<SvgIcon><TitleIcon/></SvgIcon>}>
                                Update Title
                              </Button>
                            </AccordionSummary>
                            <AccordionDetails>
                              <UpdateTitle gameIframe={gameIframe} setData={setData}
                                           data={data} game={game}/>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      )}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12}
                        sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'end' }}>
                    <Button
                      fullWidth
                      variant="contained"
                      disabled
                    >
                      Save
                    </Button>
                  </Grid>
                </Collapse>
              </Grid>
            </Grid>
            <Grid item md={10} xs={12}
                  sx={{ height: '100%', overflow: 'hidden', width: '100%' }}>
              <iframe
                onLoad={gameOnLoad}
                src={`${BASE_URL}/game/index.html`}
                title={data.title}
                frameBorder="0"
                style={{
                  width: '100%',
                  height: '100%'
                }}
              ></iframe>
            </Grid>
            <Box
              sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'stretch',
                position: 'relative'
              }}>

              <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                p: 2,
                backgroundColor: 'rgba(0,0,0,0.60)'
              }}>
                <Typography color="error">Demo</Typography>
              </Box>
            </Box>
          </Grid>

        )
      }

    </>
  );
}


