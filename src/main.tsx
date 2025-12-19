/**
 * Entry point for the ChurchTools Calendar application
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ListViewApp } from './components/ListViewApp';

// This function will be called by WordPress to initialize the calendar
declare global {
  interface Window {
    ChurchToolsCalendar: {
      init: (containerId: string, baseUrl: string, calendarId: string, view?: string) => void;
    };
  }
}

window.ChurchToolsCalendar = {
  init: (containerId: string, baseUrl: string, calendarId: string, view: string = 'calendar') => {
    const container = document.getElementById(containerId);
    
    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    const root = ReactDOM.createRoot(container);
    
    // Route to the correct component based on view type
    if (view === 'list') {
      root.render(
        <React.StrictMode>
          <ListViewApp baseUrl={baseUrl} calendarId={calendarId} />
        </React.StrictMode>
      );
    } else {
      root.render(
        <React.StrictMode>
          <App baseUrl={baseUrl} calendarId={calendarId} />
        </React.StrictMode>
      );
    }
  },
};
