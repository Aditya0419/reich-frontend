import React from 'react';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTelegram, FaTimes } from 'react-icons/fa';
import { ArrowForwardIos } from '@mui/icons-material'; // Import Material UI icon
import '../static/footer.css';
import logo from '../assets/reich_logo_darkbg.png';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <Box className="footer" sx={{ backgroundColor: '#000', color: '#fff', padding: '50px 40px' }}>
      <Grid container spacing={4}>
        
        {/* Left Section - 40% */}
        <Grid item xs={12} md={5} className="left-section">
          {/* Logo */}
          <Box className="logo-container" sx={{ textAlign: 'left', marginLeft: '30px' }}>
            <img src={logo} alt="Reich Logo" style={{ width: '100px' }} />
          </Box>
          {/* Description */}
          <Typography variant="body1" className="reich-description" sx={{ fontSize: '12px', textAlign: 'left', marginLeft: '10px', marginRight:'135px', marginBottom: '30px', lineHeight: '1.5' }}>
          At Reich, We Are Committed To Revolutionizing Your Riding Experience. Our Electric Bikes Combine Cutting-Edge Technology, Eco-Friendliness, And Unmatched Performance To Offer A Ride That Is Both Thrilling And Sustainable. Join The Movement And Ride Into The Future With Reich.
          </Typography>
          {/* Horizontal Line */}
          <Box sx={{ backgroundColor: 'grey', height: '1px', width: '90%', marginLeft: '10px', marginBottom: '25px' }}></Box>
          {/* Social Icons */}
          <Box className="social-icons-container" sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '50px' }}>
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaWhatsapp />, link: "#" },
              { icon: <FaTelegram />, link: "#" },
              { icon: <FaXTwitter />, link: "#" }
            ].map((social, index) => (
              <Box key={index} className="social-icon-box" sx={{ border: '1px solid #fff', borderRadius: '20%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href={social.link} color="inherit" sx={{ fontSize: '24px', paddingTop: '5px' }}>
                  {social.icon}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Section - 60% */}
        <Grid item xs={12} md={7} className="right-section">
          <Grid container spacing={4} className="email-section">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FaTimes size={20} color="#fff" style={{ marginRight: '10px' }} />
                <Typography variant="h6" className="email-heading" sx={{ fontSize: '16px' }}>Enter Your Email</Typography>
              </Box>
              <Typography variant="body2" className="email-subtext" sx={{ marginTop: '5px', color: 'grey', fontSize: '12px' }}>
                Our Colleagues Will Contact You Soon
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <TextField
                className="email-input"
                variant="outlined"
                placeholder="Enter Email"
                size="small"
                sx={{ 
                  backgroundColor: 'transparent', 
                  color: '#fff', 
                  borderRadius: '4px', 
                  border: '1px solid #fff',
                  width: '70%',
                  input: { color: '#fff' }
                }}
              />
              <Button variant="contained" className="email-btn" sx={{ marginLeft: '10px', backgroundColor: '#333', color: '#fff', borderRadius: '4px' }}>
                →
              </Button>
            </Grid>
          </Grid>

          {/* Lower Part - Links */}
          <Grid container spacing={4} mt={5} className="footer-links">
            {/* Product Category */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="footer-heading" sx={{ fontSize: '16px' }}>Product Category</Typography>
              <ul className="footer-list" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {['Newly Launched', 'Reich Model 2', 'Reich Model 3', 'Reich Model 4', 'More...'].map((item, index) => (
                  <li key={index}>
                    <span className="arrow">
                      <ArrowForwardIos fontSize="inherit" style={{ fontSize: '12px' }} />  {/* Adjusted arrow size */}
                    </span>
                    <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '12px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </Grid>

            {/* Useful Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="footer-heading" sx={{ fontSize: '16px' }}>Useful Links</Typography>
              <ul className="footer-list" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {['Home', 'Product', 'Blog', 'About Us', 'Contact Us'].map((item, index) => (
                  <li key={index}>
                    <span className="arrow">
                      <ArrowForwardIos fontSize="inherit" style={{ fontSize: '12px' }} />  {/* Adjusted arrow size */}
                    </span>
                    <Link href="#" color="inherit" underline="hover" sx={{ fontSize: '12px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="footer-heading" sx={{ fontSize: '16px' }}>Contact Us</Typography>
              <ul className="footer-contact" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="green-dot"></span> 
                  <Typography variant="body2" component="span" sx={{ marginLeft: '10px', fontSize: '12px' }}>Delhi</Typography>
                </li>
                <li className="contact-description">
                  <span className="vertical-line" style={{ height: '20px', backgroundColor: '#777' }}></span> {/* Adjusted height and color */}
                  <Typography variant="body2" component="span" sx={{ fontSize: '12px' }}>Address, Delhi, India</Typography>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px' }}>
                  <span className="green-dot"></span> 
                  <Typography variant="body2" component="span" sx={{ marginLeft: '10px', fontSize: '12px' }}>Mumbai</Typography>
                </li>
                <li className="contact-description">
                  <span className="vertical-line" style={{ height: '20px', backgroundColor: '#777' }}></span> {/* Adjusted height and color */}
                  <Typography variant="body2" component="span" sx={{ fontSize: '12px' }}>Address, Navi Mumbai, India</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box mt={4} textAlign="center" className="footer-bottom" sx={{ position: 'relative' }}>
        <Box sx={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'absolute', top: '50%', left: '5%', width: '40%' }}></Box>
        <Typography variant="body2" sx={{ fontSize: '12px', display: 'inline-block', position: 'relative', zIndex: '1' }}>
          © 2024 | All Rights Reserved | Reich Automotive
        </Typography>
        <Box sx={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', position: 'absolute', top: '50%', right: '5%', width: '40%' }}></Box>
      </Box>
    </Box>
  );
};

export default Footer;
