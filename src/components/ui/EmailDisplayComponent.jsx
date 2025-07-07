import React, { useState, useEffect } from 'react';


// Email Input Component
// 
const EmailInputComponent = () => {
  
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      const response = await fetch('http://192.168.56.1:3001/api/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Failed to add email');
      }
      setStatus({ type: 'success', message: 'Email added successfully!' });
      setEmail('');
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section aria-label="Email Input Section">
      {/* Email Input Section */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full p-6 bg-white rounded-2xl shadow-xl border border-gray-200 mb-8 flex flex-col items-center"
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Add Email</h2>
        <div className="flex gap-4 w-full justify-center mb-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter email address"
            className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base w-72"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md px-8 py-2 bg-pink-600 hover:bg-pink-700 disabled:bg-pink-300 text-white text-base font-bold shadow-md transition-all duration-200"
          >
            {loading ? 'Adding...' : 'Add Email'}
          </button>
        </div>
        {status && (
          <div
            className={`px-4 py-2 rounded text-center mb-2 ${
              status.type === 'success'
                ? 'bg-green-100 text-green-700 border border-green-400'
                : 'bg-red-100 text-red-700 border border-red-400'
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </section>
  );
};


// Email Display Component

const EmailDisplayComponent = () => {
  // ...existing code...
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(0);

  // Fetch emails from API
  const fetchEmails = async () => {
    setLoading(true);
    setError(null);
    setVisibleCount(0);
    try {
      const response = await fetch('http://192.168.56.1:3001/api/emails');
      if (!response.ok) throw new Error('Failed to fetch emails');
      const data = await response.json();
      const emailList = data.map(user => ({
        id: user.id,
        email: user.email,
        name: user.name
      }));
      setEmails(emailList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Animate emails appearing one by one with blur-to-clear fade-in
  useEffect(() => {
    if (emails.length > 0 && visibleCount < emails.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [emails, visibleCount]);

  const clearEmails = () => {
    setEmails([]);
    setError(null);
    setVisibleCount(0);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* ===================== */}
      {/* Email Input Component */}
      {/* ===================== */}
      <EmailInputComponent />

      {/* ======================= */}
      {/* Email Display Section   */}
      {/* ======================= */}
      <section aria-label="Email Display Section" className="w-full flex flex-col items-center">
        <div className="max-w-2xl w-full p-6 bg-white rounded-2xl shadow-xl border border-gray-200 mt-8 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Email List Display</h2>
          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={fetchEmails}
              disabled={loading}
              className="rounded-md px-8 py-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-300 text-white text-base font-bold shadow-md transition-all duration-200"
            >
              {loading ? 'Loading...' : 'Fetch Emails'}
            </button>
            <button
              type="button"
              onClick={clearEmails}
              className="rounded-md px-8 py-2 bg-gray-400 hover:bg-gray-500 text-white text-base font-bold shadow-md transition-all duration-200"
            >
              Clear List
            </button>
          </div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <strong>Error:</strong> {error}
            </div>
          )}
          {emails.length > 0 && (
            <div className="space-y-3 w-full">
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                Found {emails.length} emails:
              </h3>
              <div className="space-y-2">
                {emails.slice(0, visibleCount).map((emailData, idx) => (
                  <div
                    key={emailData.id}
                    className="bg-gray-50 p-3 rounded border-l-4 border-blue-500 opacity-0 animate-fade-in-blur"
                    style={{ animationDelay: `${idx * 120}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="font-medium text-gray-800">{emailData.name}</div>
                    <div className="text-blue-600">{emailData.email}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {emails.length === 0 && !loading && !error && (
            <div className="text-gray-500 text-center py-8">
              Click "Fetch Emails" to load email addresses
            </div>
          )}
          <style>{`
            @keyframes fadeInEmailBlur {
              0% { opacity: 0; filter: blur(8px); transform: translateY(10px); }
              60% { opacity: 1; filter: blur(2px); }
              100% { opacity: 1; filter: blur(0); transform: translateY(0); }
            }
            .animate-fade-in-blur {
              animation: fadeInEmailBlur 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

export default EmailDisplayComponent;