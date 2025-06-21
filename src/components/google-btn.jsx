'use client';

import { useEffect, useState } from 'react';

export default function GoogleEmailCapture ({ setUserEmail }) {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  
  // Handle Google authentication response
  const handleCredentialResponse = (response) => {
    try {
      const token = response.credential;
      
      // Decode JWT to get email
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      
      const userData = JSON.parse(jsonPayload);
      setUserEmail(userData.email);
      setStatus('success');
    } catch (error) {
      console.error('Error decoding JWT:', error);
      setStatus('error');
    }
  };

  // Initialize Google Identity Services
  const initializeGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
      });
      
      window.google.accounts.id.renderButton(
        document.getElementById('googleEmailButton'),
        { 
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
          type: 'standard',
          width: '100%', // Makes the button expand to full width
        }
      );
    }
  };

  // Load Google Identity Services script
  useEffect(() => {
    if (status !== 'idle') return;

    setStatus('loading');
    
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => initializeGoogleSignIn();
    script.onerror = () => setStatus('error');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [status]);

  return (
    <>
      <div id="googleEmailButton" className="w-full h-fit [&>div]:w-full [&>div]:rounded-lg flex justify-center items-center "></div>
    </> 
  );
}