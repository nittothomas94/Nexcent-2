import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <section className="bg-[#263238] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/4">
          <div className="mb-4 flex items-center gap-2">
            <img
              src="/icons/nexcent.png"
              alt="Nexcent Logo"
              className="w-6 h-6"
            />
            <span className="text-xl font-semibold">Nexcent</span>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
          <div className="flex gap-3 text-gray-300 text-lg">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Right Side - Columns */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Stay up to date</h4>
            <div className="flex items-center bg-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full text-black text-sm outline-none"
              />
              <button className="bg-[#4CAF4F] px-4 py-2 text-white text-sm hover:bg-[#43a047]">
                ➤
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
