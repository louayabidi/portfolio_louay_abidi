import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App.jsx';
import './index.css';

// Initialize Google Analytics with your Measurement ID
ReactGA.initialize('G-R8Y4JKPL9F');
console.log('Google Analytics initialized'); // Debug log

// Track initial page load
ReactGA.pageview(window.location.pathname + window.location.search);

// Component to track page views on route changes
const TrackPageViews = () => {
  const location = useLocation();
  React.useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TrackPageViews />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);