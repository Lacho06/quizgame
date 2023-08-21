import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { SettingsProvider } from './contexts/SettingsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingsProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </SettingsProvider>
);