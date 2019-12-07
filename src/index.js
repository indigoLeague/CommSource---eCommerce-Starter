import React, { Component } from 'react';
import { render } from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App.jsx';

render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.querySelector('#root')
);
