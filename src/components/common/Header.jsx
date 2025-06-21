import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRegister = () => {
    console.log('Register clicked');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col w-full bg-blue-700 shadow-md border-b border-stone-400">
      <div className="flex flex-row items-center justify-between w-full px-4 md:px-24 py-5 h-20">
        {/* Fyntl AI Title */}
        <div 
          className="cursor-pointer flex items-center gap-5" 
          onClick={handleLogoClick}
        >
          <span className="text-white text-3xl font-satoshi font-medium">Fyntl AI</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {/* Country */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white font-satoshi font-medium">IN</span>
            <span className="text-lg text-white font-satoshi font-medium">India</span>
            <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="w-6 h-6" />
          </div>

          {/* Products */}
          <div className="flex items-center gap-2">
            <span className="text-lg text-white font-satoshi font-medium">Products</span>
            <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="w-6 h-6" />
          </div>

          {/* Pricing */}
          <span className="text-lg text-white font-satoshi font-medium cursor-pointer hover:opacity-80">
            Pricing
          </span>

          {/* Register Button */}
          <Button 
            onClick={handleRegister}
            className="bg-pink-600 text-white rounded-[5px] px-7 py-2.5 text-lg font-satoshi font-medium"
          >
            Register
          </Button>

          {/* Profile Avatar */}
          <img 
            src="https://placehold.co/40x40" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-4 shadow-lg space-y-4">
          {/* Country */}
          <div className="flex items-center justify-between border-b border-gray-400 pb-2">
            <div className="flex items-center gap-2 text-white font-satoshi font-medium">
              <span className="text-[10px]">IN</span>
              <span className="text-[16px]">India</span>
            </div>
            <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="w-5 h-5" />
          </div>

          {/* Products */}
          <div className="flex items-center justify-between border-b border-gray-400 pb-2 text-white font-satoshi font-medium text-[16px]">
            Products
            <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="w-5 h-5" />
          </div>

          {/* Pricing */}
          <div className="border-b border-gray-400 pb-2 text-white font-satoshi font-medium text-[16px]">
            Pricing
          </div>

          {/* Register Button */}
          <Button 
            onClick={handleRegister}
            className="w-full bg-pink-600 text-white font-satoshi font-medium rounded-[5px]"
            size="md"
          >
            Register
          </Button>

          {/* Profile */}
          <div className="flex items-center gap-3 text-white font-satoshi font-medium">
            <img 
              src="https://placehold.co/32x32" 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-[16px]">Profile</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
