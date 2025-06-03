import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaInstagram, FaShoppingCart, FaUser } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Nav = () => {
  return (
    <header className="w-full border-b">
     
      <div className="bg-white py-2 border-b">
        <div className="container mx-auto flex justify-between items-center text-gray-600 text-sm px-4">
         
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors"><FaFacebookF size={14} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter size={14} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaPinterestP size={14} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaGooglePlusG size={14} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><FaInstagram size={14} /></a>
          </div>

         
          <div className="hidden md:block">
            Free shipping for standard order over $100
          </div>

          
          <div className="flex items-center space-x-6">
            <a href="mailto:fashe@example.com" className="hover:text-red-500 transition-colors">
              fashe@example.com
            </a>
            <div className="flex items-center cursor-pointer hover:text-red-500 transition-colors">
              USD
              <MdKeyboardArrowDown className="ml-1" />
            </div>
          </div>
        </div>
      </div>

      
      <nav className="container mx-auto py-4">
        <div className="flex justify-between items-center px-4">
         
          <Link to="/" className="text-2xl font-bold">
            Fashe<span className="text-red-500">.</span>
          </Link>

         
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-red-500">Home</Link>
            <Link to="/shop" className="hover:text-red-500 transition-colors">Shop</Link>
            <Link to="/sale" className="hover:text-red-500 transition-colors">Sale</Link>
            <Link to="/features" className="hover:text-red-500 transition-colors">Features</Link>
            <Link to="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
          </div>

          
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-500 transition-colors">
              <FaUser size={18} />
            </button>
            <div className="relative">
              <button className="hover:text-red-500 transition-colors">
                <FaShoppingCart size={18} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav; 
