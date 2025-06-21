import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

const Home = () => {
  const [chatInput, setChatInput] = useState('');
  const [isBusinessCopilotExpanded, setIsBusinessCopilotExpanded] = useState(true);
  const [isChatExpanded, setIsChatExpanded] = useState(true);

  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      console.log('Chat message:', chatInput);
      setChatInput('');
    }
  };

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
      <div className="flex flex-col md:flex-row w-full px-4 md:px-8 py-8 md:py-16 justify-center">
        {/* Left Section - Hero Content */}
        <div className="w-[416px] h-[462px] flex flex-col w-full md:w-[416px] md:mr-16 mb-8 md:mb-0">
          {/* Hero Title */}
          <div className="mb-8">
            <h1 className="text-[32px] md:text-[52px] font-satoshi font-black leading-[1.2] md:leading-[70px] text-left mb-4">
              <span className="bg-[linear-gradient(90deg,#2252CD_0%,#C66AFB_50%,#2252CD_100%)] bg-clip-text text-transparent font-satoshi text-[40px] md:text-[64px] font-bold leading-[1.2]">
                Business OS
              </span>
              <br />
              <span className="text-global-2">of the Future</span>
            </h1>
            <p className="text-[16px] md:text-[20px] font-satoshi font-medium leading-[1.4] md:leading-[27px] text-global-5 mb-8">
              Everything you need to operate your Business,<br className="hidden md:block" />
              with a bit of magical touch
            </p>
          </div>

          {/* Business Features Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-8">
            {businessFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-global-3 rounded-[5px] flex items-center justify-center mb-2">
                  <img 
                    src={feature.icon} 
                    alt={feature.label}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
                <span className="text-[10px] md:text-[12px] font-satoshi font-medium leading-[1.4] md:leading-[17px] text-global-5 text-center">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

{/* Right Section - Dashboard */}
<div className="relative w-full max-w-[742px]">
          {/* Realtime Analytics Badge */}
          <div className="absolute top-0 right-0 z-10 bg-global-9 border border-gray-300 rounded-[19px] px-4 py-2 flex items-center">
            <div className="bg-global-1 rounded-[5px] w-[10px] h-[10px] mr-3"></div>
            <span className="text-[18px] font-satoshi font-medium text-global-5">Realtime Analytics</span>
          </div>

          {/* Fyntl Header */}
          <div className="w-full max-w-[742px] h-[79px] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-t-[20px] p-4 md:p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-[32px] h-[36px] md:w-[42px] md:h-[48px] bg-global-1 rounded-[10px] flex items-center justify-center mr-3">
                  <img src="/images/img_vector_white_a700.svg" alt="Fyntl AI" className="w-[15px] h-[15px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] md:text-[18px] font-bold text-global-4">Fyntl AI</span>
                  <span className="text-[14px] md:text-[18px] font-medium text-global-5">Amaze Corp</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-[35px] h-[35px] bg-global-5 border border-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-[14px] font-medium text-global-1">JD</span>
                </div>
                <img src="/images/img_tablerdots.svg" alt="Menu" className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="w-full max-w-[742px] bg-white rounded-b-[20px] shadow-md p-6 mt-[-1px]">
            <div className="flex flex-col md:flex-row justify-between items-start">
              {/* Business Performance */}
              <div className="mb-6 md:mb-0">
                <h3 className="text-[16px] md:text-[18px] font-medium text-global-2 mb-2">
                  Business Performance
                </h3>
                <span className="text-[16px] md:text-[18px] font-medium text-global-5">
                  May 30, 2025
                </span>
              </div>

              {/* Business Co-pilot */}
              <div className="w-full md:w-[377px] bg-global-9 border border-global-3 rounded-[10px] p-5 shadow-md">
                <div className="flex items-center mb-5">
                  <div className="w-[30px] h-[30px] bg-global-1 rounded-full flex items-center justify-center mr-3">
                    <img src="/images/img_vector_white_a700.svg" alt="Business Co-pilot" className="w-[15px]" />
                  </div>
                  <span className="text-[16px] md:text-[18px] font-bold text-global-4">Business Co-pilot</span>
                </div>

                <p className="text-[14px] md:text-[18px] font-medium text-global-5 mb-4">
                  What 1% of our total revenue comes from international invoices?
                </p>

                {isBusinessCopilotExpanded && (
                  <div className="bg-global-7 rounded-[10px] p-4">
                    <p className="text-[14px] md:text-[18px] font-medium text-global-5 leading-[1.5]">
                      Total revenue percentage that comes from international invoices is 8.15%.<br />
                      Total Revenue: $542,543<br />
                      International Revenue: $345,345.56 (8.15%)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Financial Cards */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[20px] -mt-12 z-20">
            {/* Financials Card */}
            <div className="bg-global-9 border border-gray-200 rounded-[10px] px-5 py-6 w-full md:w-[406px] md:h-[130px] shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-[6px] mb-[12px]">
                <span className="text-[16px] md:text-[18px] font-satoshi font-medium text-global-4 leading-[24px]">
                  Financials
                </span>
                <div className="flex flex-row items-center space-x-2 md:space-x-4">
                  <div className="w-[20px] h-[22px] border-2 border-global-7 rounded-[10px] flex items-center justify-center">
                    <span className="text-[14px] md:text-[16px] font-satoshi font-bold text-global-7 leading-[22px]">
                      i
                    </span>
                  </div>
                  <div className="bg-global-4 rounded-[15px] px-2 py-0.5 md:px-4 md:py-1">
                    <span className="text-[14px] md:text-[18px] font-satoshi font-medium leading-[1.4] md:leading-[25px] text-global-5">
                      On Track
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-[11px] w-[185px] h-[60px]">
                <img 
                  src="/images/img_frame_1116606801.svg" 
                  alt="Financial chart"
                  className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-[16px] md:text-[18px] font-satoshi font-medium text-global-4 leading-[1.4]">
                    $234,567.87
                  </span>
                  <span className="text-[14px] md:text-[16px] font-satoshi font-medium text-global-5 leading-[1.4]">
                    Net Income
                  </span>
                </div>
              </div>
            </div>

            {/* Sales Card */}
            <div className="bg-global-9 border border-gray-200 rounded-[10px] px-[30px] py-[10px] w-full md:w-[406px] md:h-[131px] shadow-sm flex flex-col justify-between">
              <div className="flex flex-row items-center justify-between mb-[20px]">
                <div className="flex flex-row items-center gap-[6px]">
                  <span className="text-[16px] md:text-[18px] font-satoshi font-medium leading-[1.4] md:leading-[25px] text-global-4">
                    Sales
                  </span>
                  <div className="w-[18px] h-[20px] md:w-[20px] md:h-[22px] border-2 border-global-7 rounded-[10px] flex items-center justify-center">
                    <span className="text-[14px] md:text-[16px] font-satoshi font-bold leading-[1.4] md:leading-[22px] text-global-7">
                      i
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <div className="w-[36px] h-[36px] md:w-[43px] md:h-[43px] bg-global-6 rounded-[15px] flex items-center justify-center">
                    <img 
                      src="/images/img_makiarrow.svg" 
                      alt="Growth arrow"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </div>
                  <span className="text-[16px] md:text-[18px] font-satoshi font-medium leading-[1.4] md:leading-[25px] text-global-1">
                    +18 %
                  </span>
                </div>
              </div>
              
              <div className="flex flex-row items-center w-[240px] h-[60px] p-0 gap-[11px]">
                <img 
                  src="/images/img_frame_1116606801_blue_50.svg" 
                  alt="Sales chart"
                  className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-[16px] md:text-[18px] font-satoshi font-medium leading-[1.4] text-global-4 mb-[2px]">
                    848
                  </span>
                  <span className="text-[16px] md:text-[18px] font-satoshi font-medium leading-[1.4] text-global-5">
                    Projected Revenue
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Powered Badge */}
          <div className="absolute bottom-0 right-0 bg-global-9 border border-gray-300 rounded-[19px] px-3 py-1 md:px-4 md:py-2">
            <span className="text-[14px] md:text-[18px] font-satoshi font-medium leading-[1.4] md:leading-[25px] text-global-5">
              AI Powered
            </span>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="flex justify-center mb-8 md:mb-16">
        <Button 
          onClick={handleGetStarted}
          className="rounded-[5px] px-6 py-3 md:px-8 md:py-4"
          size="lg"
        >
          Get Started
        </Button>
      </div>

      {/* AI Assistant Section */}
      <div className="flex flex-col items-center px-4 md:px-8 mb-8 md:mb-16">
        <h2 className="text-[32px] md:text-[52px] font-satoshi font-black leading-[1.2] md:leading-[71px] text-center mb-4">
          <span className="text-global-2">Introducing </span>
          <span className="bg-[linear-gradient(90deg,#2252CD_0%,#C66AFB_50%,#2252CD_100%)] bg-clip-text text-transparent font-satoshi text-[40px] md:text-[64px] font-bold leading-[1.2]">
            Fyntl Ai :
          </span>
          <span className="text-global-2">Your AI Accounting Assistant</span>
        </h2>
        
        <p className="text-[16px] md:text-[20px] font-satoshi font-medium leading-[1.4] md:leading-[27px] text-center text-global-5 mb-8 md:mb-16 max-w-[670px]">
          An always on AI assistant to help you run your business finances with ease.
        </p>

        {/* AI Chat Interface */}
        <div className="relative w-full md:w-[742px]">
          
          {/* 24x7 Assistance Badge — Figma version */}
          <div className="w-52 h-10 px-2.5 py-[5px] absolute bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-center items-center gap-2.5">
          <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-indigo-800" />
            </div>
            <div className="justify-start text-stone-500 text-lg font-medium font-['Satoshi']">
              24 x 7 Assistance
            </div>
          </div>


          {/* Chat Header */}
          <div className="bg-global-9 border-b-2 border-gray-200 rounded-t-[20px] p-4 md:p-6 mt-8">
            <div className="flex flex-row items-center">
              <div className="w-[32px] h-[36px] md:w-[42px] md:h-[48px] bg-global-1 rounded-[10px] flex items-center justify-center mr-3 md:mr-4">
                <img 
                  src="/images/img_vector_white_a700.svg" 
                  alt="Fyntl AI"
                  className="w-[15px] h-[15px] md:w-[19px] md:h-[18px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] md:text-[18px] font-satoshi font-bold leading-[1.4] md:leading-[25px] text-global-4">
                  Fyntl AI
                </span>
                <span className="text-[14px] md:text-[18px] font-satoshi font-medium leading-[1.4] md:leading-[25px] text-global-5">
                  Online Now
                </span>
              </div>
            </div>
          </div>

          {/* Chat Content */}
          {isChatExpanded && (
            <div className="bg-global-9 rounded-b-[20px] p-4 md:p-6">
              {/* Chat Messages Area */}
              <div className="mb-4 md:mb-6">
                <div className="bg-global-2 rounded-[10px] h-[60px] md:h-[83px] mb-3 md:mb-4"></div>
                
                <div className="flex flex-row justify-end mb-3 md:mb-4">
                  <div className="flex flex-row space-x-3 md:space-x-4">
                    <img 
                      src="/images/img_solarcopybroken.svg" 
                      alt="Copy"
                      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70"
                    />
                    <img 
                      src="/images/img_materialsymbolseditoutline.svg" 
                      alt="Edit"
                      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70"
                    />
                    <img 
                      src="/images/img_iconparkoutlinetag.svg" 
                      alt="Tag"
                      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70"
                    />
                  </div>
                </div>

                <div className="bg-global-8 rounded-[10px] h-[80px] md:h-[105px] mb-3 md:mb-4"></div>
                
                <div className="flex flex-row space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <img 
                    src="/images/img_solarcopybroken.svg" 
                    alt="Copy"
                    className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70"
                  />
                  <img 
                    src="/images/img_materialsymbolseditoutline.svg" 
                    alt="Edit"
                    className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70"
                  />
                  <img 
                    src="/images/img_iconparkoutlinetag.svg" 
                    alt="Tag"
                    className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70"
                  />
                </div>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleChatSubmit}>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full h-[40px] md:h-[50px] bg-global-9 border border-gray-300 rounded-[5px] px-3 md:px-4 text-[12px] md:text-[14px] font-satoshi font-normal leading-[1.4] md:leading-[19px] text-global-3 focus:outline-none focus:border-global-3"
                />
              </form>
            </div>
          )}

          {/* AI Powered Badge */}
          <div className="absolute bottom-4 right-4 flex flex-row items-center bg-global-9 border border-gray-300 rounded-[19px] px-3 py-1 md:px-4 md:py-2">
            <img 
              src="/images/img_evaflashoutline.svg" 
              alt="AI Flash"
              className="w-5 h-5 md:w-6 md:h-6 mr-2"
            />
            <span className="text-[14px] md:text-[18px] font-satoshi font-medium leading-[1.4] md:leading-[25px] text-global-5">
              AI Powered
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;