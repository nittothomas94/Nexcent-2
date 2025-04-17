// actual pages

import React from 'react';
import { Button } from '@mui/material';
import { green } from '@mui/material/colors';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Text Side */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Lessons and insights <br />
          <span className="text-green-600">from 8 years</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button
          variant="contained"
          style={{
            marginTop: '24px',
            backgroundColor: green[500],
            textTransform: 'none',
            borderRadius: '8px',
            padding: '10px 24px',
          }}
        >
          Register
        </Button>
      </div>

      {/* Image Side */}
      <div>
        <img
          src="/images/busnessManStanding.png"
          alt="Hero Illustration"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
