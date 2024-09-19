import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider
    className='notification'
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
