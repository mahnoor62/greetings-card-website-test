import Head from 'next/head';
import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
  Box
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import * as React from 'react';
import NextLink from 'next/link';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


// import Stripe from 'stripe'


const Page = () => {

  const [games, setGames] = useState({ yourGames: [], recommendedGames: [], comingSoonGames: [] });

  // Fetch all games
  // useEffect(() => {
  //   const fetchGames = async () => {
  //     try {
  //       const token = window.localStorage.getItem('token');
  //       const response = await axios.get(API_BASE_URL + '/api/user/game/all', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'x-access-token': token
  //         }
  //       });
  //       setGames(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //       toast.error(error.response.data.msg);
  //     }
  //   };
  //   fetchGames();
  // }, []);


  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

 async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

    const { productId } = req.body;

    // Optional: fetch product from DB
    const product = {
      name: 'Test Product',
      price: 2000, // in cents
    };

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: product.name,
              },
              unit_amount: product.price,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error('Stripe checkout error:', error);
      res.status(500).json({ error: 'Stripe checkout failed' });
    }
  }


  return (
    <>
      <Head>
        <title>
          Checkout | {APP_NAME}
        </title>
      </Head>
      <Container sx={{ my: '100px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography gutterBottom variant="h4" padding="10px">
                Checkout
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;