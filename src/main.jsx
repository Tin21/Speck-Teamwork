import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/Context.jsx';
import { EmailProvider } from './context/EmailContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ContextProvider>
      <EmailProvider>
        <App />
      </EmailProvider>
    </ContextProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
);
