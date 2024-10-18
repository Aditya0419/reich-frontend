import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Navbar from './navbar';  // Adjust the import path as needed
import Footer from './footer';  // Adjust the import path as needed
import bikeImage from '../assets/bike.png'; // Adjust the path to your bike image
import reichBikeImage from '../assets/reich_s2_bike.png'; // Add another image for the left section
import '../static/home.css'; // Import custom styles
import '@fontsource/dancing-script'; // Add this font (or another cursive font of your choice)

const Home = () => {
  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTriggered) {
        setScrollTriggered(true);
        // Remove the scroll event listener after the first scroll
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTriggered]);

  return (
    <Box sx={{ fontFamily: 'Inter, sans-serif' }}> {/* Ensure Inter font is applied */}
      {/* Navbar */}
      <Navbar />

      {/* First Screen */}
      <Box 
        className="hero-section" 
        sx={{
          backgroundColor: '#efeff1', // Light cream color
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: '50px',
          borderBottomRightRadius: '50px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Heading with Animation */}
        <Typography 
          variant="h2" 
          sx={{ 
            color: '#000', 
            textAlign: 'center', 
            fontWeight: 750,
            transform: scrollTriggered ? 'translateY(-150px)' : 'translateY(0)', 
            transition: 'transform 0.8s ease-in-out' // Slow down animation
          }}
        >
          Ready to ride with <span style={{ color: 'green' }}>Reich?</span>
        </Typography>

        {/* Ride Now Button with Animation */}
        <Button
          className="ride-now-btn"
          sx={{
            borderRadius: '20px',
            border: '2px solid #000',
            padding: '10px 20px',
            color: '#000',
            background: 'transparent',
            marginTop: '20px',
            transform: scrollTriggered ? 'translateY(-160px)' : 'translateY(0)',
            zIndex:100,
            transition: 'transform 0.8s ease-in-out', // Slow down animation
          }}
        >
          Ride Now
        </Button>

        {/* Bike Image with Animation */}
        <Box sx={{ position: 'absolute', bottom: '-50px', opacity: scrollTriggered ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
          <img src={bikeImage} alt="Bike" style={{ width: '500px' }} />
        </Box>
      </Box>

      {/* Second Section with Flex Layout */}
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, // Stacks on small screens, row on larger screens
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0px 60px',
          backgroundColor: '#fff',
          minHeight: '100vh',
        }}
      >
        {/* Left Side (Images) */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img src={reichBikeImage} alt="Reich E-Bike" style={{ width: '100%', maxWidth: '600px' }} /> {/* Adjust this with your image */}
        </Box>

        {/* Right Side (Text Content) */}
        <Box sx={{ flex: 1, padding: '40px', textAlign: 'left' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '0px' }}>
            Reich <span style={{ color: 'green', fontFamily: "'Dancing Script', cursive" }}> E</span>-Bike {/* Add cursive font to E-Bike */}
            <span className="material-symbols-outlined" style={{ fontSize: '30px', color: '#666', marginLeft: '10px' }}>
              manufacturing
            </span> {/* Add the Google Font manufacturing icon */}
          </Typography>
          <Typography variant="h4" sx={{ color: '#666', marginBottom: '25px', fontWeight: 600, fontSize: '1.4rem', marginLeft: '2px' }}>
            Embrace A Sustainable Tomorrow
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '25px' }}>
            Discover the Reich e-bike, where innovation meets sustainability. Our range of state-of-the-art electric two-wheelers offers a greener, smarter way to commute, with zero emissions and unmatched efficiency. Designed for today’s urban explorers, Reich e-bikes redefine mobility, merging style with a commitment to a cleaner planet. Join us on the ride to a better tomorrow — for you, for us, for everyone.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '20px',
              padding: '10px 17px',
              color: '#000',
              borderColor: '#000',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
