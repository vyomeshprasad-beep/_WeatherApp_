import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import legacyMarkup from './legacyMarkup.html?raw';
import './style.css';

function App() {
  useEffect(() => {
    // React must mount the existing SkyPulse markup before its feature script runs.
    if (window.__SKYPULSE_LEGACY_LOADED__) return;
    const script = document.createElement('script');
    script.src = `${import.meta.env.BASE_URL}legacy.js`;
    script.async = false;
    script.onload = () => {
      window.__SKYPULSE_LEGACY_LOADED__ = true;
      window.dispatchEvent(new Event('skypulse:ready'));
    };
    script.onerror = () => {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = 'SkyPulse could not load its feature scripts. Please restart the app.';
        toast.classList.add('show');
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div className="react-app-root" dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}

createRoot(document.getElementById('root')).render(<App />);
