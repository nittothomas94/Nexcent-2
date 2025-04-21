// # all small, reusable UI parts

import React from 'react';
import { Button } from '@mui/material';
import { green } from '@mui/material/colors';

const Navbar = () => {
  return (
    <nav className="bg-gray-50 shadow-sm px-15 py-5 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/icons/nexcent.png" alt="Nexcent Logo" className="h-6" />
        <span className="text-xl font-bold text-gray-800">Nexcent</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-gray-800 font-medium">
        <a href="#" className="hover:text-green-600">
          Home
        </a>
        <a href="#" className="hover:text-green-600">
          Service
        </a>
        <a href="#" className="hover:text-green-600">
          Feature
        </a>
        <a href="#" className="hover:text-green-600">
          Product
        </a>
        <a href="#" className="hover:text-green-600">
          Testimonial
        </a>
        <a href="#" className="hover:text-green-600">
          FAQ
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-green-600 font-medium hover:underline">
          Login
        </a>
        <Button
          variant="contained"
          style={{
            backgroundColor: 'green',
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          Sign up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
