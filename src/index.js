import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { AuthProvider } from './context/auth-context';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={global}/>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
