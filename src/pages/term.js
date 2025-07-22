import Head from 'next/head';
import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid
} from '@mui/material';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import LandingNav from '../layouts/landing-nav/landingLayout';

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

const Page = () => {

  return (
    <>
      <Head>
        <title>Terms | {APP_NAME}</title>
      </Head>
      <LandingNav/>
      <Container sx={{ my: '50px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: { md: 4, sm: 2 } }}>
              <Typography gutterBottom variant="h6" padding="10px" sx={{ textAlign: 'center' }}>
                Terms of Use
              </Typography>
              <Typography gutterBottom variant="h6" padding="10px" sx={{ textAlign: 'center' }}>
                Welcome to Greetings Card
              </Typography>
              <Typography gutterBottom variant="h6" padding="10px" sx={{ textAlign: 'center' }}>
                By using our website and purchasing our virtual products, you agree to the following
                terms and conditions.
              </Typography>
              <CardMedia/>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  1. Acceptance of the terms
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By accessing and using our website, you accept and agree to be bound by these
                  terms and conditions.
                </Typography>
                <Typography gutterBottom variant="h6" padding="10px" sx={{ mt: 3, mb: 3 }}>
                  IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE OUR WEBSITE OR PURCHASE
                  OUR PRODUCTS.
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  2. Virtual products
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2.1 All products sold on our website are virtual and digital in nature. There will
                  be no physical
                  delivery of products.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2.2 After the purchase, the product will be available for download, if the game
                  cannot be
                  downloaded please contact us by Email: team@brandongame.com and we will send it to
                  you
                  manually.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2.3 All sales are final due to the digital nature of our products. Returns,
                  refunds or exchanges
                  are not allowed.
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  3. Use of the product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3.1 The virtual products are intended for one brand commercial use only.
                  Redistribution, resale
                  or commercial use without our express permission is prohibited.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3.2 Any unauthorized use or distribution of our virtual products is strictly
                  prohibited and will
                  result in termination of access and possible legal action
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  4. Payment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  4.1 Payments for our virtual products will be made in advance and in full.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  4.2 We use secure payment gateways for transactions. However, we cannot guarantee
                  absolute
                  security due to the risks inherent in online transactions.
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  5. Warranty
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  5.1 All products are provided &quot;as is&quot; without any warranty of any kind, express or
                  implied.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  5.2 We are not responsible for any damage, loss of data or other problems arising
                  from the use
                  or download of our products.
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  6. Changes to the terms and conditions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We reserve the right to change or update these terms and conditions at any time
                  without notice.
                  It is your responsibility to check them periodically.
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  7. Law applies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  These terms and conditions and any dispute related to these terms, the site or our
                  products will
                  be subject to the laws of Israel and will be interpreted in accordance with its
                  conflict of law rules
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  8. Age restriction
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our Services are not directed to persons under the age of 18. We do not knowingly
                  collect
                  personal information from children. If you are a parent or guardian and believe
                  your child has
                  provided us with personal information, please contact us to have that information
                  removed
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  9. Cancellation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cancellation of a transaction in accordance with the Israeli Consumer Protection
                  Law
                  (Cancellation), CA-2010 and the Israeli Consumer Protection Law, 1981.
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ mt: 3, mb: 3 }}>
                  10. Contact
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  For any questions regarding these Terms of Use, please contact us at:
                </Typography>
                <Typography variant="body2">
                  <b>Email: team@brandongame.com</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Page;