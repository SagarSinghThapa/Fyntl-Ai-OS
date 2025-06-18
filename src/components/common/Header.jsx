import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRegister = () => {
    // Navigate to registration page when implemented
    console.log('Register clicked');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col w-full bg-header-1 shadow-md border-b border-gray-300">
      <div className="flex flex-row items-center justify-between w-full px-4 md:px-6 py-4 h-[75px]">
        {/* Logo */}
        <div 
          className="cursor-pointer md:ml-[232px] flex items-center" 
          onClick={handleLogoClick}
        >
          <img 
            src="/images/img_headerlogo.png" 
            alt="Fyntl Logo" 
            className="w-[80px] h-[32px] md:w-[101px] md:h-[41px]"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-header-1 p-2"
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

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex flex-row items-center space-x-8">
          {/* Country Selector */}
          <div className="flex flex-row items-center space-x-2">
            <span className="text-[10px] font-satoshi font-medium leading-[14px] text-header-1">
              IN
            </span>
            <span className="text-[18px] font-satoshi font-medium leading-[25px] text-header-1">
              India
            </span>
            <img 
              src="/images/img_arrowdown.svg" 
              alt="Dropdown" 
              className="w-6 h-6"
            />
          </div>

          {/* Products Dropdown */}
          <div className="flex flex-row items-center space-x-2">
            <span className="text-[18px] font-satoshi font-medium leading-[25px] text-header-1">
              Products
            </span>
            <img 
              src="/images/img_arrowdown.svg" 
              alt="Dropdown" 
              className="w-6 h-6"
            />
          </div>

          {/* Pricing */}
          <span className="text-[18px] font-satoshi font-medium leading-[25px] text-header-1 cursor-pointer hover:opacity-80">
            Pricing
          </span>

          {/* Register Button */}
          <Button 
            onClick={handleRegister}
            className="rounded-[5px] px-6 py-3"
          >
            Register
          </Button>

          {/* Profile Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/images/img_ellipse_264.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-header-1 px-4 py-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {/* Country Selector */}
            <div className="flex items-center justify-between border-b border-gray-700 pb-2">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-satoshi font-medium text-header-1">
                  IN
                </span>
                <span className="text-[16px] font-satoshi font-medium text-header-1">
                  India
                </span>
              </div>
              <img 
                src="/images/img_arrowdown.svg" 
                alt="Dropdown" 
                className="w-5 h-5"
              />
            </div>

            {/* Products */}
            <div className="flex items-center justify-between border-b border-gray-700 pb-2">
              <span className="text-[16px] font-satoshi font-medium text-header-1">
                Products
              </span>
              <img 
                src="/images/img_arrowdown.svg" 
                alt="Dropdown" 
                className="w-5 h-5"
              />
            </div>

            {/* Pricing */}
            <div className="border-b border-gray-700 pb-2">
              <span className="text-[16px] font-satoshi font-medium text-header-1">
                Pricing
              </span>
            </div>

            {/* Register */}
            <Button 
              onClick={handleRegister}
              className="rounded-[5px] w-full text-center"
              size="md"
            >
              Register
            </Button>

            {/* Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="/images/img_ellipse_264.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[16px] font-satoshi font-medium text-header-1">
                Profile
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;