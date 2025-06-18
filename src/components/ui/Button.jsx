import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  fullWidth = false,
  className = ''
}) => {
  const variants = {
    primary: 'bg-button-1 text-header-1 hover:opacity-90',
    secondary: 'bg-global-2 text-global-2 hover:bg-global-3',
    outline: 'bg-transparent border border-button-1 text-button-1 hover:bg-button-1 hover:bg-opacity-10',
    text: 'bg-transparent text-global-3 hover:underline'
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-3 text-lg',
    xl: 'px-6 py-4 text-xl'
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`rounded-md font-satoshi font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;