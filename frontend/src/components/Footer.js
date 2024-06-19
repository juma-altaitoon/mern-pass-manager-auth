import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export default function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justify="space-evenly">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" variant="subtitle1">
              About Us
            </Link>
            <br />
            <Link href="#" color="inherit" variant="subtitle1">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              CRED-GUARD
            </Typography>
            {/* <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Something here to give the footer a purpose!
            </Typography> */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit">
              <Facebook />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 3 }}>
          {'Copyright © '}
          <Link color="inherit" href="https://yourwebsite.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};