import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { LecturesProvider } from './context/LecturesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LecturesProvider>
        <App />
      </LecturesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
