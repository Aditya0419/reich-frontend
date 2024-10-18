// Navbar.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import Hamburger and Close icons
import '../static/navbar.css';
import logo from '../assets/reich_logo.png'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      {/* Logo on Left */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-right">
        

        {/* Sign-up Button */}
        <button className="signup-btn">Sign Up</button>

        {/* Hamburger Menu */}
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className="menu-btn"
        >
          {/* Smooth transition between Hamburger and Cross Icon */}
          {open ? (
            <FaTimes className="menu-icon" /> // Cross icon when open
          ) : (
            <FaBars className="menu-icon" /> // Hamburger icon when closed
          )}
        </Button>
        {/* Dropdown Menu */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}><a href="#home" className="dropdown-link">Home</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#products" className="dropdown-link">Products</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#blog" className="dropdown-link">Blog</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#about" className="dropdown-link">About Us</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#contact" className="dropdown-link">Contact Us</a></MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
