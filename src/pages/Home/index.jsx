import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import EmailDisplayComponent from '../../components/ui/EmailDisplayComponent';

const Home = () => {
  const [chatInput, setChatInput] = useState('');
  const handleGetStarted = () => console.log('Get Started clicked');
  const handleChatSubmit = (e) => { e.preventDefault(); if (chatInput.trim()) { console.log('Chat message:', chatInput); setChatInput(''); } };

  const businessFeatures = [
    { icon: '/images/img_vector.svg', label: 'Invoicing' },
    { icon: '/images/img_vector_deep_purple_900.svg', label: 'Accounting' },
    { icon: '/images/img_vector.svg', label: 'Compliance' },
    { icon: '/images/img_hugeiconsmoney03.svg', label: 'Payments' },
    { icon: '/images/img_solarboxbroken.svg', label: 'Inventory' },
    { icon: '/images/img_vector_deep_purple_900_16x16.png', label: 'Sales' },
    { icon: '/images/img_solardollarbroken.svg', label: 'Expenses' },
    { icon: '/images/img_iconparkoutlineretrobag.svg', label: 'Client' },
    { icon: '/images/img_formkitpeople.svg', label: 'Vendors' },
    { icon: '/images/img_tablerdots.svg', label: '& More' }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-global-9">
      <Header />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full px-4 md:px-8 py-16 md:py-24 justify-center gap-12">
        
        {/* Left Section */}
        <div className="flex flex-col w-full md:max-w-[420px] relative">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'url(/images/img_headerlogo.png)', backgroundRepeat: 'repeat', backgroundSize: 'contain'}}></div>
          <div className="mb-8 z-10 relative">
            {/* Grey border (the running lines will trace it if used)
            <div className="absolute -inset-3 pointer-events-none z-0">
              <span className="absolute left-3 right-3 top-0 h-0.5 bg-gray-400 opacity-30 rounded" />
              <span className="absolute right-0 top-3 bottom-3 w-0.5 bg-gray-400 opacity-30 rounded" />
              <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-gray-400 opacity-30 rounded" />
              <span className="absolute left-0 top-3 bottom-3 w-0.5 bg-gray-400 opacity-30 rounded" />
            </div>
            */}
            {/* Animated Beam Effect on All Four Sides */}
            <div className="absolute -inset-3 pointer-events-none z-10">
              {/* Top Beam (left to right) */}
              <span className="absolute top-0 h-0.5 w-12 bg-gradient-to-r from-blue-600 via-purple-400 to-pink-500 rounded animate-beam-top" style={{left: '12px', right: 'auto'}} />
              {/* Right Beam (bottom to top) */}
              <span className="absolute right-0 w-0.5 h-12 bg-gradient-to-t from-blue-600 via-purple-400 to-pink-500 rounded animate-beam-right" style={{top: 'auto', bottom: '12px'}} />
              {/* Bottom Beam (right to left) */}
              <span className="absolute bottom-0 h-0.5 w-12 bg-gradient-to-l from-blue-600 via-purple-400 to-pink-500 rounded animate-beam-bottom" style={{right: '12px', left: 'auto'}} />
              {/* Left Beam (top to bottom) */}
              <span className="absolute left-0 w-0.5 h-12 bg-gradient-to-t from-blue-600 via-purple-400 to-pink-500 rounded animate-beam-left" style={{top: '12px', bottom: 'auto'}} />
            </div>
            <div className="relative z-20">
              <h1 className="text-[32px] md:text-[52px] font-satoshi font-extrabold leading-[1.2] md:leading-[70px] mb-4 relative bg-white">
                <span className="bg-[linear-gradient(90deg,#2252CD_0%,#C66AFB_50%,#2252CD_100%)] bg-clip-text text-transparent">Business OS</span><br />
                <span className="text-purple-900">of the Future</span>
              </h1>
              <p className="text-[16px] md:text-[20px] font-satoshi font-medium leading-[1.4] md:leading-[27px] text-global-5 mb-8 relative bg-white">
                Everything you need to operate your Business,<br className="hidden md:block" />
                with a bit of magical touch
              </p>
            </div>
            <style>
              {`
                @keyframes beamTop {
                  0% { left: 12px; opacity: 0; }
                  10% { left: 12px; opacity: 1; }
                  90% { left: calc(100% - 48px); opacity: 1; }
                  100% { left: calc(100% - 48px); opacity: 0; }
                }
                @keyframes beamRight {
                  0% { bottom: 12px; opacity: 0; }
                  10% { bottom: 12px; opacity: 1; }
                  90% { bottom: calc(100% - 48px); opacity: 1; }
                  100% { bottom: calc(100% - 48px); opacity: 0; }
                }
                @keyframes beamBottom {
                  0% { right: 12px; opacity: 0; }
                  10% { right: 12px; opacity: 1; }
                  90% { right: calc(100% - 48px); opacity: 1; }
                  100% { right: calc(100% - 48px); opacity: 0; }
                }
                @keyframes beamLeft {
                  0% { top: 12px; opacity: 0; }
                  10% { top: 12px; opacity: 1; }
                  90% { top: calc(100% - 48px); opacity: 1; }
                  100% { top: calc(100% - 48px); opacity: 0; }
                }
                .animate-beam-top {
                  animation: beamTop 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
                }
                .animate-beam-right {
                  animation: beamRight 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
                }
                .animate-beam-bottom {
                  animation: beamBottom 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
                }
                .animate-beam-left {
                  animation: beamLeft 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
                }
              `}
            </style>
          </div>

          <div className="absolute inset-0 bg-scan animate-scanLines opacity-10 pointer-events-none z-0" />

          {/* Features Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-8">
            {businessFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-global-3 rounded-[5px] flex items-center justify-center mb-2">
                  <img src={feature.icon} alt={feature.label} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-[10px] md:text-[12px] font-satoshi font-medium text-global-5 text-center">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col w-full max-w-[760px]">
          
          {/* Badge */}
          <div className="absolute top-0 right-0 z-10 bg-white border border-gray-300 rounded-[19px] px-4 py-2 flex items-center shadow-sm">
            <div className="bg-blue-600 rounded-full w-[10px] h-[10px] mr-2"></div>
            <span className="text-[16px] text-gray-700">Realtime Analytics</span>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[20px] shadow-md px-8 py-6 relative mt-10">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-[18px] font-semibold text-gray-800">Business Performance</h3>
                <p className="text-[16px] text-gray-500">May 30, 2025</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[35px] h-[35px] bg-gray-400 text-white flex items-center justify-center rounded-full">JD</div>
                <img src="/images/img_tablerdots.svg" alt="Menu" className="w-5 h-5" />
              </div>
            </div>

            {/* Copilot Box */}
            <div className="flex flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <div className="bg-white border border-gray-300 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Business Co-pilot</h4>
                  <p className="text-gray-600 mb-2">What 1% of our total revenue comes from international invoices?</p>
                  <div className="bg-gray-100 rounded p-3 text-gray-700 text-sm">
                    Total revenue percentage that comes from international invoices is 8.15%.<br />
                    Total Revenue: $542,543<br />
                    International Revenue: $345,345.56 (8.15%)
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="flex flex-row gap-6 mt-10">
              {/* Financials */}
              <div className="bg-white rounded-lg shadow-lg px-6 py-4 w-[300px] border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-800">Financials</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">On Track</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[40px] h-[40px] bg-purple-100 flex items-center justify-center rounded-md">
                    <img src="/images/img_frame_1116606801.svg" alt="Financial" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">$234,567.87</p>
                    <p className="text-gray-500 text-sm">Net Income</p>
                  </div>
                </div>
              </div>

              {/* Sales */}
              <div className="bg-white rounded-lg shadow-lg px-6 py-4 w-[300px] border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-800">Sales</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-[36px] h-[36px] bg-blue-100 flex items-center justify-center rounded-md">
                      <img src="/images/img_makiarrow.svg" alt="Arrow" className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-blue-600">+18%</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[40px] h-[40px] bg-purple-100 flex items-center justify-center rounded-md">
                    <img src="/images/img_frame_1116606801_blue_50.svg" alt="Sales" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">848</p>
                    <p className="text-gray-500 text-sm">Projected Revenue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Badge */}
            <div className="absolute bottom-4 right-4 bg-white border border-gray-300 rounded-[19px] px-3 py-1 flex items-center space-x-2 text-sm text-gray-600 shadow">
              <img src="/images/img_evaflashoutline.svg" alt="AI" className="w-4 h-4" />
              <span>AI Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started */}
      <div className="flex justify-center mb-12">
        <Button 
          onClick={handleGetStarted}
          className="rounded-md px-12 py-4 bg-pink-600 hover:bg-pink-700 text-white text-lg font-bold shadow-md transition"
        >
          Get Started
        </Button>
      </div>

      {/* AI Assistant */}
      <div className="flex flex-col items-center w-full px-4 md:px-8 mb-24 gap-6">
        {/* Username/Email Input Placeholder (centered) */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 mt-12 mb-8 flex flex-col items-center justify-center min-h-[120px] w-full max-w-[750px]">
          <span className="text-gray-400">[Username/Email Input Component Here]</span>
        </div>

        {/* Email Display Component (centered below input) */}
        <div className="w-full max-w-[750px]">
          <EmailDisplayComponent />
        </div>

        {/* 24x7 Badge (moved below, above chat card) */}
        <div className="w-full max-w-[750px] flex justify-center">
          <div className="bg-white border border-gray-300 rounded-full px-6 py-2 text-gray-800 text-sm shadow mb-2">
            24 x 7 Assistance
          </div>
        </div>

        {/* Chat Card (centered) */}
        <div className="w-full max-w-[750px]">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-[42px] h-[48px] bg-blue-700 rounded-md flex items-center justify-center mr-4">
                <img src="/images/img_vector_white_a700.svg" alt="Fyntl AI" className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-800">Fyntl AI</p>
                <p className="text-gray-500 text-sm">Online Now</p>
              </div>
            </div>
            <div className="h-[80px] bg-gray-100 rounded mb-4"></div>
            <form onSubmit={handleChatSubmit}>
              <input 
                type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Ask anything..." 
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
