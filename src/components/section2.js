import Head from 'next/head';
import {
  Card,
  CardContent,
  Container,
  Typography, Tab, IconButton, Menu, CircularProgress, Pagination, Stack,
  Grid, Box, useMediaQuery, useTheme, Button, MenuItem, Select
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as React from 'react';
import { useEffect, useState, useMemo, useRef } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import NextLink from 'next/link';
import ReactPaginate from 'react-paginate';
import GroupedPagination from './pagination';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const Section2 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isIpadScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

  const [openDropdown, setOpenDropdown] = useState(null); // track which tab's dropdown is open

  const [allCards, setAllCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState('2');
  const [anchorEls, setAnchorEls] = useState({});
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [cardFilter, setCardFilter]=useState('All');
  const [cardType, setCardType] = useState('All');
  const [cardPrice, setCardPrice] = useState('Low to High');
  const [cardSorted, setCardSorted] = useState('CreatedAt(Ascending)');
  const [loadingComplete, setLoadingComplete] = useState(true);

  // const displayedCards = cards.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleTabClick = (val) => {
    setValue(val);
  };

  // console.log('value', value);
  // console.log('openDropdown', openDropdown);

  const handleDropdownClick = (event, val) => {
    setValue(val); // update active tab
    setOpenDropdown(prev => (prev === val ? null : val)); // toggle current dropdown
  };

  // const handleDropdownClick = (event, val) => {
  //   setAnchorEls((prev) => ({ ...prev, [val]: event.currentTarget }));
  // };

  const handleClose = (val) => {
    setAnchorEls((prev) => ({ ...prev, [val]: null }));
  };
  const getAllFrontDesignCards = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/cards/get-all-front-design`);
      setCards(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFrontDesignCards();
  }, []);

  const [tabData, setTabData] = useState([
    { label: 'Category', value: '2', options: [] },
    { label: 'Price', value: '3', options: ['Low to High', 'High to Low'] },
    { label: 'Arranged by', value: '4', options: ['CreatedAt(Ascending)', 'CreatedAt(Descending)'] }
  ]);

  const filteredAndSortedCards = useMemo(() => {
    let result = [...cards];

    // Filter by card type
    if (cardType !== 'All') {
      result = result.filter(card =>
        Array.isArray(card.cardType) &&
        card.cardType.some(type => type.toLowerCase() === cardType.toLowerCase())
      );
    }

    // Sort by price and sortedby

    if (cardPrice === 'Low to High') {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (cardPrice === 'High to Low') {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (cardPrice === 'CreatedAt(Ascending)') {
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (cardPrice === 'CreatedAt(Descending)') {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [cards, cardType, cardPrice, cardSorted]);

  const [currentPage, setCurrentPage] = useState(1);
  const [group, setGroup] = useState(0);
  const cardsPerPage = 2;
  // const cardsPerPage = 20;
  const totalPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage);

  // const [currentPage, setCurrentPage] = useState(1);

  //
  // const totalPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage);
  // console.log('totalPages', totalPages);
  // console.log('filteredAndSortedCards', filteredAndSortedCards);

  // console.log("filteredAndSortedCards", filteredAndSortedCards);
  // console.log("totalPages", totalPages);

  const displayedCards = useMemo(() => {
    return filteredAndSortedCards.slice((currentPage - 1) * cardsPerPage,
      currentPage * cardsPerPage);
  }, [filteredAndSortedCards, currentPage]);

  // const handleCardType = (tabValue, option) => {
  //   handleClose(tabValue);
  //
  //   if (tabValue === '2') {
  //     setCardType(option);
  //   } else if (tabValue === '3') {
  //     setCardPrice(option);
  //   } else if (tabValue === '4') {
  //     // setCardSorted(option);
  //     setCardPrice(option);
  //   }
  // };

  const handleCardType = (tabValue, option) => {
    setOpenDropdown(null); // close dropdown
    if (tabValue === '2') {
      setCardType(option);
    } else if (tabValue === '3') {
      setCardPrice(option);
    } else if (tabValue === '4') {
      setCardPrice(option);
    }
  };

  // console.log('displayedCards', displayedCards);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/admin/category/get/all`);
      const data = response.data.data;
      const categoryOptions = ['All', ...data.map(category => category.name)];

      // Update the tabData state
      setTabData(prev =>
        prev.map(tab =>
          tab.label === 'Category'
            ? { ...tab, options: categoryOptions }
            : tab
        )
      );
      setLoadingComplete(false);

    } catch (error) {
      console.log('error in get all categories', error);
      // toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const dropdownRef = useRef(null);

// Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Homepage | {APP_NAME}</title>
      </Head>
      <Box sx={{
        width: '100%',
        // bgcolor:'red',
        height: { md: '100%', xs: '100%', lg: '100%', xl: '100%' }
        // minHeight: '100vh'
      }}>
        <Box
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-easing="ease-in"
          sx={{
            pl: { md: '20%', laptop: '25%', lg: '20%', xl: '30%', xs: '15%' ,ipad:'25%'},
            pr: { md: '20%', laptop: '25%', lg: '20%', xl: '30%', xs: '15%',ipad:'25%' },
            // bgcolor:"blue",
            pt: {md: 2, xs:0 },
            pb: 5,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            flexDirection: 'column', height: '100%'
          }}
        >
          <Box sx={{
            mb: { md: 3, xs: 3 },
            // px: { lg: 4, xs: 4 },
            // py: { md: 2, xs: 1 },
            borderRadius: '30px !important',
            // minWidth: { md: '250px', xs: '200px' },
            fontSize: { md: '45px', xs: '25px' },
            // backgroundColor: '#ffecc8',
            color: { xs: '#c165a0', md: '#1A1D25' },
            fontWeight: 'bolder'
            // backgroundColor: '#1a1d25 !important',
            // color: '#c09b9b',
            // boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
            // '&:hover': {
            //   backgroundColor: '#1a1d25 !important',
            //   color: '#c09b9b'
            // }
          }}>
            Design Your Card
          </Box>

          <Grid container>
            <Grid md={12} xs={12}>
              <Box sx={{
                width: '100%',
                // bgcolor:'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}>
                <TabContext value={value} sx={{ width: '100%', overflow: 'hidden' }}>
                  <Box
                    ref={dropdownRef}
                    sx={{
                      bgcolor: 'rgba(232, 207,222, 0.8 )',
                      // bgcolor: '#e8cfde',
                      p: { md: 1, xs: 1 },
                      borderRadius: '20px',
                      width: '100%',
                      maxWidth: { md: '550px', xs: '300px' },
                      display: 'flex',
                      flexDirection: { md: 'row', xs: 'row' },
                      justifyContent: { md: 'space-around', xs: 'center' },
                      gap: 1
                    }}>


                    {tabData.map((tab) => (
                      <Box key={tab.value} sx={{ position: 'relative' }}>
                        <Box
                          type="button"
                          // id={`dropDownBtn-${tab.value}`}
                          className="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                          // onClick={() => handleTabClick(tab.value)}
                          // aria-expanded="false"
                          onClick={(e) => {
                            e.stopPropagation(); // prevent switching tab
                            handleDropdownClick(e, tab.value);
                            handleTabClick(tab.value);
                          }}
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                            alignItems: 'center',
                            gap: 0,
                            border: 0,
                            p: { xs: 1 },
                            px: { md: 2 },
                            py: { md: 1 },
                            borderRadius: '12px !important',
                            fontWeight: 900,
                            cursor: 'pointer',
                            bgcolor: value === tab.value ? '#c165a0' : 'transparent',
                            color: value === tab.value ? 'white' : 'black',
                            '&:hover': {
                              backgroundColor: '#c165a0',
                              color: 'white'
                            }

                          }}
                        >
                          <Typography sx={{
                            fontSize: { md: '18px',lg:'20px', xl:'22px', xs: '12px' },
                            fontWeight: 900
                          }}>{tab.label}</Typography>
                          {/*<IconButton*/}
                          {/*  size="small"*/}
                          {/*  sx={{ color: value === tab.value ? 'white' : 'black', p: 0 }}*/}
                          {/*>*/}
                          {/*  <ArrowDropDownIcon    />*/}
                          {/*</IconButton>*/}
                        </Box>
                        {openDropdown === tab.value && (
                          <ul
                            className="menu"
                            style={{
                              position: 'absolute',
                              top: '100%',
                              left: '50%', // start from center of button
                              transform: 'translateX(-50%)',
                              // backgroundColor:'red',
                              backgroundColor: 'rgba(232, 207, 222, 0.3)',
                              width: isSmallScreen ? '170px' : '200px',
                              maxHeight: tab.label === 'Category' ? '250px' : 'auto',
                              overflowY: tab.label === 'Category' ? 'auto' : 'visible',
                              padding: 0,
                              // borderRadius: '30px !important',
                              listStyle: 'none',
                              marginTop: 10,
                              zIndex: 1000
                            }}
                          >
                            {tab.label === 'Category' && tab.options.length === 0 ? (
                              <li style={{ padding: '1rem', textAlign: 'center' }}>
                                <CircularProgress size={20}/>
                              </li>
                            ) : (
                              tab.options.map((option, i) => (
                                <li key={i}>
                                  <a
                                    className="dropdown-item"
                                    style={{
                                      backgroundColor: 'rgba(232, 207, 222, 0.8)',
                                      color: 'black',
                                      fontSize: '16px',
                                      cursor: 'pointer',
                                      display: 'block',
                                      padding: '8px 12px',
                                      textDecoration: 'none'
                                    }}
                                    onClick={() => handleCardType(tab.value, option)}
                                  >
                                    {option}
                                  </a>
                                </li>
                              ))
                            )}
                          </ul>
                        )}


                        {/*<ul*/}
                        {/*  className="dropdown-menu"*/}
                        {/*  // aria-labelledby={`dropDownBtn-${tab.value}`}*/}
                        {/*  // aria-labelledby={`dropdown-${tab.value}`}*/}
                        {/*  style={{*/}
                        {/*     backgroundColor: 'rgba(232, 207, 222, 0.3)',*/}
                        {/*    width: isSmallScreen ? '100px' :  '200px',*/}
                        {/*    maxHeight: tab.label === 'Category' ? '250px' : 'auto',*/}
                        {/*    overflowY: tab.label === 'Category' ? 'auto' : 'visible',*/}
                        {/*    // borderRadius: '8px',*/}
                        {/*    padding: 0,*/}
                        {/*    // border: 'none',*/}
                        {/*    // zIndex: 9999*/}
                        {/*  }}*/}
                        {/*>*/}
                        {/*  {tab.label === 'Category' && tab.options.length === 0 ? (*/}
                        {/*    <li style={{ padding: '1rem', textAlign: 'center' }}>*/}
                        {/*      <CircularProgress size={20}/>*/}
                        {/*    </li>*/}
                        {/*  ) : (*/}
                        {/*    tab.options.map((option, i) => (*/}
                        {/*      <li key={i}>*/}
                        {/*        <a*/}
                        {/*          className="dropdown-item"*/}
                        {/*          style={{*/}
                        {/*            backgroundColor: 'rgba(232, 207, 222, 0.8)',*/}
                        {/*            color: 'black',*/}
                        {/*            fontSize: '14px',*/}
                        {/*          }}*/}
                        {/*          onClick={() => handleCardType(tab.value, option)}*/}
                        {/*        >*/}
                        {/*          {option}*/}
                        {/*        </a>*/}
                        {/*      </li>*/}
                        {/*    ))*/}
                        {/*  )}*/}
                        {/*</ul>*/}


                      </Box>
                    ))}
                  </Box>

                  <Grid container sx={{ mt: 5 }}>
                    {loading ? (
                      <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <CircularProgress/>
                      </Box>
                    ) : (
                      <>
                        {displayedCards.length === 0 ? (
                          <Box sx={{ width: '100%', textAlign: 'center' }}>
                            <Typography>No cards found.</Typography>
                          </Box>
                        ) : (
                          displayedCards.map((data, index) => (
                            <Grid md={4} lg={3} xs={6} key={index} sx={{
                              p: 1, display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center'
                            }}>
                              <NextLink href={`/card-editor/${data.uuid}`} passHref legacyBehavior>
                                <Box
                                  component="img"
                                  loading="lazy"
                                  src={`${BASE_URL}/${data?.frontDesign}`}
                                  alt={data?.title}
                                  sx={{
                                    width: '100%',
                                    // width: { xl: '100%', lg: '90%' },
                                    // display: 'block',

                                    aspectRatio: '1 / 1.414',
                                    cursor: 'pointer'
                                  }}
                                />
                              </NextLink>
                            </Grid>
                          ))
                        )}
                      </>
                    )}
                  </Grid>

                  {
                    displayedCards.length > 0 && (
                      <GroupedPagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        group={group}
                        setGroup={setGroup}

                      />
                    )
                  }

                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </>
  );
};
export default Section2;