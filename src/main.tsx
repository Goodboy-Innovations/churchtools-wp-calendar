/**
 * Entry point for the ChurchTools Calendar application
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This function will be called by WordPress to initialize the calendar
declare global {
  interface Window {
    ChurchToolsCalendar: {
      init: (containerId: string, baseUrl: string, calendarId: string) => void;
    };
  }
}

window.ChurchToolsCalendar = {
  init: (containerId: string, baseUrl: string, calendarId: string) => {
    const container = document.getElementById(containerId);
    
    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App baseUrl={baseUrl} calendarId={calendarId} />
      </React.StrictMode>
    );
  },
};
