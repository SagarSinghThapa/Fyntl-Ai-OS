import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import EmailDisplayComponent from '../../components/ui/EmailDisplayComponent';



// === NEW COMPONENT: ChatUnavailable ===
const aiTasks = [
  "Summarise the invoices report",
  "Search a specific invoice by GST",
  "Provide management tips",
  "Generate sales summaries",
  "Track payment statuses",
  "Suggest cost-saving measures",
  "Analyze customer trends",
  "Export reports to Excel/PDF",
  "Set invoice reminders",
  "Answer FAQs about invoicing"
];

// function ChatUnavailable() {
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showUnavailable, setShowUnavailable] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     setLoading(true);
//     setShowUnavailable(false);
//     setTimeout(() => {
//       setLoading(false);
//       setShowUnavailable(true);
//     }, 1200); // Simulate a 1.2 second loading time
//   };

//   return (
//     <div>
//       {/* Response Area (Loading or Unavailable Message) */}
// {/* Response Area */}
// <div className="h-[80px] bg-gray-100 rounded mb-4 flex items-center justify-center relative overflow-hidden">
//   {loading && (
//     <span
//       className="flex items-center justify-center transition-all duration-300 ease-in-out"
//       style={{
//         transform: 'translateX(0)',
//         opacity: 1
//       }}
//     >
//       {/* Loading Spinner */}
//       <span className="animate-spin inline-block w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full"></span>
//     </span>
//   )}
//   {!loading && showUnavailable && (
//     <div
//       className="flex items-center justify-center text-green-600 text-2xl"
//       style={{
//         transform: 'translateX(-10px)', // Slight left movement
//         opacity: 1,
//         transition: 'all 0.4s ease-out'
//       }}
//     >
//       {/* Green Checkmark */}
//       <span className="mr-2">✔️</span>
//       {/* Unavailable Message */}
//       <span className="text-gray-800 text-base">I am currently unavailable.</span>
//     </div>
//   )}
// </div>

//       {/* Input Form */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask anything..."
//           className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none"
//           disabled={loading || showUnavailable} // Disable input during loading or after response
//         />
//       </form>

//       {/* Task List (Appears only when AI is unavailable) */}
//       {showUnavailable && (
//         <div className="mt-4">
//           <div className="font-semibold text-gray-700 mb-2">Here are some tasks I can help with when I'm available:</div>
//           <ul className="list-disc pl-5 space-y-1">
//             {aiTasks.map((task, idx) => (
//               <li
//                 key={task}
//                 style={{
//                   opacity: 0,
//                   animation: `fadeIn 0.5s ease forwards`,
//                   animationDelay: `${0.3 + idx * 0.15}s`
//                 }}
//                 className="text-gray-600"
//               >
//                 {task}
//               </li>
//             ))}
//           </ul>
//           {/* Inline CSS for the fade-in animation */}
//           <style>
//             {`
//               @keyframes fadeIn {
//                 to { opacity: 1; }
//               }
//             `}
//           </style>
//         </div>
//       )}
//     </div>
//   );
// }
// === END OF NEW COMPONENT ===
function ChatUnavailable() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // Controls message visibility
  const [showTaskList, setShowTaskList] = useState(false); // Controls task list visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setShowMessage(false);
    setShowTaskList(false);

    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      setShowMessage(true);

      // Show task list only after message animation completes
      setTimeout(() => {
        setShowTaskList(true);
      }, 1000); // Wait ~1s (slightly longer than the last word's animation delay)
    }, 1200);
  };

  const messageWords = "I am currently unavailable.".split(' ');

  return (
    <div>
      {/* === Response Box === */}
      <div className="h-[80px] bg-gray-100 rounded mb-4 flex items-center px-4 relative overflow-hidden">
        {loading && (
          <span
            className="flex items-center text-blue-500"
            style={{ transform: 'translateX(0)', opacity: 1 }}
          >
            <span className="animate-spin inline-block w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full"></span>
          </span>
        )}

        {!loading && showMessage && (
          <div className="flex items-center">
            {/* Green Checkmark */}
            <span className="text-green-600 text-xl mr-2">✔️</span>
            {/* Word-by-word message */}
            <span className="text-gray-800 text-base flex">
              {messageWords.map((word, idx) => (
                <span
                  key={idx}
                  style={{
                    opacity: 0,
                    animation: `fadeInWord 0.4s ease forwards`,
                    animationDelay: `${0.1 + idx * 0.1}s`
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </span>
              ))}
            </span>
          </div>
        )}
      </div>

      {/* === Input Field === */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none"
          disabled={loading || showMessage}
        />
      </form>

      {/* === Task List Section (Skeleton → Message → Task List) === */}
      <div className="mt-4">
        {loading ? (
          /* === Skeleton while loading === */
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded w-48"></div>
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="h-4 bg-gray-200 rounded w-full"
                style={{ animation: 'pulse 1.5s ease-in-out infinite', animationDelay: `${idx * 0.1}s` }}
              ></div>
            ))}
          </div>
        ) : showMessage && !showTaskList ? (
          /* === Still showing skeleton until task list is ready === */
          <div className="space-y-3 opacity-80">
            <div className="h-5 bg-gray-200 rounded w-48"></div>
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        ) : showTaskList ? (
          /* === Final: Task List with fade-in === */
          <>
            <div className="font-semibold text-gray-700 mb-2">
              Here are some tasks I can help with when I'm available:
            </div>
            <ul className="list-disc pl-5 space-y-1">
              {aiTasks.map((task, idx) => (
                <li
                  key={task}
                  style={{
                    opacity: 0,
                    animation: `fadeInItem 0.5s ease forwards`,
                    animationDelay: `${0.2 + idx * 0.15}s`
                  }}
                  className="text-gray-600"
                >
                  {task}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      {/* === Inline CSS for Animations === */}
      <style>
        {`
          @keyframes fadeInWord {
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInItem {
            to { opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

// === NEW COMPONENT: QueryInput ===
const QueryInput = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative mt-6 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask anything..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 transition"
      >
        {/* Circle with Right Arrow */}
        <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full text-white">
          →
        </div>
      </button>
    </form>
  );
};

const Home = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const handleGetStarted = () => console.log('Get Started clicked');
  const handleChatSubmit = (e) => { e.preventDefault(); if (chatInput.trim()) { console.log('Chat message:', chatInput); setChatInput(''); } };

  // Handle query submission
   const handleQuerySubmit = (query) => {
  console.log('Query submitted:', query);

  setIsBlurred(true);
  setLoadingResponse(true); // Show loading message
  setShowModal(false);

  // Show loading for 1.2s, then show modal
  setTimeout(() => {
    setLoadingResponse(false); // Hide loading message
    setShowModal(true);        // Show sign-in/sign-up modal
  }, 1200);
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

        {/* Place QueryInput here so it appears below the grid */}
        <QueryInput onSubmit={handleQuerySubmit} />
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
    <ChatUnavailable />
  </div>
          {/* === BLURRED BACKGROUND (when active) === */}
{isBlurred && (
  <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 z-50"></div>
)}

        {/* === "RESPONSE IS READY" SKELETON (running line) === */}
{loadingResponse && (
  <div className="fixed top-0 left-0 w-full flex flex-col items-center z-50 pointer-events-none">
    <div className="bg-blue-700 text-white px-6 py-3 rounded-b-lg shadow-lg mt-0 w-full flex flex-col items-center">
      <p className="text-base font-semibold mb-2">Your content is generated</p>
      <div className="w-80 h-2 bg-gray-300 rounded overflow-hidden mb-4">
        <div
          className="h-full bg-blue-500"
          style={{
            width: '70%',
            animation: 'loadingBar 1.8s ease-in-out infinite alternate',
          }}
        ></div>
      </div>
     
    
    </div>
  </div>
)}



{showModal && (
  <div className="fixed top-0 left-0 w-full flex flex-col items-center z-40 pointer-events-none">
    {/* Skeleton lines in background */}
    <div className="mt-20 w-full max-w-6xl px-8 flex flex-col items-center">
      {Array.from({ length: 6 }).map((_, lineIdx) => (
        <div key={lineIdx} className="flex mb-3 justify-center w-full gap-0">
          {Array.from({ length: 14 }).map((_, wordIdx) => (
            <span
              key={wordIdx}
              className="bg-gray-300 rounded h-6 flex-1 inline-block"
              style={{
                opacity: 0,
                animation: `fadeInWord 0.4s ease forwards`,
                animationDelay: `${0.2 + lineIdx * 0.3 + wordIdx * 0.08}s`
              }}
            ></span>
          ))}
        </div>
      ))}
    </div>
  </div>
)}

{showModal && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
        onClick={() => {
          setShowModal(false);
          setIsBlurred(false);
          setLoadingResponse(false);
        }}
        aria-label="Close"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">Unlock AI Features</h2>
      <p className="mb-6 text-gray-600">Sign in or create an account to view your AI response.</p>
      <button className="w-full py-3 mb-4 bg-blue-600 text-white rounded font-semibold">Sign In</button>
      <button className="w-full py-3 bg-purple-600 text-white rounded font-semibold">Sign Up</button>
    </div>
  </div>
)}
                {/* === GLOBAL ANIMATIONS (required for skeleton & modal) === */}
        <style>
          {`
            @keyframes loadingBar {
              0% {
                transform: scaleX(0.1);
                transform-origin: left;
              }
              100% {
                transform: scaleX(1);
                transform-origin: left;
              }
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out;
            }
          `}
        </style>
</div>
      </div>

    </div>
    
  );
  
};

export default Home;
