import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container,Link, Toolbar, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import "./home.css";
import Tools from './toolBar';

export default function BasicGrid() {
  return (
    <>
     <Tools />    

    <div className='fff' style={{display:"flex",flexDirection:"row",backgroundColor:"#FDF7E4",marginTop:"100px"}}>

     <div>
      <img height='500vh' src='https://sendwishonline.com/assets/images/group-card/group-greeting-cards-free.svg' />
     </div>

  <div style={{border:"5px solid #DED0B6", borderRadius:"10px",backgroundColor:"#FDF7E4"}}>
  <ul class="meeting-features-notes">
<li>
<h3>Simple to use and easily scalable</h3>
</li>
<li>

<h3>Round the clock support</h3>
</li>
<li>

<h3>Industrial standard security</h3>
</li>
<li>

<h3>Enterprise level experience for all</h3>
</li>
<li>

<h3>Interactive web meeting tools</h3>
</li>
<li>
<h3>Affordable, no hidden pricing structure</h3>
</li>
<li>
<h3>Deep integration with Zoho's ecosystem and other major third-party services</h3>
</li>
</ul>
     </div>
     </div>


     
     <footer className="site-footer" style={{height:"26vh"}}>
        <Box
          component="footer"
          sx={{
            backgroundColor: (theme) =>
            theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
            p: 6,
          }}
          >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are XYZ company, dedicated to providing the best service to our
                  customers.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Main Street, Anytown, USA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: info@example.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: +1 234 567 8901
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Follow Us
                </Typography>
                <Box display="flex" style={{marginLeft:"10vw"}}>
                  <Link href="https://www.facebook.com/" color="inherit">
                    <Facebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    color="inherit"
                    sx={{ pl: 1, pr: 1 }}
                  >
                    <Instagram />
                  </Link>
                  <Link href="https://www.twitter.com/" color="inherit">
                    <Twitter />
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Container>
        </Box>
      </footer>
  </>
  );
}

